//Almacenar Lista de amigos
let listaAmigos =[];

// Añadir amigos
function agregarAmigo() {

//Capturar el valor de entrada
let NombreDeAmigo = document.getElementById('amigo').value.trim(); // Capturar el campo de entrada

//No permitir Nombres vacios
if (NombreDeAmigo === ''){
    alert('Por favor, inserte un nombre.');
    return;
}

if (listaAmigos.includes(NombreDeAmigo)) {
    alert('Este nombre ya fue agregado.');
    return;
}

// Agregar el nombre a la lista de amigos
listaAmigos.push(NombreDeAmigo);
console.log("Lista de amigos:", listaAmigos);

//Actualizar la lista en pantalla+
actualizarListaAmigos();

 // Limpiar el campo de entrada
 document.getElementById('amigo').value = '';

}
// Función para actualizar la lista en la interfaz
function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de actualizar
// Recorrer la lista de amigos y agregar cada uno a la interfaz
    listaAmigos.forEach((NombreDeAmigo) => {
        let li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = NombreDeAmigo; //Asignar el nombre del amigo
        lista.appendChild(li);
    });
}
// Función para seleccionar aleatoriamente un amigo de la lista
function sortearAmigo(){
    // Validar que haya amigos en la lista
    if (listaAmigos.length < 2){
        alert("Debe haber al menos 2 participantes para el sorteo.");
        return;
    }
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = listaAmigos[indiceAleatorio];

     // Mostrar el resultado en el HTML
     let resultadoElemento = document.getElementById("resultado");
     resultadoElemento.innerHTML = `<li>${amigoSorteado} ha sido seleccionado.</li>`
}