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
    const ul = document.querySelector('#phrase ul');
    let li = document.createElement('LI');
    ul.appendChild(li);

    for (let i=0; i<this.phrase.length; i++) {
        
        let splitPhrase = this.phrase.split('');
        li.innerHTML = splitPhrase[i];

        if (this.phrase[i] == ' ') {
            li.classList = 'space';
        } else if (this.phrase[i] == splitPhrase) {
            li.classList = 'hide letter';
        }
       }
   }
}

