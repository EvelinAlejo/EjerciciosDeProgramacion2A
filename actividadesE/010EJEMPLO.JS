class PersonalMedico {
    static registro = []; // Arreglo estático
    
    constructor(id, nombre, departamento) {
        this.id = id;
        this.nombre = nombre;
        this.departamento = departamento;
    }
    
    // MÉTODO ESTÁTICO para agregar 
    static agregarPersonal(OB) {
        PersonalMedico.registro.push(OB); //OB ES PARAEMTRO 
        console.log(` Guardé: ${OB.nombre}`);
    }
    
    mostrar() {
        console.log(`ID: ${this.id} \nNombre: ${this.nombre} \nDepartamento: ${this.departamento}`);
    }
}

// SUBCLASE DOCTOR
class Doctor extends PersonalMedico {
    constructor(id, nombre, departamento, especialidad) {
        super(id, nombre, departamento);
        this.especialidad = especialidad;
    }
    
    mostrar() {
        console.log(`ID: ${this.id} \nNombre: ${this.nombre} \nDepartamento: ${this.departamento} \nEspecialidad: ${this.especialidad}`);
    }
}

// SUBCLASE ENFERMERO 
class Enfermero extends PersonalMedico {
    constructor(id, nombre, departamento, turno) {
        super(id, nombre, departamento);
        this.turno = turno; // matutino vespertino mixto
    }
    
    mostrar() {
        console.log(`ID: ${this.id} \nNombre: ${this.nombre} \nDepartamento: ${this.departamento} \nTurno: ${this.turno}`);
    }
}

// CREAR OBJETOS DE DOCTORES
let doctorcito1 = new Doctor("23AQ", "Jeronimo", "Cirugía", "Cirujano"); AEEE070814MCSLSVA2
let doctorcito2 = new Doctor("25DFR", "Maria Luisa", "Cardiología", "Cardióloga");

//  Usar Enfermero, no Doctor DE ENFERMEROS
let enfermerito1 = new Enfermero("24ADS", "Fernando", "Pediatría", "Mixto");
let enfermerito2 = new Enfermero("26CV", "Luis Raul", "Urgencias", "Matutino");

// GUARDAR EN STATIC (usando el método estático) 
PersonalMedico.agregarPersonal(doctorcito1);
PersonalMedico.agregarPersonal(doctorcito2); // clase padre . static metodo(objeto)
PersonalMedico.agregarPersonal(enfermerito1);
PersonalMedico.agregarPersonal(enfermerito2);

//  USAR .MAP() 
console.log("\n----- LISTA DE PERSONAL -----");
PersonalMedico.registro.map(persona => {  // Clase padre.static.map(variable=>)
    console.log(` ${persona.id} - ${persona.nombre}`); // esto es para ir desde id con nombre 
});

// Mostrar detalles con . map
console.log("\n----- DETALLES -----");
PersonalMedico.registro.map(persona => {
    persona.mostrar();
    console.log("---");
});