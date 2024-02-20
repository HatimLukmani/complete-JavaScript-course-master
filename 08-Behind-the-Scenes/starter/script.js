'use strict';
// function calcAge(birthYear) {
//   const age = 2024 - birthYear;
//   function printAge() {
//     const output = `${firstName} you are ${age} years old and mall = ${mall}`;
//     console.log(output);
//   }
//   if (birthYear > 2001 && birthYear) {
//     var mall = true;
//   }
//   printAge();
// }
// const firstName = 'hatim';
// calcAge(2002);
// console.log(mall);
// function aa() {
//   let a = 10;
//   bb();
//   function bb() {
//     var b = 20;
//     console.log(a);
//   }
//   console.log(b);
// }
// aa();
// console.log(me);
// console.log(job);
// console.log(year);
// var me = 'jonas';
// let job = 'teacher';
// const year = 1991;
// console.log(addDec(10, 10));
// console.log(addExp(10, 10));
// function addDec(a, b) {
//   return a + b;
// }

// var addExp = function (a, b) {
//   return a + b;
// };
// if (!x) {
//   deleteData();
// }

// var x = 10;
// function deleteData() {
//   console.log('your all daat is deleted');
// }
// 1) for normal method calling this = unddefined

// function add(a, b) {
//   console.log(a, b);
//   console.log(this);
// }
// add(10, 20);

//2. in case of calling method it returns the object who called it
// const jonas = {
//   birthYear: 2002,
//   calcAge: function () {
//     console.log(this);
//     console.log(2002 - this.birthYear);
//   },
// };
// jonas.calcAge();

// //method borrowing

// const het = {
//   birthYear: 1992,
// };
// het.calcAge = jonas.calcAge;

// het.calcAge();
//casse 3 in case of the arrow function this function return referenec of its parents
// const func = () => {
//   console.log(this);
// };

// func();

// const jonas = {
//   firstName: 'hatim',
//   greet: function () {
//     console.log(this);
//     console.log(`hey my name is ${this.firstName}`);
//   },
// };
// jonas.greet();

const jonas = {
  firstName: 'hatim',
  greet: function () {
    console.log(`hey my name is ${this.firstName}`);
    const goodMorning = () => {
      console.log(`good morning from ${this.firstName}`);
    };
    goodMorning();
  },
};
jonas.greet();
