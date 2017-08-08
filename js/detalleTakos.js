// var config = {
//     apiKey: "AIzaSyChDlJq7CRu97qVUmtHVkqqAQE_Y9rxYWU",
//     authDomain: "takomiendo-3da4a.firebaseapp.com",
//     databaseURL: "https://takomiendo-3da4a.firebaseio.com",
//     projectId: "takomiendo-3da4a",
//     storageBucket: "takomiendo-3da4a.appspot.com",
//     messagingSenderId: "262672933065"
//   };
// firebase.initializeApp(config);

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
    var marker = new google.maps.Marker({
          position: coordenadas,
          map: map
        });
  }

var restaurantes = [
	{
		"nombre": "Pizzas del Perro Negro",
		"comida": "Pizzas",
		"foto": "https://dummyimage.com/100x100",
		"direccion": "Calle Orizaba 4, Local B, Cuauhtémoc, Roma Norte, 06700 Ciudad de México, CDMX",
    "coordenadas" : {"lat":"19.416512" ,"lng": "-99.169656"}
	},
	{
		"nombre": "Papa Guapa",
		"comida": "Papas",
		"foto": "https://dummyimage.com/100x100",
		"direccion": "Calle Orizaba 4, Local B, Cuauhtémoc, Roma Norte, 06700 Ciudad de México, CDMX",
    "coordenadas" : {"lat":"19.419013" ,"lng": "-99.166943"}
	},
	{
		"nombre": "Barracuda Dinner",
		"comida": "Hamburguesas",
		"foto": "https://dummyimage.com/100x100",
		"direccion": "Av Nuevo León 4-A, Condesa, Cuauhtémoc, 06140 Ciudad de México, CDMX.",
    "coordenadas" : {"lat":"19.415995" ,"lng": "-99.169623"}
	},
	{
		"nombre": "Moshi Moshi",
		"comida": "Sushi",
		"foto": "https://dummyimage.com/100x100",
		"direccion": "Plaza Villa de Madrid 22, Cuauhtémoc, Roma, 06700 Ciudad de México, CDMX.",
    "coordenadas" : {"lat":"19.419407" ,"lng": "-99.166622"}
	},
	{
		"nombre": "Churrería El Moro",
		"comida": "Churros y chocolate",
		"foto": "https://dummyimage.com/100x100",
		"direccion": "Eje Central Lázaro Cárdenas 42, Centro Histórico, Centro, 06000 Ciudad de México, CDMX",
    "coordenadas" : {"lat":"19.431437" ,"lng": "-99.141112"}
  }
];
