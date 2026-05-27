export class ErrorValidacio  extends Error{
    constructor(avisito){
        super(avisito)
            this.name="VALIDACIÓN_INCORRECTA"
        
    }
}