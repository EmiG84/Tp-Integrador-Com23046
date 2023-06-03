//CREO EL OBJETO
const datosTicket = { 
    nombre: '',
    apellido: '',
    email: '',
    cantTickets:'',
    catTickets: '',
}
//OBTENGO LOS ELEMENTOS DEL HTML

const nombre = document.querySelector('#inputNombre');
const apellido = document.querySelector('#inputApellido');
const email = document.querySelector('#inputEmail');
const cantTickets = document.querySelector('#inputCantidad');
const catTickets = document.querySelector('#categoriaTicket');
const formulario = document.querySelector('#compTickets');

// GUARDO LOS ELEMENTOS EN EL OBJETO

nombre.addEventListener('input', function(e){
    datosTicket.nombre = e.target.value;
    console.log(e.target.value);
});

apellido.addEventListener('input', function(e){
    datosTicket.apellido = e.target.value;
    console.log(e.target.value);
});

email.addEventListener('input', function(e){
    datosTicket.email = e.target.value;
    console.log(e.target.value);
});

cantTickets.addEventListener('input', function(e){
    datosTicket.cantTickets = e.target.value;
    console.log(e.target.value);
});

catTickets.addEventListener('change', function(){ 
    eleccion = catTickets.options[catTickets.options.selectedIndex].text;
    console.log(eleccion);
}); 

function ShowSelected(){
    const descuento = document.getElementById("categoriaTicket").value; //Para obtener el valor
    const subTotal = 200 * descuento;
    const total = datosTicket.cantTickets * subTotal;
    return document.getElementById("totalPago").innerHTML = total;
};

function limpiarFormulario() {
    document.getElementById("compTickets").reset();
    document.getElementById("totalPago").innerHTML = '0';
  }


//VALIDAR Y ENVIAR FORMULARIO

formulario.addEventListener('submit', function (event){

});



/*
catTickets.addEventListener('select', function(e){
    datosTicket.catTickets = e.target.value;
    console.log(e.target.value);
});
*/





