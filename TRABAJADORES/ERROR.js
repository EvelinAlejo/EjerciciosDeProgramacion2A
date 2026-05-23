export class ErrorEmpleado extends Error{
    constructor(avisito){
        super(avisito)
        this.name="ERROR_EMPLEADO"
    }
}