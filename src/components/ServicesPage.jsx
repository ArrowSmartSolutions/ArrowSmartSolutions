import React from 'react';
import Services from '../components/Services/Services';
import Banner from '../components/Banner/Banner';

const ServicesPage = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <Services />
      <Banner />
    </main>
  );
};

export default ServicesPage;
