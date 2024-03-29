# oop_game-v2

In this project, you'll find a browser-based, word guessing game: "Phrase Hunter." 
Using JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

Using JavaScript: 
  create two JavaScript classes with specific properties and methods. (Game class for managing the game, and a Phrase class to help with creating an array of Phrase objects)
  choose a random phrase, split the phrase into letters, and put those letters onto the gameboard.
  A player can guess a letter only once. After they’ve guessed a letter, programming will disable that letter on the onscreen keyboard.

About the game:
Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen.
A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).
If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.
