class Persona {
    static clientes = []
    
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    guardarDatos() {
        let datos = {
            nombre: this.nombre,  
            edad: this.edad
        }
        Persona.clientes.push(datos)  
    }

    static obtenerDatos() {
        return Persona.clientes  
    }
}

let cliente1 = new Persona("evelin", 12)
let cliente2 = new Persona("dan", 16)

cliente1.guardarDatos()
cliente2.guardarDatos()

console.log(Persona.obtenerDatos())