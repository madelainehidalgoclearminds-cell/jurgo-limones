let canvas=document.getElementById("areaJuego")
let cxt=canvas.getContext("2d")

const ALTURASUELO=40
const ALTURAPERSONAJE=60
const ANCHOPERSONAJE=50
const ANCHOLIMON=20
const ALTURALIMON=20
let personajeX=canvas.width/2
let limonX=canvas.width/2;
let limonY=0;
let personajeY=canvas.height-(ALTURASUELO+ALTURAPERSONAJE)
let puntaje=0
let vidas=3
let velocidadCaida=200
function dibujarIniciar(){
    setInterval(bajarlimon,velocidadCaida)
    dibujarPersonaje()
    dibujarSuelo()
    aparecerLimon()
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
    dibujarlimon()
}
function limpiarCanvas(){
    cxt.clearRect(0,0,canvas.width,canvas.height)
}
function dibujarlimon(){
    cxt.fillStyle="yellow"
    cxt.fillRect(limonX,limonY,ANCHOLIMON,ALTURALIMON)

}
function bajarlimon(){
    limonY=limonY+10
    dibujarlimon()
    detectarAtrapado()
    actualizarPantalla()
    detectarPiso()
}
function detectarAtrapado(){
    if(limonX+ANCHOLIMON > personajeX && limonX < personajeX+ANCHOPERSONAJE && limonY+ALTURALIMON > personajeY && limonY < personajeY+ALTURAPERSONAJE){
        
        aparecerLimon()
        puntaje=puntaje+1
        mostrarenSpam("txtPuntaje",puntaje)
        
    }
    
}
function aparecerLimon(){
    limonX=generarAleatorio(0,canvas.width-ANCHOLIMON)
    limonY=0
    actualizarPantalla()
}

function detectarPiso(){
    if (limonY + ALTURALIMON == canvas.height-ALTURASUELO){
        aparecerLimon();
        vidas=vidas-1
        mostrarenSpam("txtvidas",vidas)
    
        
    }if(vidas==0){
        alert("game OVER")
    }
}