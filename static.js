class Usuario{ // caja de colores
    static colores = []
    constructor(color){
        this.color=color
    }

    // metodo para guardar en la caja compartida 
    guardar(){
        //Usuario.colores.push(this.color) 
        this.constructor.colores.push(this.color)
        console.log(`guarde ${this.color}`)

        // └─ this.constructor → va a la CLASE
        //    └─ .colores → busca el static
        //       └─ .push() → agrega
        //          └─ (this.color) → SOLO el color, no todo

    }

}

let caja1=new Usuario("navy")
caja1.guardar()
console.log(Usuario.colores) // es clase . static