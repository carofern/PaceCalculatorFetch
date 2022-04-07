//Calcular ritmo: divido tiempo total / total de km corridos
const storeElements = localStorage.getItem('elements')
let array = [];


//Spread nose si aplique bien el Spread
let arraySpread = [...array];
console.log(arraySpread);

console.log(localStorage.getItem('elements'));

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
        localStorage.setItem('elements', JSON.stringify(array))
    } else {
        alert('Ingresa un dato')
    }
}


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

    let resultadoFinal = console.log(`Corri a ${resultado[0]} min por km`);
}

//Eventos Click
const button = document.querySelector("#runButton")
button.addEventListener('click', getData);

//En construccion
// const buttonReset = document.querySelector("#resetButton");
// buttonReset.addEventListener('click', clearAll);

// function clearAll() {
    
// A RESOLVER, IMPRIMIR 




