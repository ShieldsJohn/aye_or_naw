//question and answer array
const questionsAnswers = [
    {
        question: "Dundee was a former capital of Scotland - Aye or Naw?",
        correctAnswer: "naw",
    },

    {
        question: "Gorillas usually eat more than 15kg of food per day - Aye or Naw?",
        correctAnswer: "aye",
    },

    {
        question: "K2 is the second highest mountain in the world - Aye or Naw?",
        correctAnswer: "aye",
    },

    {
        question: "Irn-Bru was first created in Edinburgh - Aye or Naw?",
        correctAnswer: "naw",
    },

    {
        question: "The song ‘(Everything I Do) I Do It For You’ by Bryan Adams is the UK’s longest running number one single - Aye or Naw?",
        correctAnswer: "aye",
    },

    {
        question: "North America is the fourth largest continent in the world - Aye or Naw?",
        correctAnswer: "naw",
    },

    {
        question: "Sir Chris Hoy has won six Olympic gold medals in track cylcing - Ayr or Naw?",
        correctAnswer: "aye",
    },

    {
        question: "PDF stands for Personal Document Format - Aye or Naw?",
        correctAnswer: "naw",
    },

    {
        question: "The London Underground has more stations than the Paris Metro - Aye or Naw?",
        correctAnswer: "naw",
    },

    {
        question: "The planet Pluto is smaller than the moon - Aye or Naw?",
        correctAnswer: "aye",
    },
];

let questionIndex = 0;

//wait for DOM to finish loading before starting game
//add event listeners to the buttons - remove the notification when happy the buttons are all carrying out their functions
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "button") {

            }
        })
    }
    runGame()
})

function runGame() {
    //begins with player entering name, play button being made hidden
    let plrName = document.getElementById("pname");
    let playButton = document.getElementById("play-button");
    document.getElementById("game-area").style.display = "none";

    plrName.addEventListener("input", () => {
        if (plrName.value.length === 3) {
            playButton.style.display = "none";
            startGame()
        } else {
            playButton.style.display = "block";
        }
    });

    //load question upon entering valid player name
    const score = document.getElementById("score1");
    const aye = document.getElementById("aye-button");
    const naw = document.getElementById("naw-button");
    const userAnswer = document.addEventListener("click");

    aye.addEventListener("click", () => {
        questionIndex++;
        loadQuestion()
        if (userAnswer === correctAnswer[0]) {
            document.getElementById("score1").style.backgroundColor = "green";
        }
        else {
            document.getElementById("score1").style.backgroundColor = "red";
        }
    
    })
    naw.addEventListener("click", () => {
        questionIndex++;
        loadQuestion()
    })

}

function startGame() {
    document.getElementById("game-area").style.display = "block";
    loadQuestion()
}

function loadQuestion() {
    const currentQuestion = questionsAnswers[questionIndex]
    console.log(currentQuestion);
    document.getElementById("question-box").innerHTML = currentQuestion.question
}

function checkAnswer(userAnswer) {
    const correctAnswer = true;
    if (userAnswer === correctAnswer[0]) {
        document.getElementById("score1").style.backgroundColor = "green";
    }
    else {
        document.getElementById("score1").style.backgroundColor = "red";
    }

}

//increment to 10, displaying correct answers as green and incorrect as red in the score-bar
function updateScore() {

}

//once all ten questions have been answered the player is told if won or lost and invited to play again
function endGame() {

}