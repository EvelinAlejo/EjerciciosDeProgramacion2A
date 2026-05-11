import { ERRORREGISTRO } from "./ERROR.js"

export class Participante {
    #nombre
    #edad
    #sexo
    #altura
    
    constructor(nombre, edad, sexo, altura) {
        this.#nombre = nombre
        this.#edad = edad
        this.#sexo = sexo
        this.#altura = altura
    }

    get nombre() {
        return this.#nombre
    }

    set nombre(n) {
        this.#nombre = n
    }

    get edad() {
        return this.#edad
    }

    set edad(e) {
        if (e < 0) {
            throw new ERRORREGISTRO("La edad no puede ser negativa")
        }
        this.#edad = e
    }

    get sexo() {
        return this.#sexo
    }

    set sexo(s) {
        if (s !== "M" && s !== "F") {
            throw new ERRORREGISTRO("Error: solo hay 2 sexos (M o F)")
        }
        this.#sexo = s
    }

    get altura() {
        return this.#altura
    }

    set altura(a) {
        if (a <= 0) {
            throw new ERRORREGISTRO("La altura debe ser mayor a 0")
        }
        this.#altura = a
    }
}