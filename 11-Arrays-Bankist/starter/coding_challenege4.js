// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

INT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
*/

//task1
// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
console.log(dogs);
dogs.forEach(curr => (curr.recommendedFood = curr.weight ** 0.75 * 28));
console.log(dogs);

//task2
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓current > (recommended * 0.90) && current < (recommended * 1.10)

dogs.forEach(function (curr) {
  if (curr.owners.includes('Sarah')) {
    if (
      curr.curFood > curr.recommendedFood * 0.9 &&
      curr.curFood < curr.recommendedFood * 1.1
    ) {
      console.log('eating in an okay amount');
    } else {
      const printString =
        curr.curFood > curr.recommendedFood ? 'too much' : 'too low';
      console.log(printString);
    }
  }
});

// task 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] }
// ];

let ownersEatTooMuch = [];
let ownersEatTooLittle = [];
let ownersEatOkay = [];

// dogs.forEach(curr => {
//   if (
//     curr.curFood > curr.recommendedFood * 0.9 &&
//     curr.curFood < curr.recommendedFood * 1.1
//   ) {
//     ownersEatOkay.push(curr.owners);
//   } else {
//     curr.curFood > curr.recommendedFood
//       ? ownersEatTooMuch.push(curr.owners)
//       : ownersEatTooLittle.push(curr.owners);
//   }
// });

// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);

ownersEatTooMuch = dogs
  .filter(curr => curr.curFood > curr.recommendedFood)
  .flatMap(curr => curr.owners);
ownersEatTooLittle = dogs
  .filter(curr => curr.curFood < curr.recommendedFood)
  .flatMap(curr => curr.owners);

console.log(ownersEatTooLittle, ownersEatTooMuch);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

let strForLittle = `${ownersEatTooLittle.join(' & ')} eats too little`;
console.log(strForLittle);
let strForMuch = `${ownersEatTooMuch.join(' & ')} east too much`;
console.log(strForMuch);

//task 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

const iSThereDog = dogs.some(curr => curr.curFood === curr.recommendedFood);
console.log(iSThereDog);

const isThere = dogs.some(
  curr =>
    curr.curFood > curr.recommendedFood * 0.9 &&
    curr.curFood < curr.recommendedFood * 1.1
);
console.log(isThere);

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
//done in above

// task 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
const dogsShallowCopy = dogs.map(curr => curr);
dogsShallowCopy.sort((a, b) => {
  return a.recommendedFood - b.recommendedFood;
});
console.log(dogsShallowCopy);

// console.log(Number.parseInt('40003.0'));
// console.log(Number.parseFloat('2.5 rem'));
// console.log(Number.isNaN('23'));

// console.log(Math.PI ** Number.parseFloat('2.5px'));

// const rounding = (start, end) => {
//   return Math.trunc(Math.random() * (start - end) + 1 + start);
// };
// console.log(rounding(10, 20));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

console.log((23.333).toFixed(2));
