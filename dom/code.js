const li = document.querySelectorAll('main header ul > li'); // querySelectorAll devuelve un array
li.forEach(li => li.style.display = 'inline-block');
const ul = document.querySelector('ul'); // querySelector devuelve el primer elemento encontrado
ul.style.display = 'flex';
ul.style.justifyContent = 'space-between';
const p = document.querySelector('p'); //devuelve el elemento que tenga el id
const input = document.querySelector('input[type=text]');

const h1 = document.querySelector('#titulo');
h1.innerHTML = '<br>Patito<br>'; // texto que interpreta html
h1.innerText += '<br> hola <br>'; //texto plano

const atributo = p.getAttribute('class');
p.setAttribute('id','lorem');
p.setAttribute('class', 'parrafin');


p.classList.add('negro', 'fondoblanco'); //agrega valores al atributo class del elemento
const clasesP = p.classList //devuelve array con los valores del atributos class del elemento
clasesP.forEach(clase => p.innerHTML += `<li> ${clase} </li>`);
p.classList.remove('negro'); //elimina un valor al altributo class del elemento
p.classList.toggle('negro'); //agrega un nuevo valor si no existe y si existe lo elimina
p.classList.contains('fondoblanco'); //devuelve true o false dependiendo si el valor existe

input.placeholder = 'Escribe tu texto'; //cambiar placeholder de un input

const img = document.createElement('img'); //crea un elemento html
img.setAttribute('id', 'imagen');
img.classList.add('img');
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Pulsar_schematic.svg/480px-Pulsar_schematic.svg.png');
// img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Pulsar_schematic.svg/480px-Pulsar_schematic.svg.png';

// p.innerHTML += img; 
// p.append(img);
p.appendChild(img);