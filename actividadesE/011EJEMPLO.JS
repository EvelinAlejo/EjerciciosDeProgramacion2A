class RestaurantSagitario{ // esta es una clase pero esta no hereda a las clases reservas 
    constructor(nombre){ // por que restaurante contiene reservas pero las reservas no son restaurantes 
        this.nombre=nombre
    }
    mostrarRestaurante(){
        console.log(`EL RESTAURANTE :\n ${this.nombre} LOS ESPERA CON LOS BRAZOS ABIERTOS `)
    }
} // ESTA CLASE SOLO ES COMPOSICIÓN NO HERENCIA

class Reserva{
    static registroReserva=[] // array para reservas 
    constructor(nombreCliente, NumeroDePersonas, fecha, hora){
        this.nombreCliente=nombreCliente
        this.NumeroDePersonas=NumeroDePersonas
        this.fecha=fecha
        this.hora=hora
    }

    //metodo static para agregar clientes al array vacio 
    static agregarClientes(reserva){
        Reserva.registroReserva.push(reserva)
        console.log(`EL CLIENTE ES: ${reserva.nombreCliente}`) 
    }

    // metodo para info del cliente
    mostrar(){
        console.log(`EL CLIENTE ES: \n ${this.nombreCliente}  \n NÚMERO DE PERSONAS EN LA RESERVA ES : ${this.NumeroDePersonas} \n LA FECHA ESTABLECIDA ES : ${this.fecha} \n LA HORA ES :${this.hora}`)
    }
}

class ReservaNormal extends Reserva{ // esta si es herencia ya que la clase reserva normal si es un tipo de reserva osea es hija 
    constructor(nombreCliente, NumeroDePersonas, fecha, hora){
        super(nombreCliente, NumeroDePersonas, fecha, hora)
        this.confirmar=false
        this.tipo="NORMAL"
    }

    mostrar(){
        super.mostrar()
        console.log(`RESERVA: ${this.tipo}  
            ESTADO: ${this.confirmar ? 'CONFIRMADA': 'PENDIENTE'}`) // TERNARIO
    }

    sinBeneficio(){
        console.log(`${this.nombreCliente} HA REALIZADO UNA RESERVA ${this.tipo}`)
    }

    // esto es para saber si quiere la reserva 
    confirmarReserva(){
        this.confirmar=true
        console.log(`LA RESERVA DEL CLIENTE ${this.nombreCliente} ESTA CONFIRMADA `)
    }
}

// clase hija de reserva
class ReservaVip extends Reserva{
    constructor(nombreCliente, NumeroDePersonas, fecha, hora){
        super(nombreCliente, NumeroDePersonas, fecha, hora)
        this.confirmar=false
        this.tipo="VIP"
        this.beneficio=["mesa preferencial", "postre de cortesía"] 
    }

    mostrar(){
        super.mostrar()
        console.log(`CLIENTE ${this.nombreCliente} \n RESERVA ${this.tipo}`)
    }

    beneficioAdicional(){
        console.log(`EL CLIENTE ${this.nombreCliente} \n HA REALIZADO UNA RESERVA VIP \n SUS BENEFICIOS ADICIONALES SON: ${this.beneficio.join(" y ")}`)
    }
    
    // como tengo un array uso .map
    seleccionarBeneficio(beneficioSeleccionado){
        this.beneficio.map(bene=>{
            if(bene === beneficioSeleccionado){
                console.log(`EL CLIENTE ${this.nombreCliente} HA SELECCIONADO: ${bene}`)
            }
        })
    }
}

// NUEVA CLASE PARA EVENTOS GRANDES
class ReservaEvento extends Reserva{
    constructor(nombreCliente, NumeroDePersonas, fecha, hora, tipoEvento, requiereMontaje){
        super(nombreCliente, NumeroDePersonas, fecha, hora)
        this.confirmar=false
        this.tipo="EVENTO ESPECIAL"
        this.tipoEvento=tipoEvento // boda, cumpleaños, empresarial, etc
        this.requiereMontaje=requiereMontaje // true o false
        this.anticipo= this.calcularAnticipo() // 30% del total
        this.serviciosAdicionales=[] // música, decoración, etc
    }

    calcularAnticipo(){
        // Se requiere 30% de anticipo para eventos grandes
        let costoTotal = this.NumeroDePersonas * 350 // $350 por persona
        return costoTotal * 0.3
    }

    agregarServicioAdicional(servicio){
        this.serviciosAdicionales.push(servicio)
        console.log(`SERVICIO AGREGADO: ${servicio} PARA EL EVENTO DE ${this.nombreCliente}`)
    }

    mostrar(){
        super.mostrar()
        console.log(`TIPO DE RESERVA: ${this.tipo}`)
        console.log(`TIPO DE EVENTO: ${this.tipoEvento}`)
        console.log(`REQUIERE MONTAJE ESPECIAL: ${this.requiereMontaje ? 'SÍ' : 'NO'}`)
        console.log(`ANTICIPO REQUERIDO: $${this.anticipo}`)
        console.log(`SERVICIOS ADICIONALES: ${this.serviciosAdicionales.length > 0 ? this.serviciosAdicionales.join(', ') : 'NINGUNO'}`)
        console.log(`ESTADO: ${this.confirmar ? 'CONFIRMADA' : 'PENDIENTE'}`)
    }

    confirmarReserva(){
        this.confirmar=true
        console.log(`EVENTO DE ${this.nombreCliente} CONFIRMADO. ANTICIPO DE $${this.anticipo} PAGADO`)
    }

    coordinarEvento(){
        console.log(`\n--- COORDINACIÓN DEL EVENTO ---`)
        console.log(`CLIENTE: ${this.nombreCliente}`)
        console.log(`TIPO DE EVENTO: ${this.tipoEvento}`)
        console.log(`PERSONAS: ${this.NumeroDePersonas}`)
        console.log(`FECHA: ${this.fecha} - HORA: ${this.hora}`)
        console.log(`MONTAJE ESPECIAL: ${this.requiereMontaje ? 'REQUERIDO' : 'NO REQUERIDO'}`)
        console.log(`SERVICIOS SOLICITADOS: ${this.serviciosAdicionales.length > 0 ? this.serviciosAdicionales.join(', ') : 'NINGUNO'}`)
        console.log(`SE ASIGNARÁN MESEROS EXTRA Y COCINA ESPECIAL`)
    }
}

//objetos 
let customer1 = new ReservaVip("EVELIN", 3, "06/04/2026", "6:00 pm")
let customer2 = new ReservaNormal("JEHU DIEGO", 2, "08/09/2026", "6:00 pm")
let customer3 = new ReservaNormal("DIEGO", 4, "10/02/2026", "7:00 pm")
let customer4 = new ReservaNormal("SALMA", 8, "23/10/2026", "12:00 pm")
let customer5 = new ReservaNormal("SARA", 2, "12/09/2026", "12:00 pm")
let customer6 = new ReservaVip("KIM", 7, "15/05/2026", "1:00 pm")
// NUEVOS OBJETOS DE EVENTOS GRANDES
let evento1 = new ReservaEvento("BODA PÉREZ", 150, "20/12/2026", "7:00 pm", "Boda", true)
let evento2 = new ReservaEvento("EMPRESA XYZ", 80, "10/11/2026", "8:00 pm", "Evento Empresarial", false)

//AGREGAR RESERVAS AL STATIC (INCLUYENDO LOS EVENTOS)
Reserva.agregarClientes(customer1)
Reserva.agregarClientes(customer2)
Reserva.agregarClientes(customer3)
Reserva.agregarClientes(customer4)
Reserva.agregarClientes(customer5)
Reserva.agregarClientes(customer6)
Reserva.agregarClientes(evento1) // evento grande agregado
Reserva.agregarClientes(evento2) // evento grande agregado

console.log("\n=== TODAS LAS RESERVAS CON MAP ===\n")
Reserva.registroReserva.map((reserva, index) => {
    console.log(`--- RESERVA ${index + 1} ---`)
    reserva.mostrar()
    console.log("") // línea en blanco
})

console.log("\n=== CONFIRMAR RESERVAS NORMALES ===\n")
customer2.confirmarReserva()
customer3.confirmarReserva()
customer4.confirmarReserva()
customer5.confirmarReserva()

console.log("\n=== BENEFICIOS VIP ===\n")
customer1.beneficioAdicional()
customer1.seleccionarBeneficio("postre de cortesía")
customer6.beneficioAdicional()
customer6.seleccionarBeneficio("mesa preferencial")

console.log("\n=== SIN BENEFICIO (RESERVAS NORMALES) ===\n")
customer2.sinBeneficio()
customer3.sinBeneficio()
customer4.sinBeneficio()
customer5.sinBeneficio()

// NUEVA SECCIÓN PARA EVENTOS GRANDES
console.log("\n=== EVENTOS GRANDES ===\n")
evento1.mostrar()
evento1.agregarServicioAdicional("Música en vivo")
evento1.agregarServicioAdicional("Decoración floral")
evento1.confirmarReserva()
evento1.coordinarEvento()

console.log("\n")
evento2.mostrar()
evento2.agregarServicioAdicional("Proyector y pantalla")
evento2.agregarServicioAdicional("Coffee break")
evento2.confirmarReserva()
evento2.coordinarEvento()

console.log("\n=== MOSTRAR TODAS CON ESTADO ACTUALIZADO ===\n")
Reserva.registroReserva.map((reserva, index) => {
    console.log(`--- RESERVA ${index + 1} ---`)
    reserva.mostrar()
    console.log("") // línea en blanco
})

let sagitario = new RestaurantSagitario("SAGITARIO")
sagitario.mostrarRestaurante()