let canvas=document.getElementById("areaJuego")
let cxt=canvas.getContext("2d")

const ALTURASUELO=40
const ALTURAPERSONAJE=60
const ANCHOPERSONAJE=50
let personajeX=canvas.width/2

function dibujarIniciar(){
    dibujarPersonaje()
    dibujarSuelo()
}
function dibujarSuelo(){
    cxt.fillStyle="green"
    cxt.fillRect(0,canvas.height-ALTURASUELO,canvas.width,ALTURASUELO)
}

function dibujarPersonaje(){
    cxt.fillStyle="red"
    cxt.fillRect(personajeX,canvas.height-(ALTURASUELO+ALTURAPERSONAJE),ANCHOPERSONAJE,ALTURAPERSONAJE)
}
function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla()
}
function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla()
}
function actualizarPantalla(){
    limpiarCanvas()
    dibujarSuelo()
    dibujarPersonaje()
}
function limpiarCanvas(){
    cxt.clearRect(0,0,canvas.width,canvas.height)
}
