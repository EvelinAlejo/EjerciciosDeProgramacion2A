class Estudiante{
    #nombre
    #calificacion
    constructor(nombre, calificacion){
        this.#nombre=nombre
        this.#calificacion=calificacion

    }

    #validarCali(valorCali){
        if(valorCali>=70 && valorCali <=100){
            this.#calificacion=valorCali
            console.log("aprovado ")
        }else{
            console.log(`reprobado`)
        }
    }

    get obtenerCali(){
        return this.#calificacion
    }

    set newCalificacion(cal){
        return this.#validarCali(cal)
    }

    mostrarInfo(){
        console.log(`el estudiante es : ${this.#nombre} con calificacion de ${this.#calificacion}`)
    }
}

let alumno =new Estudiante("evelin", 99)
// METODOS CONTROLADOS 
alumno.obtenerCali // se le manda a llamar como una variable 
alumno.newCalificacion(79)
alumno.mostrarInfo() 

