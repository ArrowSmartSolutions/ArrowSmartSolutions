import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Banner from '../components/Banner/Banner';
import Support from '../components/Support/Support';
import SubscriptionPlans from '../components/SubscriptionPlans/SubscriptionPlans';
import WhyPartner from '../components/WhyPartner/WhyPartner';
import FindFit from '../components/FindFit/FindFit';
import Promotion from '../components/Promotion/Promotion';
import HomeAccordions from '../components/HomeAccordions/HomeAccordions';

const HomePage = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Promotion />
      <SubscriptionPlans />
      <Support />
      <Banner />
      <WhyPartner />
      <FindFit />
      <HomeAccordions />
    </main>
  );
};

export default HomePage;
