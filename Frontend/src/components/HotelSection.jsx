import React from 'react';
import { Typography, Grid } from '@mui/material';
import { Image, Box, Card } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';

const HotelSection = () => {
  const textProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { tension: 80, friction: 14 },
  });

  return (
    <section id="hotel-section" className="py-8 bg-gray-100 shadow-lg">
      <div className="container mx-auto px-4">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <animated.div style={textProps}>
              <Box>
                <Typography variant="h2" gutterBottom className="text-brand-500">
                  Bienvenido a Altura Andina Hotel & Spa
                </Typography>
                <Typography variant="h5" gutterBottom className="text-gray-600">
                  Descubre una experiencia única en el corazón de Mérida
                </Typography>
                <Typography variant="body1" className="text-gray-800" style={{ fontFamily: 'Lato', fontSize: '1.25rem' }}>
                  El Altura Andina Hotel & Spa es un lugar de ensueño ubicado en el corazón de la hermosa ciudad de Mérida.
                  Con vistas espectaculares, comodidades de primera clase y un servicio excepcional, ¡te garantizamos una estancia inolvidable!
                </Typography>
              </Box>
            </animated.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="shadow-md">
              <Image src="assets/images/Hotel.png" alt="Hotel Placeholder Image" h="full" objectFit="cover" />
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default HotelSection;
