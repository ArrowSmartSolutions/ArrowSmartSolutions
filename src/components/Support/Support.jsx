import React, { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
    onMouseEnter={onHover}
    onMouseLeave={onHoverEnd}
    onClick={onSelect}
    className={`p-6 rounded-2xl bg-white border transition-all duration-300 cursor-pointer ${isSelected || isHovered ? 'border-secondary shadow-2xl' : 'border-[#eee]'}`}
  >
    <div className='text-lg font-semibold'>{plan.title}</div>
    <div className='mt-2 text-secondary font-bold text-2xl'>{plan.price}</div>
    <ul className='mt-4 space-y-2 text-lg text-dark2'>
      {plan.bullets.map((b) => (
        <li key={b} className='flex items-start gap-2'>
          <FiCheckCircle className={`mt-1 ${isSelected || isHovered ? 'text-secondary' : 'text-secondary'}`} />
          <span>{b}</span>
        </li>
      ))}
    </ul>
    <button 
      onClick={(e) => {
        e.stopPropagation();
        onNavigate(plan.id);
      }}
      className={`mt-6 w-full py-3 rounded-lg transition-colors duration-300 ${isSelected || isHovered ? 'bg-secondary text-white' : 'bg-[#f4f4f4]'}`}
    >
      Learn More
    </button>
  </motion.div>
);

const Support = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = (planId) => {
    navigate(`/support-plan/${planId}`);
  };

  return (
    <section className='bg-light'>
      <div className='container py-16'>
        <h2 className='text-5xl font-bold text-center pb-8'>Ongoing Support & Maintenance Plans</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
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

        <div className='text-center py-12'>
          <h3 className='text-4xl font-bold mb-3'>Need a Bespoke Solution?</h3>
          <p className='text-lg text-dark2 max-w-[800px] mx-auto mb-6'>For complex projects or unique business requirements, we're ready to craft a tailor-made proposal just for you. Reach out today for a personalized consultation.</p>
          <button className='primary-btn'>Contact Us for a Quote</button>
        </div>
      </div>
    </section>
  );
};

export default Support;
