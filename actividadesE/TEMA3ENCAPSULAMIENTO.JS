class Usuario {
    // Variables privadas (correctamente declaradas)
    #nomuser
    #password
    
    constructor(nomuser, password) {
        this.#nomuser = nomuser
        this.#password = password
    }

    // Método privado (correctamente implementado)
    #validarPassword(contrasenia) {
        return contrasenia.length >= 4  //  Comparación correcta
    }

    // Método público que usa el método privado
    login(usuario, pass) {
        if (usuario === this.#nomuser && this.#validarPassword(pass)) {
            console.log(`Bienvenido ${this.#nomuser}`)
            return true  // Bueno para saber si fue exitoso
        } else {
            console.log(`No cumple con la longitud del password o usuario incorrecto`)
            return false
        }
    }

    // Método público para mostrar información (solo lectura)
    datoUser() {
        console.log(`El nombre del usuario es: ${this.#nomuser}`)
    }
    
    //  MÉTODO NUEVO: Para obtener el nombre (getter)
    obtenerNombre() {
        return this.#nomuser
    }
    
    //  MÉTODO NUEVO: Para cambiar contraseña de forma segura
    cambiarPassword(actual, nueva) {
        if (actual === this.#password && this.#validarPassword(nueva)) {
            this.#password = nueva
            console.log("Contraseña actualizada correctamente")
            return true
        } else {
            console.log("No se pudo cambiar la contraseña")
            return false
        }
    }
}

//  Creación correcta del objeto
const user1 = new Usuario("evelin", "miPass123")

//  Llamada correcta al método login (CON PARÉNTESIS)
console.log("--- PRUEBA DE LOGIN ---")
user1.login("evelin", "miPass123")  // Bienvenido evelin
user1.login("evelin", "123")        // Error: password muy corto
user1.login("otro", "miPass123")    // Error: usuario incorrecto

console.log("\n--- PRUEBA DE MÉTODOS ---")
user1.datoUser()  //  CON PARÉNTESIS: El nombre del usuario es: evelin

console.log(user1.datoUser)  // [Function: datoUser] - NO ejecuta el método

//  Forma correcta de guardar un método para usarlo después
console.log("\n--- GUARDANDO REFERENCIA ---")
const metodoGuardado = user1.datoUser  // Guardo la función
metodoGuardado()  // Ahora sí ejecuto con paréntesis

//  Usando los nuevos métodos
console.log("\n--- CAMBIAR CONTRASEÑA ---")
user1.cambiarPassword("miPass123", "nuevaPass456")  //  Correcto
user1.cambiarPassword("incorrecta", "nuevaPass456") //  Contraseña actual incorrecta

console.log("\n--- VERIFICAR NUEVA CONTRASEÑA ---")
user1.login("evelin", "nuevaPass456")  //  Funciona con la nueva contraseña

//  ESTO NO SE PUEDE HACER (son privados)
console.log("\n--- INTENTOS DE ACCESO PRIVADO (ERRORES) ---")

