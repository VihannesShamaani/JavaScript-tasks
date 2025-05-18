// Write a program that prompts for three integers. The program prints the sum, product and average of the numbers to the HTML document.

let integer1, integer2, integer3, numberSum, numberProduct, numberAverage;
integer1 = parseInt(prompt('Feed me a number.'));
integer2 = parseInt(prompt('Feed me a number!'));
integer3 = parseInt(prompt('Feed me a number!!!'));

numberSum = integer1 + integer2 + integer3;
numberProduct = integer1 * integer2 * integer3;
numberAverage = numberSum / 3;

document.querySelector('#sum').innerHTML = 'Sum is ' + numberSum;
document.querySelector('#product').innerHTML = 'Product is ' + numberProduct;
document.querySelector('#average').innerHTML = 'Average is ' + numberAverage;