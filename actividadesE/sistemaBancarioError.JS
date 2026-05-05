// SISTEMA BANCARIO
//CUENTA DE AHORRO
class Cuentas{ // clase padre 
    constructor(numeroDeCuenta, saldo,tipo,nombre){
        this.numeroDeCuenta=numeroDeCuenta,
        this.saldo=saldo,
        this.tipo=tipo,
        this.nombre=nombre
    }

    deposito(monto){
        if(monto>0){
            this.saldo+=monto;
            console.log(`EL DEPOSITO A SIDO REALIZADO CORRECTAMENTE `)
        }
    }z

    retirar(monto){
        if(monto<=this.saldo){
            this.saldo-=monto;
            console.log(`RETIRO EXCELENTE SU NUEVO SALDO ES ${this.saldo}`)
        }
    }

    consultarSaldo(){
        console.log(` EL SALDO ES : ${this.saldo}`)
    }
}

// clase hija cuenta de ahorro 

class Ahorro extends Cuentas{
    constructor(numeroDeCuenta, saldo,tipo, intereses=0.1, nombre){  //0.1
        super(numeroDeCuenta, saldo,tipo, intereses,nombre)
        this.intereses=intereses
    }

    aplicar(monto){ // es para aplicar intereses
        let tasa= this.saldo*this.intereses;
        this.saldo+=
        console.log(`EL INTERES APLICADO ES : ${this.intereses} CON SALDO ACTUAL${this.saldo}`)
    }

}

// clase 2 clase hija 2 
class Corriente  extends Cuentas{
    constructor(numeroDeCuenta, saldo,tipo, intereses=0.1, limite=2000, nombre){
        super(numeroDeCuenta, saldo,tipo, intereses=0.1, limite, nombre)
        this.limite=limite
    }

    especial(monto){
        if(this.saldo<=this.limite){
            console.log(` EL RETIRO ESPECIAL ES DE : ${this.saldo} REALIZADO`)
        }
    }
}
// ARREGLO DE CLIENTES 
const clientes= [
    
    new Ahorro ("A107",3000,"AHORRO","SOFIA ARIADNE"),
    new Corriente ("AB67",2000,"CORRIENTE","DIEGO ARIADNE"),
    new Ahorro ("E380",4000,"AHORRO","LILYS")
] 
    
    
clientes.map(cuenta=>{
    console.log(`nombre: ${cuenta.nombre} , SALDO: ${cuenta.consultarSaldo()} , TIPO${cuenta.tipo}`)
})

// EN LA DE AHORRO SE SUMA INTEREST Y EN LA DE LA OTRA ES RESTA 

