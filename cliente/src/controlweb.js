

function mostrarAgregarUsuario(){
    var cadena="<div id='mAU'>";
    cadena=cadena+"<h3>Usuario</h3>";
    cadena=cadena+'<input id="nombre" type="text" class="form-control" name="nombre" placeholder="Nombre usuario">';        
    cadena=cadena+'<button type="button" id="inicioBtn" class="btn btn-primary btn-md">Agregar Usuario</button>';    
    cadena=cadena+"</div>";

    $('#inicio').append(cadena);

    $('#inicioBtn').on('click',function(){
        var nombre=$('#nombre').val();
        if (nombre==""){
            nombre="N E U T R O";
        }
        rest.agregarUsuario(nombre);
     });
}

function mostrarUsuario(data){
	$('#mAU').remove();

    var cadena="<div id='bienvenida'>";
    cadena=cadena+"<label>Bienvenido/a, </label>" + " " + data.nick;
    cadena=cadena+"</div>";    
    $('#bienvenida').append(cadena);    

    mostrarCrearPartida(data);
    mostrarBotonUnirse(data);
}


function mostrarCrearPartida(data){

    var cadena="<div id='bienvenida'>";
    cadena=cadena+'<input id="nombrePartida" type="text" class="form-control" name="nombrePartida" placeholder="Nombre Partida">';
    cadena=cadena+'<button type="button" id="crearParBtn" class="btn btn-primary btn-md">Crear Partida</button>';
    cadena=cadena+"</div>";

    $('#bienvenida').append(cadena);

    $('#crearParBtn').on('click',function(){
        var nombrePartida=$('#nombrePartida').val();
        if (nombrePartida==""){
            nombrePartida="NewGame";
        }
        rest.crearPartida(nombrePartida, data.nick);
     });
}

function mostrarBotonUnirse(data){
    var cadena="<div id='bienvenida'>";
    cadena=cadena+'<button type="button" id="unirParBtn" class="btn btn-primary btn-md">Unirse a partida</button>';
    cadena=cadena+"</div>";

    $('#bienvenida').append(cadena);

    $('#unirParBtn').on('click',function(){
        $('#bienvenida').remove();
        mostrarPartidasUnirse(data);
     });

}


function mostrarPartida(data){

}


function mostrarAviso(msg){
    alert(msg);
}

function mostrarAvisoPartidaCreada(msg){
    alert(msg);
}


