// Write a program that asks the user to enter a year and notifies the user whether the input year is a leap year. A year is a leap year if it is divisible by four. However, years divisible by 100 are leap years only if they are also divisible by 400. Print the result on the HTML document.

const yearNum = parseInt(prompt('Give me year!'));
let leapYear = false;

if (yearNum % 100 === 0) {
  if (yearNum % 400 === 0) {
    leapYear = true;
  }
} else if (yearNum % 4 === 0) {
  leapYear = true;
}

if (leapYear) {
  document.querySelector('#year').innerHTML = yearNum + ' is a leap year';
} else {
  document.querySelector('#year').innerHTML = yearNum + ' is not a leap year';
}