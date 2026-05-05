// HERENCIA 
class Persona{
    constructor(nombre , edad ){
        this.nombre=nombre
        this.edad=edad
    }

    mostrarPersona(){
        console.log(`la persona es : ${this.nombre}, con edad de ${this.edad}`)
    }
}

console.log(`las personas son :`)
let personita1=new Persona("ademir", 23)
let personita2=new Persona("pancho aurelio" , 34)
// llamar metodos
personita1.mostrarPersona()
personita2.mostrarPersona()

// class hija
class Empleado extends Persona{
    constructor(nombre , edad , sueldoBase=300){
        super(nombre , edad )
        this.sueldoBase=sueldoBase
        this.aumenteo=200
    }

    mostrarEmpleado(){
        console.log(`el empleado es : ${this.nombre} , con edad de : ${this.edad} , sueldo de : ${this.sueldoBase}`)
    }

    modificarSueldo(){
        if(this.sueldoBase<=450){ // si 300 es menor que 450
            let suedoFinal=this.sueldoBase+this.aumenteo
            console.log(`el sueldo base es de ${this.sueldoBase}, y el aumneto es de ${this.aumenteo} total del sueldo es de : ${final}`)
            return suedoFinal
        }else{
            console.log(`no aplica aumento tu sueldo base es mayor de 450 psesos `)
        }
        return this.sueldoBase
    }

    
}

let empleadito1=new Empleado("emi", 23, 345)
let empleadito2=new Empleado("ami", 43, 400)
empleadito1.mostrarEmpleado()
empleadito1.modificarSueldo(120)
empleadito2.mostrarEmpleado()
empleadito2.modificarSueldo(200)
