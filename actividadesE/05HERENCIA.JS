class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    describir(){
        return `Soy ${this.nombre} y tengo ${this.edad} años`; // Corregido: "return" en lugar de "retur"
    }    
}

class Perro extends Animal{ // Animal es nuestra clase padre o super clase
    ladrar(){
        return "GUA GUA"; // Cambiado: ahora retorna el string en lugar de hacer console.log
    }
}

let miFirulais = new Perro("firulais", 1);
console.log(miFirulais.ladrar()); // Imprime: GUA GUA
console.log(miFirulais.describir()); // Imprime: Soy firulais y tengo 1 años






    // prettier