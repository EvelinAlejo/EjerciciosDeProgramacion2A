import { EntradaDatos } from "./meter.js"; // ← asegurar .js
import { ArregloManager } from "./array.js"; // ← faltaba .js

// Pedir un nombre y guardarlo
EntradaDatos.PedirNombre();

// Ver el arreglo
console.log("Arreglo actual:", ArregloManager.misDatos);