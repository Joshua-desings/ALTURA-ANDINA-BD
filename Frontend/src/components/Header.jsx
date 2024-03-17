import React, { useEffect, useState } from 'react';
import { getWeatherByCity } from '../services/api';
import MountainIcon from '@mui/icons-material/Terrain';
import HomeIcon from '@mui/icons-material/Home';
import BedIcon from '@mui/icons-material/Hotel';
import ServiceIcon from '@mui/icons-material/RoomService';
import ContactIcon from '@mui/icons-material/ContactPhone';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  const [weather, setWeather] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherByCity('Mérida', 'es');
        setWeather(data);
      } catch (error) {
        console.error('Error al obtener el clima:', error);
      }
    };

    fetchWeather();
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-4 py-4 md:py-6 bg-white shadow-md border-b-2 border-transparent transition-all duration-1500 flex-wrap">
      {/* Logo */}
      <div className="flex items-center">
      <NavLink to="/">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="mb-4 md:mb-0"
        >
          <h2 className="text-2xl text-brand-500 font-playfair-display flex items-center cursor-pointer">
            <MountainIcon className="w-10 h-10 mr-2" />
            Altura Andina
          </h2>
        </motion.div>
        </NavLink >
      </div>
     
      {/* Barra de navegación */}
      <nav className="flex flex-wrap justify-center md:justify-start md:flex-grow">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {showMenu && (
          <div className="md:hidden w-full mt-4">
            <NavLink to="/">
              <HomeIcon className="w-8 h-8 mr-2" />
              Inicio
            </NavLink>
            <NavLink to="/habitaciones">
              <BedIcon className="w-8 h-8 mr-2" />
              Habitaciones
            </NavLink>
            <NavLink to="/servicios">
              <ServiceIcon className="w-8 h-8 mr-2" />
              Servicios
            </NavLink>
            <NavLink to="/contacto">
              <ContactIcon className="w-8 h-8 mr-2" />
              Contacto
            </NavLink>
          </div>
        )}
        <div className="hidden md:flex flex-wrap justify-center md:flex-grow">
          <NavLink to="/">
            <HomeIcon className="w-8 h-8 mr-2" />
            Inicio
          </NavLink>
          <NavLink to="/habitaciones">
            <BedIcon className="w-8 h-8 mr-2" />
            Habitaciones
          </NavLink>
          <NavLink to="/servicios">
            <ServiceIcon className="w-8 h-8 mr-2" />
            Servicios
          </NavLink>
          <NavLink to="/contacto">
            <ContactIcon className="w-8 h-8 mr-2" />
            Contacto
          </NavLink>
        </div>
      </nav>

      {/* Mostrar el clima en la esquina derecha */}
      <div className="text-center md:text-right mt-4 md:mt-0 md:flex-1">
        {weather && (
          <p className="text-sm md:text-base text-gray-500">
            Clima: {weather.main.temp}°C, {weather.weather[0].description}
          </p>
        )}
      </div>
    </header>
  );
}

// Componente NavLink
const NavLink = ({ to, children }) => (
  <Link to={to} className="px-2 py-1 text-gray-500 flex items-center mx-2 transition-opacity duration-300 hover:opacity-75">
    {children}
  </Link>
);

export default Header;
