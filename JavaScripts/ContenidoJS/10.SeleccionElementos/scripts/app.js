'use strict';
//Seleccionar elementos del Dom
let myTitles = document.getElementById("titulo");
//Seleccionar por el name
let tagName=document.getElementsByName("art1");
console.log(tagName);
//Seleccion por etiquetas
let etiqueta = document.getElementsByTagName("h3");
console.log(etiqueta);
//QuerySelector id
let queryContainer = document.querySelector("#container");
console.log(queryContainer);
//QuerySelector class
let myMenu = document.querySelector(".menu");
console.log(myMenu);
//QuerySelector etiquetas
let myOl = document.querySelector("ol");
console.log(myOl);
//all
let allArt = document.querySelectorAll("article");
console.log(allArt);
//Crear elementos
let miParrafo = document.createElement("p");
miParrafo.id="parrafo";
miParrafo.className="parrafo";
miParrafo.textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quibusdam autem fugit, optio ab sed sit dolore. Ullam, porro cupiditate, quam sequi perspiciatis quisquam quas assumenda voluptas iste iure beatae.";
miParrafo.innerHTML="<h3>Esto es otro titulo</h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quibusdam autem fugit, optio ab sed sit dolore. Ullam, porro cupiditate, quam sequi perspiciatis quisquam quas assumenda voluptas iste iure beatae. <string>CHIN CHEN CHAN CHIN</string>";
//Insertar elemento en el DOM
document.body.appendChild(miParrafo);
//Seleccion elemento
let seccion1 = document.getElementById("section1");
seccion1.appendChild(miParrafor);