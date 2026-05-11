
class ErroBiblioteca extends Error {
    constructor(aviso) {
        super(aviso)
        this.name = "ERROR DE BIBLIOTECA"
    }
}

class BaseMaterial {
    #titulo
    #autor
    static almacen = []
    
    constructor(titulo, autor) {
        this.#titulo = titulo
        this.#autor = autor
        this.disponible = true
    }
    
    get leerTitulo() {
        return this.#titulo
    }

    get leerAutor() {
        return this.#autor
    }
    
    set modificarTitulo(nuevoTitulo) {
        try {
            console.log("BIENVENIDO AL SISTEMA DE VALIDACION DE LA BIBLIOTECA PARA TITULO:")

            if (!nuevoTitulo || nuevoTitulo.trim() === "") {
                throw new ErroBiblioteca("Error el titulo no puede estar vacio")
            }
            this.#titulo = nuevoTitulo
        } catch (error) {
            console.error(error.message)
        }
    }

    set modificarAutor(nuevoAutor) {
        try {
            console.log("BIENVENIDO AL SISTEMA DE VALIDACION DE LA BIBLIOTECA PARA AUTOR:")

            if (!nuevoAutor || nuevoAutor.trim() === "") {
                throw new ErroBiblioteca("Error el nombre del autor no puede ir vacio")
            }

            if (nuevoAutor.length < 3) {
                throw new ErroBiblioteca("Error el nombre del autor no puede tener menos de 3 caracteres")
            }
            this.#autor = nuevoAutor
        } catch (error) {
            console.error(error.message)
        }
    }

    prestar() {
        try {
            if (!this.disponible) {
                throw new ErroBiblioteca("Error el libro ya ha sido prestado")
            }
            this.disponible = false
            console.log(`"${this.leerTitulo}" ha sido prestado`)
        } catch (error) {
            console.error(error.message)
        }
    }

    devolverLibro() {
        try {
            if (this.disponible) {
                throw new ErroBiblioteca("Error el libro no estaba prestado")
            }
            this.disponible = true
            console.log(`"${this.leerTitulo}" ha sido devuelto`)
        } catch (error) {
            console.error(error.message)
        }
    }

    mostrarInfo() {
        console.log("mostrando informacion _____")
        console.log(`EL TITULO DEL LIBRO ES: ${this.leerTitulo}, EL AUTOR ES: ${this.leerAutor}`)
        console.log(`DISPONIBILIDAD: ${this.disponible ? "Si" : "No"}`)
    }
    
    static recolector(RECOLECTOR_LR) {
        BaseMaterial.almacen.push(RECOLECTOR_LR)
        console.log(`Material "${RECOLECTOR_LR.leerTitulo}" ha sido agregado al almacen`)
    }
    
    almacenPush() {
        BaseMaterial.almacen.push(this)
        console.log(`"${this.leerTitulo}" agregado a la biblioteca`)
    }

    static verAlmacen() {
        console.log("\n" + "=".repeat(50))
        console.log("BIBLIOTECA COMPLETA")
        console.log("=".repeat(50))
        
        if (BaseMaterial.almacen.length === 0) {
            console.log("La biblioteca esta vacia")
            return
        }
        
        BaseMaterial.almacen.forEach((material, i) => {
            console.log(`\n[${i + 1}]`)
            material.mostrarInfo()
            if (material.numeroDePaguinas) {
                console.log(`Numero de paginas: ${material.numeroDePaguinas}`)
            }
            if (material.edicion) {
                console.log(`Edicion: ${material.edicion}`)
            }
        })
    }
}

class Libro extends BaseMaterial {
    constructor(titulo, autor, numeroDePaguinas) {
        super(titulo, autor)
        this.numeroDePaguinas = numeroDePaguinas
    }

    mostrarInfo() {
        super.mostrarInfo()
        console.log(`Numero de paginas: ${this.numeroDePaguinas}`)
    }
}

class Revista extends BaseMaterial {
    constructor(titulo, autor, edicion) {
        super(titulo, autor)
        this.edicion = edicion
    }

    mostrarInfo() {
        super.mostrarInfo()
        console.log(`Edicion: ${this.edicion}`)
    }
}

let libro1 = new Libro("Don Quijote", "Cervantes", 863)
let libro2 = new Libro("Cien años", "Garcia Marquez", 471)
let revista1 = new Revista("Muy Interesante", "GyJ", 187)
let revista2 = new Revista("National Geographic", "National Geo", 45)

console.log("\n" + "=".repeat(50))
console.log("AGREGANDO MATERIALES")
console.log("=".repeat(50))
libro1.almacenPush()
libro2.almacenPush()
revista1.almacenPush()
revista2.almacenPush()

console.log("\n" + "=".repeat(50))
console.log("PRESTAMOS")
console.log("=".repeat(50))
libro1.prestar()
libro1.prestar()
libro1.devolverLibro()
libro1.devolverLibro()

console.log("\n" + "=".repeat(50))
console.log("VALIDACIONES")
console.log("=".repeat(50))
libro2.modificarTitulo = ""
libro2.modificarAutor = "a"
libro2.modificarAutor = "Gabriel"

console.log("\n" + "=".repeat(50))
console.log("REVISTAS")
console.log("=".repeat(50))
revista1.prestar()
revista1.mostrarInfo()
revista1.devolverLibro()
revista1.mostrarInfo()

BaseMaterial.verAlmacen()
