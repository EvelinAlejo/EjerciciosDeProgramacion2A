class Persona{
    constructor(nombre, curp, Edad){
        this._Nombre=nombre; // todos los this son instanciar,  se estan pasando los vaolres  del constructor a las variables que enpiezan con letra mayuscula 
        this._Curp=curp;
        this._Edad=Edad;
    }
    SaludarPersona(){ // esto es una funcion un metodo
        console.log(`soy ${this._Nombre} y la curpr es  ${this._Curp} y la edad es  ${this._Edad}`)

    }
}

let persona1= new Persona( // Persona es la clase
    "evelin ", "bdbcebedbdxb", 18,)

persona1.SaludarPersona();
  // any es una variable que no tine valor pero si lo va a recibir la variable let persona1 esta pidiendo valores a la class Persona 

let osos= new Persona(
    "jogui",  "hdbbdjw", 13
)

osos.SaludarPersona();

let la_popis=new Persona(
    "la popis", "hbhdbjfc" , "12"
)
la_popis.SaludarPersona();
