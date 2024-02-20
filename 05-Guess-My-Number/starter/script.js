'use strict';
const guess = document.querySelector('.message');

let highScore = 0;
let hs = document.querySelector('.highscore');
hs.textContent = highScore;
let input = document.querySelector('.guess');
// input.value = '15';
// console.log(input.value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let number = document.querySelector('.number');
number.textContent = secretNumber;
let trialsLeft = 20;
let score = document.querySelector('.score');
let btnCheck = document.querySelector('.check');
console.log(btnCheck);
const bodyDocument = document.querySelector('body');
btnCheck.addEventListener('click', function () {
  const inputVal = Number(input.value);
  if (trialsLeft >= 1) {
    if (!inputVal) {
      guess.textContent = 'enter valid number';
    } else if (inputVal == secretNumber) {
      guess.textContent = 'Hurray!!';
      bodyDocument.style.backgroundColor = '#60b347';
      number.style.width = '30rem';
      if (Number(hs.textContent) < trialsLeft) {
        hs.textContent = trialsLeft;
      }
    } else if (inputVal > secretNumber) {
      guess.textContent = 'too high!!';
      trialsLeft = trialsLeft - 1;
      score.textContent = trialsLeft;
    } else if (inputVal < secretNumber) {
      guess.textContent = 'too low!!';
      trialsLeft = trialsLeft - 1;
      score.textContent = trialsLeft;
    }
  } else {
    guess.textContent = 'no more triasl left ';
  }
});

//implemnt reset functionality

const again = document.querySelector('.again');

again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  number.textContent = secretNumber;
  const message = document.querySelector('.message');
  message.textContent = 'Start Guessing...';
  trialsLeft = 20;

  score.textContent = trialsLeft;
  bodyDocument.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
