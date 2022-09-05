'use strict';
//Operadores arithmetic

let num1;
let num2;
num1= 14;
num2= 23;
let respuesta;
//Suma +, resta -, multiplicacion *, division/, modulo &;
console.log("Suma:",num1+num2)
console.log("Resta:",num1-num2)
console.log("Multiplicacion:",num1*num2)
console.log("Divison:",num1/num2)
console.log("Modulo:",num1%num2)

//Operadores logicos
/*
> Mayor
>= Mator igual
< Menor
<= Menor igual
!= Diferente / No igual
!== No igual estricto
== igual / Comparacion
=== Comparacion estricto
(Estricto compara tambien el tipo de dato)

&&  Y / and
||  O / or
*/

let num3= '12';
let num4= 12;

let response = (num3 == num4);
response = (num3 === num4) || (num4 % 3 === 0);
console.log(response);
