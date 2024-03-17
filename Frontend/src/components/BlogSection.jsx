import React from "react";
import { Typography, Grid, Card, CardContent, CardHeader } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import EventIcon from "@mui/icons-material/Event";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function BlogSection() {
  // Animación para las tarjetas
  const animatedProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-50px)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <section id="blog-section" className="py-12">
      <div className="container mx-auto">
        <Typography variant="h2" align="center" gutterBottom>
          ¡Explora Mérida!
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <animated.div style={animatedProps}>
              <Card>
                <CardHeader title="Artículos de Turismo" />
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    Descubre los mejores lugares para visitar en Mérida y sus
                    alrededores.
                  </Typography>
                  <Link
                    to="https://www.tripadvisor.com.ve/Attractions-g316050-Activities-Merida_Andean_Region.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver más <OpenInNewIcon fontSize="small" />
                  </Link>{" "}
                  {/* Enlace falso */}
                </CardContent>
              </Card>
            </animated.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <animated.div style={animatedProps}>
              <Card>
                <CardHeader title="Consejos de Viaje" />
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    Encuentra consejos útiles para planificar tu viaje a Mérida
                    y aprovechar al máximo tu estadía.
                  </Typography>
                  <ul>
                    {/* Lista de consejos de viaje */}
                    <li>
                      <FlightTakeoffIcon fontSize="small" /> Empaca ropa ligera
                      y cómoda.
                    </li>
                    <li>
                      <LocalMallIcon fontSize="small" /> Investiga sobre la
                      cultura local.
                    </li>
                    <li>
                      <RestaurantIcon fontSize="small" /> Prueba la comida
                      típica de la región.
                    </li>
                    <li>
                      <EventIcon fontSize="small" /> Reserva tus actividades con
                      anticipación.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </animated.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <animated.div style={animatedProps}>
              <Card>
                <CardHeader title="Guías Turísticas" />
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    Explora nuestras completas guías turísticas sobre Mérida y
                    sus atracciones más destacadas.
                  </Typography>
                  <Link
                    to="https://www.venezuelatuya.com/andes/guia_turistica_de_merida.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver más <OpenInNewIcon fontSize="small" />
                  </Link>{" "}
                  {/* Enlace falso */}
                </CardContent>
              </Card>
            </animated.div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default BlogSection;
