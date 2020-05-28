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
}
