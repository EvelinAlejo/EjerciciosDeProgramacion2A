import { Arreglo } from "./arreglo.js";
import promptSync from "prompt-sync";
const prompt = promptSync()

function menu(){
    
    console.log("   RESTAURANTE HAMBURGUESAS   ")
    
    console.log(" 1. Registrar pedido por mesa   ")
    console.log(" 2. Mostrar todos los pedidos   ")
    console.log(" 3. Ver total de una mesa       ")
    console.log("4. Salir                       ")
    
    
    let opcion = prompt("Elige una opción: ")
    
    switch(opcion){
        case "1":
            Arreglo.registrar()
            break

        case "2":
            Arreglo.mostrarTodos()
            break
            
        case "3":
            let mesa = parseInt(prompt("Número de mesa (1-5): "))
            Arreglo.mostrarMesa(mesa)
            break

        case "4":
            console.log(" ¡Hasta luego!")
            return false
            
        default:
            console.log(" Opción inválida")
    }
    return true
}

console.log(" SISTEMA DE REGISTRO DE COMIDAS")

while(menu()){}