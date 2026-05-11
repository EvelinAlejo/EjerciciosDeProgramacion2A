import { PersonalMedico } from './PersonalMedico.js';

export class Enfermero extends PersonalMedico {
    constructor(id, nombre, departamento, turno) {
        super(id, nombre, departamento);
        this.turno = turno; 
    }
    
    mostrar() {
        console.log(`ID: ${this.id} \nNombre: ${this.nombre} \nDepartamento: ${this.departamento} \nTurno: ${this.turno}`);
    }
}