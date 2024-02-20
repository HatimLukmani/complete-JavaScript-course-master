// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;

// const y = 25;

// step -1 undertstand the problem completely

// (i) what exactly a temprature amplitude ?
// ==>difference between highest and lowest

// (ii)now what is seneor error looks like ?
// ==>'error' looks like

// (iii) what do when seneoer error occurs ?
// ==> ignore it simply

// step -2? divide and conquer
// (i) find minimum
// (ii)find maximum
// (iii) subtract minimum from maximum

// const calcAmplitude = function (temps) {
//   //find mimium
//   let mimium = Math.min(...temps);
//   let maximum = Math.max(...temps);
//   console.log(mimium);
//   console.log(maximum);
//   let amplitude = maximum - mimium;
//   return amplitude;
// };
// console.log(calcAmplitude(temp));
// let temp1 = [16, 17, 18, 20, 24, 21, 18];

// let temp2 = [16, 17, 18, 20, 24, 21, 18];

// const calc = (temps1, temps2) => {
//   const temps = temps1.concat(temps2);
//   return Math.max(...temps) - Math.min(...temps);
// };
// console.log(calc(temp1, temp2));

// const kelvinCalculator = function () {
//   const objFunction = {
//     type: "celcius",
//     convertedType: "kelvin",
//     value: prompt("enter celcius"),
//   };
//   const convertedValue = objFunction.value + 273;
//   return convertedValue;
// };

// const returnValue = kelvinCalculator();
// console.log(returnValue);

// function findMinMax(arr) {
//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 1; i <= arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }

//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   console.log("Minimum:", min);
//   console.log("Maximum:", max);
// }

// const numbers = [3, 1, 7, 4, 5];

// findMinMax(numbers);
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + ` ...${arr[i]} in ${i + 1} days`;
  }
  return str;
};

console.log(printForecast([17, 21, 23]));
