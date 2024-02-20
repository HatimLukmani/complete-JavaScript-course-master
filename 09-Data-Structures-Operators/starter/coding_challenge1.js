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
