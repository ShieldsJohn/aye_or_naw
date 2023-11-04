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

//load question upon entering valid player name

function questionsAndAnswers() {
    if (playButton.style.display = "none") {
        function q1() {

        }
    }

}
    



//either true or false
function checkAnswer() {

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