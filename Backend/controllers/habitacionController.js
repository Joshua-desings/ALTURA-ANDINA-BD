const Habitacion = require('../models/habitacionModel');

// Controlador para obtener todas las habitaciones
exports.getAllHabitaciones = async (req, res) => {
  try {
    const habitaciones = await Habitacion.find();
    res.json(habitaciones);
  } catch (error) {
    console.error('Error al obtener las habitaciones:', error);
    res.status(500).json({ error: 'Error al obtener las habitaciones' });
  }
};

// Controlador para obtener una habitacion por su ID
exports.getHabitacionById = async (req, res) => {
  try {
    const habitacion = await Habitacion.findById(req.params.id);
    if (!habitacion) {
      return res.status(404).json({ error: 'Habitacion no encontrada' });
    }
    res.json(habitacion);
  } catch (error) {
    console.error('Error al obtener la habitacion:', error);
    res.status(500).json({ error: 'Error al obtener la habitacion' });
  }
};

// Controlador para crear una nueva habitacion
exports.createHabitacion = async (req, res) => {
  try {
    const nuevaHabitacion = new Habitacion(req.body);
    await nuevaHabitacion.save();
    res.status(201).json(nuevaHabitacion);
  } catch (error) {
    console.error('Error al crear la habitacion:', error);
    res.status(500).json({ error: 'Error al crear la habitacion' });
  }
};

// Controlador para actualizar una habitacion
exports.updateHabitacion = async (req, res) => {
  try {
    const habitacion = await Habitacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!habitacion) {
      return res.status(404).json({ error: 'Habitacion no encontrada' });
    }
    res.json(habitacion);
  } catch (error) {
    console.error('Error al actualizar la habitacion:', error);
    res.status(500).json({ error: 'Error al actualizar la habitacion' });
  }
};

// Controlador para eliminar una habitacion
exports.deleteHabitacion = async (req, res) => {
  try {
    const habitacion = await Habitacion.findByIdAndDelete(req.params.id);
    if (!habitacion) {
      return res.status(404).json({ error: 'Habitacion no encontrada' });
    }
    res.json({ message: 'Habitacion eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar la habitacion:', error);
    res.status(500).json({ error: 'Error al eliminar la habitacion' });
  }
};
