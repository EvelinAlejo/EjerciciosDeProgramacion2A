import { Cuenta } from './Cuenta.js';

export class Ahorro extends Cuenta {
    constructor(numeroDeCuenta, saldo, tipo, nombre, intereses = 0.1) {
        super(numeroDeCuenta, saldo, tipo, nombre);
        this.intereses = intereses;
    }

    aplicarInteres() {
        let ganancia = this.saldo * this.intereses;
        this.saldo += ganancia;
        console.log(`INTERÉS APLICADO: ${this.intereses * 100}%. NUEVO SALDO: ${this.saldo}`);
    }
}