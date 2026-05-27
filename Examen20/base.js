import { ErrorValidacio } from "./error.js";

export class Menu{
    #sencilla   // Hamburguesa sencilla
    #queso       // Hamburguesa con queso
    #especial    // Hamburguesa especial
    #papas
    #postre
    #refresco

    constructor(sencilla, queso, especial, papas, postre, refresco){
        this.#sencilla = sencilla
        this.#queso = queso
        this.#especial = especial
        this.#papas = papas
        this.#postre = postre
        this.#refresco = refresco
    }

    // GETTERS
    get sencilla(){
        return this.#sencilla
    }
    
    get queso(){
        return this.#queso
    }
    
    get especial(){
        return this.#especial
    }

    get papas(){
        return this.#papas
    }

    get postre(){
        return this.#postre
    }

    get refresco(){
        return this.#refresco
    }

    // SETTERS
    set sencilla(valor){
        if(valor < 0) throw new ErrorValidacio("Cantidad inválida")
        this.#sencilla = valor
    }

    set queso(valor){
        if(valor < 0) throw new ErrorValidacio("Cantidad inválida")
        this.#queso = valor
    }

    set especial(valor){
        if(valor < 0) throw new ErrorValidacio("Cantidad inválida")
        this.#especial = valor
    }

    set papas(valor){
        if(valor < 0) throw new ErrorValidacio("Cantidad inválida")
        this.#papas = valor
    }

    set postre(valor){
        if(valor < 0) throw new ErrorValidacio("Cantidad inválida")
        this.#postre = valor
    }

    set refresco(valor){
        if(valor < 0) throw new ErrorValidacio("Cantidad inválida")
        this.#refresco = valor
    }

    // MÉTODO PARA CALCULAR TOTAL 
    calcularTotal(){
        const precioSencilla = 15
        const precioQueso = 18
        const precioEspecial = 20
        const precioPapas = 8
        const precioPostre = 6
        const precioRefresco = 5

        let total = (this.#sencilla * precioSencilla) +
                    (this.#queso * precioQueso) +
                    (this.#especial * precioEspecial) +
                    (this.#papas * precioPapas) +
                    (this.#postre * precioPostre) +
                    (this.#refresco * precioRefresco)
        
        return total
    }
}