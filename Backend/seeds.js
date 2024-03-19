const Habitacion = require('./models/habitacionModel');

const habitacionesDeEjemplo = [
  {
    descripcion: "Habitación Deluxe con vista al mar",
    comodidades: ["Cama king-size", "Baño privado", "Balcón con vista al mar", "TV de pantalla plana"],
    imagenes: ["imagen1.jpg", "imagen2.jpg"],
    tarifas: { noche: 200, semana: 1200, mes: 4500 },
    review: "Excelente habitación con una vista impresionante al mar.",
    capacidadMaxima: 4,
    evaluacion: 4.8
  },
  {
    descripcion: "Suite Familiar",
    comodidades: ["Dos camas queen-size", "Baño compartido", "Área de estar", "Wi-Fi gratuito"],
    imagenes: ["imagen3.jpg", "imagen4.jpg"],
    tarifas: { noche: 180, semana: 1000, mes: 4000 },
    review: "Espaciosa habitación perfecta para familias.",
    capacidadMaxima: 8,
    evaluacion: 4.5
  },
  {
    descripcion: "Habitación Estándar con vista a la ciudad",
    comodidades: ["Cama matrimonial", "Baño privado", "Ventana con vista a la ciudad"],
    imagenes: ["imagen5.jpg", "imagen6.jpg"],
    tarifas: { noche: 150, semana: 900, mes: 3500 },
    review: "Buena habitación con una vista agradable.",
    capacidadMaxima: 3,
    evaluacion: 4.2
  },
  {
    descripcion: "Habitación Individual Económica",
    comodidades: ["Cama individual", "Baño compartido", "Escritorio"],
    imagenes: ["imagen7.jpg", "imagen8.jpg"],
    tarifas: { noche: 100, semana: 600, mes: 2500 },
    review: "Habitación sencilla pero confortable.",
    capacidadMaxima: 1,
    evaluacion: 3.9
  },
  {
    descripcion: "Suite Presidencial",
    comodidades: ["Cama king-size", "Baño de lujo", "Sala de estar privada", "Terraza panorámica"],
    imagenes: ["imagen9.jpg", "imagen10.jpg"],
    tarifas: { noche: 300, semana: 1800, mes: 7000 },
    review: "Experiencia de alojamiento de lujo.",
    capacidadMaxima: 6,
    evaluacion: 5.0
  }
];

const cargarHabitacionesDeEjemplo = async () => {
  try {
    // Verificar si ya hay habitaciones en la base de datos
    const count = await Habitacion.countDocuments();
    if (count > 0) {
      console.log('Ya hay habitaciones en la base de datos, no es necesario cargar las habitaciones de ejemplo.');
      return;
    }

    // Crear las habitaciones de ejemplo
    await Habitacion.create(habitacionesDeEjemplo);
    console.log('Habitaciones de ejemplo cargadas exitosamente');
  } catch (error) {
    console.error('Error al cargar las habitaciones de ejemplo:', error);
  }
};

module.exports = { cargarHabitacionesDeEjemplo };
