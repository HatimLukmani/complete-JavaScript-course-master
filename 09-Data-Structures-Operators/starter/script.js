// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section

// // chutney6

// // let a = 10,
// //   b = 20;
// // let variable = { a: 1, b: 2 };
// // ({ a, b } = variable);
// // console.log(a, b);

// // let { fri } = restaurant.openingHours;
// // console.log(fri);

// // let { open, close } = fri;
// // console.log(open, close);

// //destructing power in function

// // let arr1 = [4, 5];
// // let arr2 = [1, 2, 3, ...arr1];
// // console.log(arr2);

// // let strings = 'hatim';
// // console.log(...strings);
// // let stringsGenerated = [...strings, ' ', 'S.'];
// // console.log(...stringsGenerated);

// // let ingredients = [
// //   prompt('enter 1st ingridents'),
// //   prompt('enter 2nd ingridents'),
// //   prompt('enter 3rd ingridents'),
// // ];
// // restaurant.pasta(...ingredients);
// // const restaurantUpgraded = { foundedIn: 2002, ...restaurant };
// // console.log(restaurantUpgraded);

// // let arr1 = [1, 2, 3, 4];
// // let arr2 = [5, 6, 7, 8];
// // let [a, b, ...c] = [...arr1, ...arr2];
// // console.log(a, b, c);
// // let [first, , second, ...restofElements] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];
// // console.log(first, second, restofElements);

// // const add = function (...params) {
// //   let sum = 0;
// //   for (let i = 0; i < params.length; i++) {
// //     sum = sum + params[i];
// //   }
// //   return sum;
// // };
// // console.log(add(3, 4, 1));
// // const addd = [1, 2, 3, 4];

// // add(...addd);
// // console.log(' --------||----------');

// // console.log(0 || false);
// // const guests = restaurant.noOfGuests || 10;
// // console.log(guests);

// // console.log('-------- && ---------');

// // console.log(0 && true);
// // const age = 10;
// // const drive = age > 8 && console.log('you can drive');

// let rest1 = {
//   name: 'bardolina',
//   noOfguests: 0,
// };

// let rest2 = {
//   name: 'lapinoz',
//   owner: 'hatim',
// };

// rest2.noOfguests ||= 10;
// console.log(rest2);
// //nullish opeartor
// rest1.noOfguests ??= 10;
// console.log(rest1);
let array = ['a', 'b', 'c'];
for ([i, j] of array.entries()) {
  console.log(i, j);
}

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, menuIndex) {
    return `you ordre ${this.starterMenu[starterIndex]} of starterMenu & ${this.mainMenu[menuIndex]} of mainmenu`;
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  demo: function ({ categoriesIndex, starterMenuIndex, mainMenuIndex }) {
    console.log(
      `categories:${this.categories[categoriesIndex]},startermenu:${this.starterMenu[starterMenuIndex]},mainmenu:${this.mainMenu[mainMenuIndex]}`
    );
  },
  pasta: function (ing1, ing2, ing3) {
    console.log(`here you pasta with ${ing1},${ing2},${ing3}`);
  },
};

let entries = Object.keys(restaurant.openingHours);
console.log(entries);

let values = Object.values(restaurant.openingHours);
console.log(values);

let keyValues = Object.entries(restaurant.openingHours);

console.log(keyValues);
for (let [key, { open, close }] of keyValues) {
  console.log(key, open, close);
}

// console.log(restaurant?.openingHours?.sat?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (item of days) {
//   const openingtime = restaurant.openingHours[item]?.open ?? 'closed';
//   console.log(openingtime);
// }
// console.log(restaurant.pastas?.('a', 'b', 'c') ?? 'no such method');

//codeing challenge 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//task1
let players1 = game['players'][0];
let players2 = game['players'][1];
// console.log(players1, players2);

//task2
let [gkBayernMunich, ...fieldPlayersBayernMunich] = [...players1];

// console.log(gkBayernMunich, fieldPlayersBayernMunich);
let [gkBorrussiaDortmund, ...fieldPlayersBorrussiaDortmund] = [...players2];
// console.log(gkBorrussiaDortmund, fieldPlayersBorrussiaDortmund);

//task 3
let allPlayers = [...players1, ...players2];
console.log(allPlayers);

//task4
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// task5 Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
//mistaken code as we cant apply code on the obejct
// let [team1, team2, team] = [...game.odds];
// console.log(team1, team2, team3);

// corrcect code using destructing of object

//task 5
let { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//task 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

const printGoals = function (...array) {
  let totalGoals = 0;
  for (let i = 0; i < array.length; i++) {
    totalGoals += 1;
    console.log(array[i]);
  }
  console.log(totalGoals);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

let winner = 'team1';
team1 < team2 || (winner = 'team2');
console.log(winner);

//coding challenge 2

//task 1
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

const score = game.scored.entries();
console.log(score);
for ([index, value] of score) {
  console.log(`Goal ${index + 1}:${value}`);
}

//task 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const odd = Object.entries(game.odds);
console.log(odd);
let sum = 0;
let counter = 0;
for ([index, value] of odd) {
  sum = sum + value;
  counter = counter + 1;
}
console.log('Average=' + sum / counter);

// task 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// rest2.noOfguests ||= 10;
// for ([index, value] of odd) {
//   let teamName = game[index];
//   teamName ||= 'draw';
//   console.log(`odd of victory ${teamName}:${value}`);
// }

// let setVariable = new Set(['developer', 'saf-safai', 'marketing', 'developer']);
// setVariable.add('hr');
// setVariable.delete('saf-safai');
// console.log(setVariable);
// console.log(setVariable.has('developer'));
// let arrays = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// let setsvar = new Set(arrays);
// console.log(setsvar);
// for (i of setsvar) {
//   console.log(i);
// }

// let mapVar = new Map();
// mapVar
//   .set('name', 'hatim')
//   .set(1, 'one')
//   .set(true, 'we are open')
//   .set(false, 'we are close');
// // console.log(mapVar);
// console.log(mapVar.set(192.68, 'float'));
// mapVar.set('open', 9).set('close', 15);
// console.log(mapVar);
// let time = 10;
// console.log(mapVar.get(time < open && time > close));
// mapVar.set([1, 2], 'array');
// console.log(mapVar);
// console.log(mapVar.get([1, 2]));

// let questions = new Map([
//   ['question', 'best programming language in the world'],
//   [1, 'C'],
//   [2, 'java'],
//   ['correct', 2],
//   [true, 'Hurray!!!!'],
//   [false, 'no!!!'],
// ]);
// console.log(questions);

// console.log(questions.get('question'));
// for ([index, value] of questions) {
//   if (typeof index === 'number') {
//     console.log(`${index}.${value}`);
//   }
// }
// // const answer = Number(prompt('enter your answer'));
// // console.log('your answerr:' + answer);

// console.log(questions.get(questions.get('correct') === answer));
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//coding challenge 3

//task 1. Create an array 'events' of the different game events that happened (no duplicates)
let events = [];
for ([i, j] of gameEvents) {
  events.push(j);
}
eventsUnique = new Set(events);
console.log(eventsUnique);

//task 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

//task 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// task 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

for ([times, events] of gameEvents) {
  eventsHalf = times < 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${eventsHalf}] ${times}: ${events}`);
}

const strings = 'hey i am hatim lukmani';
console.log(strings.indexOf('i'));
console.log(strings.lastIndexOf(' '));

console.log(strings.slice(1, 9));
console.log(strings.slice(1, -5));

// const emails = 'hatimlukmani2002@gmail.com';
// console.log(emails.slice(emails.indexOf('@gmail.com')));

// let signUpEmail = 'hatim@gmail.com';
// let signInEmail = ' Hatim@gmail.com ';
// let correctEmail = signInEmail.toLowerCase().trim();
// console.log(correctEmail);

// let stringValues = 'come to boarding door !! come to boarding door';
// stringValues = stringValues.replace(/door/g, 'gate');
// console.log(stringValues);

// const baggageAllowed = function (params) {
//   let paramsLower = params.toLowerCase();
//   if (paramsLower.includes('knife') || paramsLower.includes('gun')) {
//     console.log('call 100');
//   } else {
//     console.log('you can go');
//   }
// };
// baggageAllowed('i carry knife');
// baggageAllowed('i carry banana');
// baggageAllowed('i carry');

// let [firstName, fatherName, lastName] = 'hatim m lukmani'.split(' ');
// console.log(firstName, fatherName, lastName);
// let combinedString = [
//   'MR.',
//   firstName,
//   fatherName.toUpperCase(),
//   lastName,
// ].join(' ');
// console.log(combinedString);

const nameCaptalizer = function (str) {
  const sep = str.split(' ');
  let capArr = [];
  for (let j of sep) {
    j = j.toLowerCase();
    console.log(j[0].toUpperCase());
    capArr.push(j.replace(j[0], j[0].toUpperCase()));
  }
  return capArr.join(' ');
};
console.log(nameCaptalizer('hatim virat'));
