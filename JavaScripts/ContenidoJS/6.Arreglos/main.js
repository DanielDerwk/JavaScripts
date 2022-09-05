'use strict';
const myArray1 = [2,4,6,8,true,3.56,'Maria',800,'2'];
let myArray2 = new Array('a','e','i','o','u'); //new objetos

console.log(myArray1[6]);
console.log(myArray2[3]);

/**Interacion de arreglos
 * For in, For of, Foreach
 * 
 * 
 */
for (let i of myArray1){//for of
    console.log(i);
} 

for(let j in myArray2){//for in
    console.log(myArray1[j]);
}

for(let k=0; k<myArray1.length; k++) {
}

myArray2.forEach(element=> {}); //forEach