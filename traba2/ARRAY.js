import { E } from "./ERROR.js";
import { Base } from "./BASE.js";
import promptSync from "prompt-sync";
const prompt = promptSync()

export class ArrayT{
    static vacio=[]

    static pedirYmeter(){
        try{
        //pedir 
        let pedirN=prompt("ingresa tu nombre: ")
        if(!pedirN || pedirN.trim()===""){
            throw new E("nombre invalido,  vacio ")
        }

        let pedirE=parseInt(prompt("ingresa tu edad: "))
        if(!pedirE || isNaN(pedirE)){
            throw new E("edad invalida ")

        }

        let pedirA=parseFloat(prompt("ingresa tu estatura "))

        let pedirS=prompt("ingresa tu sexo (F/M): ").toLowerCase()
        if(pedirS !=="f"  && pedirS !=="m"){ // && una se debe de cumplir 
            throw new E("sexo invalido ")
        }

        //meter y crear objeto 

        const trabajador=new Base(pedirN, pedirE,pedirA,pedirS);
        this.vacio.push(trabajador)

        //imprimir array 
        console.log(`${pedirN} guardado en el arreglo `)

        }catch(x){
            console.error(x.message)
            return false
        }
    }

    static mostrarTrabajadores(){
        if(this.vacio.length ===0){
            console.log("no hay trabajadores registrados ")
            return
        }

        //imprimir a mis trabajadores

        console.log(`lista de achichincles: `)
        this.vacio.forEach((t , i ) =>{
            console.log(`${i+1}.  nombre ${t.leerN} edad ${t.leerE}  altura${t.leer.A}  sexo${t.leerS}`)
        })
    }


}