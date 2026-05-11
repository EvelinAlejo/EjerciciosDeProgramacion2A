import { PersonalMedico } from './PersonalMedico.js';

export class Doctor extends PersonalMedico {
    constructor(id, nombre, departamento, especialidad) {
        super(id, nombre, departamento);
        this.especialidad = especialidad;
    }
    
    mostrar() {
        console.log(`ID: ${this.id} \nNombre: ${this.nombre} \nDepartamento: ${this.departamento} \nEspecialidad: ${this.especialidad}`);
    }
}