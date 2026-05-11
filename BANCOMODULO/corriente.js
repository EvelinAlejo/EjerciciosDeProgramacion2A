import { Cuenta } from './Cuenta.js';

export class Corriente extends Cuenta {
    constructor(numeroDeCuenta, saldo, tipo, nombre, limite = 2000) {
        super(numeroDeCuenta, saldo, tipo, nombre);
        this.limite = limite;
    }

    retiroEspecial(monto) {
        if (monto <= (this.saldo + this.limite)) {
            this.saldo -= monto;
            console.log(`RETIRO ESPECIAL DE ${monto} REALIZADO. NUEVO SALDO: ${this.saldo}`);
            return true;
        }
        console.log("RETIRO DENEGADO: EXCEDE EL LÍMITE DE SOBREGIRO.");
        return false;
    }
}