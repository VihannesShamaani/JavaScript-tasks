// Write a program that prompts the user for five numbers and prints them in the reverse order they were entered. Print the result to the console.

const numList = [];

for (let i = 0; i < 5; i++) {
  numList[i] = parseInt(prompt('Give me a number.'));
}

for (let i = numList.length -1; i >= 0; i--) {
  console.log(numList[i]);
}