function cargarPagina() {
      setTimeout(function() {
        var url = "../vistas/inicioSesion.html";
        $(location).attr("href",url);
        }, 4000)
}
$(document).ready(cargarPagina());
