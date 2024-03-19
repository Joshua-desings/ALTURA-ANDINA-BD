import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { TextField, IconButton, Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useHabitaciones } from '../hooks/useHabitacionesContext';

const OnSearch = () => {
  const { habitaciones, setFilteredHabitaciones } = useHabitaciones();
  const [personasFilter, setPersonasFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Función de debounce para retrasar la actualización del estado de búsqueda
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Función para manejar el cambio en el término de búsqueda con debounce
  const handleSearchChange = debounce((event) => {
    setSearchTerm(event.target.value);
  }, 300); // Delay de 300 milisegundos

  // Función para filtrar las habitaciones según la cantidad máxima de personas
  useEffect(() => {
    const filterHabitaciones = () => {
      let filteredHabitaciones = habitaciones;

      // Filtrar por cantidad de personas si hay un filtro definido
      if (personasFilter.trim() !== '') {
        filteredHabitaciones = filteredHabitaciones.filter(habitacion =>
          habitacion.capacidadMaxima <= parseInt(personasFilter)
        );
      }

      // Actualizar el estado de las habitaciones filtradas
      setFilteredHabitaciones(filteredHabitaciones);
    };

    filterHabitaciones();
  }, [personasFilter, habitaciones, setFilteredHabitaciones]);

  // Función para resetear los filtros y mostrar todas las habitaciones
  const handleResetFilters = () => {
    setSearchTerm('');
    setPersonasFilter('');
    filterHabitaciones(); // Volver a aplicar los filtros para mostrar todas las habitaciones
  };
  

  // Animación de entrada para la barra de búsqueda
  const searchAnimation = useSpring({
    width: searchTerm === '' ? '0%' : '100%',
    opacity: searchTerm === '' ? 0 : 1,
  });

  return (
    <div className="w-full my-4 flex justify-center items-center">
      <animated.div style={searchAnimation} className="flex-grow max-w-md relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search />
        </div>
        <TextField
          variant="outlined"
          placeholder="Buscar por cantidad máxima de personas"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
          InputProps={{
            startAdornment: null,
          }}
          className="pl-10"
        />
      </animated.div>
      <TextField
        variant="outlined"
        placeholder="Ingresar cantidad máxima de personas"
        value={personasFilter}
        onChange={(event) => setPersonasFilter(event.target.value)}
        className="mx-4"
      />
      <Button variant="contained" onClick={handleResetFilters}>
        Resetear Filtros
      </Button>
    </div>
  );
};

export default OnSearch;
