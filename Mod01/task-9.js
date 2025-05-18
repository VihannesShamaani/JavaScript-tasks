// Write a program that asks the user for an integer and tells if the number is a prime number.

const userNum = parseInt(prompt('Give me a number.'));
let isPrime = true;

if (userNum > 1) {
  for (let i = 2; i < userNum; i++) {
    if (userNum % i === 0) {
      isPrime = false;
    }
  }
}

if (isPrime) {
  document.querySelector('#prime').innerHTML = userNum + ' is a prime number.';
} else {
  document.querySelector('#prime').innerHTML = userNum + ' is not a prime number.';
}
