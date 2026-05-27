import { Menu } from "./base.js";
import promptSync from "prompt-sync";
const prompt = promptSync()

export class Arreglo{
    static mesas = [[], [], [], [], []]  // 5 mesas

    static registrar(){
        try{
            console.log("\n--- NUEVO PEDIDO ---")
            
            let mesa = parseInt(prompt("Mesa (1-5): ")) - 1
            if(mesa < 0 || mesa > 4) throw new Error("Mesa inválida")
            //estamos diciendo que si es menor a cero no , y no puede ser mayor a 4 
            console.log("Cantidades:")
            let sencilla = parseInt(prompt("Sencilla ($15): "))
            let queso = parseInt(prompt("Con queso ($18): "))
            let especial = parseInt(prompt("Especial ($20): "))
            let papas = parseInt(prompt("Papas ($8): "))
            let postre = parseInt(prompt("Postre ($6): "))
            let refresco = parseInt(prompt("Refresco ($5): "))
            
            let pedido = new Menu(sencilla, queso, especial, papas, postre, refresco)
            this.mesas[mesa].push(pedido)// // este es mi indice de mi jumero de mesas [mesas]*
            
            console.log(` Mesa ${mesa+1} - Total: $${pedido.calcularTotal()}`)
            
        } catch(e){
            console.log( e.message)
        }
    }

    static mostrarTodos(){
        console.log("\n=== TODOS LOS PEDIDOS ===")
        
        for(let m = 0; m < 5; m++){
            if(this.mesas[m].length > 0){
                let totalMesa = 0
                console.log(`\n MESA ${m+1}:`)
                
                this.mesas[m].forEach((p, i) => {
                    let total = p.calcularTotal()
                    totalMesa += total
                    console.log(`   Pedido ${i+1}: $${total}`)
                })
                console.log(`    Total mesa: $${totalMesa}`)
            }
        }
    }
}