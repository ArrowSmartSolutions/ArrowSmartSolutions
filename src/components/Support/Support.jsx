'use client'
import React, { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const plans = [
  {
    id: 'basic',
    title: 'Basic Support',
    price: 'R499 / month',
    bullets: [
      'Monthly Security Patches',
      'CMS Core Updates',
      'Database Backups',
      'Email Support (24-hour response)',
    ],
  },
  {
    id: 'standard',
    title: 'Standard Support',
    price: 'R999 / month',
    bullets: [
      'Everything in Basic',
      'Content Updates (2 hours/month)',
      'Performance Monitoring',
      'Priority Email Support (12-hour response)',
    ],
    highlighted: true,
  },
  {
    id: 'priority',
    title: 'Priority Support',
    price: 'R1,999 / month',
    bullets: [
      'Everything in Standard',
      'Emergency Hotfixes (2-hour response)',
      'Advanced SEO Monitoring',
      'Dedicated Technical Consultations',
    ],
  },
];

const PlanCard = ({ plan, isHovered, isSelected, onHover, onHoverEnd, onSelect, onNavigate }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    onMouseEnter={onHover}
    onMouseLeave={onHoverEnd}
    onClick={onSelect}
    className={`p-5 md:p-6 lg:p-7 rounded-2xl border transition-all duration-300 cursor-pointer ${isSelected || isHovered ? 'bg-secondary text-white border-secondary shadow-2xl' : 'bg-white text-dark border-[#eee] shadow-sm'}`}
    role="button"
    tabIndex={0}
    aria-pressed={isSelected}
    aria-label={`Select ${plan.title}`}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect();
      }
    }}
  >
    <div>
      <div className={`text-base md:text-lg lg:text-xl font-semibold ${isSelected || isHovered ? 'text-white' : 'text-dark'}`}>{plan.title}</div>
      <div className={`mt-2 text-sm font-bold ${isSelected || isHovered ? 'text-white' : 'text-secondary'}`}>{plan.price}</div>
    </div>
    <ul className='mt-4 space-y-2'>
      {plan.bullets.map((b) => (
        <li key={b} className='flex items-start gap-2'>
          <FiCheckCircle className={`mt-1 flex-shrink-0 ${isSelected || isHovered ? 'text-white' : 'text-secondary'}`} />
          <span className={`text-xs md:text-sm lg:text-base ${isSelected || isHovered ? 'text-gray-100' : 'text-dark2'}`}>{b}</span>
        </li>
      ))}
    </ul>
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={(e) => {
        e.stopPropagation();
        onNavigate(plan.id);
      }}
      aria-label={`Learn more about ${plan.title}`}
      className={`mt-6 w-full py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${isSelected || isHovered ? 'bg-white text-secondary hover:bg-gray-100' : 'bg-[#f4f4f4] text-dark hover:bg-gray-200'}`}
    >
      Learn More
    </motion.button>
  </motion.div>
);

const Support = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const router = useRouter();

  const handleNavigate = (planId) => {
    router.push(`/support-plan/${planId}`);
  };

  return (
    <section className='bg-light'>
      <div className='container py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center pb-8 sm:pb-10 md:pb-12 lg:pb-14 leading-tight'>Ongoing Support & Maintenance Plans</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
          {plans.map((p) => (
            <PlanCard 
              plan={p} 
              key={p.id}
              isHovered={hoveredPlan === p.id}
              isSelected={selectedPlan === p.id}
              onHover={() => setHoveredPlan(p.id)}
              onHoverEnd={() => setHoveredPlan(null)}
              onSelect={() => setSelectedPlan(p.id)}
              onNavigate={handleNavigate}
            />
          ))}
        </div>

        <div className='text-center py-8 sm:py-10 md:py-12 lg:py-16'>
          <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight'>Need a Bespoke Solution?</h3>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg text-dark2 max-w-[800px] mx-auto mb-5 sm:mb-6 md:mb-8 leading-relaxed'>For complex projects or unique business requirements, we're ready to craft a tailor-made proposal just for you. Reach out today for a personalized consultation.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/contact')}
            aria-label="Contact us for a custom support quote"
            className='primary-btn text-xs sm:text-sm md:text-base lg:text-lg py-2.5 sm:py-3 md:py-3.5 px-5 sm:px-6 md:px-8'
          >
            Contact Us for a Quote
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Support;
