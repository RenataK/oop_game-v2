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
    let splitPhrase = this.phrase.split('');


    for (let i=0; i<this.phrase.length; i++) {
        let li = document.createElement('LI');
        li.innerHTML = splitPhrase[i];
        ul.appendChild(li);

        if (this.phrase[i] == ' ') {
            li.classList = 'space';
        } else if (this.phrase[i] == splitPhrase) {
            li.classList = 'hide letter';
        }
       }
   }
}


