// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creamos la lista donde iran los nombres de los amigos
let listaAmigos = [];
// Seleccionamos el elemento input
let elementoInput = document.getElementById('amigo');
let elementoLista = document.getElementById('listaAmigos');
let elementoResultado =  document.getElementById('resultado');

function agregarAmigo(){
    let nombreAmigo = elementoInput.value
    if (nombreAmigo == ''){
        alert('No hay nombre para añadir, ingrese uno porfavor.');
    } else {
        listaAmigos.push(nombreAmigo);
        actualizarListaAmigos();
        //alert(`El amigo ${nombreAmigo} fue añadido exitosamente.`);
        elementoInput.value = '';
        //Prueba de que se estan agregando correctamente
        console.log(listaAmigos);
    }
    elementoInput.focus();
    elementoResultado.innerHTML = '';
}

function actualizarListaAmigos(){
    elementoLista.innerHTML += `<li>${listaAmigos[listaAmigos.length - 1]}</li>`;
}

function sortearAmigo(){
    elementoLista.innerHTML = '';
    if (listaAmigos.length == 0){
        alert("La lista de amigos esta vacía, añada a sus amigos para el sorteo.");
    } else {
        let indiceRandom = Math.floor(Math.random() * listaAmigos.length);
        let nombreGanador = listaAmigos[indiceRandom];
        elementoResultado.innerHTML = `El amigo secreto sorteado es: ${nombreGanador}`;
    }
}
