function Datos(){
    let informacion=[
        {
            nombre:"evelin",
            edad:18,
            curp:"AEEE1408CSLSVA2",
            
        
        },
        {
            nombre:"TANIA",
            edad:18,
            curp:"HYXCVTWWT456VXB",
        },
        {
            nombre:"JEHU",
            edad:19,
            curp:"AGEYTDVEDJDEK980MXC"
        }
    ]
    informacion.map((info)=>{
        console.log(`el nombre es ${info.nombre} la edad es ${info.edad} la curp es ${info.curp}`)
    })

}Datos();
//node .\01EJEMPLO.JS

