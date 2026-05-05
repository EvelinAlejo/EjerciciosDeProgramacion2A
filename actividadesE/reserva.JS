// EJERCICIO 6  SISTEMA DE RESERVAS 06/03/2026
class Padre{
    static registroCliente=[] // esto es privado , es un array vacio, luego le voy a meter los clientes 
    static persona=[] // este es para el this. numeropersonas 


    constructor(nombreCliente, numeroPersona, fecha, hora,  ){
        this.nombreCliente=nombreCliente
        this.numeroPersona=numeroPersona
        this.fecha=fecha
        this.hora=hora
    }

    // metodo static para  agregar los CLIENTES  al static registro array para los nombres de los clientes 
    static agregarDatos(ob){ 
        Padre.registroCliente.push(ob)
        console.log(`GUARDADO: ${ob.nombreCliente}`)
    }

    // metod static para agregar  los numeros de personas 
    static agregarPersonas(op){
        Padre.persona.push(op)
        console.log(`GUARDADO : ${op.numeroPersona}`)
    }

    //metodo para mostrar  la info  del cliente  este no es static 
    mostrarC(){
        console.log(` EL CLIENTE ES : \n ${this.nombreCliente}`)
    }

    //metodo para mostrar  la info  de numero de personas   este no es static  
    mostrarP(){
        console.log(` EL LA PERSONA ES : \n ${this.numeroPersona}`) // mostrar solo se sobreescribe

    }
}



class ReservaNormal{
    constructor(nombreCliente, numeroPersona, fecha, hora,){
        this.reserva=false // esta no esta declarado en el constructor pero si esta dentro 
        this.nombreCliente=nombreCliente
        this.numeroPersona=numeroPersona
        this.fecha=fecha
        this.hora=hora

    }

    mostrarN(){ 
        console.log(` EL LA PERSONA ES : \n ${this.nombreCliente}`) // mostrar solo se sobreescribe
    }

    sinBeneficio(){
        console.log(`USTED  REALIZO UNA RESERVO NORMAL  \n : SIN BENEFICIO ADICIONAL , USTED PUEDE REALIZAR UNA RESERVA VIP Y OBTENDRA UN BENEFICIO ADICIONAL   `)
    }

    verificar(){ // esto es para saber si el cli si va a confirmar su reserva 
        if(this.reserva==false){
            console.log(`AUN NO HA RESERVADO NO SE ENCUENTRA EN EL SISTEMA ${this.nombreCliente}`)
        }
    }


}



class ReservaVIP{
    constructor(nombreCliente, numeroPersona, fecha, hora){
        this.nombreCliente=nombreCliente
        this.numeroPersona=numeroPersona
        this.fecha=fecha
        this.hora=hora

    }

    mostrarV(){
        console.log(` EL LA PERSONA ES : \n ${this.nombreCliente}`) // mostrar solo se sobreescribe
    }


    beneficioAdicional(){ // este es un metodo que solo le pertenece a esta clase  reservavip
        console.log(`USTED  REALIZO UNA RESERVO VIP \n : SU BENEFICIO ADICIONAL ES  UN POSTRE O \n  UNA MESA DICIONAL  `)


    }

}

// agregra los clientes al static registro con .map
    // Clase padre.static.map(variable=>{
    //  console.log (`${variable.instanci sin el this solo nombre de esta }`) })

Padre.registroCliente.push(cliencito=>{
    console.log(`${cliencito.nombreCliente}`)
})

// agregra las personas al static persona con .map
    // Clase padre.static.map(variable=>{
    //  console.log (`${variable.instanci sin el this solo nombre de esta }`) })

Padre.persona.push(personita=>{
    console.log(`${personita.numeroPersona}`)
})

// objetos de clinetes 
let customer1=new Padre("JEHU DIEGO CRUZ CRUZ ", 3, "06/03/2026", "8:30 am")//nombreCliente, numeroPersona, fecha, hora, 
let customer2=new Padre("ADEMIR FLORES HERNANDEZ  ", 6, "07/03/2026", "9:00 pm")
let customer3=new Padre("EVELIN ÁNGELES ALEJO ESTRADA ", 2, "05/04/2026", "9:30 am")

