//In the Harry Potter children's books, the sorting hat assigns a new student at Hogwarts School of Witchcraft and Wizardry to one of the four classes, which are Gryffindor, Slytherin, Hufflepuff, and Ravenclaw. Write an electronic sorting hat that asks for a student's name and draws a room for him. If you enter Anna as the name, for example, the program prints to the HTML document "Anna, you are Ravenclaw."

const name = prompt('What is your name?');

houseNum = Math.floor(Math.random() * 4);

if (houseNum === 0) {
  document.querySelector('#house').innerHTML = name + ', you are... Gryffindor!';
} else if (houseNum === 1) {
  document.querySelector('#house').innerHTML = name + ', you are... Slytherin!';
} else if (houseNum === 2) {
  document.querySelector('#house').innerHTML = name + ', you are... Hufflepuff!'
} else {
  document.querySelector('#house').innerHTML = name + ', you are... Ravenclaw!';
}