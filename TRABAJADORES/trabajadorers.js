export class Trabajador {
    #NOMBRE;
    #HORAS_TRABAJADAS;
    #PAGOPORHORA;

    constructor(NOMBRE, HORAS_TRABAJADAS, PAGOPORHORAS) {
        this.#NOMBRE = NOMBRE;
        this.#HORAS_TRABAJADAS = HORAS_TRABAJADAS;
        this.#PAGOPORHORA = PAGOPORHORAS;
    }

    // Desencapsulamiento get
    get leerNombre() {
        return this.#NOMBRE;
    }
    get leerHorasTrabajadas() {
        return this.#HORAS_TRABAJADAS;
    }
    get leerPagosPOrHoras() {
        return this.#PAGOPORHORA;
    }

    // Modificar set
    set modificarNombre(n) {
        this.#NOMBRE = n;
    }
    set modificarHorasTrabajadas(tr) {
        this.#HORAS_TRABAJADAS = tr;
    }
    set modificarPagos(pg) {
        this.#PAGOPORHORA = pg;
    }
}

