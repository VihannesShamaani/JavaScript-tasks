// Write a program that asks for the names of six dogs. The program prints dog names to unordered list <ul> in reverse alphabetical order.

dogs = [];
let ul = document.querySelector('#dogs');

for (let i = 0; i < 6; i++) {
  let dog = prompt('dog');
  dogs.push(dog);
}

dogs.sort();
dogs.reverse();

for (let i = 0; i < dogs.length; i++) {
  let li = document.createElement('li');
  li.innerText = dogs[i];
  ul.appendChild(li);
}