// Restructuring to Object Oriented 
    // We have duplication of code for player1 e player2
    // With Object Oriented, vamos criar um objecto para cada um dos players, e criar funções onde são passados parametros para os 2 players

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
// let player1Result = document.querySelector(".player-1-result")
// let player2Result = document.querySelector(".player-2-result")
let inputMaxScore = document.querySelector(".input-max-score")
// let playerOneButton = document.querySelector(".player-one")
// let playerTwoButton = document.querySelector(".player-two")
let resetBtn = document.querySelector(".reset-btn")




// Display
let topPlayNumber = 5
// let player1Score = 0
// let player2Score = 0
// maxPlayDisplay.textContent = topPlayNumber


// Events Listeners
inputMaxScore.addEventListener("change", function() {
    reset()
    topPlayNumber = Number(inputMaxScore.value)
    console.log(inputMaxScore.value)
})


function updateScores(player, opponent) {
    if (player.score < topPlayNumber && opponent.score < topPlayNumber ) {
        player.score++
        console.log(player.score, topPlayNumber)
        player.display.textContent = player.score
    }

    if (player.score === topPlayNumber) {
        player.display.classList.add("has-text-success")
        opponent.display.classList.add("has-text-danger")
        player.button.disabled = true
        opponent.button.disabled = true
    } 
}



p1.button.addEventListener("click", function() {

    updateScores(p1, p2)

    // if (player1Score < topPlayNumber && player2Score < topPlayNumber ) {
    //     player1Score++
    //     console.log(player1Score, topPlayNumber)
    //     player1Result.textContent = player1Score
    // }

    // if (player1Score === topPlayNumber) {
    //     player1Result.classList.add("has-text-success")
    //     player2Result.classList.add("has-text-danger")
    //     playerOne.disabled = true
    //     playerTwo.disabled = true
    // } 
})


p2.button.addEventListener("click", function() {

    updateScores(p2, p1)

    // if (player2Score  < topPlayNumber && player1Score < topPlayNumber) {
    //     player2Score++
    //     player2Result.textContent = player2Score
    //     console.log("two")
    // }

    // if (player2Score === topPlayNumber) {
    //     player2Result.classList.add("has-text-success")
    //     player1Result.classList.add("has-text-danger")
    //     playerOne.disabled = true
    //     playerTwo.disabled = true
    // } 
})


resetBtn.addEventListener("click", function() {
    reset()
})


function reset() {
    // Aqui estamos a definir as mesmas alterações para os 2 players, uma uma
    // Para 2 players, não é muito problemático, mas se tivermos mais jogadores, será complicado estar a definir as mesmas propriedades para cada um dos jogadores.
    // PAra facilitar, vamos iterar pela array dos 2 jogadores --> criamos nós msm a array
    // E iteramos com FOR OF por exemplo

    for (let player of [p1, p2]) {
        player.score = 0
        player.display.textContent = player.score
        player.display.classList.remove("has-text-success")
        player.display.classList.remove("has-text-danger")
        player.button.disabled = false
    }
    
    // in"putMaxScore.value = 0"

    // Na Forma "antiga":

    // p1.score = 0
    // p2.score = 0
    // p1.display.textContent = p1.score
    // p2.display.textContent = p2.score
    // p1.display.classList.remove("has-text-success")
    // p2.display.classList.remove("has-text-success")
    // p1.display.classList.remove("has-text-danger")
    // p2.display.classList.remove("has-text-danger")
    // p1.button.disabled = false
    // p2.button.disabled = false
    // topPlayNumber = 5
    // maxPlayDisplay.textContent = topPlayNumber
    // inputMaxScore.value = 0
}