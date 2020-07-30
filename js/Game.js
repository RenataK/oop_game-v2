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
        overlay.style.display = 'none'; 
        win.style.display = 'block';
    } 
    else if (gameWon == false) {
        overlay.style.display = 'none'; 
        lose.style.display = 'block';
    }
};

//code to test gameOver() method: game.gameOver(true)

}

//if
        //gameOverMessage.textContent = 'You won!';
        // overlay.classList.replace('startCSS', 'win');
        //if else
        //gameOverMessage.textContent = 'You Lost';
        // overlay.classList.replace('startCSS', 'lose');

/**
 * `gameOver()`: This method displays the original start screen overlay, and
depending on the outcome of the game, updates the overlay `h1` element with a
friendly win or loss message, and replaces the overlay’s `start` CSS class with
either the `win` or `lose` CSS class.
 */

 /**
  * As for the gameOver method, your method includes a "gameWon" parameter 
  * but you don't actually use that param anywhere in your code right now. 
  * Instead of trying to figure out if the user has won the game or not with something 
  * like the conditionals you have on lines 93 and 97, 
  * which your app already does in other places, 
  * you would instead want to use the "gameWon" parameter to determine this. 
  * So for example, when the user has won the game you might call the gameOver method 
  * and pass an argument like "won". 
  * Then in your method, you would have a conditional that checks to see if
  *  "gameWon" equals "won" and then if so, display the win message. 
  * You would apply a similar logic to when the user has lost the game. 
  * So in other words, the parameter should determine what message appears on the overlay.
  */

/**
 * "gameWon" = parameter (to determine if user won or not)
 * when user wins, call gameOver() and pass argument "won"
 * check if 'gameWon' = 'won'
 * if so, display message. 
 */

 /**
  * Parameters are what you use when you create a function or method. 
  * Arguments are what you use when you call a function or method.
So when you call the gameOver method in the removeLife or handleInteraction methods, 
you would pass an argument that represents whether or not the player won the game or not. 
Then in the gameOver method, you would access the value of that argument that was passed 
when the method was called via the "gameWon" parameter.

To put it another way, the value of "gameWon" in the gameOver method will be whatever 
was passed as an argument when the method was called. 
To see this in action, try putting console.log(gameWon) just inside the gameOver method 
and then see what logs out when you call the method with different arguments. 
Once you get a feel for how this works you can work on structuring the conditional.
  */
