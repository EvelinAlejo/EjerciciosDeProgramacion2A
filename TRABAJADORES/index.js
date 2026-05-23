import promptSync from 'prompt-sync';
import { Calculos } from "./calculos.js";
import { Almacen } from "./Almacen.js";

const prompt = promptSync();

class Index {
    static iniciarMenu() {
        const gestorCalculos = new Calculos();
        let continuar = true;

        while (continuar) {
            console.log("\n--- MENÚ DE REGISTRO ---");
            console.log("1. Registrar trabajador");
            console.log("2. Mostrar trabajadores");
            console.log("3. Salir");
            
            let opcion = prompt("Selecciona una opción (1-3): ");

            switch (opcion) {
                case "1":
                    gestorCalculos.calculitos();
                    break;
                case "2":
                    Almacen.recorrer();
                    break;
                case "3":
                    console.log("\nSaliendo del sistema... ¡Hasta luego!");
                    continuar = false;
                    break;
                default:
                    console.log("\nOpción no válida. Intenta de nuevo.");
                    break;
            }
        }
    }
}

// Inicializamos la aplicación
Index.iniciarMenu();