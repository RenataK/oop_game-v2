/* Treehouse FSJS Techdegree
 * Project  - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
createPhrases() {
    const randomPhrases = [
        new Phrase('We were on a break'),
        new Phrase('You are my sunshine'),
        new Phrase('How you doin'),
        new Phrase('rock paper scissors'),
        new Phrase('pinapple apple pen')
    ];
    return randomPhrases;
};

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() {
    const getPhrase = Math.floor(Math.random() * (this.phrases.length) );
    return this.phrases[getPhrase];
};

/**
* Begins game by selecting a random phrase and displaying it to user
*/
startGame() {
    const overlay = document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
}

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin() {
    const letters = document.querySelectorAll('.letter').length;
    const shown = document.querySelectorAll('.show').length;
        if (letters == shown) {
            return true;
        } else {
            return false;
        }
};

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {
    const liveHeart = document.querySelectorAll('img[src="images/liveHeart.png"]');
        this.missed ++;
        if (this.missed === 1) {
            liveHeart[0].setAttribute('src', 'images/lostHeart.png');
        } else if (this.missed === 2) {
            liveHeart[0].setAttribute('src', 'images/lostHeart.png');
        } else if (this.missed === 3) {
            liveHeart[0].setAttribute('src', 'images/lostHeart.png');
        } else if (this.missed === 4) {
            liveHeart[0].setAttribute('src', 'images/lostHeart.png');
        } else if (this.missed == 5) {
            liveHeart[0].setAttribute('src', 'images/lostHeart.png');
            this.gameOver(false);
        } 
};
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon) {
    const overlay = document.getElementById('overlay');
    //const startHTML = document.getElementsByClassName('start');
    const gameOverMessage = document.getElementById('game-over-message');
    const startCSS = document.querySelectorAll('.start');
    const win = document.querySelectorAll('.win');
    const lose = document.querySelectorAll('.lose');

    if (gameWon == true) {
        overlay.className = 'win';
        overlay.style.display = 'block';
        gameOverMessage.textContent = 'You Won! 🎊'
    } 
    else if (gameWon == false) {
        overlay.className = 'lose';
        overlay.style.display = 'block';
        gameOverMessage.textContent = 'You Lost! 😕'
    }
};

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
handleInteraction(button) {
    const phrase = document.getElementById('phrase');
    const qwerty = document.getElementById('qwerty');
    const letters = document.querySelectorAll('.letter');
    const chosen = document.querySelectorAll('.chosen');
    const wrong = document.querySelectorAll('.wrong');
    button.disabled = 'true';

    //if ()  {
        button.classList.add('wrong');
        this.removeLife();
    //} else {
    //if (this.activePhrase == 'letters') {
        button.classList.add('chosen');
        //this.showMatchedLetter();
        this.checkForWin();
        this.gameOver();
    //}

    console.log(button);
    };

}



