class Vehiculo{
    #modelo
    #marca
    #color
    #año
    #encendido

    constructor(modelo, marca,color,año, encendido){
        this.#modelo=modelo
        this.#marca=marca
        this.#color=color
        this.#año=año
        this.#encendido=encendido
    }

    get modelo(){
        return this.#modelo
    }

    get marca(){
        return this.#marca
    }

    get color(){
        return this.#color
    }

    get año(){
        return this.#año
    }

    get encendido(){
        return this.#encendido
    }

    set encendidoVelocidad(valor){
        this.#encendido=valor
    }

    #modificarVelocidad(flash){
        if(flash>=0 && flash<=180){
            console.log(`velocidad permitida`)

        }else{
            console.log(`no esta permitido`)
        }
    }

    mostarInfo(velocidad){
        //console.log(`modelo ${this.#modelo}`)
        //console.log(`año ${this.#año}`)
        //console.log(`marca ${this.#marca}`)
        //console.log(`color ${this.#color}`)
        //console.log(`encendido ${this.#encendido}`)
        this.#modificarVelocidad(velocidad)
    }
    }


let ferrari =  new Vehiculo ("f40", 1989,"ferrari", "rojo" , false)

console.log(ferrari.modelo)
console.log(ferrari.año)
console.log(ferrari.marca)
console.log(ferrari.color)
console.log(ferrari.encendido) // false 
console.log("nueva velocidad", ferrari.encendido=true) // modificado con setter 

ferrari.mostarInfo(120 , "MODIFICADA a 120") // este si lleva () por que es un metodo publico  , velocidad
ferrari.mostarInfo(190 , "modificada a 190 ")
