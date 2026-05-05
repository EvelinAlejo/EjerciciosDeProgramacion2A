// PLANTILLA VIDEO JUEGOS 
class VideoJuego{
    constructor(nombre , genero, nivel , puntuacion){
        this.nombre=nombre;
        this.genero=genero;
        this.nivel=nivel;
        this.puntuacion=puntuacion;
    }

    mostrarInformacion(){
        console.table(`\n EL VIDEOJUEGO ES: ${this.nombre}\n EL GENERO ES: ${this.genero} \n CON EL  NIVEL: ${this.nivel}\n Y LA PUNTUACIÓN ES:  ${this.puntuacion}`)
    }

    avanzarPuntos(subirPro){
        this.puntuacion=subirPro;
        console.log(`PUNTUACIÓN ACTUALIZADA `)

    }

    //ESTE METODO ES PARA SUBIR DE NIVEL 
    subirNivel(experiencia){
        this.nivel= this.nivel + experiencia;
        console.log(`SUBISTE AL NIVEL ${this.nivel}`)

    }

    eresPro(){
        if(this.nivel >=70){
            console.log(`ERES PRO , ESTAS ENE LE NIVEL  ${this.nivel}`)
        }else{
            console.log(`NO ERE PRO `)
        }
    }
}

// creo objeto
let consola=new VideoJuego("subwar surf", "adrenalina", 27, "1278884 puntos");

//pasarle  la informacion a mi objeto consola de los metodos
consola.mostrarInformacion();
consola.eresPro();
consola.avanzarPuntos(23); 
consola.subirNivel(500)
consola.eresPro();
