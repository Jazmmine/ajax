$(document).ready(function(){
	//var url = "http://localhost:3000/demo.html";
	/*
	$.ajax(url, {
		type: "GET",
		success: function(data, textStatus, jqXHR){
			console.log(data);
		}
	});*/
	/*$("#boton").click(function(){
		$.ajax({
			url: "http://localhost:3000/demo.html",
			type: "GET",
			/*success: function(data, textStatus, jqXHR){
				console.log(data);
			}*/
		//	success: function(response){
		//		$("#ajax").html(response);
		//	}
		//});
	//});*/

	$("#boton").click(function(){
		$("#ajax").load("http://localhost:3000/demo.html");
	});
});