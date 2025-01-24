// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creamos la lista donde irán los nombres de los amigos
let listaAmigos = [];

// Seleccionamos los elementos del DOM
let elementoInput = document.getElementById('amigo');
let elementoLista = document.getElementById('listaAmigos');
let elementoResultado =  document.getElementById('resultado');

// Función para agregar un amigo
function agregarAmigo(){
    let nombreAmigo = elementoInput.value.trim() // Elimina espacios en blanco
    if (nombreAmigo == ''){
        alert('No hay nombre para añadir, ingrese uno porfavor.');
    } else {
        listaAmigos.push(nombreAmigo);
        actualizarListaAmigos();
        elementoInput.value = ''; // Limpia el input
    }
    elementoInput.focus(); // Coloca el foco nuevamente en el input
    elementoResultado.innerHTML = ''; // Limpia el resultado anterior
}

// Función para actualizar la lista en el DOM
function actualizarListaAmigos(){
    elementoLista.innerHTML = ''; // Limpia la lista completa
    listaAmigos.forEach((amigo) => {
        elementoLista.innerHTML += `<li>${amigo}</li>`;
    });
}

// Función para realizar el sorteo
function sortearAmigo(){
    elementoLista.innerHTML = ''; // Limpia la lista completa
    if (listaAmigos.length == 0){
        alert("La lista de amigos está vacía. Añada amigos antes de realizar el sorteo.");
    } else {
        let indiceRandom = Math.floor(Math.random() * listaAmigos.length);
        let nombreGanador = listaAmigos[indiceRandom];
        elementoResultado.innerHTML = `🎉 El amigo secreto sorteado es: ${nombreGanador}`;
    }
}
