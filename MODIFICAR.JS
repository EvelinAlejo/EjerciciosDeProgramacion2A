// metodos para modificar propiedades 

class Oso{
    constructor(nombre , edad){
        this.nombre=nombre
        this.edad=edad
    }

    saludar(){
        console.log(`so ${this.nombre} y tengo ${this.edad} años `)
    }

    cambiarN(nuevoNombre){
        this.nombre=nuevoNombre
        return this.nombre
    }

    cambiarE(nuevaEdad){
        this.edad=nuevaEdad
        return this.edad
    }

    mostrarTodo(){
        console.log(`oso es : ${this.nombre} \n ${this.edad} años `)
    }
}

let moster =new Oso ("jogui" , 2)

moster.saludar()
console.log(`nueva información  despues de 3 años `)
moster.cambiarN( "pistolita", )
moster.cambiarE(5)
moster.mostrarTodo()
