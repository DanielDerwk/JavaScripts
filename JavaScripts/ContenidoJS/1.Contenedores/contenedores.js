'use strict';
/**
 * Contenedores 


var var1 = 23; //ambito global
let var2 =12; //ambito local
const IVA_1 = 19;
var var1 = "Hola mundo";
//let var2 =23; (esta mal)
console.log(var1);
if(true){
    var var1= false;
}
console.log(var1,var2);
 */

let numero1;
let numero2;
let suma;
suma=0;
numero1=parseFloat(prompt("Introduzca un numero"));
numero2=prompt("Introduzca un numero");
suma = numero1 + parseFloat (numero2);
console.info("la suma es: "+suma);