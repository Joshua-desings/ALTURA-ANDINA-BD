const mongoose = require("mongoose");

const habitacionSchema = new mongoose.Schema({
  descripcion: { type: String, required: true },
  comodidades: { type: [String], required: true },
  imagenes: { type: [String], required: true },
  tarifas: {
    noche: { type: Number, required: true },
    semana: { type: Number, required: true },
    mes: { type: Number, required: true }
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  evaluacion: { type: Number, default: 0 },
  capacidadMaxima: { type: Number, required: true }, 
  fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Habitacion", habitacionSchema);
