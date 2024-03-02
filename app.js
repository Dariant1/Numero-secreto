//let titulo = document.querySelector('h1');
//titulo.innerHTML ='Juego del número secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML ='Indica un numero del 1 al 10';
let numeroSecreto=0;//los valores de numeroSecreto e intentos se asignan en la funcion condicionesIniciales
let intentos=0;
let listaNumeroSecretos=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
}

function generarNumeroSecreto() {
    //return Math.floor(Math.random() * 10) + 1;
    let numeroGenerado=Math.floor(Math.random() * numeroMaximo) + 1;
    //si ya sorteamos todos los numeros
    if(listaNumeroSecretos.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{

    if(listaNumeroSecretos.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumeroSecretos.push(numeroGenerado);
        return numeroGenerado;
    }
}   
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto === numeroDeUsuario);*/
    intentos++
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${(intentos ===1)?'intento':'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intento').setAttribute('disabled','true');

    }else if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor');
    }else if(numeroDeUsuario<numeroSecreto){
        asignarTextoElemento('p','El numero secreto es mayor');
    }
        limpiarCaja();
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}
function condicionesIniciales(){
      //indicar mensaje de intervalo de numeros
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
        //generar el numero aleatorio
    numeroSecreto=generarNumeroSecreto()
        //indicar el numero de intentos
    intentos=0
    console.log(numeroSecreto);
    console.log(listaNumeroSecretos)

}

function reiniciarJuego(){
    //primero debemos limpiar la caja
    limpiarCaja();
    //setear el juego en las condiciones iniciales
    condicionesIniciales();
    //deshabilitar el boton del juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
    document.getElementById('intento').removeAttribute('disabled');

}
condicionesIniciales()

