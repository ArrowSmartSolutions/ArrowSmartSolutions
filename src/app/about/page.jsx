import React from 'react';
import WhyPartner from '../../components/WhyPartner/WhyPartner';
import Banner from '../../components/Banner/Banner';

export const metadata = {
  title: 'Why Partner with Us | Arrow Smart Solutions - Innovative IT Services South Africa',
  description: 'Discover why Arrow Smart Solutions is your ideal IT partner in South Africa. We offer innovative solutions, local expertise, scalable growth, and transparent processes for businesses nationwide. Learn about our commitment to quality and reliability.',
  keywords: [
    'why partner with Arrow Smart Solutions',
    'innovative IT solutions South Africa',
    'local IT expertise',
    'scalable IT services',
    'transparent IT processes',
    'affordable IT solutions South Africa',
    'reliable IT services',
    'web development services South Africa',
    'custom software development',
    'business website creation',
    'software solutions for businesses',
    'professional web design South Africa',
    'IT consulting South Africa',
  ],
  alternates: {
    canonical: 'https://arrowsmartsolutions.co.za/about',
  },
}

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-white text-dark pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <WhyPartner />
      <Banner />
    </main>
  );
}
