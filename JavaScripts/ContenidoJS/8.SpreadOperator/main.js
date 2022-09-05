'use strict';
/** SO ... Operador de propagacion*/


let myArray1 = [2,4,6,8,true,3.56,'Maria',800,'2'];
let myArray2 = new Array('a','e','i','o','u'); //new objetos

myArray1.push(300,677);

let result = myArray1.concat(myArray2);
let result2 = [...myArray1,...myArray2];
console.log(...Array1);

function print(parm1, parm2=0, parm3=0){
    console.log(`Esto es una impresion de parametros: ${parm1} ${parm2} ${parm3}`);
}

print("Felix","Ruiz",22);