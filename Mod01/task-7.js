// Write a program that rolls user defined number of dice and displays the sum of the results of the dice rolls.(2p)
//
//     First, program asks the user for the number of dice rolls.
//     Then the program throws a die as many times as the user defined.
//     Print the sum of the results in the console or in the HTML document.

let diceAmount, rollSum;
diceAmount = parseInt(prompt('How many dice?'));
rollSum = 0;

for (diceAmount; diceAmount > 0; diceAmount--) {
  let roll = Math.ceil(Math.random() * 6);
  console.log('Rolled ' + roll);
  rollSum = rollSum + roll;
}

console.log('Sum of dice ' + rollSum);