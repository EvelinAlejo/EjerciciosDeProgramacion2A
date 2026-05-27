export class Trabajador{
    #nombre
    #horas
    #pagoPorHora

    constructor(nombre, horas, pagoPorHora){
        this.#nombre = nombre
        this.#horas = horas
        this.#pagoPorHora = pagoPorHora
    }

    // GETTERS
    get nombre(){
        return this.#nombre
    }

    get horas(){
        return this.#horas
    }

    get pagoPorHora(){
        return this.#pagoPorHora
    }

    // SETTERS
    set nombre(n){
        if(!n || n.trim() === "") throw new Error("Nombre inválido")
        this.#nombre = n
    }

    set horas(h){
        if(h <= 0) throw new Error("Horas inválidas")
        this.#horas = h
    }

    set pagoPorHora(p){
        if(p <= 0) throw new Error("Pago por hora inválido")
        this.#pagoPorHora = p
    }

    // Métodos de cálculo
    calcularSueldoBruto(){
        return this.#horas * this.#pagoPorHora
    }

    calcularDescuento(){
        return this.calcularSueldoBruto() * 0.10
    }

    calcularSueldoFinal(){
        return this.calcularSueldoBruto() - this.calcularDescuento()
    }
}