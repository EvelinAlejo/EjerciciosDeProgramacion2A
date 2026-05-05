import { EmpleadoError } from './EmpleadoError.js'

export class Base {
    #RFC
    #SUELDOBASE
    #HORASEXTRASREALIZADAS
    #PAGOSPORHORASEXTRAS
    
    constructor(RFC = null, SUELDOBASE = 0, HORASEXTRAREALIZADAS = 0, PAGOSPORHORASEXTRA = 100) {
        this.#RFC = RFC
        this.#SUELDOBASE = SUELDOBASE
        this.#HORASEXTRASREALIZADAS = HORASEXTRAREALIZADAS
        this.#PAGOSPORHORASEXTRAS = PAGOSPORHORASEXTRA
    }

    get leerRFC() { return this.#RFC }
    
    set modificarRFC(nuevorfc) {
        try {
            if (!nuevorfc || nuevorfc.trim() === "") throw new EmpleadoError(`RFC VACÍO`)
            if (nuevorfc.length !== 12) throw new EmpleadoError(`RFC DEBE TENER 12 CARACTERES`)
            if (nuevorfc.startsWith(".") || nuevorfc.endsWith(".")) throw new EmpleadoError(`RFC NO PUEDE EMPEZAR O TERMINAR CON .`)
            this.#RFC = nuevorfc
        } catch (error) { console.error(error.message) }
    }

    get leerSueldoBase() { return this.#SUELDOBASE }
    
    set modificarSueldoBase(baseSueldo) {
        try {
            if (baseSueldo < 200) throw new EmpleadoError(`SUELDO BASE MENOR A 200`)
            this.#SUELDOBASE = baseSueldo
        } catch (error) { console.error(error.message) }
    }

    get leerHorasExtra() { return this.#HORASEXTRASREALIZADAS }
    
    set modificarHoras(nuevasHoras) {
        if (nuevasHoras < 0) console.log(`NO TRABAJO HORAS EXTRAS`)
        else console.log(`HORAS EXTRAS: ${nuevasHoras}`)
        this.#HORASEXTRASREALIZADAS = nuevasHoras
    }

    get leerPagosPorHorasExtras() { return this.#PAGOSPORHORASEXTRAS }
    
    set modificarPagosPorHorasExtra(horitas) {
        if (horitas > 0) {
            let operacion = this.leerSueldoBase * this.leerHorasExtra
            console.log(`PAGO POR HORAS EXTRAS: ${operacion}`)
        }
        this.#PAGOSPORHORASEXTRAS = horitas
    }
}