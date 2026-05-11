class EmpleadoError extends Error {
    constructor(aviso) {
        super(aviso)
        this.name = "ERROREMPLEADO"
    }
}

class Base {
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

    get leerRFC() { 
        return this.#RFC 
    }
    
    set modificarRFC(nuevorfc) {
        try {
            if (!nuevorfc || nuevorfc.trim() === "") throw new EmpleadoError("RFC VACIO")
            if (nuevorfc.length !== 12) throw new EmpleadoError("RFC DEBE TENER 12 CARACTERES")
            if (nuevorfc.startsWith(".") || nuevorfc.endsWith(".")) throw new EmpleadoError("RFC NO PUEDE EMPEZAR O TERMINAR CON .")
            this.#RFC = nuevorfc
            console.log(`RFC actualizado correctamente: ${nuevorfc}`)
        } catch (error) { 
            console.error(error.message) 
        }
    }

    get leerSueldoBase() { 
        return this.#SUELDOBASE 
    }
    
    set modificarSueldoBase(baseSueldo) {
        try {
            if (baseSueldo < 200) throw new EmpleadoError("SUELDO BASE MENOR A 200")
            this.#SUELDOBASE = baseSueldo
            console.log(`Sueldo base actualizado: ${baseSueldo}`)
        } catch (error) { 
            console.error(error.message) 
        }
    }

    get leerHorasExtra() { 
        return this.#HORASEXTRASREALIZADAS 
    }
    
    set modificarHoras(nuevasHoras) {
        if (nuevasHoras < 0) {
            console.log("NO TRABAJO HORAS EXTRAS")
        } else {
            console.log(`HORAS EXTRAS: ${nuevasHoras}`)
        }
        this.#HORASEXTRASREALIZADAS = nuevasHoras
    }

    get leerPagosPorHorasExtras() { 
        return this.#PAGOSPORHORASEXTRAS 
    }
    
    set modificarPagosPorHorasExtra(horitas) {
        if (horitas > 0) {
            let operacion = this.leerSueldoBase * this.leerHorasExtra
            console.log(`PAGO POR HORAS EXTRAS: ${operacion}`)
        }
        this.#PAGOSPORHORASEXTRAS = horitas
    }
}

class Empleado extends Base {
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

// Crear objeto y probar
let Hormiguitas = new Empleado("2hbdbdey.", 800, 5, 100, "EVELIN", 23, "MANTENIMIENTO")

console.log("=== CONFIGURACION INICIAL ===")
Hormiguitas.VisualizacionBasica()
Hormiguitas.mostrarInfo()

console.log("\n=== MODIFICANDO DATOS ===")
Hormiguitas.modificarRFC = "aabche12228ej"
Hormiguitas.modificarSueldoBase = 1500
Hormiguitas.modificarHoras = 4
Hormiguitas.modificarPagosPorHorasExtra = 450

console.log("\n=== DATOS FINALES ===")
Hormiguitas.VisualizacionBasica()
Hormiguitas.mostrarInfo()