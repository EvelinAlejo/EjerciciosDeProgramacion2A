import promptSync from 'prompt-sync';
import { Trabajador } from "./trabajadorers.js";
import { ErrorEmpleado } from "./ERROR.js";
import { Almacen } from "./Almacen.js";

const prompt = promptSync();

export class Calculos {
    
    calculitos() {
        try {
            let campo1 = prompt("Ingresa el nombre del trabajador: ");
            if (!campo1.trim()) {
                throw new ErrorEmpleado("El nombre no puede estar vacío.");
            }

            let campo2 = parseInt(prompt("Ingresa tu pago por hora: "));
            let campo3 = parseInt(prompt("Ingresa tus horas trabajadas: "));

            if (campo3 > 0 && campo2 > 0) {
                // Instanciamos el trabajador
                const nuevoTrabajador = new Trabajador(campo1, campo3, campo2);
                
                // Lo guardamos en el almacén estático
                Almacen.agregar(nuevoTrabajador);
                console.log(`\n¡Trabajador ${campo1} registrado con éxito!`);
            } else {
                throw new ErrorEmpleado("Error: Las horas o el pago deben ser mayores a cero.");
            }

        } catch (error) {
            console.error(`\n[${error.name}]: ${error.message}`);
        }
    }

    // Métodos estáticos matemáticos para procesar los sueldos
    static obtenerBruto(trabajador) {
        return trabajador.leerHorasTrabajadas * trabajador.leerPagosPOrHoras;
    }

    static obtenerDescuento(sueldoBruto) {
        return sueldoBruto * 0.10;
    }

    static obtenerFinal(sueldoBruto, descuento) {
        return sueldoBruto - descuento;
    }
}