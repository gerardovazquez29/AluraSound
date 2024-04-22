
function reproductor (idAudio) { 
    document.querySelector(idAudio).play();
};

const teclado = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < teclado.length ; contador++) {
    const tecla = teclado[contador];
    const instrumento = tecla.classList[1];
    const idAaudio = `#sonido_${instrumento}`
    console.log(idAaudio);
       
    tecla.onclick = function (){
        reproductor(idAaudio);
    };
    tecla.onkeydown = function (evento) {
        
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('activa');
        }
        console.log(evento.code === 'Space' || evento.code === 'Enter');
        
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('activa');  
    } 
}