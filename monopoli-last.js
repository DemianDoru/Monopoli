'use strict';

// const player1 = document.querySelector('.player1');
// const player2 = document.querySelector('.player2');

//Selecting Elements
let scorePlayer1 = document.querySelector('#current-position-1');
let scorePlayer2 = document.querySelector('#current-position-2');
const diceElem = document.querySelector('.dice');
const currentDice1 = document.getElementById('current-dice-1');
const currentDice2 = document.getElementById('current-dice-2');

const btnRoll = document.querySelector('.btn-roll');
const btnNew = document.querySelector('.btn-new');
const btnMove = document.querySelector('.btn-move');

//Starting conditions
scorePlayer1 = 0;
scorePlayer2 = 0;
diceElem.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling Dice
btnRoll.addEventListener('click', function () {
  // 1. Generating a dice roll
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display Dice
  diceElem.classList.remove('hidden');
  diceElem.src = `dice-${dice}.png`;
  currentScore += dice;
  currentDice1.textContent = currentScore;
});
