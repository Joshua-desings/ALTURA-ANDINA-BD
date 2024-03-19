import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import HotelSection from "./components/HotelSection";
import HotelCarousel from "./components/HotelCarousel";
import Habitaciones from "./components/Rooms";
import ReservationBar from "./components/ReservationBar";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./utils/ScrollToTopButton";
import { HabitacionesProvider } from "./hooks/useHabitacionesContext";
import "./App.css";
import OnSearch from "./utils/OnSearch";

function App() {
  const transitions = useTransition(true, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Router>
      <Header />
      {transitions(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/habitaciones" element={<Rooms />} />
                <Route path="/servicios" element={<ServicesSection />} />
                <Route path="/contacto" element={<ContactForm />} />
              </Routes>
            </animated.div>
          )
      )}
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

const Home = () => (
  <>
    <Welcome />
    <ReservationBar />
    <HotelSection />
    <Testimonials />
    <BlogSection />
  </>
);

const Rooms = () => (
  <>
    <HabitacionesProvider> {/* Agregamos el proveedor de contexto de habitaciones */}
      <HotelCarousel />
      <OnSearch />
      <Habitaciones />
    </HabitacionesProvider>
  </>
);

export default App;
