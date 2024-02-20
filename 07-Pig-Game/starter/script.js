'use strict';
let score__0 = document.querySelector('#score--0');
let score__1 = document.getElementById('score--1');
let dice = document.querySelector('.dice');
dice.classList.add('hidden');
let playing = true;
let player__0 = document.querySelector('.player--0');
let player__1 = document.querySelector('.player--1');
let activePlayer = 0;
let current_1 = document.getElementById('#current--1');
let current_2 = document.getElementById('#current--2');
let currentScore = 0;
let btn_roll = document.querySelector('.btn--roll');
let btn__new = document.querySelector('.btn--new');
btn__new.addEventListener('click', function () {
  playing = true;
  activePlayer = 0;
  dice.classList.add('hidden');
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  document.querySelector('.player--0').classList.add('player');
  document.querySelector('.player--0').classList.add('player--active');

  document.querySelector('.player--0').classList.remove('player--winner');

  document.querySelector('.player--1').classList.add('player');

  document.querySelector('.player--1').classList.remove('player--winner');
  console.log(document.querySelector('.player--0'));
});
btn_roll.addEventListener('click', function () {
  if (playing) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;
    console.log(diceNumber);
    if (diceNumber != 1) {
      console.log(activePlayer);
      currentScore += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      player__0.classList.toggle('player--active');
      player__1.classList.toggle('player--active');
    }
  }
});
dice.classList.add('hidden');
score__0.textContent = 0;
score__1.textContent = 0;

let btnHold = document.querySelector('.btn--hold');
btnHold.addEventListener('click', function () {
  if (playing) {
    currentScore = Number(
      document.querySelector(`#current--${activePlayer}`).textContent
    );

    let score = Number(
      document.querySelector(`#score--${activePlayer}`).textContent
    );
    console.log(score, currentScore, score + currentScore);
    document.querySelector(`#score--${activePlayer}`).textContent =
      score + currentScore;
    if (score + currentScore >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    document.querySelector(`#current--${activePlayer}`).textContent = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player__0.classList.toggle('player--active');
    player__1.classList.toggle('player--active');
  }
});
