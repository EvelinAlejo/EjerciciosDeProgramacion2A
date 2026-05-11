import { ERRORREGISTRO } from "./ERROR.js"

export class SistemaCurso {
    #participantes
    
    constructor() {
        this.#participantes = []
    }

    agregarParticipante(p) {
        this.#participantes.push(p)
    }

    get cantidadParticipantes() {
        return this.#participantes.length
    }

    calcularPromedioAltura() {
        if (this.#participantes.length === 0) return 0
        
        let sumaAlturas = 0
        for (let i = 0; i < this.#participantes.length; i++) {
            sumaAlturas += this.#participantes[i].altura
        }
        return sumaAlturas / this.#participantes.length
    }

    calcularPromedioEdad() {
        if (this.#participantes.length === 0) return 0
        
        let sumaEdades = 0
        for (let i = 0; i < this.#participantes.length; i++) {
            sumaEdades += this.#participantes[i].edad
        }
        return sumaEdades / this.#participantes.length
    }
}