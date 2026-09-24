class Mascota {
  constructor(nombre, color, tipo) {
    this.nombre = nombre;
    this.color = color;
    this.tipo = tipo;
}
  saludar() {
    return "Hola, soy ${this.nombre}, un ${this.tipo} de color ${this.color}.";
}
}
const mascota1 = new Mascota("Milo", "Dorado", "Gato Persa");
const mascota2 = new Mascota("Rocky", "Gris", "Conejo");
const mascota3 = new Mascota("Luna", "Blanco", "Perro Caniche");

const lugar = document.getElementById("lugardemascota");
lugar.innerHTML = "Hola, soy " + mascota.nombre + " el " + mascota.tipo + " de color " + mascota.color;