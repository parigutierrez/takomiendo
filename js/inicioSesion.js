console.log('inicio sesion');

  var config = {
    apiKey: "AIzaSyA6XRf8mKd2YpEFLYSdblCdm3AKUsHHCOM",
    authDomain: "log-in-fb.firebaseapp.com",
    databaseURL: "https://log-in-fb.firebaseio.com",
    projectId: "log-in-fb",
    storageBucket: "",
    messagingSenderId: "845617787867"
  };
  firebase.initializeApp(config);

function guardarUsuario(nombre, correo) {
	localStorage.setItem('name', nombre);
	localStorage.setItem('mail', correo);
	// var lista = document.getElementById('lista-Usuarios');
	// lista.innerHTML += '<li class="purple-text"><i class="material-icons white-text">face</i> ' + localStorage.getItem('name') + ' <i class="material-icons white-text">email</i> '+ localStorage.getItem('mail')+ '</li>'
}

function logIn(provider) {
	firebase.auth().signInWithPopup(provider)
	.then(function(result) {
	  var token = result.credential.accessToken;
	  var user = result.user;
	  console.log('user', user);
	  console.log(user.displayName);
	//   guardarUsuario(user.displayName, user.email);
	}).catch(function(error) {
	  var errorMessage = error.message;
	  console.log('error', errorMessage);
	});
}

// ********* LOG FACEBOOK **********
var fb = document.getElementById('fb');
fb.addEventListener('click', logFB );

function logFB() {
	var provider = new firebase.auth.FacebookAuthProvider();
	logIn(provider);
}

// ********* LOG GOOGLE ***************
var go = document.getElementById('goo');
go.addEventListener('click', logGo);

function logGo() {
	var provider = new firebase.auth.GoogleAuthProvider();
	logIn(provider);
}
