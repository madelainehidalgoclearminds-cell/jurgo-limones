let canvas=document.getElementById("areaJuego")
let cxt=canvas.getContext("2d")

const ALTURASUELO=40
const ALTURAPERSONAJE=60
const ANCHOPERSONAJE=50

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
    cxt.fillRect(canvas.width/2,canvas.height-(ALTURASUELO+ALTURAPERSONAJE),ANCHOPERSONAJE,ALTURAPERSONAJE)
}

