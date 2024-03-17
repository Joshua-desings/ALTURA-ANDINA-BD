import { useState } from "react";
import Snowfall from 'react-snowfall';
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useSpring, animated } from "react-spring";
import { NavLink } from 'react-router-dom';

function Welcome() {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  const [showTitle, setShowTitle] = useState(false);

  const titleProps = useSpring({
    opacity: showTitle ? 1 : 0,
    transform: showTitle ? "translateY(0)" : "translateY(-20px)",
    config: { tension: 200, friction: 20 },
  });

  // Función para mostrar el título después de un retraso
  const showTitleWithDelay = () => {
    setTimeout(() => {
      setShowTitle(true);
    }, 500);
  };

  // Mostrar el título después de un retraso
  showTitleWithDelay();

  return (
    <div className="relative">
      {/* Efecto de nieve */}
      <Snowfall snowflakeCount={40} color="white" style={{ zIndex: 1000 }} />
      {/* Imagen de fondo con superposición */}
      <div
        className="bg-cover bg-center w-full h-96 md:h-96 sm:h-96 relative  text-center"
        style={{ backgroundImage: `url(/assets/images/Welcome.jpg)` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
        {/* Fondo oscuro */}
        <div className="absolute inset-0 flex flex-col items-center justify-center font-playfair-display text-white">
          {/* Título animado */}
          <animated.h4
            style={titleProps}
            className="text-2xl lg:text-5xl md:text-4xl sm:text-3xl phone:text-3xl xs:text-2xl xss:text-xl font-bold mb-8 whitespace-pre-wrap"
          >
            ¡Bienvenido a tu hogar lejos de casa!
          </animated.h4>
          <NavLink to="/contacto">
          <Button
            variant="contained"
            size="large"
            className="bg-500 hover:bg-600 text-white font-lato"
          >
            Reserva ahora
          </Button>
          </NavLink>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-4">
          {/* Iconos de redes sociales */}
          <FacebookIcon
            className="text-white cursor-pointer transition duration-300 transform hover:scale-110"
            style={{ fontSize: 24 }}
            onClick={() => handleRedirect("https://www.facebook.com")}
          />
          <TwitterIcon
            className="text-white cursor-pointer transition duration-300 transform hover:scale-110"
            style={{ fontSize: 24 }}
            onClick={() => handleRedirect("https://twitter.com")}
          />
          <InstagramIcon
            className="text-white cursor-pointer transition duration-300 transform hover:scale-110"
            style={{ fontSize: 24 }}
            onClick={() => handleRedirect("https://www.instagram.com")}
          />
          <LinkedInIcon
            className="text-white cursor-pointer transition duration-300 transform hover:scale-110"
            style={{ fontSize: 24 }}
            onClick={() => handleRedirect("https://www.linkedin.com")}
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
