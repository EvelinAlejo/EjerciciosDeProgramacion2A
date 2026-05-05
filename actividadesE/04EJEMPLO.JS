class Estudiante {  
    constructor(nombre, matricula, promedio) {
        this.nombre = nombre;        
        this.matricula = matricula;  
        this.promedio = promedio;    
    }
    mostrarInformacion() {
        console.log(`EL ESTUDIANTE ES: ${this.nombre} SU MATRICULA ES: ${this.matricula}`);
    }
    actualizarPromedio(nuevoPromedio) {
        this.promedio = nuevoPromedio;
    }
    aprobado() {
        if (this.promedio >= 70) {
            console.log("APROBADO");
        } else {
            console.log("REPROBADO");
        }
    }
}
// Crear el objeto - MISMO NOMBRE DE LA CLASE
let estudiante1 = new Estudiante("EVELIN ÁNGELES ALEJO ESTRADA", "2E20043", 89); // en new estudinate se llam a ala clase
// Probar
estudiante1.mostrarInformacion();
estudiante1.aprobado();
estudiante1.actualizarPromedio(80);
estudiante1.aprobado();