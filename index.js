const boton = document.querySelector('.button');
const container = document.querySelector('.container');

let click = false;
boton.addEventListener('click', function () {
    if (click == false) {
        const ayuda = document.createElement('img');
        ayuda.setAttribute("src","imagenes/savitaIA.jpeg")
        // tituloAyuda.style.textAlign = "center";
        // tituloAyuda.style.justifyContent = "center";
        container.appendChild(ayuda);
        click = true;
    }
});