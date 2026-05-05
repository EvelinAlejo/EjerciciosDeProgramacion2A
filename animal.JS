class Animal {
  hablar() {
    console.log("El animal hace un sonido");
  }
}

class Perro extends Animal {
  hablar() { // Sobrescritura: misma función, diferente comportamiento
    console.log("¡Guau guau!");
  }
}

class Gato extends Animal {
  hablar() {
    console.log("¡Miau!");
  }
}

// Array de mascotas (polimorfismo en acción)
const misMascotas = [new Perro(), new Gato(), new Perro(), new Gato()];

// ✅ Forma correcta 1: usando map
console.log("=== USANDO MAP ===");
misMascotas.map(animal => {
    animal.hablar();  // Cada animal habla de su propia forma
});

// ✅ Forma correcta 2: usando forEach (más apropiado aquí)
console.log("\n=== USANDO FOR EACH ===");
misMascotas.forEach(animal => {
    animal.hablar();
});

// ✅ Forma correcta 3: usando for...of
console.log("\n=== USANDO FOR...OF ===");
for (let animal of misMascotas) {
    animal.hablar();
}