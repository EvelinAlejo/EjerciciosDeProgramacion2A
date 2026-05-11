import { Reserva } from './Reserva.js'; // <- Debe importar a Reserva, NO a ReservaVip

export class ReservaVip extends Reserva { // <- Asegúrate de que diga 'export class'
    constructor(nombre, numPersonas, fecha, hora, beneficio) {
        super(nombre, numPersonas, fecha, hora);
        this.beneficio = beneficio;
    }

    mostrar() {
        return `[VIP] ${super.mostrar()} | Beneficio: ${this.beneficio}`;
    }
}