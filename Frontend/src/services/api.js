import axios from 'axios';

const API_KEY = ""; //Recuerda poner aqui tu propia api key de openweathermap

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

export const getWeatherByCity = async (city, lang = 'es') => {
  try {
    const response = await api.get(`/weather?q=${city}&appid=${API_KEY}&lang=${lang}`);
    const data = response.data;
    // Convertir la temperatura de Kelvin a Celsius
    const temperatureInCelsius = data.main.temp - 273.15;
    // Redondear la temperatura a dos decimales
    data.main.temp = Math.round(temperatureInCelsius * 100) / 100;
    return data;
  } catch (error) {
    console.error('Error al obtener el clima:', error);
    throw error;
  }
};

export default api;