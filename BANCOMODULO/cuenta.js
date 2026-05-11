export class Cuenta {
    constructor(numeroDeCuenta, saldo, tipo, nombre) {
        this.numeroDeCuenta = numeroDeCuenta;
        this.saldo = saldo;
        this.tipo = tipo;
        this.nombre = nombre;
    }

    deposito(monto) {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`EL DEPÓSITO HA SIDO REALIZADO CORRECTAMENTE.`);
        }
    }

    retirar(monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`RETIRO EXCELENTE. SU NUEVO SALDO ES: ${this.saldo}`);
            return true;
        }
        console.log("FONDOS INSUFICIENTES.");
        return false;
    }

    consultarSaldo() {
        return this.saldo;
    }
}