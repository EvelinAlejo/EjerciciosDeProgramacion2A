import { Validacion } from "./error.js";

export class ArregloManager{
    static misDatos=[] // este pertenece a la aclase no al objeto 

    static agregarDato(dato){
        this.misDatos.push(dato)
    }

    static obtenerDatos(){
        return[... this.misDatos]
    }

    static mostrarDatos(){
        console.log("datos actuales:", this.misDatos)
    }
}