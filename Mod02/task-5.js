// Write a program that prompts the user for numbers. When the user enters one of the numbers he previously entered, the program will announce that the number has already been given and stops its operation and then prints all the given numbers to the console in ascending order.

const numbers = [];
let loop = true;

while (loop) {
  let userNum = parseInt(prompt('Feed me a number.'));
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === userNum) {
      alert('Number already entered');
      loop = false;
    }
  }
  if (loop) {
    numbers.push(userNum);
  }
}

numbers.sort(function(a, b){return a - b})
console.log(numbers)