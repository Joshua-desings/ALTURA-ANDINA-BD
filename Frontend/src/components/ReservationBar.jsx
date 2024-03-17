import React, { useState, useEffect } from 'react';
import { FormControl, FormLabel, Input, MenuItem, Select, Button, Snackbar } from '@mui/material';
import { PeopleAlt, Hotel } from '@mui/icons-material';
import { useData } from '../hooks/DataContext';
import { useNavigate } from 'react-router-dom';

const ReservationBar = () => {
  const { updateReservationData } = useData();
  const [reservationData, setReservationData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    kids: 0,
    rooms: 1
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Estado para mostrar la alerta de éxito
  const [isReservationDisabled, setIsReservationDisabled] = useState(true); // Estado para deshabilitar el botón de reserva
  const navigate = useNavigate();

  // Función para verificar si las fechas son válidas y actualizar el estado de deshabilitación del botón
  useEffect(() => {
    const isDisabled = !reservationData.checkIn || !reservationData.checkOut || reservationData.checkOut <= reservationData.checkIn;
    setIsReservationDisabled(isDisabled);
  }, [reservationData.checkIn, reservationData.checkOut]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleReserve = () => {
    if (!reservationData.checkIn || !reservationData.checkOut || reservationData.checkOut <= reservationData.checkIn) {
      return;
    }

    updateReservationData(reservationData);
    setReservationData({
      checkIn: '',
      checkOut: '',
      adults: 1,
      kids: 0,
      rooms: 1
    });
    setShowSuccessMessage(true); // Activar la alerta de éxito
    // Esperar 2.5 segundos antes de redireccionar
    setTimeout(() => {
      navigate('/contacto'); // Redireccionar a /contacto
    }, 2500);
  };
  return (
    <div className="flex flex-wrap justify-center items-center" style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.8rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <FormControl style={{ margin: '0.8rem' }}>
        <FormLabel htmlFor="check-in">Entrada</FormLabel>
        <Input id="check-in" type="date" size="small" name="checkIn" value={reservationData.checkIn} onChange={handleInputChange} />
      </FormControl>
      <FormControl style={{ margin: '0.8rem' }}>
        <FormLabel htmlFor="check-out">Salida</FormLabel>
        <Input id="check-out" type="date" size="small" name="checkOut" value={reservationData.checkOut} onChange={handleInputChange} />
      </FormControl>
      <FormControl style={{ margin: '0.8rem' }}>
        <FormLabel htmlFor="adults">Adultos</FormLabel>
        <Select id="adults" size="small" defaultValue={1} name="adults" value={reservationData.adults} onChange={handleInputChange} startAdornment={<PeopleAlt />}>
          {[...Array(8).keys()].map((num) => (
            <MenuItem key={num + 1} value={num + 1}>
              {num + 1} Adultos
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl style={{ margin: '0.8rem' }}>
        <FormLabel htmlFor="kids">Niños</FormLabel>
        <Select id="kids" size="small" defaultValue={0} name="kids" value={reservationData.kids} onChange={handleInputChange} startAdornment={<PeopleAlt />}>
          {[...Array(8).keys()].map((num) => (
            <MenuItem key={num} value={num}>
              {num} Niños
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl style={{ margin: '0.8rem' }}>
        <FormLabel htmlFor="rooms">Habitaciones</FormLabel>
        <Select id="rooms" size="small" defaultValue={1} name="rooms" value={reservationData.rooms} onChange={handleInputChange} startAdornment={<Hotel />}>
          {[...Array(8).keys()].map((num) => (
            <MenuItem key={num + 1} value={num + 1}>
              {num + 1} Habitaciones
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" size="large" color="primary" style={{ marginTop: '1.5rem' }} disabled={isReservationDisabled} onClick={handleReserve}>
        Reservar
      </Button>
      {/* Snackbar para la alerta de éxito */}
      <Snackbar open={showSuccessMessage} autoHideDuration={6000} onClose={() => setShowSuccessMessage(false)} message="Datos enviados, complete el formulario" />
    </div>
  );
};

export default ReservationBar;
