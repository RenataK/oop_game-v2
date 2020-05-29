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

    for (let i=0; i<ul.length; i++) {
        
        let letter = this.phrase.split('');
        li.innerHTML = letter;

        if (this.phrase == ' ') {
            li.classList = 'space';
        } else if (this.phrase == letter) {
            li.classList = 'hide letter';
        }
       }
   }
}

