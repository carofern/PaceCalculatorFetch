//Calcular ritmo: divido tiempo total / total de km corridos
let storeElements = localStorage.getItem('elements')
let array = [];

//Spread nose si aplique bien el Spread
let arraySpread = [...array];
console.log(arraySpread);

console.log(localStorage.getItem('elements'));

const buttonReset = document.getElementById('resetButton')
buttonReset.addEventListener('click', () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Reinicio correcto',
        showConfirmButton: false,
        timer: 1500
    })
});


function mostrarUltimos() {
    const container = document.getElementById('ingresos')
    container.innerHTML = '';

    for (const element of array) {
        console.log(element);
        const item = document.createElement('li');
        item.className = "list-item";
        item.textContent = element;
        container.appendChild(item);
    }
    const resultado = [];
    const dividor = array[1];

    array.forEach(function (elemento, indice) {
        resultado[indice] = elemento / dividor;
    });

    let resultUno = console.log(`Corri a ${resultado[0]} min por km`);
}

//Eventos Click
let getData = function () {
    const tiempoTotal = document.getElementById('ttHour').value;
    const distancia = document.getElementById('dist').value;

    //Operador ternario
    //(distancia.trim()) && (tiempoTotal.trim()) ? array.push(tiempoTotal) : alert('Ingresa un dato')

    if (distancia.trim() && tiempoTotal.trim()) {
        array.push(tiempoTotal);
        array.push(distancia);
        document.getElementById('dist').value = '';
        document.getElementById('ttHour').value = '';
        mostrarUltimos();
       // getElementById('result').innerHTML = resultUno
        localStorage.setItem('elements', JSON.stringify(array))
    } else {
        alert('Ingresa un dato')
    }
}

//Eventos Click
const button = document.getElementById('runButton')
button.addEventListener('click', getData);


//Fetch--
const URL = 'https://swapi.dev/api/planets/'
fetch(URL)
    .then( respuesta => respuesta.json() )
    .then( datos => {
        datos.results.forEach(e => {
            console.log(e.name);
            //agregarAlDom(e.name)
        });
    })
