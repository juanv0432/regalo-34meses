// 1. Guardamos los elementos en variables
const musica = document.getElementById("nuestra-cancion");
const boton = document.getElementById("botonMusica");

// 2. Escuchamos cuando alguien haga "click" en el botón
boton.addEventListener("click", () => {
    // 3. Condición: ¿La música está pausada?
    if (musica.paused) {
        musica.play(); // Reproducir
        boton.innerText = "Pausar Música ⏸️";
        boton.style.backgroundColor = "#ff4d6d"; // Cambia color al estar activo
    } else {
        musica.pause(); // Pausar
        boton.innerText = "Reproducir Música 🎵";
        boton.style.backgroundColor = "#ff85a1";
    }
});