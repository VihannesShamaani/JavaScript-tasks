// Add HTML by using createElement() and appenChild mehtods.

let ul = document.querySelector('#target');

let li = document.createElement('li');
li.innerHTML = 'First item';
ul.appendChild(li);

li = document.createElement('li');
li.innerHTML = '<li class="my-item"> Second item </li>';
ul.appendChild(li);

li = document.createElement('li');
li.innerHTML = 'Third item';
ul.appendChild(li);