/* Treehouse FSJS Techdegree
 * Project  - OOP Game App
 * app.js */

let game;
const button = document.getElementById('btn__reset');
button.addEventListener('click', () => {
    game = new Game(game);
    game.startGame();
});

