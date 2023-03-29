///Selecting Elements
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let scorePlayer1 = document.querySelector('#current-position-1');
let scorePlayer2 = document.querySelector('#current-position-2');
let currentDice1 = document.getElementById('current--1');
let currentDice2 = document.getElementById('current--2');
let rectangle = document.querySelector('.rectangle-wrapper');
let player1Symbol = document.querySelector('.player1-symbol');
let player2Symbol = document.querySelector('.player2-symbol');

const diceElem = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn-roll');
const btnNew = document.querySelector('.btn-new');

//Starting conditions
let scores,
  currentScore,
  activePlayer,
  dice,
  pointer,
  allRectangles,
  stepIncrement,
  currentPointerPosition;

let initialization = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 1;
  diceElem.classList.add('hidden');
  dice;

  restartCurrent();
};

initialization();

function restartCurrent() {
  scorePlayer1 = scores[0];
  scorePlayer2 = scores[1];
  currentDice1 = 0;
  currentDice2 = 0;
  document.getElementById('current--1').textContent = 0;
  document.getElementById('current--2').textContent = 0;
  scorePlayer1 = document.querySelector('#current-position-1').textContent = 0;
  scorePlayer2 = document.querySelector('#current-position-2').textContent = 0;
}

btnRoll.addEventListener('click', function () {
  rollingDice();
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  addValueCurrentPlayer();
  switchPlayer();
  movePointer(dice);
});
function rollingDice() {
  dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display Dice
  diceElem.classList.remove('hidden');
  diceElem.src = `dice-${dice}.png`;
  currentScore += dice;
}

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
const movePointer = (step) => {
  const pointer = activePlayer === 1 ? player1Symbol : player2Symbol; // select the active player's pointer
  const currentPointerPosition = Number(
    pointer.parentNode.querySelector('.content-nr').innerHTML
  ); // get the current position of the pointer

  const allRectangles = document.querySelectorAll('.rectangle-wrapper');
  const stepIncrement = currentPointerPosition + Number(step - 1);

  if (stepIncrement < allRectangles.length) {
    const rectangleTarget = allRectangles[stepIncrement];
    rectangleTarget.querySelector('.content-nr').before(pointer); // move the pointer to the target position
  }
};

btnNew.addEventListener('click', initialization);
