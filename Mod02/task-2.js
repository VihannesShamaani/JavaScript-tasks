// Write a program that asks the user for the number of participants. After this, the program asks for the names of all participants. Finally, the program prints the names of the participants on the web page in an ordered list (<ol>) in alphabetical order.

const names = [];
let ol = document.querySelector('#list');

nameAmount = parseInt(prompt('How many names?'))

for (let i = 0; i < nameAmount; i++) {
  let name = prompt('Give me a name.');
  names.push(name);
}

names.sort()

for (let i = 0; i < names.length; i++) {
  let li = document.createElement('li');
  li.innerText = names[i];
  ol.appendChild(li);
}