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



function runGame() {
//begins with player entering name, play button being made hidden
let plrName = document.getElementById("pname");
let playButton = document.getElementById("play-button");

plrName.addEventListener("input", () => {
        if (plrName.value.length === 3) {
             playButton.style.display = "none";
        }   else {
            playButton.style.display = "block";
        }
           });

//load question upon entering valid player name
    let q1 = 0;
    let score = document.getElementById("score1");
    const aye = document.getElementById("aye-button");
    const naw = document.getElementById("naw-button");

    document.getElementById("game-area").style.display = "none";
    document.addEventListener("input", function() {
        if (plrName.value.length === 3) {
            document.getElementById("game-area").style.display = "block";
        }
    })
    //question and answer array
const questionsAnswers = [
    {question: "Dundee was a former capital of Scotland - Aye or Naw?", 
        correctAnswer: naw,
    },

    {question: "Gorillas usually eat more than 15kg of food per day - Aye or Naw?",
        correctAnswer: aye,
    },

    {question: "K2 is the second highest mountain in the world - Aye or Naw?",
        correctAnswer: aye,
    },

    {question: "Irn-Bru was first created in Edinburgh - Aye or Naw?",
        correctAnswer: naw,
    },

    {question: "The song ‘(Everything I Do) I Do It For You’ by Bryan Adams is the UK’s longest running number one single - Aye or Naw?",
        correctAnswer: aye,
    },

    {question: "North America is the fourth largest continent in the world - Aye or Naw?",
        correctAnswer: naw,
    },

    {question: "Sir Chris Hoy has won six Olympic gold medals in track cylcing - Ayr or Naw?",
        correctAnswer: aye,
    },

    {question: "PDF stands for Personal Document Format - Aye or Naw?",
        correctAnswer: naw,
    },

    {question: "The London Underground has more stations than the Paris Metro - Aye or Naw?",
        correctAnswer: naw,
    },

    {question: "The planet Pluto is smaller than the moon - Aye or Naw?",
        correctAnswer: aye,
    },
 ];

    document.getElementById("question-box").innerHTML = questionsAnswers[q1].question;
    
    }

//connect buttons with answers and run scoring
function clickAnswers() {
    const aye = document.getElementById("aye-button");
    const naw = document.getElementById("naw-button");

    document.addEventListener("click", aye)
        alert("Aye, clicked")
    document.addEventListener("click", naw)
        alert("Naw, clicked");
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