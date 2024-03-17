import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [reservationData, setReservationData] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const updateReservationData = (data) => {
    setReservationData(data);
  };

  return (
    <DataContext.Provider value={{ reservationData, updateReservationData, showSuccessMessage, setShowSuccessMessage }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
