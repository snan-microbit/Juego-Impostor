/**
 * Extension para el juego del Impostor
 */
//% color="#E67E22" icon="\uf11b" block="Juego Impostor"
namespace juegoImpostor {
    let _palabras: string[] = []
    let _cantidadJugadores = 0
    let _impostor = 0
    let _palabraSorteada = ""
    export let contador = 0

    //% block="Crear juego Impostor con $texto y $jugadores jugadores"
    export function configurarJuego1(texto: string, jugadores: number): void {
        // 1. Normalizar: comas → espacios
        texto = texto.replace(",", " ")
        texto = texto.trim()

        // 2. Separar por espacios
        let partes = texto.split("")

        let lista: string[] = []

        // 3. Filtrar palabras vacías
        let palabra = ""
        for (let i = 0; i < partes.length; i++) {
            if (partes[i] == " ") {
                if (palabra.length > 0) {
                    lista.push(palabra)
                    palabra = ""
                }
            } else {
                palabra += partes[i]
            }
        }

        // Agregar la última palabra
        if (palabra.length > 0) {
            lista.push(palabra)
        }
        _cantidadJugadores = jugadores
        _impostor = Math.randomRange(1, jugadores)
        _palabraSorteada = lista[Math.randomRange(0, lista.length - 1)]
    }

    //% block="configurar juego con palabras $lista y $jugadores jugadores"
    //% lista.shadow="lists_create_with"
    //% jugadores.defl=3
    export function configurarJuego(lista: string[], jugadores: number): void {
        _palabras = lista
        _cantidadJugadores = jugadores
        _impostor = Math.randomRange(1, jugadores)
        _palabraSorteada = lista[Math.randomRange(0, lista.length - 1)]
        contador = 1
    }
    //% block="cantidad de jugadores"
    export function cantidadJugadores(): number {
        return _cantidadJugadores
    }

    //% block="impostor"
    export function impostor(): number {
        return _impostor
    }

    //% block="palabra sorteada"
    export function palabraSorteada(): string {
        return _palabraSorteada
    }
}
