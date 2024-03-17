import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header';
import Welcome from './components/Welcome';
import HotelSection from './components/HotelSection';
import HotelCarousel from './components/HotelCarousel';
import ReservationBar from './components/ReservationBar';
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import ScrollToTopButton from './utils/ScrollToTopButton';
import './App.css';

function App() {
  return (
    <Router> 
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habitaciones" element={<HotelCarousel />} />
          <Route path="/servicios" element={<ServicesSection />} />
          <Route path="/contacto" element={<ContactForm />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
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
