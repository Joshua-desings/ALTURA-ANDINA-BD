import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const HotelCarousel = () => {
  const slideProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { tension: 90, friction: 20 },
  });

  const renderStars = (rating) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-400'}>
        &#9733;
      </span>
    ));
    return stars;
  };

  return (
    <div className="w-full mx-auto mb-8 mt-8 relative">
      <Box mb={4}>
        <Typography variant="h2" gutterBottom className="text-brand-500" align="center">
          Habitaciones y Precios
        </Typography>
      </Box>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              onClick={onClickHandler}
              className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-4"
            >
              <span>&#9664;</span>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              onClick={onClickHandler}
              className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-4"
            >
              <span>&#9654;</span>
            </button>
          )
        }
        className="w-full h-full"
        transitionTime={700}
      >
        <animated.div style={slideProps}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" className="w-full h-full bg-center">
            <img src="assets/images/Estandar.jpg" alt="Habitacion Estandar" className="object-cover w-full h-full" />
            <Box display="flex" flexDirection="column" alignItems="flex-end" p={2} backgroundColor="#313F3E" borderRadius="md" position="absolute" bottom={0} right={0}>
              <Typography variant="h5" fontWeight="bold" color="white" fontFamily="Lato">
                Habitación Estándar
              </Typography>
              <Box display="flex" alignItems="center" color="white">
                {renderStars(3)}
                <Typography ml={1} variant="body1" fontFamily="Lato">
                  $100 por noche
                </Typography>
              </Box>
            </Box>
          </Box>
        </animated.div>
        <animated.div style={slideProps}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" className="w-full h-full bg-center">
            <img src="assets/images/Lujo.jpeg" alt="Habitacion Lujosa" className="object-cover w-full h-full" />
            <Box display="flex" flexDirection="column" alignItems="flex-end" p={2} backgroundColor="#313F3E" borderRadius="md" position="absolute" bottom={0} right={0}>
              <Typography variant="h5" fontWeight="bold" color="white" fontFamily="Lato">
                Habitacion de Lujo
              </Typography>
              <Box display="flex" alignItems="center" color="white">
                {renderStars(5)}
                <Typography ml={1} variant="body1" fontFamily="Lato">
                  $250 por noche
                </Typography>
              </Box>
            </Box>
          </Box>
        </animated.div>
        <animated.div style={slideProps}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" className="w-full h-full bg-center">
            <img src="assets/images/Ejecutiva.jpeg" alt="Habitacion Ejecutiva" className="object-cover w-full h-full" />
            <Box display="flex" flexDirection="column" alignItems="flex-end" p={2} backgroundColor="#313F3E" borderRadius="md" position="absolute" bottom={0} right={0}>
              <Typography variant="h5" fontWeight="bold" color="white" fontFamily="Lato">
                Habitacion Ejecutiva
              </Typography>
              <Box display="flex" alignItems="center" color="white">
                {renderStars(4)}
                <Typography ml={1} variant="body1" fontFamily="Lato">
                  $200 por noche
                </Typography>
              </Box>
            </Box>
          </Box>
        </animated.div>
      </Carousel>
    </div>
  );
};

export default HotelCarousel;
