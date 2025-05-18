// Write a program that prompts for user's name and then greets the user. Print the result to the HTML document: Hello, Name!

const name = prompt('What is thy name?');
document.querySelector('#greeting').innerHTML = 'Greetings ' + name;