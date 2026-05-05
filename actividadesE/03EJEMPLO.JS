/* calcular el área de un rectangulo utilizando las clases de js 
*/

class Rectangulo{
    constructor(base, altura){

        this.base=base; // b*h
        this.altura=altura; // 2b * 2h

    }
    calcular_Area(){
        return this.base* this.altura;

    }

    calcular_Perimetro(){
        return(2*this.base)+ (2*this.altura);

    }

    get obtenerArea(){
        return this.calcular_Area();
    }
    get obtenerP(){
        return this.calcular_Perimetro();
    }
}

let rectangulo=new  Rectangulo(
    199,288
);
console.log(rectangulo.obtenerArea);
console.log(rectangulo.obtenerP);




