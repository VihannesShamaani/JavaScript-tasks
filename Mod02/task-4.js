// Write a program that asks the user for numbers until he gives zero. The given numbers are printed in the console from the largest to the smallest.

const numbers = [];
let userNum = 1;

while (userNum !== 0) {
  userNum = parseInt(prompt('Feed me a number.'));
  numbers.push(userNum);
}

numbers.sort(function(a, b){return b - a});
console.log(numbers);