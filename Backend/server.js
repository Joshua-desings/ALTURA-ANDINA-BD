const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const morgan = require("morgan");
const Joi = require("joi");
require("dotenv").config();

// Importa la función de semillas
const { cargarHabitacionesDeEjemplo } = require("./seeds");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

mongoose.connect(process.env.MONGODB_URI);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Aquí irían las rutas para las habitaciones
const habitacionRoutes = require("./routes/habitacionRoutes");
app.use("/habitaciones", habitacionRoutes);

app.post("/send-email", async (req, res) => {
  try {
    const { email, subject, text, html } = req.body;
    const mailOptions = {
      to: email,
      from: process.env.EMAIL_FROM,
      subject: subject,
      text: text,
      html: html,
    };
    await sgMail.send(mailOptions);
    res.status(200).json({ message: "Correo electrónico enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    res.status(500).json({ error: "Error al enviar el correo electrónico" });
  }
});

// Carga las habitaciones de ejemplo al iniciar el servidor
app.listen(PORT, async () => {
  try {
    await cargarHabitacionesDeEjemplo();
    console.log("Habitaciones de ejemplo cargadas exitosamente");
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  } catch (error) {
    console.error("Error al cargar las habitaciones de ejemplo:", error);
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  }
});
