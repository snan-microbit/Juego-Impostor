input.onButtonPressed(Button.A, function () {
    if (jugador == juegoImpostor.impostor()) {
        basic.showString("IMPOSTOR")
    } else {
        basic.showString(juegoImpostor.palabraSorteada())
    }
    jugador += 1
})
let jugador = 0
juegoImpostor.configurarJuego1("perro gato cama auto berenjena mariposa salsa", 6)
jugador = 1
