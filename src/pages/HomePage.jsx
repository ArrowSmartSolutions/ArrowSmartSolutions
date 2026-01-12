import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Banner from '../components/Banner/Banner';
import Support from '../components/Support/Support';
import WhyPartner from '../components/WhyPartner/WhyPartner';
import FindFit from '../components/FindFit/FindFit';
import Contact from '../components/Contact/Contact';
import Promotion from '../components/Promotion/Promotion';

const HomePage = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Banner />
      <Promotion />
      <Support />
      <WhyPartner />
      <FindFit />
      <Contact />
    </main>
  );
};

export default HomePage;
