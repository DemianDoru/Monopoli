'use strict';

// const player1 = document.querySelector('.player1');
// const player2 = document.querySelector('.player2');

///Selecting Elements
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let scorePlayer1 = document.querySelector('#current-position-1');
let scorePlayer2 = document.querySelector('#current-position-2');
const diceElem = document.querySelector('.dice');
const currentDice1 = document.getElementById('current--1');
const currentDice2 = document.getElementById('current--2');

const btnRoll = document.querySelector('.btn-roll');
const btnNew = document.querySelector('.btn-new');
const btnMove = document.querySelector('.btn-move');

//Starting conditions

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 1;
scorePlayer1 = 0;
scorePlayer2 = 0;
diceElem.classList.add('hidden');

//Rolling Dice
btnRoll.addEventListener('click', function () {
  // Check the dice rolled
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display Dice
  diceElem.classList.remove('hidden');
  diceElem.src = `dice-${dice}.png`;
  currentScore += dice;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  addValueCurrentPlayer();
  switchPlayer();
});
function switchPlayer() {
  if (scorePlayer1 >= 16) {
    console.log(`Congratulations Player 1, you win the game`);
  } else if (scorePlayer2 >= 16) {
    console.log(`Congratulations Player 2, you win the game`);
  } else {
    activePlayer = activePlayer === 1 ? 2 : 1;
  }
}
function addValueCurrentPlayer() {
  // 1. Generating a dice roll

  if (activePlayer === 1) {
    scorePlayer1 += currentScore;
    currentScore = 0;
    scorePlayer1 = scorePlayer1;
    document.getElementById('current-position-1').textContent = scorePlayer1;
    console.log(scorePlayer1, 'palyer1');
  } else {
    scorePlayer2 += currentScore;
    currentScore = 0;
    scorePlayer2 = scorePlayer2;
    document.querySelector('#current-position-2').textContent = scorePlayer2;
    console.log(scorePlayer2, 'player2');
  }
}
