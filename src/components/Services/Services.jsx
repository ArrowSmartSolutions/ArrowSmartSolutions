import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const packages = [
  {
    id: 'starter',
    title: 'Starter Package',
    price: 'From R4,999 – R8,000',
    details: [
      'Responsive Web Design',
      'Basic SEO Setup',
      'Content Management System (CMS)',
      'Up to 5 Pages',
      'Standard Contact Form',
    ],
    cta: 'Get Started',
  },
  {
    id: 'business',
    title: 'Business Package',
    price: 'From R12,000 – R25,000',
    details: [
      'Everything in Starter',
      'Custom Feature Development',
      'E-commerce Integration (Basic)',
      'Advanced Analytics',
      'Up to 15 Pages',
    ],
    cta: 'Grow Your Business',
  },
  {
    id: 'professional',
    title: 'Professional Package',
    price: 'From R30,000 – R60,000+',
    details: [
      'Everything in Business',
      'Enterprise-grade Security',
      'API Development & Integration',
      'Custom Web Applications',
      'Dedicated Account Manager',
    ],
    cta: 'Elevate Your Enterprise',
  },
];

const Card = ({ pkg, isHovered, isSelected, onHover, onHoverEnd, onSelect, onNavigate }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    whileHover={{ scale: 1.05 }}
    onMouseEnter={onHover}
    onMouseLeave={onHoverEnd}
    onClick={onSelect}
    className={`p-6 rounded-2xl bg-white shadow-sm border transition-all duration-300 cursor-pointer ${
      isSelected || isHovered ? 'border-primary shadow-2xl' : 'border-[#eee]'
    }`}
  >
    <div className='text-lg font-medium text-dark2'>{pkg.title}</div>
    <div className='mt-4 text-3xl font-bold'>{pkg.price}</div>
    <ul className='mt-4 space-y-2 text-lg text-dark2'>
      {pkg.details.map((d) => (
        <li key={d} className='flex items-start gap-2'>
          <FiCheckCircle className='text-primary mt-1' />
          <span>{d}</span>
        </li>
      ))}
    </ul>
    <button 
      onClick={(e) => {
        e.stopPropagation();
        onNavigate(pkg.id);
      }}
      className={`mt-6 w-full py-3 rounded-lg transition-colors duration-300 ${isSelected || isHovered ? 'bg-primary text-white' : 'bg-[#f4f4f4]'}`}
    >
      {pkg.cta}
    </button>
  </motion.div>
);

const Services = () => {
  const [hoveredPackage, setHoveredPackage] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = (packageId) => {
    navigate(`/package/${packageId}`);
  };

  return (
    <section className='bg-white'>
      <div className='container pb-8 sm:pb-10 md:pb-12 lg:pb-14 pt-8 sm:pt-12 md:pt-16 lg:pt-20'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center pb-8 sm:pb-10 md:pb-12 lg:pb-14 leading-tight'>
          Our Flexible Development Packages
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8'>
          {packages.map((p) => (
            <Card 
              pkg={p} 
              key={p.id}
              isHovered={hoveredPackage === p.id}
              isSelected={selectedPackage === p.id}
              onHover={() => setHoveredPackage(p.id)}
              onHoverEnd={() => setHoveredPackage(null)}
              onSelect={() => setSelectedPackage(p.id)}
              onNavigate={handleNavigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
