
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim(); // Eliminar espacios extra

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Evitar nombres duplicados
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Actualizar la lista en pantalla
    actualizarLista();

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizarla

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;

        // Botón para eliminar un amigo de la lista
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        listaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Eliminar el amigo del array
    actualizarLista(); // Actualizar la interfaz
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos 2 amigos para realizar el sorteo.");
        return;
    }

    // Seleccionar un nombre aleatorio
    let indiceSorteo = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteo];

    // Mostrar el resultado en la página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}
