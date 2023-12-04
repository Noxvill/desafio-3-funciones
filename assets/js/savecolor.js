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

    }

    else if (event.key === "q" || event.key === "Q") {
        // Si es "D" o "d", llamamos a la función eliminarElemento

        let colora = document.getElementById("key")
        color= 'purple'
        colorvar = "Morado"
        alert(colorvar)
        createNewDiv(color)




    }

    else if (event.key === "w" || event.key === "W") {
        // Si es "D" o "d", llamamos a la función eliminarElemento

        let colora = document.getElementById("key")
        color= 'gray'
        colorvar = "Gris"
        alert(colorvar)
        createNewDiv(color)

    }
   else if (event.key === "e" || event.key === "E") {
        // Si es "D" o "d", llamamos a la función eliminarElemento

        let colora = document.getElementById("key")
        color= 'Brown'
        colorvar = "Café"
        alert(colorvar)
        createNewDiv(color)




   }

    }



);

// Función pinntar

function pintar(colora, color) {
    colora.style.backgroundColor = color
    
}

// Función agregar elemento div

function createNewDiv(color) {
    const newDiv = document.createElement("div");
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.margin = "50px";
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
}