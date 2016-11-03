//1. crea un objeto XHR
document.getElementById("boton").addEventListener("click",function(){
var xhr = new XMLHttpRequest();
//2. Utiliza un Event Handler 
//xhr.onreadystatechange = function(){    };
var callback = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		document.getElementById("ajax").innerHTML = xhr.responseText; 
	}
};

//3. Abrir una conexion 
xhr.addEventListener("readystatechange", callback);

var url = "http://localhost:3000/demo.html";
xhr.open("GET",url);

// Enviar la peticion
	xhr.send();
});