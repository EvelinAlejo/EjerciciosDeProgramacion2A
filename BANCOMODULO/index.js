import { Ahorro } from './Ahorro.js';
import { Corriente } from './Corriente.js';

const clientes = [
    new Ahorro("A107", 3000, "AHORRO", "SOFIA ARIADNE"),
    new Corriente("AB67", 2000, "CORRIENTE", "DIEGO ARIADNE"),
    new Ahorro("E380", 4000, "AHORRO", "LILYS")
];

// Mostrar estado inicial
console.log("--- ESTADO INICIAL DE CUENTAS ---");
clientes.forEach(cuenta => {
    console.log(`Nombre: ${cuenta.nombre} | SALDO: ${cuenta.consultarSaldo()} | TIPO: ${cuenta.tipo}`);
});

console.log("\n--- OPERACIONES ---");
// Probar operaciones específicas
clientes[0].aplicarInteres();      // Aplica interés a Sofía (+ suma)
clientes[1].retiroEspecial(2500);   // Retiro especial a Diego (- resta del saldo usando el límite)