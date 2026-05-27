import { Trabajador } from "./trabajador.js";
import promptSync from "prompt-sync";
const prompt = promptSync()

export class RegistroTrabajadores{
    static trabajadores = []

    static registrar(){
        try{
            console.log("\n--- REGISTRAR TRABAJADOR ---")
            
            let nombre = prompt("Nombre: ")
            let horas = parseInt(prompt("Horas trabajadas: "))
            let pago = parseFloat(prompt("Pago por hora: $"))

            let trabajador = new Trabajador(nombre, horas, pago)
            this.trabajadores.push(trabajador)
            
            console.log(`✅ ${nombre} registrado correctamente`)
        } catch(error){
            console.log("❌", error.message)
        }
    }

    static mostrarTodos(){
        if(this.trabajadores.length === 0){
            console.log("\n📭 No hay trabajadores registrados")
            return
        }

        console.log("\n=== LISTA DE TRABAJADORES ===")
        
        this.trabajadores.forEach((t, i) => {
            console.log(`\n${i + 1}. ${t.nombre}`)
            console.log(`   Horas: ${t.horas}`)
            console.log(`   Pago por hora: $${t.pagoPorHora}`)
            console.log(`   Sueldo bruto: $${t.calcularSueldoBruto()}`)
            console.log(`   Descuento 10%: $${t.calcularDescuento()}`)
            console.log(`   Sueldo final: $${t.calcularSueldoFinal()}`)
        })
    }
}