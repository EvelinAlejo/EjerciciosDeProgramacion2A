export class EmpleadoError extends Error {
    constructor(aviso) {
        super(aviso)
        this.name = "ERROREMPLEADO"
    }
}