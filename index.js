const boton = document.querySelector('.button');
const container = document.querySelector('.container');

let click = false;
boton.addEventListener('click', function () {
    if (click == false) {
        const tituloAyuda = document.createElement('h2');
        tituloAyuda.innerHTML += "tu Ayuda";
        tituloAyuda.style.textAlign = "center";
        tituloAyuda.style.justifyContent = "center";
        container.appendChild(tituloAyuda);
        click = true;
    }
});