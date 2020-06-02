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
        } else if (this.phrase[i] == splitPhrase[i]) {
            li.classList = 'hide letter';
        }
       }
   }

   /**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
checkLetter(letter) {
    if (this.phrase.includes(letter)) {
        return true;
    } else {
        return false;
    }
};
/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
showMatchedLetter(letter) {
    const x = document.querySelectorAll('.letter');
    for (let i=0; i<x.length; i++) {

        if (x[i].innerHTML == letter) {
            x[i].classList.replace('hide', 'show');
        } 
    }
};
   
}


