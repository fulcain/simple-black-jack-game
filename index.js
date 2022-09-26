// variables
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#cards")
let sumEl = document.querySelector("#sum-el")

let playerEl = document.querySelector('#player-el')

let player = {
    name: "fulcain",
    chips: 125
}
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let SecondCard = getRandomCard()
    cards = [firstCard, SecondCard]
    sum = firstCard + SecondCard

    renderGame()
}
function renderGame() {
    if (sum <= 20) {
        messageEl.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        messageEl.textContent = "You've got BlackJack!"
        hasBlackJack = true
    } else {
        messageEl.textContent = "You are out of the game!"
        isAlive = false
    }

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){
        let newCardEl= getRandomCard()
        sum += newCardEl
        cards.push(newCardEl)
        renderGame()
    }


}
