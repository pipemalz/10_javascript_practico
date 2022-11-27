const inputNum1 = document.querySelector('#num1');
const inputNum2 = document.querySelector('#num2');
const btnCalcular = document.querySelector('#btn-calcular');
const pResultado = document.querySelector('.resultado');
const form = document.querySelector('.form');
const body = document.querySelector('body');
const sectionArray = document.querySelector('.section.section__arrays');
const btnMostrarArrays = document.querySelector('#btn-mostrarArray');

btnCalcular.addEventListener('click', evento => console.log(evento));
form.addEventListener('submit', suma);
document.addEventListener('contextmenu', e => {
    e.preventDefault();
    alert('accion prohibida!');
});
inputNum1.addEventListener('mouseenter', () => {
    body.style.backgroundColor = '#333';
});
inputNum1.addEventListener('mouseleave', () => {
    body.style.backgroundColor = '#FFF';
});
btnMostrarArrays.addEventListener('click', mostrarCelulares);

function suma(evento){
    evento.preventDefault();
    console.log(evento);
    const num1 = parseInt(inputNum1.value);
    const num2 = parseInt(inputNum2.value);
    if(!num1 == '' && !num2 == ''){
        pResultado.innerText = 'Resultado: ' + (num1 + num2);
    }else{
        pResultado.innerText = 'Por favor rellena ambos campos';
    }
}


function mostrarCelulares(){
    const array = [
        {
            marca: 'Xiaomi',
            modelo: 'Redmi 12 plus',
            costo: 3000000,
            so: 'Android'
        },
        {
            marca: 'Apple',
            modelo: 'iPhone 14 Pro',
            costo: 5000000,
            so: 'iOs'
        },
        {
            marca: 'Samsung',
            modelo: 'Galaxy S22 Ultra',
            costo: 4000000,
            so: 'Android'
        },
        {
            marca: 'Motorola',
            modelo: 'Moto G Power',
            costo: 2500000,
            so: 'Android'
        },
        {
            marca: 'Google',
            modelo: 'Pixel 7',
            costo: 1800000,
            so: 'Android'
        },
        {
            marca: 'Apple',
            modelo: 'iPhone SE (2022)',
            costo: 2900000,
            so: 'iOs'
        }
    ];
    const map = array.map(celular => celular.marca); //Devuelve array con los valores de la propiedad indicada
    const filter = array.filter(celular => celular.costo < 3000000);
    const reduce =  array.reduce((acc, item) => acc + item.costo, 0); //devuelve la suma de los valores indicados, acc = acumulador, item = objeto
    const find = array.find(celular => celular.marca == 'Apple'); //devuelve la primera coincidencia que encuentra
    array.forEach(celular => { //realiza una operacion que le indiquemos con los valores del array y sus propiedades
        if(celular.costo > 4500000){
            celular['gama'] = 'alta';
        }else if(celular.costo >= 3000000){
            celular['gama'] = 'media';
        }else if(celular.costo < 3000000){
            celular['gama'] = 'baja';
        }
    });
    const sort = array.sort((a,b) => a.costo - b.costo); // ordena de menor a mayor los valores que le pasemos

    let arrayOriginal = `<table>
    <tr>
        <th>Marca</th>
        <th>Modelo</th>
        <th>Costo</th>
        <th>S.O</th>
    </tr>`;
    array.forEach(celular => {
        arrayOriginal += `
        <tr>
            <td>${celular.marca}</td>
            <td>${celular.modelo}</td>
            <td>${celular.costo}</td>
            <td>${celular.so}</td>
        </tr>`
    });
    arrayOriginal += `</table>`;


    let arrayFilter = `<table>
    <tr>
        <th>Marca</th>
        <th>Modelo</th>
        <th>Costo</th>
        <th>S.O</th>
    </tr>`;
    filter.forEach(celular => {
        arrayFilter += `
        <tr>
            <td>${celular.marca}</td>
            <td>${celular.modelo}</td>
            <td>${celular.costo}</td>
            <td>${celular.so}</td>
        </tr>`
    });
    arrayFilter += `</table>`

    let arrayFind = `<table>
        <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Costo</th>
            <th>S.O</th>
        </tr>
        <tr>
            <td>${find.marca}</td>
            <td>${find.modelo}</td>
            <td>${find.costo}</td>
            <td>${find.so}</td>
            </tr>
    </table>`

    let arrayForeach = `<table>
    <tr>
        <th>Marca</th>
        <th>Modelo</th>
        <th>Costo</th>
        <th>S.O</th>
        <th>Gama</th>
    </tr>`;
    array.forEach(celular => {
        arrayForeach += `
        <tr>
            <td>${celular.marca}</td>
            <td>${celular.modelo}</td>
            <td>${celular.costo}</td>
            <td>${celular.so}</td>
            <td>${celular.gama}</td>
        </tr>`
    });
    arrayForeach += `</table>`;    

    let arraySort = `<table>
    <tr>
        <th>Marca</th>
        <th>Modelo</th>
        <th>Costo</th>
        <th>S.O</th>
        <th>Gama</th>
    </tr>`;
    sort.forEach(celular => {
        arraySort += `
        <tr>
            <td>${celular.marca}</td>
            <td>${celular.modelo}</td>
            <td>${celular.costo}</td>
            <td>${celular.so}</td>
            <td>${celular.gama}</td>
        </tr>`
    });
    arraySort += `</table>`;  

    const text = `
    <h3> Array original: </h3>
    ${arrayOriginal}

    <h3>Map:</h3> 
    <p>Devuelve array con los valores de la propiedad indicada:</p> <code>const map = array.map(celular => celular.marca); </code>
    <p>Resultado: ${map}</p>

    <h3>Filter:</h3> <p>devuelve array con los objetos que tengan la propiedad con el valor indicado</p> <code> const filter = array.filter(celular => celular.costo < 3000000);</code>
    <p>Resultado: ${arrayFilter}</p>

    <h3>Reduce:</h3> <p>devuelve la suma de los valores indicados, acc = acumulador, item = objeto</p> <code> const reduce =  array.reduce((acc, item) => acc + item.costo, 0);</code> 
    <p>Resultado: ${reduce}</p>

    <h3>Find:</h3> <p>devuelve la primera coincidencia que encuentra</p> <code>const find = array.find(celular => celular.marca == 'Apple'); </code> 
    <p>Resultado: ${arrayFind}</p>

    <h3>ForEach:</h3> <p>realiza una operacion que le indiquemos con los valores del array y sus propiedades</p>
    <code>
        array.forEach(celular => { <br>
            if(celular.costo > 4500000){ <br>
                celular['gama'] = 'alta'; <br>
            }else if(celular.costo >= 3000000){ <br>
                celular['gama'] = 'media'; <br>
            }else if(celular.costo < 3000000){ <br>
                celular['gama'] = 'baja'; <br>
            }
        });
    </code>
    <p>Resultado:${arrayForeach}</p>

    <h3>Sort:</h3> <p>ordena de menor a mayor los valores que le pasemos</p> <code>const sort = array.sort((a,b) => a.costo - b.costo);</code> 
    <p>Resultado: ${arraySort}</p>`;

    sectionArray.innerHTML += text;
} 
