import { Validacion } from "./error.js";
import { ArregloManager } from "./array.js";
import promptSync from "prompt-sync";

const prompt = promptSync(); // ← IMPORTANTE: ejecutar la función

export class EntradaDatos{
    static PedirNombre(){
        const pedir = prompt("Ingresa tu nombre: "); // ← sin parseInt
        
        // Validación correcta
        if(pedir && pedir.trim() !== "") {
            ArregloManager.agregarDato(pedir);
            console.log(`Nombre "${pedir}" agregado correctamente`);
            return true;
        } else {
            console.log("No ingresaste nada");
            return false;
        }
    }
}