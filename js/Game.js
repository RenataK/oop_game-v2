/* Treehouse FSJS Techdegree
 * Project  - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrases = null;
    }

    createPhrases() {
    const phrases = [new Phrase('We were on a break'),
        new Phrase('You make me smile'),
        new Phrase('How you doin'),
        new Phrase('You are my sunshine'),
        new Phrase('Pineapple apple pen')
    ];
        return phrases;
    }

    getRandomPhrase() {
       const getPhrase =  Math.floor(Math.random() * this.phrases.length);
        return getPhrase;
    }
}