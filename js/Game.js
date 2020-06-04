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
    const li = document.querySelectorAll('#phrase li');
    li.classList.contains('hide letter');
  
    
    if (li.length < 0) {
            return false;
        } else {
            return true;
        }
};

//Console Tests:
//Test code for checkForWin: game.checkForWin()
//Test code for showMatchedLetter: game.activePhrase.showMatchedLetter()

}
