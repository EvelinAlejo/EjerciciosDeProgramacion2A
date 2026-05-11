import { Base } from './Base.js'

export class Empleado extends Base {
    constructor(RFC, SUELDOBASE, HORASEXTRAREALIZADAS, PAGOSPORHORASEXTRA, nombre, edad, area) {
        super(RFC, SUELDOBASE, HORASEXTRAREALIZADAS, PAGOSPORHORASEXTRA)
        this.nombre = nombre
        this.edad = edad
        this.area = area
    }

    VisualizacionBasica() {
        console.log(`NOMBRE: ${this.nombre}, EDAD: ${this.edad}, AREA: ${this.area}`)
    }

    mostrarInfo() {
        console.log(`RFC: ${this.leerRFC}`)
        console.log(`SUELDO BASE: ${this.leerSueldoBase}`)
        console.log(`HORAS EXTRAS: ${this.leerHorasExtra}`)
        console.log(`PAGO HORAS EXTRA: ${this.leerPagosPorHorasExtras}`)
    }
}