class biblioteca{
    constructor(){
        this.libros=[
            {nombre : "100 años de soledad " ,autor: "gabroiel gracia maqrquez "},
            {nombre : "it" ,autor: "stiven hakin "},
        ]
    }

    // usar el foreach para recorrer y hacer una funcion vacia 
    bibliotecaria (){
        this.libros.forEach((moster)=>{
            console.log(`el libro es ${moster.nombre} el autor es ${moster.autor}`)

        })
    }

}
const mibli=new biblioteca();
mibli.bibliotecaria();