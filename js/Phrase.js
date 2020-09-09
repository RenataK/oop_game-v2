/* Treehouse FSJS Techdegree
 * Project 4- OOP Game App
 * Phrase.js */

 //Created Phrase class and constructor.
 //Added the phrase property.
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
    ul.innerHTML = '';


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
    const allLetters = document.querySelectorAll('.letter');
    for (let i=0; i<allLetters.length; i++) {

        if (allLetters[i].innerHTML == letter) {
            allLetters[i].classList.replace('hide', 'show');
        } 
    }
};
   
}


