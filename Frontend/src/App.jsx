import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import HotelSection from "./components/HotelSection";
import HotelCarousel from "./components/HotelCarousel";
import ReservationBar from "./components/ReservationBar";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./utils/ScrollToTopButton";
import { DataProvider } from "./hooks/DataContext";
import "./App.css";

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
              <DataProvider>
                {" "}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/habitaciones" element={<HotelCarousel />} />
                  <Route path="/servicios" element={<ServicesSection />} />
                  <Route path="/contacto" element={<ContactForm />} />
                </Routes>
              </DataProvider>
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

export default App;
