'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2024-01-31T18:30:00.000Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

function numberFormatter(value, locale, currency) {
  options = {
    style: 'currency',
    currency: currency,
  };
  return Intl.NumberFormat(locale, options).format(value);
}

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const displayDate = document.querySelector('.date');
let year, month, day, hours, minutes, seconds;
let isTimer;
/////////////////////////////////////////////////
// Functions
function dateFormatter(dateInput, locale) {
  let fDate = new Date(dateInput);
  function calcDayPassed() {
    return Math.round(
      (Date.now() - new Date(dateInput)) / (24 * 60 * 60 * 1000)
    );
  }
  console.log('Inputted ', dateInput);
  let noOfDays = calcDayPassed();
  console.log('dat', noOfDays);
  if (noOfDays == 0) return `today`;
  else if (noOfDays == 1) return `yesterday`;
  else if (noOfDays <= 7) return `within a week `;
  else {
    // let day = `${fDate.getDate()}`.padStart('0', 2);
    // let month = `${fDate.getMonth() + 1}`.padStart('0', 2);
    // let year = fDate.getFullYear();
    // return `${day}/${month}/${year}`;

    return Intl.DateTimeFormat(locale).format(fDate);
  }
}

const displayMovements = function (accounts, sort = true) {
  containerMovements.innerHTML = '';
  console.log(accounts);
  const movs = sort
    ? accounts.movements.slice().sort((a, b) => a - b)
    : accounts.movements;

  movs.forEach(function (mov, i) {
    let date = accounts.movementsDates[i];
    let formattedMov = numberFormatter(mov, accounts.locale, accounts.currency);
    console.log(date);

    let displayDate = dateFormatter(date, accounts.locale);

    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = numberFormatter(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    if (isTimer) clearInterval(isTimer);
    isTimer = logOutCounter();

    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    console.log(new Date().toISOString);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

let date = new Date();
// day = `${date.getDate()}`.padStart(2, '0');
// month = `${date.getMonth()}`.padStart(2, '0');
// year = date.getFullYear();
// hours = date.getHours();
// minutes = date.getMinutes();
// seconds = date.getSeconds();
// displayDate.textContent = `${day}/${month}/${year},${hours}:${minutes}`;
let options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};
const lang = navigator.language;

displayDate.textContent = Intl.DateTimeFormat('en-US', options).format(date);
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(Number(inputLoanAmount.value));

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
let big = 233_333;
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(9007199254740991n ** 2n);

/*
1. in bigint divison it remve the decimal part
2. it cannot be mix wit the non-bigint number 
3. it can work with even nob-big int in logical operator
4.concat with string
*/
// console.log(20 < 20n);
// console.log(20 === 20n);

// let date = new Date();
// console.log(date);
// let date2 = new Date('Mon Feb 05 2024 13:52:13 GMT+0530').toISOString();
// console.log(date2);
// console.log(new Date(Date.now()));
// let givenDate = new Date(2037, 11, 31, 12, 20);
// console.log(givenDate.getFullYear());
// console.log(givenDate.getDate());
// console.log(givenDate.getDay());
// console.log(givenDate.getMonth());
// console.log(givenDate.getHours());
// console.log(givenDate.getMinutes());
// console.log(givenDate.getSeconds());
// console.log(givenDate.getTime());
// console.log(givenDate.toISOString());
// const datess = new Date(givenDate.getTime());
// console.log(datess);
// // console.log(givenDate.);
// givenDate.setFullYear(2047);
// console.log(givenDate);
// let myDay = new Date('July 3,2002');
// console.log(myDay);
function calcDayPassed(date1, date2) {
  return (date1 - date2) / (24 * 60 * 60 * 1000);
}
const date1 = new Date('2022-01-01');
const date2 = new Date('2020-01-01');

console.log(calcDayPassed(date1, date2));

function calcYearPassed(date1, date2) {
  return Math.ceil((date1 - date2) / (365 * 24 * 60 * 60100));
}
console.log(calcYearPassed(date1, date2));

let num = 3000111000;
options = {
  style: 'currency',
  currency: 'EUR',
};
let ing = ['a', 'b'];
const timer = setTimeout(
  (ing1, ing2) => {
    console.log('your pitza is ready ', ing1, ing2);
  },
  40000,
  ...ing
);
if (ing.includes('a')) clearTimeout(timer);

setInterval(() => {
  let dates = new Date();
  console.log(dates);
}, 1000);

function logOutCounter() {
  let timer = 10;
  const tick = function () {
    let minutes = Math.trunc(timer / 60);
    let seconds = timer % 60;
    labelTimer.textContent = `${minutes}:${seconds}`;
    if (timer == 0) {
      labelWelcome.textContent = `login with your credentials`;
      containerApp.style.opacity = 0;
      clearTimeout(count);
    }
    timer = timer - 1;
  };
  tick();
  const count = setInterval(tick, 1000);
  return count;
}
