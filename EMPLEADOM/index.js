import { Empleado } from './Empleado.js'

let Hormiguitas = new Empleado("2hbdbdey.", 800, 5, 100, "EVELIN", 23, "MANTENIMIENTO")

Hormiguitas.modificarRFC = "aabche12228ej"
Hormiguitas.modificarSueldoBase = 1500
Hormiguitas.modificarHoras = 4
Hormiguitas.modificarPagosPorHorasExtra = 450

Hormiguitas.VisualizacionBasica()
Hormiguitas.mostrarInfo()