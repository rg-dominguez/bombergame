

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

function mostrarUsuario(){
	$('#mAU').remove();
}






