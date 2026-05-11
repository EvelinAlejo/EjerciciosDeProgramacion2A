import { Reserva } from './Reserva.js';

export class ReservaNormal extends Reserva {
    constructor(nombre, numPersonas, fecha, hora) {
        super(nombre, numPersonas, fecha, hora);
    }

    mostrar() {
        return `[NORMAL] ${super.mostrar()}`;
    }
}