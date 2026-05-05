class PatitaFeliz{
    //compocisión
    constructor(nomnreTienda, ubicacion){
        this.nomnreTienda=nomnreTienda
        this.ubicacion=ubicacion

    }

    mostrarInfoTienda(){
        console.log(`${this.nomnreTienda} \n ubicado en ${this.ubicacion}`)
    }
}

let perrera=new PatitaFeliz("PATITA FELIZ", "CALLE MIGUEL HIDALGO" )
perrera.mostrarInfoTienda()

class Mascota{ // esta no hereda a patita feliz por que 
    // patita es una tienda y patita solo tiene mascotas la tienda no es una mascota 


    static animalitos=[]
    constructor(nombre, edad, ){
        this.nombre=nombre
        this.edad=edad
        this.dueño=dueño

    }
    mostrarInfoMascota(){
        console.log(`la mascota es : ${this.nombre} \n con la edad de : ${this.edad} \n con su dueño ${this.dueño}`)
    }

    hablar(){ // metoddo para que la mascota hable poliformismo
        console.log("animal hace sonido")

    }
}
class Perro extends Mascota{
    constructor(nombre, edad, raza, vacunas,paseos){
        super(nombre, edad,)
        this.raza=raza
        this.vacunas=vacunas
        this.paseos=paseos
    }

    hablar(){
        console.log(`gu gua guaa`)
    }

    pasear(paseoX){
        if(paseoX<=0){
            this.paseos=paseoX // modifixo con metodos 
            return this.paseos
        }

    }

    vacunar(vacunitas){
        if(vacunitas<=0){
            console.log(`el perro tien cero vacunas `)
        }
        this.vacunas=true

    }

    
}