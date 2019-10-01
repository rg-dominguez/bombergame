describe("Bombergame", function() {
  var juego;

  beforeEach(function() {
    juego = new Juego();
  });

  it("comprobaciones iniciales", function() {
    expect(juego.usuarios.length).toEqual(0);
    expect(juego.partidas.length).toEqual(0);
    
  });

  it("Comprobar agregar usuarios", function(){
    juego.agregarUsuario('pepe');
    expect(Object.keys(juego.usuarios).length).toEqual(1);
    expect(juego.usuarios["pepe"]).not.toBe(undefined);
    expect(juego.usuarios["pepe"].nick).toBe("pepe");
  })

  it("no se duplican usuarios con el mismo nombre", function(){
    juego.agregarUsuario('pepe');
    juego.agregarUsuario('pepe');
    expect(Object.keys(juego.usuarios).length).toEqual(1);
  })

  it("pepe crea partida 'una'", function(){
    juego.agregarUsuario('pepe');
    juego.crearPartida('una', 'pepe');
    expect(Object.keys(juego.partidas).length).toEqual(1);

    expect(juego.partidas["unapepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].idp).toBe("unapepe");
  })

  it("ana se une a la partida de pepe 'una'", function(){
    juego.agregarUsuario('pepe');
    juego.agregarUsuario('ana');
    juego.crearPartida('una', 'pepe');
    juego.unirseAPartida('ana', 'unapepe');
    expect(Object.keys(juego.partidas["unapepe"].jugadores).length).toEqual(2);
  })

  it("pepe sale de una partida con dos jugadores", function(){
    juego.agregarUsuario('pepe');
    juego.agregarUsuario('ana');
    juego.crearPartida('una', 'pepe');
    var partida = juego.partidas["unapepe"];
    juego.unirseAPartida('ana', 'unapepe');
    expect(partida).not.toBe(undefined);
    expect(partida.idp).toBe("unapepe");
    expect(Object.keys(partida.jugadores).length).toEqual(2);
    juego.partidas["unapepe"].salir("pepe");
    expect(Object.keys(partida.jugadores).length).toEqual(1);
  })

  /*it("pepe sale de la partida unapepe siendo el ultimo jugador", function(){
    juego.agregarUsuario('pepe');
    juego.crearPartida('una', 'pepe');
    var partida = juego.partidas["unapepe"];
    expect(Object.keys(partida.jugadores).length).toEqual(1);
    expect(juego.partidas["unapepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].idp).toBe("unapepe");
    juego.partidas["unapepe"].salir("pepe");
    expect(juego.partidas["unapepe"]).toBe(undefined);
  })*/


});
