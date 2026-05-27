import { RegistroTrabajadores } from "./registro.js";
import promptSync from "prompt-sync";
const prompt = promptSync()

function menu(){
    console.log("\n╔════════════════════════════╗")
    console.log("║   REGISTRO DE TRABAJADORES ║")
    console.log("╠════════════════════════════╣")
    console.log("║ 1. Registrar trabajador    ║")
    console.log("║ 2. Mostrar trabajadores    ║")
    console.log("║ 3. Salir                   ║")
    console.log("╚════════════════════════════╝")
    
    let opcion = prompt("Elige una opción: ")
    
    switch(opcion){
        case "1":
            RegistroTrabajadores.registrar()
            break
            
        case "2":
            RegistroTrabajadores.mostrarTodos()
            break
            
        case "3":
            console.log("\n👋 ¡Hasta luego!")
            return false
            
        default:
            console.log("\n❌ Opción inválida")
    }
    return true
}

// PROGRAMA PRINCIPAL
console.log("🎯 SISTEMA DE REGISTRO DE TRABAJADORES")

while(menu()){}