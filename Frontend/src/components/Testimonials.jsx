import React, { useState } from 'react';
import { Typography, Button, Card, CardContent, Avatar } from '@mui/material';
import { useSpring, animated } from 'react-spring';

function Testimonials() {
  const [showMore, setShowMore] = useState(false);

  const flipProps = useSpring({
    from: { transform: 'perspective(600px) rotateY(-180deg)', opacity: 0 },
    to: { transform: 'perspective(600px) rotateY(0deg)', opacity: 1 },
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const testimonials = [
    {
      quote: "¡Una experiencia increíble! El personal del hotel fue muy amable y servicial. Las habitaciones eran cómodas y limpias, y la comida era deliciosa. Definitivamente volveré.",
      author: "Juan Pérez",
      image: "/assets/images/client1.jpg"
    },
    {
      quote: "Pasamos unas vacaciones maravillosas en este hotel. La ubicación es perfecta, con vistas impresionantes y muchas actividades cercanas. ¡Altamente recomendado!",
      author: "María González",
      image: "/assets/images/client2.jpg"
    },
    {
      quote: "El servicio en este hotel es excepcional. Todos los empleados fueron extremadamente serviciales y atentos a nuestras necesidades. Sin duda, volveremos en el futuro.",
      author: "Carlos Rodríguez",
      image: "/assets/images/client3.jpg"
    },
    {
      quote: "Excelente hotel con instalaciones de primera clase. La atención al cliente es insuperable y la comida es deliciosa. Sin duda, uno de los mejores hoteles en los que me he alojado.",
      author: "Ana Martínez",
      image: "/assets/images/client4.jpg"
    },
    {
      quote: "Una estancia muy agradable en este hotel. Las habitaciones son cómodas y bien equipadas, y el personal es muy servicial. Definitivamente lo recomendaría a amigos y familiares.",
      author: "Luis Hernández",
      image: "/assets/images/client5.jpg"
    },
  ];

  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        <Typography variant="h3" align="center" gutterBottom>
          Testimonios de nuestros clientes
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <animated.div key={index} style={flipProps}>
              <Card className="bg-white rounded-lg shadow-md overflow-hidden">
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    {testimonial.quote}
                  </Typography>
                  <div className="flex items-center mt-4">
                    <Avatar alt={testimonial.author} src={testimonial.image} sx={{ width: 40, height: 40, mr: 2 }} />
                    <Typography variant="subtitle2">
                      - {testimonial.author}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </animated.div>
          ))}
          {showMore &&
            testimonials.slice(3).map((testimonial, index) => (
              <animated.div key={index} style={flipProps}>
                <Card className="bg-white rounded-lg shadow-md overflow-hidden">
                  <CardContent>
                    <Typography variant="body1" gutterBottom>
                      {testimonial.quote}
                    </Typography>
                    <div className="flex items-center mt-4">
                      <Avatar alt={testimonial.author} src={testimonial.image} sx={{ width: 40, height: 40, mr: 2 }} />
                      <Typography variant="subtitle2">
                        - {testimonial.author}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="contained" color="primary" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Ver menos testimonios" : "Ver más testimonios"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
