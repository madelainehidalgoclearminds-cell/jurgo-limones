function generarAleatorio(min,max){
    let ramdom=Math.random()
    let numero=ramdom*(max-min)
    let  numeroEntero=parseInt(numero)
    numeroEntero=numeroEntero+min
    return numeroEntero

}