# Altura Andina Hotel & Spa

## Descripción

Este proyecto consiste en la creación de una landing page para el Altura Andina Hotel & Spa, ubicado en el estado Mérida, Venezuela. La página está desarrollada como una Single Page Application (SPA) utilizando React, Vite, React Router y un servidor con Node.js y Express.

La página web está diseñada para promocionar las instalaciones, servicios y ofertas del hotel, ofreciendo una experiencia interactiva y atractiva para los usuarios. Además, proporciona información útil y consejos de viaje relacionados con el estado de Mérida, Venezuela.

## Funcionalidades
- Visualización de información sobre el hotel, incluyendo servicios, comodidades y ubicación.
- Reserva de habitaciones a través de un formulario interactivo.
- Consejos de viaje y guías turísticas relacionados con el estado de Mérida, Venezuela.
- Visualización de promociones especiales y ofertas de temporada.
  
## Tecnologías Utilizadas
- [React](https://es.react.dev/) + [Vite](https://vitejs.dev/): React es una biblioteca de JavaScript para crear interfaces de usuario. Vite es una herramienta de desarrollo web que ofrece un rápido arranque, actualización instantánea de módulos y optimización de producción.
- [React Router]([https://www.npmjs.com/package/react-router-dom): Librería para el enrutamiento de aplicaciones React.
- [Node.js](https://nodejs.org/en): Node.js es un entorno de ejecución de JavaScript que permite ejecutar código JavaScript fuera del navegador.
- [Express](https://expressjs.com/es/): Express es un marco de aplicación web para Node.js que facilita la creación de servidores web y API. 
- [React Spring](https://www.react-spring.dev): Biblioteca para animaciones fluidas en React.
- [Material UI](https://mui.com): Biblioteca de componentes de React para un diseño rápido y fácil.
- [Chakra UI](https://chakra-ui.com): Biblioteca de componentes accesibles y altamente personalizables para React.
- [Tailwind](https://tailwindcss.com/): Tailwind es un marco de CSS que ofrece clases de utilidad personalizables y de bajo nivel para diseñar interfaces de usuario.

## Guía de Instalación

1. Clona el repositorio:

  ```
git clone https://github.com/Joshua-desings/ALTURA-ANDINA.git
  ```
2. Instala las dependencias en los directorios **Backend** y **Frontend**:

  ```
cd Backend
npm install
cd Frontend
npm install
  ```

3. Crea un archivo **.env** en la carpeta **Backend** con las siguientes variables:

  ```
EMAIL_FROM=Tu email verificado por SendGrid
SENDGRID_API_KEY=Tu API key verificada por SendGrid
 ```
Cambia la API en el archivo services/api.js por tu API de OpenWeatherMap.

4. Inicia el servidor y la aplicación frontend en terminales separadas:

 ```
# En la carpeta Backend
npm run dev

# En la carpeta Frontend
npm run dev
```
Accede a la aplicación en tu navegador visitando http://localhost:3000.

## Autor

- **@Joshua-designs** - [GitHub](https://github.com/Joshua-designs)

## Recursos Adicionales

- [Figma de la App](https://www.figma.com/file/mwhpOqIa9AIdlYwH5FiJM0/Altura-Andina-Hotel-%26-Spa?type=design&node-id=3%3A2&mode=design&t=iJAVacy3r5DrDAaW-1)
- [Video Explicativo](https://youtu.be/gnzBwIcVtIE)
- [Informe Detallado](https://docs.google.com/document/d/1HK4WBP0tSBr-Qa2dnReWWGbKBzx9qBFfPyUGuvadzEs/edit?usp=sharing)

## Futuras Actualizaciones

- Integración de una base de datos como MongoDB para almacenar información de usuarios y reservas.
- Mejoras en la seguridad del sistema, incluyendo medidas como autenticación cifrado de contraseñas y cifrado de datos sensibles.
