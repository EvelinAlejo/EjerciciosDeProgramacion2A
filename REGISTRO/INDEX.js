//integrantes: 
// Evelin Angeles alejo estrada
// ademir flores hernandez
//jehu diego cruz cruz n

import prompt from 'prompt-sync'
import { Participante } from "./PARTICIPANTE.js"
import { SistemaCurso } from "./SISTEMACURSO.js"
import { ERRORREGISTRO } from "./ERROR.js"

const promptSync = prompt()
const sistema = new SistemaCurso()

function registrarDatos() {
    console.log("\n=== REGISTRO DE PARTICIPANTES ===\n")
    
    const nombre = promptSync("Ingresa nombre: ")
    
    let edad // aqui esta 
    while (true) {
        try {
            edad = parseInt(promptSync("Ingresa edad: "))
            if (isNaN(edad)) {
                throw new ERRORREGISTRO("Debes ingresar un número válido")
            }
            if (edad < 0) {
                throw new ERRORREGISTRO("La edad no puede ser negativa")
            }
            break
        } catch (error) {
            console.error("Error:", error.message)
            console.log("Por favor, intenta nuevamente.\n")
        }
    }
    
    let sexo
    while (true) {
        try {
            sexo = promptSync("Ingresa sexo (M/F): ").toUpperCase()
            if (sexo !== "M" && sexo !== "F") {
                throw new ERRORREGISTRO("Error: solo hay 2 sexos (M o F)")
            }
            break
        } catch (error) {
            console.error("Error:", error.message)
            console.log("Por favor, intenta nuevamente.\n")
        }
    }
    
    let altura
    while (true) {
        try {
            altura = parseFloat(promptSync("Ingresa altura (en metros): "))
            if (isNaN(altura)) {
                throw new ERRORREGISTRO("Debes ingresar un número válido")
            }
            if (altura <= 0) {
                throw new ERRORREGISTRO("La altura debe ser mayor a 0")
            }
            break
        } catch (error) {
            console.error("Error:", error.message)
            console.log("Por favor, intenta nuevamente.\n")
        }
    }
    
    const participante = new Participante(nombre, edad, sexo, altura)
    sistema.agregarParticipante(participante)
    console.log("\n✓ Participante registrado exitosamente!\n")
}

function mostrarPromedios() {
    if (sistema.cantidadParticipantes === 0) {
        console.log("\nNo hay participantes registrados aún.\n")
        return
    }
    
    console.log("\n=== RESULTADOS ===\n")
    console.log(`Promedio de altura: ${sistema.calcularPromedioAltura().toFixed(2)} metros`)
    console.log(`Promedio de edad: ${sistema.calcularPromedioEdad().toFixed(2)} años`)
    console.log(`Total de participantes: ${sistema.cantidadParticipantes}\n`)
}

function main() {
    while (true) {
        console.log("\n=== SISTEMA DE REGISTRO DE CURSOS ===")
        console.log("1. Registrar nuevo participante")
        console.log("2. Ver promedios")
        console.log("3. Salir")
        
        const opcion = promptSync("Selecciona una opción: ")
        
        switch (opcion) {
            case "1":
                registrarDatos()
                break
            case "2":
                mostrarPromedios()
                break
            case "3":
                console.log("\n¡Hasta luego!\n")
                return
            default:
                console.log("\nOpción no válida. Intenta de nuevo.\n")
        }
    }
}

main()