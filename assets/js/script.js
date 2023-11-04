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

let plrName = document.getElementById("pname");
let playButton = document.getElementById("play-button");

plrName.addEventListener("input", () => {
        if (plrName.value.length === 3) {
             playButton.style.display = "none";
        }   else {
            playButton.style.display = "block";
        }
           });

//begins with player entering name and pressing play and play button being made hidden
    



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