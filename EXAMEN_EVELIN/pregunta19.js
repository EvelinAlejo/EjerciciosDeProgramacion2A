

class Estudiante  {
    #nombreX

    constructor(Nombre){
        this.#nombreX=Nombre
    }

    get leerN(){
        return this.#nombreX
    }

    set modificarN(n){
            this.#nombreX=n
    }

    mostrar(){
        console.log(`el nombre es : ${this.leerN}`)

    }
}

let nuevoEstudiante=new Estudiante("pricila")
nuevoEstudiante.mostrar()
console.log(nuevoEstudiante.leerN)
console.log(nuevoEstudiante.modificarN=("maría"), ":este es el nombre modificado con set")


