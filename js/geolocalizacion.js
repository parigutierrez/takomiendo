window.onload = function() {
	verificarCoords();
};

// verificar coordenadas
var verificarCoords = function (e) {
  	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(obtenerCoordenadas);
  	} else {
  		console.log("Actualice su navegador");
  	}
  };

  // Geolocalización
  function obtenerCoordenadas(posicion) {
    var coordenadas = {
  		lat: posicion.coords.latitude,
  		lng: posicion.coords.longitude
  	};
	console.log(coordenadas);
  	initMap(coordenadas);

  }

  function initMap(coordenadas) {

    var map = new google.maps.Map(document.getElementById("mapa"), {
      zoom: 18,
      center: coordenadas
    });

  }
