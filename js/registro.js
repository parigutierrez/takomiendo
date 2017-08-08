// console.log('registro');

console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('mail'));

var nombre = document.getElementById('first_name');
var correo = document.getElementById('email');

nombre.value = localStorage.getItem('name');
correo.value = localStorage.getItem('mail');

//
function irMapa() {
	setTimeout(function() {
	  var url = "../vistas/detalleTakos.html";
	  $(location).attr("href",url);
  }, 1000)
}

var btn = document.getElementById('validar');
btn.addEventListener('click', irMapa);
