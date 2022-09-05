'use strict';
function generoEvento(){
    alert('Hizo click en el boton')
}
function eventoMouse(){
    console.log('mouse move')
}
//evento por propiedad
const btnPropiedad = document.getElementById('btnPropiedad');
btnPropiedad.onclick = function(){
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const promedio = document.getElementById('promedio').value;
    const tipo = document.getElementById('tipo').value;
    
    if (!isNaN(parseFloat(float))){
        console.log(promedio)
    }else{
        console.log("invalid") 
    }
}
//evento por el metodo addEventListener

const inputName = document.getElementById('nombre');

inputName.addEventListener('click',()=>{
    console.log(inputName.value);
    
});