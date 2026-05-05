class Material {
    constructor(titulo, autor) { // quitamos 'disponible' de parámetros
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true; // siempre inicia como true
    }

    mostrarInfo() { 
        console.table(`TÍTULO: ${this.titulo} | AUTOR: ${this.autor} | DISPONIBLE: ${this.disponible ? 'Sí' : 'No'}`);
    }

    prestar() {
        if (this.disponible) {
            this.disponible = false;
            console.log(` EL MATERIAL "${this.titulo}" HA SIDO PRESTADO`);
        } else {
            console.log(` EL MATERIAL "${this.titulo}" NO ESTÁ DISPONIBLE`);
        }
    }

    devolver() {
        if (!this.disponible) { 
            this.disponible = true;
            console.log(` EL MATERIAL "${this.titulo}" HA SIDO DEVUELTO`);
        } else {
            console.log(` EL MATERIAL "${this.titulo}" YA ESTABA DISPONIBLE`);
        }
    }
}

class Libro extends Material {
    constructor(titulo, autor, numeroPaginas) { 
        super(titulo, autor);
        this.numeroPaginas = numeroPaginas;
    }
    
    mostrarInfo() {
        console.log(` LIBRO: ${this.titulo} | ${this.autor} | Págs: ${this.numeroPaginas} | Disponible: ${this.disponible ? 'Sí' : 'No'}`);
    }
}

class Revista extends Material { 
    constructor(titulo, autor, edicion) { 
        super(titulo, autor);
        this.edicion = edicion;
    }
    
    mostrarInfo() {
        console.log(` REVISTA: ${this.titulo} | ${this.autor} | Ed: ${this.edicion} | Disponible: ${this.disponible ? 'Sí' : 'No'}`);
    }
}

let biblioteca = [];

biblioteca.push(new Libro("Cien años de soledad", "Gabriel García Márquez", 496));
biblioteca.push(new Libro("El principito", "Antoine de Saint-Exupéry", 96));
biblioteca.push(new Libro("Don Quijote", "Miguel de Cervantes", 1345));
biblioteca.push(new Revista("Muy Interesante", "Varios", "Marzo 2024"));
biblioteca.push(new Revista("National Geographic", "Varios", "Enero 2024"));

// Mostrar todos los materiales
console.log("=== BIBLIOTECA ===\n");
biblioteca.forEach(m => m.mostrarInfo());

// Probar préstamo y devolución
console.log("\n=== PRÉSTAMOS ===\n");
biblioteca[0].prestar(); // Prestar primer libro
biblioteca[0].prestar(); // Intentar prestar again
biblioteca[0].devolver(); // Devolver
biblioteca[3].prestar(); // Prestar revista