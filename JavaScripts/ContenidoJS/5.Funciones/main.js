'use strict';
//Funcion clasica

function printinCad(cadena="No paso paramtero"){
    //template string
    console.log(`Esto es una prueba de cadena ${cadena}`);
}

//Invicacion

printinCad("Estoy pasando parametro");

//Funcion tipo flecha

const operacion= (num1,num2) => {
    let result = Math.pow(num1,num2);
    return result;
}

console.log(operacion(3,2));