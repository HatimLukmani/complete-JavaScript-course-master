'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

let accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
let movementCopy = [];
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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

const displayHtml = function (movements) {
  console.log('inner');
  containerMovements.innerHTML = '';
  let html = ``;
  movements.forEach((element, index) => {
    let type = element >= 0 ? 'deposit' : 'withdrawal';
    html = `
  <div class="movements__row">
  <div class="movements__type movements__type--${type}">${index} ${type}</div>
  <div class="movements__date">3 days ago</div>
  <div class="movements__value">${element}€</div>
</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayHtml(account1.movements);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movementsToUsd = movements.map(mov => mov + mov * 0.11);
// console.log(movements);
// // console.log(movementsToUsd);
// const movementsDescriptions = movements.map(mov => {
//   return `you ${mov >= 0 ? 'deposited' : 'withdrawal'} = ${Math.abs(mov)}`;
// });
// console.log(movementsDescriptions);

let names = 'hatim Muzaffer lukmani';

const values = names
  .toLowerCase()
  .split(' ')
  .map(function (mov) {
    return mov[0];
  })
  .join('');
console.log(values);

function nameGenerator() {
  this.names = this.owner
    .toLowerCase()
    .split(' ')
    .map(function (mov) {
      return mov[0];
    })
    .join('');
}
// const accounts = [account1, account2, account3, account4];

accounts.forEach(element => {
  nameGenerator.call(element);
});
console.log(account1);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);
function calcTotalBalance(account) {
  console.log(account.movements);
  const totalBalance = account.movements.reduce((acc, curr, index, arr) => {
    return acc + curr;
  }, 0);
  document.querySelector('.balance__value').textContent = totalBalance;
  account.totalBalance = totalBalance;
}
calcTotalBalance(account1);
// console.log(totalBalance);

//maximum
const maxReduce = movements.reduce(function (acc, curr) {
  return acc < curr ? curr : acc;
}, 0);
console.log(maxReduce);

//displaysummary

function calcDisplaySummary(movements) {
  const totalDeposit = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  console.log(totalDeposit);
  labelSumIn.textContent = `${totalDeposit}€`;

  const totalWithdrawal = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc - mov, 0);
  console.log(totalWithdrawal);
  labelSumOut.textContent = `${Math.abs(totalWithdrawal)}€`;

  const totalIntereset = movements
    .filter(mov => mov > 0)
    .map(mov => (mov * 1.2) / 100)
    .reduce((acc, mov) => acc + mov);
  console.log(totalIntereset);
  labelSumInterest.textContent = `${totalIntereset}€`;
}
calcDisplaySummary(movements);
//const accounts = [account1, account2, account3, account4];

const ss = accounts.find(acc => acc.owner == 'Jessica Davis');
console.log(ss);
let currentAccount;
//implemnsting logic
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  console.log('login');
  console.log(inputLoginUsername);
  let inputUserName = inputLoginUsername.value;

  let inputPinName = Number(inputLoginPin.value);
  console.log(inputPinName);
  currentAccount = accounts.find(acc => acc.names === inputUserName);
  console.log(currentAccount);
  if (currentAccount?.pin === inputPinName) {
    //1 welcome message
    containerApp.style.opacity = 1;
    document.querySelector(
      '.welcome'
    ).textContent = `welcome ${currentAccount.owner}`;

    //2. calculate movements
    console.log(currentAccount.movements);
    displayHtml(currentAccount.movements);

    //calculate baalnce
    calcTotalBalance(currentAccount);

    //display summary
    calcDisplaySummary(currentAccount.movements);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  let recieverNames = inputTransferTo.value;
  let trasnferAmount = inputTransferAmount.value;
  let receiverAcc = accounts.find(acc => acc.names === recieverNames);

  console.log(recieverNames, trasnferAmount);
  if (
    trasnferAmount > 0 &&
    receiverAcc &&
    currentAccount.totalBalance >= trasnferAmount &&
    receiverAcc.names != currentAccount.names
  ) {
    console.log('transfer');
    //do transfer
    currentAccount.movements.push(-trasnferAmount);
    receiverAcc.movements.push(trasnferAmount);
    displayHtml(currentAccount.movements);

    //calculate baalnce
    calcTotalBalance(currentAccount);

    //display summary
    calcDisplaySummary(currentAccount.movements);
  }
  inputTransferTo.value = '';
  inputTransferAmount.value = '';
});
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  let loanAmount = Math.floor(Number(inputLoanAmount.value));
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => loanAmount > mov * 0.1)
  ) {
    currentAccount.movements.push(loanAmount);
    displayHtml(currentAccount.movements);

    //calculate baalnce
    calcTotalBalance(currentAccount);

    //display summary
    calcDisplaySummary(currentAccount.movements);
  }
  inputLoanAmount.value = '';
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('close');
  let closingUserName = inputCloseUsername.value;
  let closingUserPin = Number(inputClosePin.value);
  console.log(closingUserName, closingUserPin);
  if (
    closingUserName === currentAccount.names &&
    closingUserPin === currentAccount.pin
  ) {
    let closeAccount = accounts.findIndex(
      acc => acc.names === closingUserName && acc.pin === closingUserPin
    );
    console.log('befor', accounts);
    accounts.splice(closeAccount, 1);
    console.log('after', accounts);

    containerApp.style.opacity = 0;
  }
});

// let strings = 'hatim';
// let strObj = new String('hatim');
// console.log(strObj);

const accountsArr = accounts.map(mov => mov.movements);
console.log(accountsArr);
const allAmount = accountsArr.flat();
console.log(allAmount);

const totalAmountInBank = allAmount.reduce((acc, curr) => acc + curr);
console.log(totalAmountInBank);

//method -1
const totalBalanceMethodOne = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, curr) => acc + curr);
console.log(totalBalanceMethodOne);

//method -2
const totalBalanceMethodTwo = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => acc + curr);

console.log(totalBalanceMethodTwo);

let demoArr = [11, 22, 12, 34];
demoArr.sort(function (a, b) {
  return a - b;
});
console.log(demoArr);

btnSort.addEventListener('click', function (e) {
  console.log('sorting');
  e.preventDefault();
  movementCopy = currentAccount.movements.map(mov => mov);

  movementCopy.sort((a, b) => a - b);

  displayHtml(movementCopy);
});

const arr = new Array(7);
console.log(arr);

//fill method

arr.fill(1, 3, 5);
console.log(arr);

//from method
labelBalance.addEventListener('click', function () {
  let values = document.querySelectorAll('.movements__value');
  console.log(values);
  const arr = Array.from(values, ele => {
    return Number(ele.textContent.replace('€', ''));
  });
  console.log(arr);
});
