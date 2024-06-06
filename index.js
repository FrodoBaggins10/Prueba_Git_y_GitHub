const boton = document.querySelector('.button');
const container = document.querySelector('.container');

boton.addEventListener('click',function(){
    const tituloAyuda = document.createElement('h2');
    tituloAyuda.innerHTML += "tu Ayuda";
    tituloAyuda.style.textAlign = "center";
    tituloAyuda.style.justifyContent = "center";
    container.appendChild(tituloAyuda);
});