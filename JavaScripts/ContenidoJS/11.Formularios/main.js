    const form = document.getElementById('form');
    const btn = document.getElementById('btnDatos');
    const names = document.getElementById('inputNames');
    const age = document.getElementById('inputAge');
    const email = document.getElementById('inputEmail');
    const city = document.getElementById('inputCity');
    const policity = document.getElementById('checkPolitica');
    
    //Constrol de validacioin

    const objectValid = {
        nombres: false,
        edad:false,
        correo:false,
        ciudad:false,
        politica:false,
    };
    
    //Validar formulario
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        if (validForm()===-1){
            alert('Enviando el Formulario');
        }else{
            alert('Error en los valores del formulario');
        }
    })

    const validForm = ()=>{
        const values =Object.values(objectValid);
        let response = values.findIndex(e => e === false);
        return response;
    }

    names.addEventListener('change',(e)=>{
        console.log(e.target);
        const namesRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{4,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        objectValid.nombres = e.target.value.match(namesRegex) ? true : false;
        console.log(Object.values(objectValid));
    });
    age.addEventListener('change',function(e){
        const ageRegex = /(^[0-9]{1,2}$)/g;
        if((age.value.match(ageRegex)) && (parseInt(age.value)>=18)){
            objectValid.edad= true;
        }else{
            objectValid.edad= false;
        }
        console.log(Object.values(objectValid))
    })
    email.addEventListener('change',function(e){
        console.log(e.target);
        const emailRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ])/g;
        objectValid.correo = e.target.value.match(emailRegex) ? true : false;
        console.log(Object.values(objectValid));
    })
    city

    policity.addEventListener('change',function(e){
        objectValid.politica = e.target.checked === true ? true : false;
        console.log(Object.values(objectValid));

    })