'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import {
  subscriptionPlanDetails,
  subscriptionPlans,
} from '../data/subscriptionPlans';

const SubscriptionPlanDetail = ({ planId }) => {
  const router = useRouter();
  const details = subscriptionPlanDetails[planId];

  const otherPlans = subscriptionPlans
    .map((plan) => plan.id)
    .filter((id) => id !== planId);
  const planLookup = subscriptionPlans.reduce((acc, plan) => {
    acc[plan.id] = plan;
    return acc;
  }, {});

  if (!details) {
    return (
      <main className="overflow-x-hidden bg-white text-dark pt-32">
        <div className='container py-16 text-center'>
          <h1 className='text-4xl sm:text-5xl font-bold mb-6'>Subscription Plan Not Found</h1>
          <p className='text-base sm:text-lg text-dark2'>Sorry, we could not find the subscription plan you requested.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden bg-white text-dark pt-32 pb-16">
      <div className='container py-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-5xl mx-auto'
        >
          <div className='text-center mb-12 sm:mb-16'>
            <div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>{details.title}</h1>
              <p className='mt-2 text-sm sm:text-base font-bold text-secondary'>{details.monthlyPrice}</p>
              <p className='mt-1 text-xs sm:text-sm text-dark2'>Setup fee: {details.setupFee}</p>
            </div>
            <p className='text-xs sm:text-sm md:text-base lg:text-lg text-dark2 mt-4'>{details.description}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mb-12 sm:mb-16 grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            <div className='p-6 bg-light rounded-2xl border border-[#eee]'>
              <h2 className='text-xl sm:text-2xl font-bold mb-3'>Plan Snapshot</h2>
              <ul className='space-y-2 text-xs sm:text-sm md:text-base text-dark2'>
                <li><span className='font-semibold text-dark'>Monthly:</span> {details.monthlyPrice}</li>
                <li><span className='font-semibold text-dark'>Setup fee:</span> {details.setupFee}</li>
                <li><span className='font-semibold text-dark'>Domain:</span> {details.domain}</li>
                <li><span className='font-semibold text-dark'>Tech stack:</span> {details.techStack}</li>
              </ul>
            </div>
            <div className='p-6 bg-light rounded-2xl border border-[#eee]'>
              <h2 className='text-xl sm:text-2xl font-bold mb-3'>Best For</h2>
              <ul className='space-y-2'>
                {details.bestFor.map((item) => (
                  <li key={item} className='flex items-start gap-2 text-xs sm:text-sm md:text-base text-dark2'>
                    <FiCheckCircle className='mt-1 text-secondary flex-shrink-0' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mb-12 sm:mb-16'
          >
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center'>Deliverables</h2>
            <div className='bg-light p-6 sm:p-8 rounded-2xl'>
              <ul className='space-y-3'>
                {details.deliverables.map((item) => (
                  <li key={item} className='flex items-start gap-3 text-xs sm:text-sm md:text-base text-dark2'>
                    <FiCheckCircle className='mt-1 text-secondary flex-shrink-0' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mb-12 sm:mb-16 grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            <div className='p-6 bg-white border border-[#eee] rounded-2xl'>
              <h2 className='text-xl sm:text-2xl font-bold mb-3'>SEO & Growth</h2>
              <p className='text-xs sm:text-sm md:text-base text-dark2 leading-relaxed'>{details.seo}</p>
            </div>
            <div className='p-6 bg-white border border-[#eee] rounded-2xl'>
              <h2 className='text-xl sm:text-2xl font-bold mb-3'>Support & Retainer</h2>
              <p className='text-xs sm:text-sm md:text-base text-dark2 leading-relaxed'>{details.support}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-center'
          >
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>Ready to get started?</h2>
            <p className='text-xs sm:text-sm md:text-base lg:text-lg text-dark2 mb-6'>
              Tell us about your goals and we will confirm the best plan fit.
            </p>
            <button className='primary-btn' onClick={() => router.push('/contact')}>Contact Us Now</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mt-16 pt-16 border-t border-[#eee]'
          >
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10'>Explore Other Plans</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto'>
              {otherPlans.map((id, idx) => {
                const plan = planLookup[id];
                if (!plan) {
                  return null;
                }
                return (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => router.push(`/subscription-plan/${id}`)}
                    className='p-6 bg-light border border-secondary rounded-2xl text-left hover:shadow-lg transition-all duration-300'
                  >
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-secondary mb-2'>{plan.title}</h3>
                    <p className='text-xs sm:text-sm md:text-base font-semibold text-dark2 mb-4'>{plan.monthlyPrice}</p>
                    <span className='inline-block text-secondary font-semibold hover:text-primary transition-colors'>
                      Learn More
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default SubscriptionPlanDetail;
