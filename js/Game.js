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
    const gameOverMessage = document.getElementById('game-over-message');
    const keys = document.getElementsByClassName('key');
    const ul = document.querySelector('#phrase ul');
    const liveHeart = document.querySelectorAll('img[src="images/liveHeart.png"]');
    

    if (gameWon == true) {
        overlay.className = 'win';
        overlay.style.display = 'block';
        gameOverMessage.textContent = 'You Won! 🎊';
        
        ul.innerHTML = '';

        for (let i=0; i<keys.length; i++) {
            keys[i].disabled = false;
            keys[i].classList = 'key';
        }
        
    } 
    else if (gameWon == false) {
        overlay.className = 'lose';
        overlay.style.display = 'block';
        gameOverMessage.textContent = 'You Lost! 😕';
        
        ul.innerHTML = '';

        for (let i=0; i<keys.length; i++) {
            keys[i].disabled = false;
            keys[i].classList = 'key';
        }

    }
};

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
handleInteraction(button) {
    const chosen = document.querySelectorAll('.chosen');
    const wrong = document.querySelectorAll('.wrong');

    if (this.activePhrase.checkLetter(button.innerHTML) === false) {
        button.disabled = 'true';
        button.classList.add('wrong');
        this.removeLife();
    } else {
        button.classList.add('chosen');
        this.activePhrase.showMatchedLetter(button.innerHTML) == 'letter';
     } 
    if (this.checkForWin(button.innerHTML) === true) {
        return this.gameOver(true);
     }

    };


}




