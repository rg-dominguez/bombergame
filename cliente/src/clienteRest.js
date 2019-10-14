function ClienteRest(){

	this.agregarUsuario=function(nick){
		$.getJSON("/agregarUsuario/"+nick,function(data){    
            console.log(data);
            mostrarUsuario(data);
        });
    }

    this.crearPartida=function(nombre, nick){
		$.getJSON("/crearPartida/"+nombre+"/"+nick,function(data){    
            console.log(data);
            //mostrarListaPartidas(data);
        });
    }

    this.obtenerUsuarios=function(){
		$.getJSON("/obtenerUsuarios",function(data){    
            console.log(data);
            //mostrarListaPartidas(data);
        });
    }

    this.obtenerPartidas=function(){
		$.getJSON("/obtenerPartidas",function(data){    
            console.log(data);
            //mostrarListaPartidas(data);
        });
    }

    this.unirseAPartida=function(nombre, idp){
		$.getJSON("/unirseAPartida/"+nombre+"/"+idp,function(data){    
            console.log(data);
            //mostrarListaPartidas(data);
        });
    }

    this.obtenerJugadores=function(idp){
		$.getJSON("/obtenerJugadores/"+idp,function(data){    
            console.log(data);
            //mostrarListaPartidas(data);
        });
    }



}

