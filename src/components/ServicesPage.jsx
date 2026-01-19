import React from 'react';
import Services from '../components/Services/Services';
import Banner from '../components/Banner/Banner';
import Support from '../components/Support/Support';

const ServicesPage = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <Services />
      <Support />
      <Banner />
    </main>
  );
};

export default ServicesPage;
