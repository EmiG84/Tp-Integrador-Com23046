
//-------------------------------------querySelector-----------------------------------
//const heading = document.querySelector('.header__texto h2'); //retorna 0 o 1 elemento

//const heading = document.querySelector('#heading'); //forma recomendable

//const heading = document.querySelector('.no-existe h2'); // retorna null en caso de no encontrar el elemento

//console.log(heading);

//heading.textContent = 'Nuevo Heading';

//heading.classList.add('nueva-clase');

//console.log(heading);

//------------------------------------querySelectorAll---------------------------------

//const enlaces = document.querySelectorAll('.navegacion a');

//console.log(enlaces);

//enlaces.forEach(link=> console.log(link));

//enlaces[0].textContent = 'Pagina de Google';

//enlaces[0].href = 'http://google.com';


//-------------------------------------getElementById---------------------------------

//const heading2 = document.getElementById('heading');

//console.log(heading2);

//------------------------------------Generar un nuevo link-----------------------
/*
const nuevoLink = document.createElement('a');

//href
nuevoLink.href = 'www.google.com';
//texto
nuevoLink.textContent = 'Link a google';
//clase
nuevoLink.classList.add('navegacion__enlace');

const nuevoLink2 = document.createElement('A');

//href
nuevoLink2.href = 'www.google.com';
//texto
nuevoLink2.textContent = 'Link a google';
//clase
nuevoLink2.classList.add('navegacion__enlace');

//agregarlo al documento
const navegacion = document.querySelectorAll('.navegacion');

navegacion[0].appendChild(nuevoLink);

navegacion[1].appendChild(nuevoLink2);

console.log(navegacion);  
*/
//--------------------------------Eventos----------------------------------------
/*
 console.log(1);

window.addEventListener('load', function(){ //load espera a que js y los archivos que dependen del html esten listos
     console.log("ESTOY EN EL EVENTO");
});

document.addEventListener('DOMContentLoaded', function(){ //solo espera que se descargue el html
    console.log(4);
});

window.onscroll = function(){
    console.log("Scrolling...");
}

console.log(5);  
*/
//-----------------------Seleccionar elementos y asociarles un evento-----------------------------
/*
 const btnEnviar = document.querySelector('.boton--primario');

btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    //evento.preventDefault();
    
    //VALIDAR FORMULARIO

    console.log("enviando formulario...");
    //CTRL+K+C      CTRL+K+U
}); 

*/


//-------------------------------------Evento de Submit------------------------------------
/*
 const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    //aca se valida el formulario
    
    //luego se envian los datos

    console.log("Enviando Formulario 2...");
}); 
*/
//----------------------Eventos de los inputs y text area-----------------------------------------

//-------CREO UN OBJETO----------
 const datos = {
    nombre: '',
    email: '',
    mensaje: ''
} 
//-------------------------------

//-------------------------OBTENGO ELEMENTOS DE HTML NECESARIOS--------------------------------

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');
const contador = document.createElement('P');

email.disabled= true;
mensaje.disabled = true;

formulario.appendChild(contador); 

//---------------------------------------------------------------------------------------------
/*
  nombre.addEventListener('input', function(e){  //probar 'change'
     console.log(e.target.value); 
 }); 

  email.addEventListener('input', function(e){  
     console.log(e.target.value); 
 }); 

  mensaje.addEventListener('input', function(e){ 
    console.log(e.target.value); 
 }); 
*/
//----------------GUARDO VALORES EN ATRIBUTOS DEL OBJETO DATOS--------------------------------
 
//

 nombre.addEventListener('input', function (event){
    datos.nombre = event.target.value;
    console.log(datos.nombre);

    //destructuring
    const {nombre} = datos;

    for(i=0 ; i<nombre.length; i++ ){
        if(nombre.charCodeAt(i)>47 && nombre.charCodeAt(i)<58){
            mostrarMensaje("El nombre no puede contener números",true);
            email.disabled = true;
            return;
        }
    }

    email.disabled = false;
});

email.addEventListener('input', function (event){
    datos.email = event.target.value;

    mensaje.disabled = false;
});

mensaje.addEventListener('input', function (pepe){
    datos.mensaje = pepe.target.value;

    //destructuring
    const {mensaje} = datos;


    if(mensaje.length>=20){
        mostrarMensaje("El mensaje es demasiado largo.",true);
        return;
    }

    mostrarContador(mensaje.length, contador);
});

//--------------------------------------------------------------------------------------------


 formulario.addEventListener('submit', function(event){
    event.preventDefault();

    //aca se valida el formulario
    const {nombre, email, mensaje} = datos; //destructuring
    
    if(mensaje.length>=20){
        mostrarMensaje("El mensaje es demasiado largo.", true);
        return;
    }

    if(nombre === '' || email ==='' || mensaje ===''){
        mostrarMensaje("Alguno de los campos no se completó.", true);
        return;
    }

    //Alerta de succes formulario
    mostrarMensaje("Los datos se ingresaron correctamente.");
});
 

// function leerTexto(e){
//     datos[e.target.id] = e.target.value;
//     //console.log(datos)
// }
 
function mostrarMensaje(mensaje, error){
    const respuesta = document.createElement('P');
    respuesta.textContent = mensaje;

    if(error){
        respuesta.classList.add('error');
    }else{
        respuesta.classList.add('correcto');
    }

    formulario.appendChild(respuesta);
    setTimeout(() => {
        respuesta.remove();
    }, 5000);
}

function mostrarContador(contador, elemento){
    elemento.textContent = contador;
} 

// function mostrarAlerta(mensaje, error = null){
//     const alerta = document.createElement('P');
//     alerta.textContent = mensaje;

//     if(error){
//         alerta.classList.add('error');
//     }else{
//         alerta.classList.add('correcto');
//     }
//     formulario.appendChild(alerta);

//     setTimeout(() => {
//         alerta.remove();
//     }, 5000);
// }


/*
const formulario = document.querySelector('.formulario');
const nombre = document.querySelector("#nombre");
const mensaje = document.querySelector("#mensaje");
let nombreObtenido = "";

 nombre.addEventListener('input', function (event){
    nombreObtenido = event.target.value;
    console.log(nombreObtenido);
});

 

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    //jose maria
    let arrayNombres = nombreObtenido.split(' ');
    if(tieneMayus(arrayNombres)){
        mensaje.textContent = "Esta bien";
    }else{
        mensaje.textContent = "Alguno de los nombres no está en mayus."
    }
    //aca se valida el formulario
    
    //luego se envian los datos

    console.log("Enviando Formulario 2...");
});

function tieneMayus(nombres){
    let flag = false;
    for(let i= 0; i< nombres.length ; i++ ){
        if(nombres[i].charCodeAt(0)>=65 && nombres[i].charCodeAt(0)<= 90){
            flag = true;
        }else{
            flag = false;
        }
    }

    return flag;
}
*/