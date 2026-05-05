class Estudiante{
    // variables privadas 
    #nombre= "evelin"
    #years=18
    #activo=true
    #notas=[]
    #cursos=["js", "java", "python"]
    #matricula

    constructor(nombre, years, matricula){
        this.#nombre=nombre
        this.#years=years
        this.#matricula=matricula

    }

    #validarNota(nota){
        return nota>=0 && mota<=10
    }

    get regresarN(){
        return this.#nombre
    }

    get regresarY(){
        return this.#years
    }

    get regresarM(){
        return this.#matricula
    }



}

const alu = new Estudiante("evelin ", 20, "234gfeq")
console.log(alu.regresarN)
console.log(alu.regresarY)

console.log(alu.regresarM)
console.log(alu.regresarN="evy")

const  varG=alu.matricula
console.log(varG)