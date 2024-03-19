import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Creamos el contexto de las habitaciones
const HabitacionesContext = createContext();

// Hook personalizado para acceder al contexto de las habitaciones
export const useHabitaciones = () => useContext(HabitacionesContext);

// Proveedor del contexto de las habitaciones
export const HabitacionesProvider = ({ children }) => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para cargar las habitaciones desde el servidor
    const cargarHabitaciones = async () => {
      try {
        const response = await axios.get('http://localhost:5000/habitaciones');
        setHabitaciones(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Cargar las habitaciones al montar el componente
    cargarHabitaciones();

    // Retornar una función para limpiar el estado al desmontar el componente
    return () => {
      // No necesitamos limpiar el estado aquí, ya que las habitaciones se actualizarán automáticamente cuando sea necesario
    };
  }, []);

  const setFilteredHabitaciones = (filteredHabitaciones) => {
    setHabitaciones(filteredHabitaciones);
  };

  // Retornar el proveedor del contexto de las habitaciones
  return (
    <HabitacionesContext.Provider value={{ habitaciones, loading, error, setFilteredHabitaciones }}>
      {children}
    </HabitacionesContext.Provider>
  );
};
