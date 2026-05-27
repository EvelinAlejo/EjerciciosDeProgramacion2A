import { ArrayT } from "./ARRAY.js";
import promptSync from "prompt-sync";
const prompt=promptSync();


function menu(){
    console.log(" 1 agregar achichincle: ")
    console.log(" 2 ver a los  achichincles: ")
    console.log(" 3    salir  para no ver al  achichincle: ")

    let opcion=prompt("elige una opcion: ")
    switch(opcion){
        case"1":
        ArrayT.pedirYmeter()
        break

        case"2":
        ArrayT.mostrarTrabajadores()
        break

        case"3":
        console.log("bay")
        return false

    }

    return true 
}

async function main(){
    console.log("sistema")
    let continuar=true
    while(continuar){
        continuar=menu()
    }
}
main()



//ArrayT.pedirYmeter();

//console.log(`agregado`, ArrayT.vacio)

//if(ArrayT.vacio[0]){//usando get 
   // console.log(`nombre: ${ArrayT.vacio[0].leerN}`)
   // console.log(` edad: ${ArrayT.vacio[0].leerE}`)
    //console.log(`altura: ${ArrayT.vacio[0].leerA}`)
    //console.log(`sexo: ${ArrayT.vacio[0].leerS}`)
//}