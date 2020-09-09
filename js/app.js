/* Treehouse FSJS Techdegree
 * Project 4- OOP Game App
 * app.js */

 //Created an event listener for the button and used game 
 //variable to instantiate a new Game object, so when user clicks start game, 
 //the game screen appears. 
let game;
const button = document.getElementById('btn__reset');

button.addEventListener('click', () => {
    game = new Game(game);
    game.startGame();
});

//Created an event listener for the onscreen keyboard letters. 
const qwerty = document.getElementById('qwerty');

qwerty.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
    game.handleInteraction(e.target);
    } 
});

