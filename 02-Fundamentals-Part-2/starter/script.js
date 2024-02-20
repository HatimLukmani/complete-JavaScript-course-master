'use strict';

// let hasDriverslicense = false;

// let passTest = true;
// if (passTest) hasDriverslicense = true;

// if (hasDriverslicense) console.log("you can drive")

// function mixer(apple, oranges) {
//     return `it has ${apple} apples & ${oranges} oranges`;

// }

// console.log(mixer(3, 4));

// function printer() {
//     console.log("hatim")
// }
// printer();
// printer();

// const a = function (birthYear) {
//     return 2023 - birthYear;
// }

// let ageCalculator = a(2002);
// console.log(ageCalculator);

// let age = ageCalculatorFunction(2002);
// console.log(age)
// function ageCalculatorFunction(birthYear) {
//     return 2023 - birthYear
// }

// const retirementCalculator = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const remainingYear = 65 - age;
//     return `${firstName} will going to be retire in ${remainingYear} yaerss`
// }

// console.log(retirementCalculator(2002, 'hatimLukmani'))
const cutter = fruit => fruit * 3;

// function fruitMixer(apples, oranges) {
//     let applePieces = cutter(apples);
//     let orangePieces = cutter(oranges);
//     return `ready fruit juice with ${applePieces} apples and ${orangePieces} oranges`;
// }
// console.log(fruitMixer(3, 4));

// const averageCalculator = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// function checkWinner(dolphinAverageScore, kalasAveragescore) {
//     if (dolphinAverageScore > 2 * kalasAveragescore) {
//         console.log("Dolphin wins!");
//     } else if (kalasAveragescore > 2 * dolphinAverageScore) {
//         console.log("Kala wins!");
//     } else {
//         console.log("It's a draw!");
//     }
// }
// let dolphinScore1 = 44, dolphinScore2 = 23, dolphinScore3 = 71;

// let kalasScore1 = 65, kalasScore2 = 54, kalasScore3 = 49;

// let dolphinAverageScore = averageCalculator(dolphinScore1, dolphinScore2, dolphinScore3);

// let kalasAveragescore = averageCalculator(kalasScore1, kalasScore2, kalasScore3);

// checkWinner(dolphinAverageScore, kalasAveragescore);

// let arrVar1 = [1, 2, 3, 4]
// console.log(arrVar1);
// arrVar1[1] = 3
// console.log(arrVar1[1])
// arrVar1 = [1, 2, 3, 4]
// console.log(arrVar1);

// const arrVar2 = new Array(1, 2, 3, 4);
// console.log(arrVar2)

// const arr = [2002, 2001, 2003]

// const ageCalculator = (year) => 2023 - year;

// const age = [ageCalculator(arr[0]), ageCalculator(arr[0]), ageCalculator(arr[arr.length - 1])]

// console.log(arr);
// console.log(age)
//add element

// const num = [1, 2, 3, 4, 5, 11, 12]
// const returnValueEnd = num.push(6)

// console.log(num, returnValueEnd)

// const returnValueBeg = num.unshift(0);
// console.log(num, returnValueBeg)

// //remove element

// const returnEnd = num.pop()
// console.log(num, returnEnd)
// const returnEnd2 = num.pop()
// console.log(num, returnEnd2)

// console.log(num.indexOf(11));

// if (num.includes(11)) {
//     console.log("it has 11")
// }

// const calcTip = (amount) => {
//     if (amount > 50 && amount < 300) return (amount * .15)
//     else return (amount * .2)
// }
// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(bills, tips, total)


// const objectInJs = {
//     firstName: 'hatim',
//     lastName: 'Lukmani',
//     age: 2023 - 2002,
//     friends: ['a', 'b', 'c'],
//     b: 1
// }
// console.log(objectInJs.firstName);
// const interestedIn = prompt("Enter teh detaisl that you want to known")
// if (objectInJs[interestedIn]) {
//     console.log(objectInJs[interestedIn])
// }
// else {
//     console.log("you demand wrong thing")
// }

// console.log(`${objectInJs['firstName']} has ${objectInJs['friends'].length} friends and his best friend name is ${objectInJs.friends[0]}`)


// const objectInJs = {
//     firstName: 'hatim',
//     lastName: 'Lukmani',
//     birthYear: 2002,
//     friends: ['a', 'b', 'c'],
//     b: 1,
//     calcAge: function () {
//         this.age = 2024 - this.birthYear;
//         //return this.age;

//     },
//     getSummary: function () {
//         this.summary = `hey my name is ${this.firstName} my friend mane is ${this.friends[0]} and my age is ${this.age}`;

//     }
// };

// objectInJs.calcAge();
// console.log(objectInJs.age);
// objectInJs.getSummary();
// console.log(objectInJs.summary)

// const smithObject = {
//     fullName: 'smith mathew',
//     mass: 78,
//     height: 1.69,
//     calcBmi: function () {
//         this.bmi = (this.mass) / (this.height * this.height);
//     }
// }
// const hatimObject = {
//     fullName: 'hatim lukmani',
//     mass: 92,
//     height: 1.95,
//     calcBmi: function () {
//         this.bmi = (this.mass) / (this.height * this.height);
//     }
// }

// hatimObject.calcBmi();
// smithObject.calcBmi();

// if (hatimObject.bmi > smithObject.bmi) {
//     console.log("hatim has higher bmi")
// }
// else {
//     console.log("smith has higher bmi")
// }


// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
//only string

// for (let i = 0; i < array.length; i++) {
//     if ((typeof array[i]) !== 'string') { continue; }
//     console.log(array[i])
// }
// for (let i = 0; i < array.length; i++) {
//     console.log(typeof array[i]);
// }
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] == 'number') {
//         break;
//     }
//     console.log(array[i])
// }

// const array = [
//     'hatim',
//     'lukmani',
//     2002,
//     ['a', 'b', 'c']
// ];
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i])
// }

// let rand = Math.trunc(Math.random(0, 1) * 6) + 1
// while (rand !== 6) {
//     console.log(rand);
//     rand = Math.trunc(Math.random(0, 1) * 7)

// }
const calcTip = (amount) => {
    if (amount > 50 && amount < 300) return (amount * .15)
    else return (amount * .2)
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i])
}
console.log(bills, tips, totals)