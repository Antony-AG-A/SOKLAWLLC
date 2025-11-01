import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import TrackRecord from '../components/TrackRecord';
import News from '../components/News';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CSRPreview from '../components/CSRPreview';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <TrackRecord />
      <CSRPreview />
      <News />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default HomePage;