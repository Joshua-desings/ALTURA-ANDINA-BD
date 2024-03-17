// Importar Express
const express = require("express");
const cors = require("cors"); // Importa CORS para permitir solicitudes desde diferentes orígenes
const sgMail = require("@sendgrid/mail"); // Importa el cliente de SendGrid
require("dotenv").config(); // Importa dotenv para cargar las variables de entorno desde .env

// Configurar la API Key de SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Crear una instancia de Express
const app = express();
const PORT = process.env.PORT || 5000; // Define el puerto en el que el servidor escuchará

// Middleware para el manejo de solicitudes JSON
app.use(express.json());
// Habilita CORS
app.use(cors());

app.post("/send-email", async (req, res) => {
  try {
    const { email, subject, text, html } = req.body; // Obtener los datos del cuerpo de la solicitud

    // Configurar el correo electrónico a enviar
    const mailOptions = {
      to: email,
      from: process.env.EMAIL_FROM, 
      subject: subject,
      text: text,
      html: html,
    };

    // Enviar el correo electrónico a través de SendGrid
    await sgMail.send(mailOptions);

    // Enviar una respuesta al cliente
    res.status(200).json({ message: "Correo electrónico enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    res.status(500).json({ error: "Error al enviar el correo electrónico" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
