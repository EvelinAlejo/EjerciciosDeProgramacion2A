class Auto {
    constructor(marca, modelo, año, matricula) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.matricula = matricula;
    }

    infoMostrar() {
        console.log(`Los datos del auto son: 
        Marca: ${this.marca}, 
        Modelo: ${this.modelo},  
        Año: ${this.año},  
        Matrícula: ${this.matricula}`);
    }
}

class Cliente {
    constructor(nombre, telefono, email) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }
    infocli() {
        console.log(`El cliente es: 
        Nombre: ${this.nombre}, 
        Teléfono: ${this.telefono}, 
        Email: ${this.email}`);
    }
}

let deportivo = new Auto("Toyota", "17s", 2026, "23aQQ");
deportivo.infoMostrar();

let dineroCLI = new Cliente("Evelin", 9873457, "techy@gmail.com");
dineroCLI.infocli();

class Reparacion {
    // Recibimos el cliente y auto en el constructor objtos ya creados 
    constructor(auto, cliente, descripcion, costoManoDeObra, costoDeRepuesto) { // aqui hay una composicion 
        this.Cliente = cliente;
        this.Auto = auto;
        this.descripcion = descripcion;
        this.costoManoDeObra = costoManoDeObra;
        this.costoDeRepuesto = costoDeRepuesto;
        this.estaCompletada = false;
    }

    calcularCostoTotal() {
        let saber = this.costoManoDeObra + this.costoDeRepuesto;
        console.log(`El costo total de la reparación es: ${saber}`);
        return saber;
    }

    completarReparacion() {
        this.estaCompletada = true;
        return this.estaCompletada;
    }

    generarFactura() {
        if (this.estaCompletada) {
            let costoTotal = this.calcularCostoTotal();
            console.log(`\n______FACTURA_____\n`);
            console.log(`Auto: 
            Marca: ${this.Auto.marca},  // Aquí usamos this.Auto para acceder a las propiedades del objeto Auto

            Modelo: ${this.Auto.modelo}, 
            Año: ${this.Auto.año},  
            Matrícula: ${this.Auto.matricula}`);
            console.log(`Cliente: 
            Nombre: ${this.Cliente.nombre},   // Aquí usamos this.Cliente para acceder a las propiedades del objeto Cliente
            Teléfono: ${this.Cliente.telefono}, 
            Email: ${this.Cliente.email}`);
            console.log(`Reparación: 
            Descripción: ${this.descripcion}, 
            Costo Mano de Obra: ${this.costoManoDeObra}, 
            Costo de Repuesto: ${this.costoDeRepuesto},  
            Total a pagar: ${costoTotal}`);
        } else {
            console.log(`La reparación aún no está completa.`);
        }
    }
}

// Ahora sí pasamos Auto y Cliente al constructor
let NuevaChamba = new Reparacion(deportivo, dineroCLI, "Reparación de motor", 234, 500);
NuevaChamba.calcularCostoTotal();
NuevaChamba.completarReparacion();
NuevaChamba.generarFactura();



