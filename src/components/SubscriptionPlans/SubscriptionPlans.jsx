'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import {
  subscriptionPlans,
} from '../../data/subscriptionPlans';

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
    className={`p-5 md:p-6 lg:p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col h-full ${isSelected || isHovered ? 'bg-secondary text-white border-secondary shadow-2xl' : 'bg-white text-dark border-[#eee] shadow-sm'}`}
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
    <div className="flex-grow">
      <div>
        <div className={`text-base md:text-lg lg:text-xl font-semibold ${isSelected || isHovered ? 'text-white' : 'text-dark'}`}>{plan.title}</div>
        <div className={`mt-2 text-xs md:text-sm lg:text-base font-semibold ${isSelected || isHovered ? 'text-gray-100' : 'text-dark2'}`}>{plan.label}</div>
        <div className={`mt-3 text-sm font-bold ${isSelected || isHovered ? 'text-white' : 'text-secondary'}`}>{plan.monthlyPrice}</div>
        <div className={`mt-1 text-xs md:text-sm ${isSelected || isHovered ? 'text-gray-100' : 'text-dark2'}`}>Setup: {plan.setupFee}</div>
      </div>
      <ul className='mt-4 space-y-2'>
        {plan.highlights.map((item) => (
          <li key={item} className='flex items-start gap-2'>
            <FiCheckCircle className={`mt-1 flex-shrink-0 ${isSelected || isHovered ? 'text-white' : 'text-secondary'}`} />
            <span className={`text-xs md:text-sm lg:text-base ${isSelected || isHovered ? 'text-gray-100' : 'text-dark2'}`}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={(e) => {
        e.stopPropagation();
        onNavigate(plan.id);
      }}
      aria-label={`Learn more about the ${plan.title} plan`}
      className={`mt-6 w-full py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${isSelected || isHovered ? 'bg-white text-secondary hover:bg-gray-100' : 'bg-[#f4f4f4] text-dark hover:bg-gray-200'}`}
    >
      Learn More
    </motion.button>
  </motion.div>
);

const SubscriptionPlans = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const router = useRouter();

  const handleNavigate = (planId) => {
    router.push(`/subscription-plan/${planId}`);
  };

  return (
    <section className='bg-light'>
      <div className='container py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24'>
        <div className='text-center pb-8 sm:pb-10 md:pb-12 lg:pb-14'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>Subscription Plans Built for South African Growth</h2>
          <p className='mt-3 text-xs sm:text-sm md:text-base lg:text-lg text-dark2 max-w-3xl mx-auto'>
            Three tiers designed for portfolios, SMEs, and enterprise teams with modern Next.js performance and clear monthly value.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-10 sm:mb-12 md:mb-14'>
          {subscriptionPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isHovered={hoveredPlan === plan.id}
              isSelected={selectedPlan === plan.id}
              onHover={() => setHoveredPlan(plan.id)}
              onHoverEnd={() => setHoveredPlan(null)}
              onSelect={() => setSelectedPlan(plan.id)}
              onNavigate={handleNavigate}
            />
          ))}
        </div>

        <div className='text-center mt-10 sm:mt-12 md:mt-16'>
          <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3'>Need help choosing the right tier?</h3>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg text-dark2 max-w-2xl mx-auto mb-6'>
            Tell us your goals and we will map the best plan for traffic, conversion, and growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/contact')}
            className='primary-btn text-xs sm:text-sm md:text-base lg:text-lg py-2.5 sm:py-3 md:py-3.5 px-5 sm:px-6 md:px-8'
          >
            Talk to Us
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
