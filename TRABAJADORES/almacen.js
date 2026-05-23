import { Calculos } from "./calculos.js";

export class Almacen {
    static almacencito = [];

    static agregar(nuevoTrabajador) {
        Almacen.almacencito.push(nuevoTrabajador);
    }

    static recorrer() {
        if (Almacen.almacencito.length === 0) {
            console.log("\nNo hay trabajadores registrados en el sistema.");
            return;
        }

        console.log("\n=======================================");
        console.log("       REPORTE DE TRABAJADORES");
        console.log("=======================================");

        Almacen.almacencito.forEach((trabajador, index) => {
            let bruto = Calculos.obtenerBruto(trabajador);
            let descuento = Calculos.obtenerDescuento(bruto);
            let final = Calculos.obtenerFinal(bruto, descuento);

            console.log(`Trabajador #${index + 1}`);
            console.log(`Nombre: ${trabajador.leerNombre}`);
            console.log(`Horas Trabajadas: ${trabajador.leerHorasTrabajadas}`);
            console.log(`Pago por Hora: $${trabajador.leerPagosPOrHoras}`);
            console.log(`Sueldo Bruto: $${bruto}`);
            console.log(`Descuento (10%): $${descuento}`);
            console.log(`Sueldo Final: $${final}`);
            console.log("---------------------------------------");
        });
    }
}