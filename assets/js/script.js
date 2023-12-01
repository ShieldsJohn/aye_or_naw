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
let userAnswer;
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "button") {
            }
        })
    }
    runGame();
});
function runGame() {
    let plrName = document.getElementById("pname");
    let playButton = document.getElementById("play-button");
    document.getElementById("game-area").style.display = "none";
    plrName.addEventListener("input", () => {
        if (plrName.value.length === 3) {
            playButton.style.display = "none";
            startGame();
        } else {
            playButton.style.display = "block";
        }
    });
    const aye = document.getElementById("aye-button");
    const naw = document.getElementById("naw-button");
    aye.addEventListener("click", () => {
        userAnswer = "aye"; 
        checkAnswer();
    });
    naw.addEventListener("click", () => {
        userAnswer = "naw";
        checkAnswer();
    });
}
function startGame() {
    document.getElementById("game-area").style.display = "block";
    loadQuestion();
}
function loadQuestion() {
    const currentQuestion = questionsAnswers[questionIndex];
    document.getElementById("question-box").innerHTML = currentQuestion.question;
}
function checkAnswer() {
    const currentQuestion = questionsAnswers[questionIndex];
    const correctAnswer = currentQuestion.correctAnswer;
    console.log(correctAnswer)
    let correctScore = 0;
    let incorrectScore = 0;
    document.getElementById("correct-score").textContent = correctScore;
    document.getElementById("incorrect-score").textContent = incorrectScore;
    let i = 0
    const scoreBar = document.getElementsByClassName("score-elements");
    
    if (userAnswer === correctAnswer) {
        while (i < questionsAnswers.length) {
            console.log(questionsAnswers[i]);
            i++;
            /**scoreBar[i].style.backgroundColor = "green";**/
            correctScore++;
         }
    }
    if (userAnswer != correctAnswer) {
        while (i < questionsAnswers.length) {
            console.log(questionsAnswers[i]);
            i++;
            /**scoreBar[i].style.backgroundColor = "red";**/
            incorrectScore++;
         }
    }
    questionIndex++;
    loadQuestion();

}

//once all ten questions have been answered the player is told if won or lost and invited to play again
function endGame() {
}