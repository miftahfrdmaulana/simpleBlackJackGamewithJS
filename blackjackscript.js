//DOM
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
//Variables Declaration
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let cards = []
let sumCard = 0
let hasBlackjack = false
let isAlive = false
let message = ""

let player = {
    name: "Farid",
    chips: 200
}



playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber =  Math.floor(Math.random() * 13) + 1 //Generates Random Num 1-13

    if (randomNumber > 10) {
        return 10
    } else if(randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }

}

function startGame() {
    isAlive  = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()  
    cards = [firstCard, secondCard]
    sumCard = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sumCard
    if (sumCard < 21) {
        message = "Do you want to draw another card?"
    } else if (sumCard === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game :("
        isAlive = false
    }
    messageEl.textContent  = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false){ 
        alert("Drawing new cards for u rq.... hold on...")
        let card = getRandomCard()
        sumCard += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    
}


