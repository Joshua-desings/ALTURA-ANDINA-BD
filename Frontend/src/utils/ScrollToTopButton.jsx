import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 140) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <IconButton
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: '1000',
        backgroundColor: '#DCE9F5',
        borderRadius: '50%', // Hace que el botón sea circular
        opacity: isVisible ? 1 : 0, // Cambia la opacidad dependiendo de si es visible o no
        transition: 'opacity 0.5s', // Agrega una transición de opacidad
      }}
      color="primary"
      onClick={scrollToTop}
    >
      <ArrowUpward />
    </IconButton>
  );
}

export default ScrollToTopButton;
