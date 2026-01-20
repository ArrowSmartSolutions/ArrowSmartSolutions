'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const SupportDetail = ({ planId }) => {
  const router = useRouter();

  const planList = ['basic', 'standard', 'priority'];
  const currentIndex = planList.indexOf(planId);
  const otherPlans = planList.filter(plan => plan !== planId);

  const planDetails = {
    basic: {
      title: 'Basic Support',
      price: 'R499 / month',
      description: 'Essential support for getting started',
      overview: 'Our Basic Support plan provides foundational maintenance and security updates to keep your website running smoothly.',
      bestFor: [
        'New websites with low traffic',
        'Small projects in maintenance phase',
        'Budget-conscious startups',
        'Websites needing basic updates only'
      ],
      features: [
        'Monthly Security Patches - Stay protected from vulnerabilities',
        'CMS Core Updates - Keep your system current',
        'Database Backups - Daily automatic backups',
        'Email Support - 24-hour response time',
        'Uptime Monitoring',
        'Basic Performance Reports'
      ],
      whatIncluded: [
        'Security updates and patches',
        'Core system updates',
        'Daily automated backups',
        'Email-based support',
        'Monthly status reports',
        'Bug fixes for critical issues'
      ],
      responseTime: '24 hours',
      availability: 'Business hours (Monday-Friday)'
    },
    standard: {
      title: 'Standard Support',
      price: 'R999 / month',
      description: 'Popular choice for growing businesses',
      overview: 'Our Standard Support plan includes everything in Basic plus content updates and performance optimization to help your site perform better.',
      bestFor: [
        'Growing businesses with moderate traffic',
        'E-commerce websites',
        'Websites needing regular content updates',
        'Companies wanting better performance'
      ],
      features: [
        'Everything in Basic Support',
        'Content Updates - 2 hours per month included',
        'Performance Monitoring - Real-time analytics',
        'Priority Email Support - 12-hour response time',
        'SEO Monitoring',
        'Advanced Performance Reports',
        'Monthly optimization recommendations'
      ],
      whatIncluded: [
        'All Basic Support features',
        '2 hours monthly content updates',
        'Performance optimization',
        'Priority support queue',
        'Detailed analytics reports',
        'SEO health monitoring',
        'Free minor feature adjustments'
      ],
      responseTime: '12 hours',
      availability: '24/7 email support'
    },
    priority: {
      title: 'Priority Support',
      price: 'R1,999 / month',
      description: 'Premium support for mission-critical sites',
      overview: 'Our Priority Support plan delivers comprehensive support with emergency hotfixes and dedicated resources to ensure your site performs at peak efficiency.',
      bestFor: [
        'High-traffic e-commerce platforms',
        'Mission-critical applications',
        'Enterprise-level websites',
        'Businesses requiring fast response times'
      ],
      features: [
        'Everything in Standard Support',
        'Emergency Hotfixes - 2-hour response time',
        'Advanced SEO Monitoring - Monthly optimization',
        'Dedicated Technical Consultations - Monthly strategy calls',
        'Priority Bug Fixes - Expedited resolution',
        'Unlimited Content Updates',
        'Advanced Caching & CDN Optimization',
        'Proactive Issue Detection'
      ],
      whatIncluded: [
        'All Standard Support features',
        'Emergency hotfixes (2-hour response)',
        'Unlimited content updates',
        'Dedicated account manager',
        'Quarterly strategy consultation',
        'Advanced security monitoring',
        'Custom performance tuning',
        'Priority access to new features'
      ],
      responseTime: '2 hours (emergency)',
      availability: '24/7 priority support'
    }
  };

  const details = planDetails[planId];

  if (!details) {
    return (
      <main className="overflow-x-hidden bg-white text-dark pt-32">
        <div className='container py-16 text-center'>
          <h1 className='text-5xl font-bold mb-6'>Support Plan Not Found</h1>
          <p className='text-xl text-dark2'>Sorry, we couldn't find the support plan details you're looking for.</p>
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
          className='max-w-4xl mx-auto'
        >
          <div className='text-center mb-16'>
            <div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>{details.title}</h1>
              <p className='mt-2 text-sm font-bold text-secondary'>{details.price}</p>
            </div>
            <p className='text-xs sm:text-sm md:text-base lg:text-lg text-dark2 mt-4'>{details.description}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mb-16 p-8 bg-light rounded-2xl'
          >
            <p className='text-xl text-dark2 leading-relaxed'>{details.overview}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mb-16'
          >
            <h2 className='text-4xl font-bold mb-8 text-center'>Who Should Choose This?</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {details.bestFor.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className='flex items-center gap-4 p-4 bg-light rounded-lg'
                >
                  <span className='text-secondary text-3xl font-bold'>✓</span>
                  <span className='text-lg text-dark2'>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mb-16'
          >
            <h2 className='text-4xl font-bold mb-8 text-center'>Support Features</h2>
            <div className='bg-light p-8 rounded-2xl'>
              <ul className='space-y-4'>
                {details.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className='flex items-start gap-4 text-lg'
                  >
                    <span className='text-secondary font-bold mt-1'>✓</span>
                    <span className='text-dark2'>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mb-16'
          >
            <h2 className='text-4xl font-bold mb-8 text-center'>What's Included</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {details.whatIncluded.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className='p-4 border-l-4 border-secondary'
                >
                  <p className='text-lg text-dark2'>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'
          >
            <div className='p-6 border-l-4 border-secondary'>
              <h3 className='text-2xl font-bold mb-2'>Response Time</h3>
              <p className='text-xl text-dark2'>{details.responseTime}</p>
            </div>
            <div className='p-6 border-l-4 border-secondary'>
              <h3 className='text-2xl font-bold mb-2'>Availability</h3>
              <p className='text-xl text-dark2'>{details.availability}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-center'
          >
            <h2 className='text-3xl font-bold mb-6'>Ready to Get Started?</h2>
            <p className='text-xl text-dark2 mb-8'>Choose this support plan to keep your website running smoothly.</p>
            <button className='primary-btn' onClick={() => router.push('/contact')}>Contact Us Now</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mt-16 pt-16 border-t border-[#eee]'
          >
            <h2 className='text-3xl font-bold text-center mb-10'>Explore Other Support Plans</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto'>
              {otherPlans.map((plan, idx) => {
                const planNames = {
                  basic: 'Basic Support',
                  standard: 'Standard Support',
                  priority: 'Priority Support'
                };
                const planPrices = {
                  basic: 'R499 / month',
                  standard: 'R999 / month',
                  priority: 'R1,999 / month'
                };
                
                return (
                  <motion.button
                    key={plan}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => router.push(`/support-plan/${plan}`)}
                    className='p-6 bg-light border border-secondary rounded-2xl text-left hover:shadow-lg transition-all duration-300'
                  >
                    <h3 className='text-2xl font-bold text-secondary mb-2'>{planNames[plan]}</h3>
                    <p className='text-lg font-semibold text-dark2 mb-4'>{planPrices[plan]}</p>
                    <span className='inline-block text-secondary font-semibold hover:text-primary transition-colors'>
                      Learn More →
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

export default SupportDetail;
