class Persona {
  constructor(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
  }

  presentarse() {
    return "Hola, soy " + this.nombre + ", tengo " + this.edad + " años y vivo en " + this.ciudad + ".";
  }
}

let persona1 = new Persona("Laureano", 17, "Mendoza");
console.log(persona1.presentarse());

class Mascota {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.energia = 100; /
  }

  jugar() {
    this.energia = this.energia - 20;
    if (this.energia < 0) {
      this.energia = 0;
    }
    console.log(this.nombre + " jugó. Energía restante: " + this.energia);
  }

  comer() {
    this.energia = this.energia + 10;
    if (this.energia > 100) {
      this.energia = 100;
    }
    console.log(this.nombre + " comió. Energía actual: " + this.energia);
  }

  dormir() {
    this.energia = 100;
    console.log(this.nombre + " durmió y recuperó toda la energía.");
  }

  estado() {
    console.log("Mascota: " + this.nombre + " | Energía: " + this.energia);
  }
}

let miPerro = new Mascota("morita", "perro");
miPerro.jugar();
miPerro.comer();
miPerro.estado();

class Calculadora {
  constructor() {
    this.resultado = 0;
  }

  sumar(n) {
    this.resultado = this.resultado + n;
    return this;
  }

  restar(n) {
    this.resultado = this.resultado - n;
    return this;
  }

  multiplicar(n) {
    this.resultado = this.resultado * n;
    return this;
  }

  dividir(n) {
    if (n === 0) {
      console.log("Error: No se puede dividir por cero");
    } else {
      this.resultado = this.resultado / n;
    }
    return this;
  }

  reset() {
    this.resultado = 0;
    return this;
  }

  mostrar() {
    console.log("Resultado actual: " + this.resultado);
    return this;
  }
}

let calc = new Calculadora();
calc.sumar(5).multiplicar(2).mostrar();


class ListaCompras {
  constructor() {
    this.items = []; 
  }

  agregarItem(nombre, cantidad, precioUnitario) {
    let nuevoItem = {
      nombre: nombre,
      cantidad: cantidad,
      precioUnitario: precioUnitario
    };
    this.items.push(nuevoItem);
    console.log("Se agregó: " + nombre);
  }

  eliminarItem(nombre) {
    let posicion = this.items.findIndex(item => item.nombre === nombre);
    if (posicion !== -1) {
      this.items.splice(posicion, 1);
      console.log("Se eliminó " + nombre + " de la lista.");
    } else {
      console.log("No se encontró el item para eliminar.");
    }
  }

  calcularTotal() {
    let total = this.items.reduce((acumulador, item) => {
      return acumulador + (item.cantidad * item.precioUnitario);
    }, 0);
    return total;
  }

  mostrarLista() {
    console.log("--- LISTA DE COMPRAS ---");
    this.items.forEach(item => {
      let subtotal = item.cantidad * item.precioUnitario;
      console.log(item.nombre + " - Cantidad: " + item.cantidad + " - Precio U: $" + item.precioUnitario + " - Subtotal: $" + subtotal);
    });
    console.log("Total final: $" + this.calcularTotal());
  }

  buscarItem(nombre) {
    let encontrado = this.items.find(item => item.nombre === nombre);
    if (encontrado) {
      return encontrado;
    } else {
      return "no encontrado";
    }
  }
}

// Prueba:
let miLista = new ListaCompras();
miLista.agregarItem("Galletitas", 2, 800);
miLista.agregarItem("Leche", 1, 1200);
miLista.mostrarLista();


class Libro {
  constructor(id, titulo, autor, año) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.prestado = false;
    this.prestadoA = "";
  }

  prestar(persona) {
    if (this.prestado === true) {
      console.log("El libro " + this.titulo + " ya está prestado.");
    } else {
      this.prestado = true;
      this.prestadoA = persona;
      console.log("Libro prestado a " + persona);
    }
  }

  devolver() {
    this.prestado = false;
    this.prestadoA = "";
    console.log("El libro fue devuelto.");
  }

  getInfo() {
    let estado = "Disponible";
    if (this.prestado === true) {
      estado = "Prestado a " + this.prestadoA;
    }
    return "ID: " + this.id + " | " + this.titulo + " - " + this.autor + " (" + estado + ")";
  }
}

class Biblioteca {
  constructor() {
    this.libros = [];
  }

  agregarLibro(titulo, autor, año) {
    let idNuevo = this.libros.length + 1;
    let nuevoLibro = new Libro(idNuevo, titulo, autor, año);
    this.libros.push(nuevoLibro);
  }

  buscarPorId(id) {
    return this.libros.find(libro => libro.id === id);
  }

  prestarLibro(id, persona) {
    let libro = this.buscarPorId(id);
    if (libro) {
      libro.prestar(persona);
    } else {
      console.log("Libro no encontrado.");
    }
  }

  devolverLibro(id) {
    let libro = this.buscarPorId(id);
    if (libro) {
      libro.devolver();
    }
  }

  mostrarCatalogo() {
    console.log("=== CATÁLOGO ===");
    this.libros.forEach(libro => {
      console.log(libro.getInfo());
    });
  }

  getEstadisticas() {
    let prestados = this.libros.filter(libro => libro.prestado === true).length;
    let disponibles = this.libros.length - prestados;
    console.log("Total: " + this.libros.length + " | Prestados: " + prestados + " | Disponibles: " + disponibles);
  }
}

let miBiblio = new Biblioteca();
miBiblio.agregarLibro("El Principito", "Antoine de Saint-Exupéry", 1943);
miBiblio.prestarLibro(1, "Martín");
miBiblio.mostrarCatalogo();


class Vehiculo {
  constructor(marca, modelo, año, kilometraje) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.kilometraje = kilometraje;
  }

  conducir(km) {
    this.kilometraje = this.kilometraje + km;
    console.log("Recorriste " + km + " km. Total en odómetro: " + this.kilometraje + " km.");
  }

  mostrarInfo() {
    return this.marca + " " + this.modelo + " (" + this.año + ") - " + this.kilometraje + " km";
  }
}

class Auto extends Vehiculo {
  constructor(marca, modelo, año, kilometraje, puertas, tipo) {
    super(marca, modelo, año, kilometraje);
    this.puertas = puertas;
    this.tipo = tipo;
  }

  abrirMaletero() {
    console.log("Abriendo el maletero del auto...");
  }
}

class Moto extends Vehiculo {
  constructor(marca, modelo, año, kilometraje, cilindrada, tipo) {
    super(marca, modelo, año, kilometraje);
    this.cilindrada = cilindrada;
    this.tipo = tipo;
  }

  hacerCaballito() {
    console.log("¡Haciendo un caballito en la moto!");
  }
}

class Camion extends Vehiculo {
  constructor(marca, modelo, año, kilometraje, capacidadCarga, ejes) {
    super(marca, modelo, año, kilometraje);
    this.capacidadCarga = capacidadCarga;
    this.ejes = ejes;
  }

  cargar(toneladas) {
    if (toneladas <= this.capacidadCarga) {
      console.log("Cargaste " + toneladas + " toneladas correctamente.");
    } else {
      console.log("¡Atención! Supera la capacidad máxima de " + this.capacidadCarga + "t.");
    }
  }
}

let miAuto = new Auto("Ford", "Focus", 2018, 50000, 4, "sedan");
console.log(miAuto.mostrarInfo());
miAuto.abrirMaletero();

let miMoto = new Moto("Yamaha", "FZ", 2020, 15000, 150, "deportiva");
miMoto.hacerCaballito();


class CuentaBancaria {
  #saldo;
  #pin;

  constructor(saldoInicial, pin) {
    this.#saldo = saldoInicial;
    this.#pin = pin;
  }

  depositar(cantidad, pinIngresado) {
    if (pinIngresado !== this.#pin) {
      return "ERROR: PIN incorrecto";
    }
    if (cantidad <= 0) {
      return "ERROR: La cantidad debe ser mayor a 0";
    }

    this.#saldo = this.#saldo + cantidad;
    return "Depósito exitoso. Saldo actual: $" + this.#saldo;
  }

  retirar(cantidad, pinIngresado) {
    if (pinIngresado !== this.#pin) {
      return "ERROR: PIN incorrecto";
    }
    if (cantidad <= 0) {
      return "ERROR: Cantidad no válida";
    }
    if (cantidad > this.#saldo) {
      return "ERROR: Saldo insuficiente";
    }

    this.#saldo = this.#saldo - cantidad;
    return "Retiro exitoso. Saldo restante: $" + this.#saldo;
  }

  consultarSaldo(pinIngresado) {
    if (pinIngresado !== this.#pin) {
      return "ERROR: PIN incorrecto";
    }
    return "Su saldo es: $" + this.#saldo;
  }
}

let miCuenta = new CuentaBancaria(5000, "1234");
console.log(miCuenta.depositar(1000, "1234"));
console.log(miCuenta.retirar(2000, "0000")); 
console.log(miCuenta.consultarSaldo("1234"));


class Tarea {
  constructor(id, titulo, descripcion, prioridad, fechaLimite) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.prioridad = prioridad; 
    this.completada = false;
    this.fechaCreacion = new Date();
    this.fechaLimite = fechaLimite;
  }

  completar() {
    this.completada = true;
  }

  editar(nuevosDatos) {
    if (nuevosDatos.titulo) this.titulo = nuevosDatos.titulo;
    if (nuevosDatos.descripcion) this.descripcion = nuevosDatos.descripcion;
  }

  getInfo() {
    let estado = "Pendiente";
    if (this.completada === true) {
      estado = "Completada";
    }
    return "[" + this.id + "] " + this.titulo + " (" + this.prioridad + ") - " + estado;
  }
}

class GestorTareas {
  constructor() {
    this.tareas = [];
  }

  agregar(titulo, desc, prioridad, fechaLimite) {
    let nuevoId = this.tareas.length + 1;
    let nuevaTarea = new Tarea(nuevoId, titulo, desc, prioridad, fechaLimite);
    this.tareas.push(nuevaTarea);
  }

  eliminar(id) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

  completarTarea(id) {
    let tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completar();
    }
  }

  filtrarPorPrioridad(prioridad) {
    return this.tareas.filter(t => t.prioridad === prioridad);
  }

  filtrarCompletadas() {
    return this.tareas.filter(t => t.completada === true);
  }

  mostrarTodas() {
    this.tareas.forEach(t => console.log(t.getInfo()));
  }
}

let misTareas = new GestorTareas();
misTareas.agregar("Estudiar para el examen", "Repasar JS", "alta", "2026-04-20");
misTareas.completarTarea(1);
misTareas.mostrarTodas();


class Producto {
  constructor(id, nombre, precio, stock, categoria, descuento) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.categoria = categoria;
    this.descuento = descuento; 
  }
}

class Cliente {
  constructor(id, nombre, email, direccion) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.direccion = direccion;
    this.historialCompras = [];
  }
}

class ItemCarrito {
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
    // Precio con descuento aplicado
    let precioConDescuento = producto.precio - (producto.precio * producto.descuento / 100);
    this.subtotal = precioConDescuento * cantidad;
  }
}

class Carrito {
  constructor(cliente) {
    this.cliente = cliente;
    this.items = [];
    this.total = 0;
  }

  agregarProducto(producto, cantidad) {
    if (cantidad > producto.stock) {
      console.log("No hay suficiente stock de " + producto.nombre);
      return;
    }
    let item = new ItemCarrito(producto, cantidad);
    this.items.push(item);
    console.log("Producto agregado al carrito.");
  }

  quitarProducto(idProducto) {
    this.items = this.items.filter(item => item.producto.id !== idProducto);
  }

  calcularTotal() {
    let subtotalTot = 0;
    this.items.forEach(item => {
      subtotalTot = subtotalTot + item.subtotal;
    });

    let impuestos = subtotalTot * 0.21; // 21%
    let envio = 0;
    if (subtotalTot < 5000) {
      envio = 500;
    }

    this.total = subtotalTot + impuestos + envio;
    return this.total;
  }

  generarOrden() {
    let totalFinal = this.calcularTotal();
    
    // Descontamos del stock
    this.items.forEach(item => {
      item.producto.stock = item.producto.stock - item.cantidad;
    });

    let orden = {
      numeroOrden: Math.floor(Math.random() * 10000),
      cliente: this.cliente.nombre,
      total: totalFinal,
      fecha: new Date()
    };

    this.cliente.historialCompras.push(orden);
    this.items = []; // Vaciamos carrito
    return orden;
  }
}

let prod1 = new Producto(1, "Zapatillas", 10000, 5, "Calzado", 10);
let cliente1 = new Cliente(1, "Laureano", "lau@mail.com", "Mendoza 123");
let miCarrito = new Carrito(cliente1);

miCarrito.agregarProducto(prod1, 1);
console.log("Orden generada:", miCarrito.generarOrden());




class Circulo {
  constructor(anchoCanvas, altoCanvas) {
    this.radio = 25;
    this.x = Math.random() * (anchoCanvas - this.radio * 2) + this.radio;
    this.y = Math.random() * (altoCanvas - this.radio * 2) + this.radio;
    this.color = "red";
  }

  dibujar(contexto) {
    contexto.beginPath();
    contexto.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
    contexto.fillStyle = this.color;
    contexto.fill();
    contexto.closePath();
  }

  fueClickeado(mouseX, mouseY) {
    let distanciaX = this.x - mouseX;
    let distanciaY = this.y - mouseY;
    // Fórmula para medir la distancia
    let distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
    return distancia <= this.radio;
  }
}

class Jugador {
  constructor() {
    this.puntuacion = 0;
    this.vidas = 3;
  }
}

class Juego {
  constructor(idCanvas) {
    this.canvas = document.getElementById(idCanvas);
    if (this.canvas) {
      this.ctx = this.canvas.getContext("2d");
      this.jugador = new Jugador();
      this.circulo = null;
    }
  }

  nuevoCirculo() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.circulo = new Circulo(this.canvas.width, this.canvas.height);
    this.circulo.dibujar(this.ctx);
  }
}


class APIClient {
  constructor(urlBase) {
    this.urlBase = urlBase;
  }

  async obtenerDatos(endpoint) {
    try {
      let respuesta = await fetch(this.urlBase + endpoint);
      let datos = await respuesta.json();
      return datos;
    } catch (error) {
      console.log("Ocurrió un error al traer datos: ", error);
    }
  }
}

class Pokemon {
  constructor(datos) {
    this.id = datos.id;
    this.nombre = datos.name;
    this.imagen = datos.sprites.front_default;
  }

  mostrarCard() {
    return "Pokemon: #" + this.id + " " + this.nombre;
  }
}

class CacheLocal {
  guardar(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
  }

  obtener(clave) {
    let datos = localStorage.getItem(clave);
    return JSON.parse(datos);
  }
}


let api = new APIClient("https://pokeapi.co/api/v2/");
// api.obtenerDatos("pokemon/1").then(datos => {
//   let bulbasaur = new Pokemon(datos);
//   console.log(bulbasaur.mostrarCard());
// });



class TareaModel {
  constructor() {
    this.tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  }

  guardarEnStorage() {
    localStorage.setItem("tareas", JSON.stringify(this.tareas));
  }

  agregarTarea(titulo) {
    let nueva = { id: Date.now(), titulo: titulo, completada: false };
    this.tareas.push(nueva);
    this.guardarEnStorage();
  }

  eliminarTarea(id) {
    this.tareas = this.tareas.filter(t => t.id !== id);
    this.guardarEnStorage();
  }
}


class TareaView {
  constructor() {
    this.app = document.getElementById("root");
  }

  renderizar(tareas) {
    if (!this.app) return;
    this.app.innerHTML = "";
    
    let lista = document.createElement("ul");
    tareas.forEach(tarea => {
      let li = document.createElement("li");
      li.textContent = tarea.titulo;
      lista.appendChild(li);
    });
    this.app.appendChild(lista);
  }
}


class TareaController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  iniciar() {
    this.view.renderizar(this.model.tareas);
  }

  agregarNuevaTarea(titulo) {
    this.model.agregarTarea(titulo);
    this.view.renderizar(this.model.tareas); 
  }
}