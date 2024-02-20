'use strict';

const constFunc = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
  constFunc.prototype.calacAge = function () {
    console.log('hey');
  };
};

const hatim = new constFunc('hatim', 2002);
const virat = new constFunc('virat', 2003);
hatim.calacAge();

console.log(hatim.__proto__);
console.log(constFunc.prototype);

// let arr = [1, 2, 3, 4, 5];
// console.dir(arr);
// Array.prototype.unique = function () {
//   return Set(...[this.arr]);
// // };
// // arr.unique();
// // class Person {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }

// //   set name(names) {
// //     if (names == names.toUpperCase()) {
// //       this._name = names;
// //     } else {
// //       this._name = names[0].toUpperCase() + names.slice(1);
// //     }
// //   }
// //   get name() {
// //     return this._name;
// //   }
// // }
// // let hatimss = new Person('hatim', 18);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);
// console.dir(Student);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// const person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   person.prototype.calcAge = function () {
//     return 2024 - this.birthYear;
//   };
// };

// const student = function (firstName, birthYear, course) {
//   person.call(this, firstName, birthYear);
//   this.course = course;
// };
// student.prototype = Object.create(person.prototype);
// student.prototype.introduce = function () {
//   return `my name is hatim`;
// };
// student.prototype.constructor = student;

// const mike = new student('hatim', 2002, 'cse');
// console.log(mike.calcAge());

// class person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calacAge() {
//     return `${2024 - this.birthYear}`;
//   }
//   static basic() {
//     console.log('person has legs,hands,etc');
//   }
// }

// class student extends person {
//   introduce() {
//     console.log('hey my name is khan');
//   }
//   calacAge() {
//     return `hey ${2024 - this.birthYear}`;
//   }
// }

// const mike = new student('hatimm', 2002);
// console.log(mike);
class acount {
  //public feilds
  movements = [];
  locale = navigator.locale;

  //private fields
  #pin = 0;
  constructor(owner, curr, pin) {
    this.owner = owner;
    this.curr = curr;
    this.#pin = pin;
  }
  deposit(val) {
    this.movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  #loanApproved(val) {
    return true;
  }
  requestLoan(val) {
    if (this.loanApproved(val)) {
      this.deposit(val);
    }
    return this;
  }
}
