// Write a program that prints the text "Should I calculate the square root?" in a confirmation window. If the user selects OK, the program asks for the number and calculates and prints its square root to the HTML document. If the user selects Cancel, the program prints the text "The square root is not calculated." to the HTML document

const startQuery = confirm('Should I calculate the square root?');

if (startQuery === true) {
  const squareNum = parseInt(prompt('Give me a number.'));
  if (squareNum < 0) {
    document.querySelector('#square').innerHTML = 'The square root of a negative number is not defined';
  } else {
    const squareRoot = Math.sqrt(squareNum);
    document.querySelector('#square').innerHTML = 'Square root of ' + squareNum + ' is ' + squareRoot;
  }
} else {
  document.querySelector('#square').innerHTML = 'The square root is not calculated.';
}