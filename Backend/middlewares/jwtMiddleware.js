const jwt = require('jsonwebtoken');

// Middleware para verificar el token JWT
const verifyToken = (req, res, next) => {
  // Verificar si hay un token en el encabezado de autorización
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado.' });
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Agregar el usuario decodificado al objeto de solicitud
    next(); // Continuar con la siguiente función de middleware
  } catch (error) {
    return res.status(403).json({ message: 'Acceso no autorizado. Token inválido.' });
  }
};

module.exports = { verifyToken };
