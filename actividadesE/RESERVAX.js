class Reserva{
    constructor(nombre, numPersonas,fecha,hora){
        this.nombre=nombre
        this.numPersonas=numPersonas
        this.fecha=fecha
        this.hora=hora
    }

    mostrar(){
        return `cliente ${this.nombre} personas ${this.numPersonas} fecha${this.fecha} hora ${this.hora}`
    }
}

class ReservaNormal extends Reserva{ // herencia
    constructor(nombre, numPersonas,fecha,hora){ // este es poara llamar al constructor de clase padre
        super(nombre, numPersonas,fecha,hora)

    }

    mostrar(){ //esto es plimorfismo ya que sobreescribimos el metodo mostrar de la clase padre en la clase hija 
        return `cliente ${this.nombre} personas ${this.numPersonas} fecha${this.fecha} hora ${this.hora}`
    }
}

class ReservaVip extends Reserva{ // herencia 
    constructor(nombre, numPersonas,fecha,hora, beneficio){ // este es poara llamar al constructor de clase padre
        super(nombre, numPersonas,fecha,hora,)
        this.beneficio=beneficio
    }
    mostrar(){ //esto es plimorfismo ya que sobreescribimos el metodo mostrar de la clase padre en la clase hija 
        return `cliente ${this.nombre} personas ${this.numPersonas} fecha${this.fecha} hora ${this.hora}`
    }
}

// creamos un arreglo vacio para guardar las reservas 
let reservasX=[]

// agregar reservas 
let reserva1=new ReservaNormal("pancho", 23, "07/09/2026" , "8:37")// nombre, numPersonas,fecha,hora
let reserva2=new ReservaNormal("amy", 2, "01/11/2026", "9:30")
let reserva3=new ReservaVip("osiris", 9, "02/10/2026", "10:30")
let reserva4=new ReservaVip("asis", 8, "09/12/2026","3:40")

//agregar ala arreglo
reservasX.push(reserva1)
reservasX.push(reserva2)
reservasX.push(reserva3)
reservasX.push(reserva4)

//usar .map 
//nombre del array.map(variable=>{
    //})

reservasX.map((res)=>{
    console.log(res.mostrar())
})