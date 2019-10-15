function ClienteRest(){

	this.agregarUsuario=function(nick){
		$.getJSON("/agregarUsuario/"+nick,function(data){    
            console.log(data);
            if(data.nick!=""){
                mostrarUsuario(data);
            }
            else{
                mostrarAviso("nick ya existe");
            }
        });
    }

    this.crearPartida=function(nombre, nick){
		$.getJSON("/crearPartida/"+nombre+"/"+nick,function(data){    
            console.log(data);
            if(data.idp==""){
                mostrarAvisoPartidaCreada("Esa partida ya existe, elige otro nombre");
            }
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
            mostrarPartidasUnirse(data);
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

