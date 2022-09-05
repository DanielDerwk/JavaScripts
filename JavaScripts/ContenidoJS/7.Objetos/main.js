'use strict';

//objeto literal de JS
//nombre de las clases en mayuscula y ese se dedica la etiqueta class
//encapsulacion modificadores de acceso (public, private, protected)
//polimorfismo 1 mismo metodos diferentes formas
//pilares (abstraccion)(esncapsulamiento)(polimorfismo)(herencia)

let myObject = {
    nombre: 'Felix',
    apellidos : 'Ruiz',
    edad: 18,
    genero: 'masculino',

}
console.log(myObject.apellidos);
myObject.apellidos = "Sosa";
console.log(myObject);
//Iterar objeto

Object.entries(myObject).forEach((e)=>console.log(e));
Object.entries(myObject).forEach(([key,value])=>console.log(key,value));
Object.keys(myObject).forEach((key)=>console.log(key));
Object.values(myObject).forEach((key)=>console.log(key));