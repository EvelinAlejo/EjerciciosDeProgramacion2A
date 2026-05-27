export class Validacion extends Error{
    constructor(ass){
        super(ass)
        this.name="ERROR_VALIDACIÓN"
    }
}