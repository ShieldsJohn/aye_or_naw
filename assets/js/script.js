//wait for DOM to finish loading before starting game
//add event listeners to the buttons - remove the notification when happy the buttons are all carrying out their functions
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "button") {
        
            } 
        })
    }
    runGame()
})

//begins with player entering name play button being made hidden
let plrName = document.getElementById("pname");
let playButton = document.getElementById("play-button");

plrName.addEventListener("input", () => {
        if (plrName.value.length === 3) {
             playButton.style.display = "none";
        }   else {
            playButton.style.display = "block";
        }
           });

//question and answer array
let questionsAnswers = [
    {question: "Dundee was a former capital of Scotland - Aye or Naw?", 
        answers: [
            {option:"Aye", answer: false},
            {option:"Naw", answer: true},
        ]
    },

    {question: "Gorillas usually eat more than 15kg of food per day - Aye or Naw?",
        answers: [
            {option:"Aye", answer: true},
            {option:"Naw", answer: false},
        ]
    },

    {question: "K2 is the second highest mountain in the world - Aye or Naw?",
        answers: [
            {option:"Aye", answer: true},
            {option:"Naw", answer: false},
        ]
    },

    {question: "Irn-Bru was first created in Edinburgh - Aye or Naw?",
    answers: [
        {option:"Aye", answer: false},
        {option:"Naw", answer: true},
    ]
    },

    {question: "The song ‘(Everything I Do) I Do It For You’ by Bryan Adams is the UK’s longest running number one single - Aye or Naw?",
    answers: [
        {option:"Aye", answer: true},
        {option:"Naw", answer: false},
        ]
    },

    {question: "North America is the fourth largest continent in the world - Aye or Naw?",
    answers: [
        {option:"Aye", answer: false},
        {option:"Naw", answer: true},
        ]
    },

    {question: "Sir Chris Hoy has won six Olympic gold medals in track cylcing - Ayr or Naw?",
    answers: [
        {option:"Aye", answer: true},
        {option:"Naw", answer: false},
        ]
    },

    {question: "PDF stands for Personal Document Format - Aye or Naw?",
    answers: [
        {option:"Aye", answer: false},
        {option:"Naw", answer: true},
        ]
    },

    {question: "The London Underground has more stations than the Paris Metro - Aye or Naw?",
    answers: [
        {option:"Aye", answer: false},
        {option:"Naw", answer: true},
        ]
    },

    {question: "The planet Pluto is smaller than the moon - Aye or Naw?",
    answers: [
        {option:"Aye", answer: true},
        {option:"Naw", answer: false},
        ]
    },
 ];

//load question upon entering valid player name
function runGame() {
    let q1 = 0;
    let aye = document.getElementById("aye-button")
    let naw = document.getElementById("naw-button")
    document.getElementById("question-box").innerHTML = questionsAnswers[q1].question;
    aye.innerHTML = questionsAnswers[q1].answers[0].option;
  
    }


//increment to 10, displaying correct answers as green and incorrect as red in the score-bar
function updateScore() {

}
//once question answered and score updated, the next question will load
function runNextQuestion() {

}
//once all ten questions have been answered the player is told if won or lost and invited to play again
function endGame() {

}