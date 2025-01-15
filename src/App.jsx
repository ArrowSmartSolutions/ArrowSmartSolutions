import React from 'react';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
