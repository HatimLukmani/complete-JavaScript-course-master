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
