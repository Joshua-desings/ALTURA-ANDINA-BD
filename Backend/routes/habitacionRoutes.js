const express = require('express');
const router = express.Router();
const habitacionController = require('../controllers/habitacionController');

// Rutas para las habitaciones
router.get('/', habitacionController.getAllHabitaciones);
router.get('/:id', habitacionController.getHabitacionById);
router.post('/', habitacionController.createHabitacion);
router.put('/:id', habitacionController.updateHabitacion);
router.delete('/:id', habitacionController.deleteHabitacion);

module.exports = router;
