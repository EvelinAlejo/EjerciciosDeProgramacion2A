import chalk from "chalk";

class VideoJuego {
    constructor(nombre, genero, disponible, desarrollador) {
        this.nombre = nombre;
        this.genero = genero;
        this.disponible = disponible;
        this.desarrollador = desarrollador;
    }

    mostrarinfo() {
        console.log(
            chalk.cyan(`🎮 EL JUEGO ES: ${this.nombre}`) + "\n" +
            chalk.green(`🎭 GÉNERO: ${this.genero}`) + "\n" +
            chalk.yellow(`📌 DISPONIBILIDAD: ${this.disponible}`) + "\n" +
            chalk.magenta(`👨‍💻 DESARROLLADOR: ${this.desarrollador}`)
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
            chalk.cyan(`🎮 EL JUEGO ES: ${this.nombre}`) + "\n" +
            chalk.green(`🎭 GÉNERO: ${this.genero}`) + "\n" +
            chalk.yellow(`📌 DISPONIBILIDAD: ${this.disponible}`) + "\n" +
            chalk.magenta(`👨‍💻 DESARROLLADOR: ${this.desarrollador}`) + "\n" +
            chalk.blue(`🕹️ PLATAFORMA: ${this.plataforma}`)
        );
    }

    cambiaDisponible() {
        if (this.disponible) {
            console.log(chalk.green.bold(`✅ El juego ${this.nombre} está disponible`));
        } else {
            console.log(chalk.red.bold(`❌ El juego ${this.nombre} no está disponible`));
        }
    }
}

// Crear objeto
let zombi = new Consola("Plantas contra Zombis", "Adrenalina", true, "Canelo Álvarez", "Play Store");

// Usar métodos
zombi.mostrarinfo();
zombi.cambiaDisponible();