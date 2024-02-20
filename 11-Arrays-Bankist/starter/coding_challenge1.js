// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
*/
const checkDogs = function (dogsJulia, dogsKate) {
  let dogsJuliaCopy = dogsJulia;
  dogsJuliaCopy.splice(0);
  dogsJuliaCopy.splice(-2, 2);
  let juliaData = dogsJuliaCopy;
  let kateData = dogsKate;
  let dogsAll = juliaData.concat(kateData);
  dogsAll.forEach((element, index) => {
    let ageCat =
      element >= 3
        ? `Dog number ${index} is an adult,and is ${element} years old`
        : `Dog number ${index} is still a puppy 🐶`;
    console.log(ageCat);
  });
};
checkDogs([3, 4, 5, 1, 2], [1, 3, 4, 5, 3]);
console.log('hey');
