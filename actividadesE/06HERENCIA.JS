class Persona {
    constructor(nombre, apellido, curp) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.curp = curp; // Corregido: faltaba asignar el valor
    }

    mostrarInformacion() {
        return `Nombre: ${this.nombre} ${this.apellido} \nCURP: ${this.curp}`; // Corregido: \n en lugar de /n y quitado console.log
    }
}

class Estudiante extends Persona { // Corregido: "extends" no "extend", "Persona" no "persona"
    constructor(nombre, apellido, curp, carrera, matricula, semestre) {
        super(nombre, apellido, curp); // IMPORTANTE: llamar al constructor de la clase padre
        this.carrera = carrera;
        this.matricula = matricula;
        this.semestre = semestre;
    }
    
    infoEstudiante() {
        return `${this.mostrarInformacion()} \nCarrera: ${this.carrera}, Semestre: ${this.semestre}`; // Corregido: llamada correcta al método
    }
}

let estudiante1 = new Estudiante("evelin ", "alejo", "JUPE123456", "Ing. Sistemas", "2023001", "Segundo"); // Corregido: orden de parámetros
console.log(estudiante1.mostrarInformacion());
console.log(estudiante1.infoEstudiante());