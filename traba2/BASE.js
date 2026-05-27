import { E } from "./ERROR.js";

export class Base{
    #nombre
    #edad
    #altura
    #sexo
    constructor(nombre , edad, altura, sexo){
        this.#nombre=nombre
        this.#edad=edad
        this.#altura=altura
        this.#sexo=sexo
    }

    get leerN(){
        return this.#nombre

    }

    get leerE(){
        return this.#edad
        
    }

    get leerA(){
        return this.#altura
        
    }

    get leerS(){
        return this.#sexo
        
    }
}