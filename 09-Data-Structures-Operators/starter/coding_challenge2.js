// /coding challenge 2

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
rest2.noOfguests ||= 10;
for ([index, value] of odd) {
  let teamName = game[index];
  teamName ||= 'draw';
  console.log(`odd of victory ${teamName}:${value}`);
}
