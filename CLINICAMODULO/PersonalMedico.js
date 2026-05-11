export class PersonalMedico {
    static registro = []; 
    
    constructor(id, nombre, departamento) {
        this.id = id;
        this.nombre = nombre;
        this.departamento = departamento;
    }
    
    static agregarPersonal(OB) {
        PersonalMedico.registro.push(OB); 
        console.log(`Guardé: ${OB.nombre}`);
    }
    
    mostrar() {
        console.log(`ID: ${this.id} \nNombre: ${this.nombre} \nDepartamento: ${this.departamento}`);
    }
}