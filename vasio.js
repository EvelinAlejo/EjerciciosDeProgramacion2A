const clc = require("cli-color");
class YAKI{
    constructor(){
        this.moster=
        [

            { nombre: "kunfu panda ", disponible: true, niveles: 50},
            {nombre: "plantas contra zombis " , disponible: true, niveles : 200},
    ]
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
