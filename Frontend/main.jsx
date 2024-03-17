import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    100: '#DCE9F5',
    300: '#BCE7F7',
    400: '#ABD8EC',
    500: '#6998A7',
    600: '#313F3E',
  },
};

const fonts = {
  body: 'Lato, sans-serif',
  heading: 'Playfair Display, serif',
};

// Define Material-UI theme
const materialTheme = createTheme({
  palette: {
    primary: {
      main: colors.brand[500],
    },
  },
  typography: {
    fontFamily: fonts.body,
    h1: {
      fontFamily: fonts.heading,
    },
    h2: {
      fontFamily: fonts.heading,
    },
    h3: {
      fontFamily: fonts.heading,
    },
    // Define typography variants as needed
  },
});

// Define Chakra UI theme
const chakraTheme = extendTheme({
  colors: {
    brand: colors.brand,
  },
  fonts,
});

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
      <ThemeProvider theme={materialTheme}>
        <App />
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
