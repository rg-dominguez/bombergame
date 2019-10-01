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




});
