import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const FindFit = () => {
  const [selectedFit, setSelectedFit] = useState(null);
  const navigate = useNavigate();

  const fitOptions = [
    {
      id: 'startup',
      title: 'Solo Developer / Startup',
      description: 'Seeking cost-effective solutions to launch quickly or for individual projects.',
      suggestedPackages: ['starter', 'business'],
      features: ['Budget-friendly', 'Quick turnaround', 'Perfect for MVPs', 'Essential features'],
      cta: 'View Starter Package'
    },
    {
      id: 'enterprise',
      title: 'Growing Team / Enterprise',
      description: 'Requires robust, scalable, and premium solutions for complex team or business needs.',
      suggestedPackages: ['business', 'professional'],
      features: ['Scalable solutions', 'Advanced features', 'Dedicated support', 'Custom integrations'],
      cta: 'View Professional Package'
    }
  ];

  const handleCardClick = (fitId) => {
    setSelectedFit(fitId);
  };

  const handleNavigateToPackage = (fitId) => {
    let packageId;
    
    switch(fitId) {
      case 'startup':
        packageId = 'starter';
        break;
      case 'enterprise':
        packageId = 'professional';
        break;
      default:
        packageId = 'starter';
    }
    
    navigate(`/package/${packageId}`);
  };

  return (
    <section className='bg-light'>
      <div className='container py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-tight'>Find Your Perfect Fit</h2>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg text-dark2 max-w-[800px] mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16 leading-relaxed'>
            To better assist you, tell us a bit about your needs. Are you looking for a lower entry-point or a premium, comprehensive service?
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-[900px] mx-auto mt-8 md:mt-10 lg:mt-12'>
          {fitOptions.map((option, idx) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleCardClick(option.id)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col h-full ${
                selectedFit === option.id
                  ? 'bg-primary text-white border-primary shadow-2xl'
                  : 'bg-white text-dark border-[#eee] hover:shadow-lg'
              }`}
              role="button"
              tabIndex={0}
              aria-pressed={selectedFit === option.id}
              aria-label={`Select ${option.title} option`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(option.id);
                }
              }}
            >
              <div className={`font-semibold mb-3 text-xl ${selectedFit === option.id ? 'text-white' : 'text-dark'}`}>
                {option.title}
              </div>
              <p className={`text-base mb-4 ${selectedFit === option.id ? 'text-gray-100' : 'text-dark2'}`}>
                {option.description}
              </p>

              <div className='space-y-2 flex-grow text-left'>
                {option.features.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className='flex items-center gap-2'
                  >
                    <FiCheckCircle className={`flex-shrink-0 ${selectedFit === option.id ? 'text-white' : 'text-primary'}`} />
                    <span className={`text-sm ${selectedFit === option.id ? 'text-gray-100' : 'text-dark2'}`}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigateToPackage(option.id);
                }}
                aria-label={`Navigate to ${option.cta}`}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-base ${
                  selectedFit === option.id
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-white hover:bg-opacity-90'
                }`}
              >
                {option.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {selectedFit && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='mt-8 text-center'
          >
            <p className='text-lg text-dark2'>
              Selected: <span className='font-bold text-primary'>
                {fitOptions.find(opt => opt.id === selectedFit)?.title}
              </span>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FindFit;
