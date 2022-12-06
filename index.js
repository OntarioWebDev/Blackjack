let player = {
    name: "Nick",
    chips: 2000
} 
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = `${player.name}: $${player.chips}`;

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if (randomNumber === 1){
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard()
    cards.push(firstCard, secondCard);
    sum = firstCard + secondCard;
    renderGame(); 
}

function renderGame() {
    cardsEl.textContent = `Cards: `;
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = `Sum: ${sum}`;
    if (sum <= 20){
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "21! You've won Blackjack!"
        hasBlackjack = true; 
    } else {
        message = "Sorry you've busted!"
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard(){
    if (isAlive === true && hasBlackjack === false){
        let nextCard = getRandomCard();
        sum+= nextCard;
        cards.push(nextCard);
        renderGame();
    }
}
