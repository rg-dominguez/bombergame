var fs=require("fs");
var config=JSON.parse(fs.readFileSync("config.json"));
var host=config.host;
var port=config.port;
var exp=require("express");
var app=exp(); 
var modelo=require("./servidor/modelo.js");
var juego=new modelo.Juego();

//app.use(app.router);
app.use(exp.static(__dirname + "/cliente"));

app.get("/",function(request,response){
	response.send("hola");
});
app.get("/hola/:text",function(request,response){
	response.send("Hola "+request.params.text);
});

app.get("/agregarUsuario/:nick",function(request, response){
	var nick=request.params.nick;
	juego.agregarUsuario(nick,function(usr){
		response.send(usr);
	});
});

app.get("/crearPartida/:nombre/:nick",function(request, response){
	var nombre=request.params.nombre;
	var nick=request.params.nick;

	juego.crearPartida(nombre, nick, function(partida){
		response.send(partida);
	});
});

app.get("/obtenerUsuarios",function(request, response){
	juego.obtenerUsuarios(function(usuarios){
		response.send(usuarios);
	});
});

app.get("/obtenerPartidas",function(request, response){
	juego.obtenerPartidas(function(partidas){
		response.send(partidas);
	});
});

app.get("/unirseAPartida/:nombre/:idp",function(request, response){
	var nombre=request.params.nombre;
	var idp=request.params.idp;

	juego.unirseAPartida(nombre, idp, function(partida){
		response.send(partida);
	});
});

app.get("/obtenerJugadores/:idp",function(request, response){
	var idp=request.params.idp;

	juego.obtenerJugadores(idp, function(jugadores){
		response.send(jugadores);
	});
});


console.log("Servidor escuchando en "+host+":"+port);
app.listen(port,host);