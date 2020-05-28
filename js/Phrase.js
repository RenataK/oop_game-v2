/* Treehouse FSJS Techdegree
 * Project  - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
* Display phrase on game board
*/
addPhraseToDisplay() {
    const ul = document.getElementById('phrase ul');
    let li = document.createElement('LI');
    ul.appendChild(li);
        
};

}

