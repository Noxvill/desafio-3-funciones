let color = "Transparente"

// Evento para escuchar las teclas presionadas.

document.addEventListener("keydown", function(event) {
    // Comprobamos si la tecla presionada es "A" o "a"
    if (event.key === "a" || event.key === "A") {
    // Si es "A" o "a", llamamos a la función agregarElemento

let colora = document.getElementById("key")
color= 'pink'
pintar(colora, color)
colorvar = "Rosado"
alert(colorvar)
  
    } else if (event.key === "s" || event.key === "S") {
    // Si es "D" o "d", llamamos a la función eliminarElemento
let colora = document.getElementById("key")
color= 'orange'
pintar(colora, color)
colorvar = "Naranjo"
alert(colorvar)
}

    else if (event.key === "d" || event.key === "D") {
        // Si es "D" o "d", llamamos a la función eliminarElemento

        let colora = document.getElementById("key")
        color= 'skyblue'
        pintar(colora, color)
        colorvar = "Celeste"
        alert(colorvar)

    }});

// Función pinntar

function pintar(colora, color) {
    colora.style.backgroundColor = color
    
}

    // Función crear elemento

    function agregarElemento() {
        // Obtenemos el elemento contenedor por su ID
        contenedor = document.getElementById("contenedor");
        // Creamos un nuevo elemento <div>
        nuevoElemento = document.createElement("div");
        // Asignamos un texto al nuevo elemento
        nuevoElemento.textContent = "Elemento agregado";
        // Agregamos el nuevo elemento al contenedor
        contenedor.appendChild(nuevoElemento);
        }

    // Función eliminar elemento    
    function eliminarElemento() {
        contenedor = document.getElementById("contenedor");
        // Obtenemos todos los elementos <div> dentro del contenedor
        elementos = contenedor.querySelectorAll("div");
        // Verificamos si hay elementos para eliminar
        if (elementos.length > 0) {
        // Eliminamos el último elemento agregado
        contenedor.removeChild(elementos[elementos.length - 1]);
        }
        }