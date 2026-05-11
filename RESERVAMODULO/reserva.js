export class Reserva {
    constructor(nombre, numPersonas, fecha, hora) {
        this.nombre = nombre;
        this.numPersonas = numPersonas;
        this.fecha = fecha;
        this.hora = hora;
    }

    mostrar() {
        return `Cliente: ${this.nombre} | Personas: ${this.numPersonas} | Fecha: ${this.fecha} | Hora: ${this.hora}`;
    }
}