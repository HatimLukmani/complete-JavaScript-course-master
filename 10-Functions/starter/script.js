'use strict';
// let obj = [];
// const flight = function (name, noOfPassenger = 1, price = 100 * noOfPassenger) {
//   let objFunc = {
//     name,
//     noOfPassenger,
//     price,
//   };
//   console.log(objFunc);
//   obj.push(objFunc);
// };

// flight('hatim');
// console.log(obj);

// let airPlaneNumber = 'A123';
// let details = {
//   name: 'hatim',
//   passportNumber: 2345678,
// };

// function nameOfFunc(planeNumberParams, detailsParams) {
//   planeNumberParams = 'B123';
//   details.name = 'Mr.' + details.name;
// }

// nameOfFunc(airPlaneNumber, details);
// console.log(airPlaneNumber, details);

// function oneWord(params) {
//   const str = params.replace(/ /g, '');
//   return str;
// }

// function firstWord(params) {
//   let [first, ...rests] = params.split(' ');
//   //   console.log(...rests);
//   const returnString = [first.toUpperCase(), ...rests].join(' ');
//   return returnString;
// }
// // console.log(firstWord('hatim lukmani muzaffaer'));

// function transformer(params, fn) {
//   return fn(params);
// }
// console.log(transformer('hatim muzaffer', firstWord));

// const greet = greets => {
//   return function (name) {
//     return `${greets} ${name}`;
//   };
// };
// console.log(greet('hey')('hatim'));

// l;
//call method

// book.call(lufthansa, 123, 'hatim');
// console.log(lufthansa);
// book.call(luftahnsa2, 123, 'hatim');
// console.log(luftahnsa2);

// //apply method
// let data = [456, 'virat'];
// book.apply(lufthansa, data);
// console.log(lufthansa);

// let lufthansa = {
//   airlineName: 'lufthansa',
//   preNumber: 'LF',
//   bookings: [],
// };
// let luftahnsa2 = {
//   airlineName: 'lufthansa2',
//   preNumber: 'LF2',
//   bookings: [],
// };

// function book(flightNum, names) {
//   let obj = {
//     flightId: `${this.preNumber}${flightNum}`,
//     names,
//   };
//   this.bookings.push(obj);
// }

// const bookL1 = book.bind(lufthansa);
// bookL1('12345', 'virat');

// console.log(lufthansa.bookings);
// const bookL2 = book.bind(luftahnsa2);
// bookL2('123456', 'virat');

// console.log(luftahnsa2.bookings);

// lufthansa.palnes = 300;
// luftahnsa2.planes = 250;

// function buyer() {
//   console.log('before ', this);
//   this.planes += 1;
//   console.log('after', this);
// }
// document.querySelector('.buy').addEventListener('click', buyer.bind(lufthansa));

// const tax = (tax, amount) => {
//   return amount + tax * amount;
// };

// const vat = tax.bind(undefined, 0.1);
// console.log(vat(100));

// function taxCalc(amount) {
//   return function (tax) {
//     return amount + amount * tax;
//   };
// }
// const taxforXAmount = taxCalc(200);
// console.log(taxforXAmount(0.1));

//coding challeneg 1

//task3
//   3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
//task 4

// Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// (function (a, b) {
//   var a = 10;
//   console.log(a + b);
// })(1, 2);
// console.log(a);
// function secureBooking() {
//   let counter = 0;
//   return function () {
//     counter = counter + 1;
//     return counter;
//   };
// }
// const inc = secureBooking();
// console.log(inc());
// console.log(inc());
// console.log(inc());

// console.dir(inc);

//example--1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
const h = function () {
  const c = 32;
  f = function () {
    console.log(c * 2);
  };
};
h();
f();
console.dir(f);

//example  2

const boardPassengers = function (n, groups) {
  let perGroup = n / groups;
  setTimeout(function () {
    console.log(`the ${n} pasenegers will be boraded ${perGroup} perGroup`);
  }, 3000);
  console.log('boarding will be started in 3 seconds');
};
const perGroup = 90;
boardPassengers(900, 3);
