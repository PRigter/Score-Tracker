// Restructuring to Object Oriented 
    // We do have duplication of code for player1 e player2
    // With Object Oriented, we'll create an Object for each player
    // and create the function where we will pass the objects properties as functions arguments

    // Players have: Score /-/ Display /-/ Button
const p1 = {
    score: 0,
    display: document.querySelector(".player-1-result"),
    button: document.querySelector(".player-one")
}

const p2 = {
    score: 0,
    display: document.querySelector(".player-2-result"),
    button: document.querySelector(".player-two")
}


// GLOBAL VARIABLES
let inputMaxScore = document.querySelector(".input-max-score")
let resetBtn = document.querySelector(".reset-btn")


// Display //! Check if is still in Use
let topPlayNumber = 5


// Main function to Update Scores
    // This will apply to check an score against the other.
    // Adding the score only to "player"
        // The opponent is not receiving points, but it will when the EventListener on the 2º player is calling this one same function,
            // but the order on player and opponent is reversed 
function updateScores(player, opponent) { // takes player, and his oppontent
    //checks if score has reached the Max play value AND the same for the opponent score
    if (player.score < topPlayNumber && opponent.score < topPlayNumber ) {
        player.score++
        player.display.textContent = player.score
    }

    if (player.score === topPlayNumber) {
        player.display.classList.add("has-text-success")
        opponent.display.classList.add("has-text-danger")
        player.button.disabled = true
        opponent.button.disabled = true
    } 
}


// Events Listeners
inputMaxScore.addEventListener("change", function() {
    reset()
    topPlayNumber = Number(inputMaxScore.value)
    console.log(inputMaxScore.value)
})

p1.button.addEventListener("click", function() {
    updateScores(p1, p2)
})

p2.button.addEventListener("click", function() {
    updateScores(p2, p1)
})

resetBtn.addEventListener("click", function() {
    reset()
})


// Reset Scores Function
function reset() {
    // Were will set the same changes on bouth players
    // For 2 players it's not too problematic, but if we have more players, starts to be complicated to set the same properties for Each player.
    // So to help --> We can iterate on the Players Array.
        // This Array can be an simple Array Literal 
        // And using the FOR... OF Loop on it
    for (let player of [p1, p2]) {
        player.score = 0
        player.display.textContent = player.score
        player.display.classList.remove("has-text-success")
        player.display.classList.remove("has-text-danger")
        player.button.disabled = false
    }
}