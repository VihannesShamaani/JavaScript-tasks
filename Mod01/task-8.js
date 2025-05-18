// Write a program that prompts the user for the start and end year. The program prints all leap years from the interval given by the user. Printing is done in an unordered list to the HTML document.

function checkIfLeap(year) {
  let leapYear = false;
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      leapYear = true;
    }
  } else if (year % 4 === 0) {
    leapYear = true;
  }
  return leapYear;
}

const yearFirst = parseInt(prompt('Enter the first year.'));
const yearSecond = parseInt(prompt('Enter the second year.'));
let ul = document.querySelector('#years');

for (let i = yearFirst; i <= yearSecond; ++i) {
  let li = document.createElement('li');
  if (checkIfLeap(i)) {
    li.innerText = i;
    ul.appendChild(li);
  }
}