import { PersonalMedico } from './PersonalMedico.js';
import { Doctor } from './Doctor.js';
import { Enfermero } from './Enfermero.js';

// CREAR OBJETOS
let doctorcito1 = new Doctor("23AQ", "Jeronimo", "Cirugía", "Cirujano");
let doctorcito2 = new Doctor("25DFR", "Maria Luisa", "Cardiología", "Cardióloga");

let enfermerito1 = new Enfermero("24ADS", "Fernando", "Pediatría", "Mixto");
let enfermerito2 = new Enfermero("26CV", "Luis Raul", "Urgencias", "Matutino");

// GUARDAR EN EL REGISTRO ESTÁTICO
console.log("--- REGISTRANDO PERSONAL ---");
PersonalMedico.agregarPersonal(doctorcito1);
PersonalMedico.agregarPersonal(doctorcito2); 
PersonalMedico.agregarPersonal(enfermerito1);
PersonalMedico.agregarPersonal(enfermerito2);

// USAR .forEach() PARA RECORRER
console.log("\n----- LISTA DE PERSONAL -----");
PersonalMedico.registro.forEach(persona => {  
    console.log(` ${persona.id} - ${persona.nombre}`); 
});

console.log("\n----- DETALLES -----");
PersonalMedico.registro.forEach(persona => {
    persona.mostrar();
    console.log("---");
});