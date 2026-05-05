// Importar cli-color
const clc = require("cli-color");

class VideoJuego {
    constructor(nombre, genero, disponible, desarrollador) {
        this.nombre = nombre;
        this.genero = genero;
        this.disponible = disponible;
        this.desarrollador = desarrollador;
    }

    mostrarinfo() {
        console.log(
            clc.cyan(`🎮 EL JUEGO ES: ${this.nombre}`) + "\n" +
            clc.green(`🎭 GÉNERO: ${this.genero}`) + "\n" +
            clc.yellow(`📌 DISPONIBILIDAD: ${this.disponible}`) + "\n" +
            clc.magenta(`👨‍💻 DESARROLLADOR: ${this.desarrollador}`)
        );
    }
}

class Consola extends VideoJuego {
    constructor(nombre, genero, disponible, desarrollador, plataforma) {
        super(nombre, genero, disponible, desarrollador);
        this.plataforma = plataforma;
    }

    mostrarinfo() {
        console.log(
            clc.cyan(`🎮 EL JUEGO ES: ${this.nombre}`) + "\n" +
            clc.green(`🎭 GÉNERO: ${this.genero}`) + "\n" +
            clc.yellow(`📌 DISPONIBILIDAD: ${this.disponible}`) + "\n" +
            clc.magenta(`👨‍💻 DESARROLLADOR: ${this.desarrollador}`) + "\n" +
            clc.blue(`🕹️ PLATAFORMA: ${this.plataforma}`)
        );
    }

    cambiaDisponible() {
        if (this.disponible) {
            console.log(clc.bold.green(`✅ El juego ${this.nombre} está disponible`));
        } else {
            console.log(clc.bold.red(`❌ El juego ${this.nombre} no está disponible`));//lo que hace es imprimir un texto en la consola con color rojo y además en negrita.

        }
    }
}

// Crear objeto
let zombi = new Consola("Plantas contra Zombis", "Adrenalina", true, "Canelo Álvarez", "Play Store");

// Usar métodos
zombi.mostrarinfo();
zombi.cambiaDisponible();