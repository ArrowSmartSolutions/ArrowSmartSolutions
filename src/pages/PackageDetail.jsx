import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

const PackageDetail = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();

  const packageList = ['starter', 'business', 'professional'];
  const currentIndex = packageList.indexOf(packageId);
  const otherPackages = packageList.filter(pkg => pkg !== packageId);

  const packageDetails = {
    starter: {
      title: 'Starter Package',
      price: 'From R4,999 - R8,000',
      description: 'Perfect for launching your online presence',
      useCases: [
        {
          title: 'Freelance Professionals',
          description: 'Showcase your portfolio and services with a professional online presence. Attract potential clients with a clean, modern website.'
        },
        {
          title: 'Small Local Businesses',
          description: 'Get listed online and reach local customers. Essential for salons, repair shops, consultants, and service providers.'
        },
        {
          title: 'Startups & New Ventures',
          description: 'Launch your MVP (Minimum Viable Product) quickly and cost-effectively. Test your market without significant investment.'
        },
        {
          title: 'Blog & Content Creators',
          description: 'Build a platform to share your expertise and grow an audience. Perfect for writers, photographers, and thought leaders.'
        }
      ],
      features: [
        'Responsive Web Design - Works perfectly on all devices',
        'Basic SEO Setup - Get found on Google for local searches',
        'Content Management System - Update your site without coding',
        'Up to 5 Pages - Home, About, Services, Portfolio, Contact',
        'Standard Contact Form - Receive inquiries directly',
        'Mobile-First Approach - 60%+ users access on mobile'
      ],
      timeline: '2-3 weeks',
      support: 'Email support during business hours'
    },
    business: {
      title: 'Business Package',
      price: 'From R12,000 - R25,000',
      description: 'Grow your business with advanced features',
      useCases: [
        {
          title: 'E-Commerce Stores',
          description: 'Sell products online with basic payment integration, inventory management, and order tracking.'
        },
        {
          title: 'Service-Based Companies',
          description: 'Showcase your expertise with detailed service pages, client testimonials, and booking integration.'
        },
        {
          title: 'Growing Agencies & Consultancies',
          description: 'Build credibility with case studies, team profiles, and advanced analytics to track client acquisition.'
        },
        {
          title: 'Real Estate & Property Management',
          description: 'Display property listings with high-quality images, virtual tours, and advanced filtering options.'
        }
      ],
      features: [
        'Everything in Starter Package',
        'Custom Feature Development - Tailored functionality for your business',
        'E-commerce Integration (Basic) - Start selling online',
        'Advanced Analytics - Track visitor behavior and conversions',
        'Up to 15 Pages - Expand your content significantly',
        'Professional Design Customization',
        'Integration with third-party tools',
        'Priority support'
      ],
      timeline: '3-4 weeks',
      support: '12-hour response time priority support'
    },
    professional: {
      title: 'Professional Package',
      price: 'From R30,000 - R60,000+',
      description: 'Enterprise-grade solutions for ambitious businesses',
      useCases: [
        {
          title: 'SaaS Companies',
          description: 'Build sophisticated web applications with payment gateways, user accounts, and advanced features.'
        },
        {
          title: 'Enterprise Corporations',
          description: 'Deploy secure, scalable solutions that handle high traffic and complex business logic.'
        },
        {
          title: 'Complex E-Commerce Platforms',
          description: 'Full-featured online stores with inventory sync, shipping integrations, and advanced marketing tools.'
        },
        {
          title: 'Digital Transformation Initiatives',
          description: 'Modernize your business with custom web applications that integrate with existing systems.'
        }
      ],
      features: [
        'Everything in Business Package',
        'Enterprise-grade Security - SSL, encryption, compliance',
        'API Development & Integration - Connect with any service',
        'Custom Web Applications - Build complex functionality',
        'Dedicated Account Manager - Personal support contact',
        'Advanced Performance Optimization',
        'Scalability Planning for growth',
        'Custom Reporting & Analytics',
        'Unlimited Pages'
      ],
      timeline: '4-12 weeks (depends on complexity)',
      support: '4-hour emergency response + dedicated support'
    }
  };

  const details = packageDetails[packageId];

  if (!details) {
    return (
      <main className="overflow-x-hidden bg-white text-dark pt-32">
        <div className='container py-16 text-center'>
          <h1 className='text-5xl font-bold mb-6'>Package Not Found</h1>
          <p className='text-xl text-dark2'>Sorry, we couldn't find the package details you're looking for.</p>
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
              <p className='mt-2 text-sm font-bold text-primary'>{details.price}</p>
            </div>
            <p className='text-xs sm:text-sm md:text-base lg:text-lg text-dark2 mt-4'>{details.description}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mb-16'
          >
            <h2 className='text-4xl font-bold mb-8 text-center'>Who Should Choose This?</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {details.useCases.map((useCase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className='p-6 bg-light rounded-2xl border border-primary'
                >
                  <h3 className='text-2xl font-bold mb-3 text-primary'>{useCase.title}</h3>
                  <p className='text-lg text-dark2'>{useCase.description}</p>
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
            <h2 className='text-4xl font-bold mb-8 text-center'>Package Features</h2>
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
                    <span className='text-primary font-bold mt-1'>✓</span>
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
            className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'
          >
            <div className='p-6 border-l-4 border-primary'>
              <h3 className='text-2xl font-bold mb-2'>Timeline</h3>
              <p className='text-xl text-dark2'>{details.timeline}</p>
            </div>
            <div className='p-6 border-l-4 border-secondary'>
              <h3 className='text-2xl font-bold mb-2'>Support</h3>
              <p className='text-xl text-dark2'>{details.support}</p>
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
            <p className='text-xl text-dark2 mb-8'>Contact us today to discuss how we can bring your vision to life.</p>
            <button className='primary-btn'>Contact Us Now</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mt-16 pt-16 border-t border-[#eee]'
          >
            <h2 className='text-3xl font-bold text-center mb-10'>Explore Other Packages</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto'>
              {otherPackages.map((pkg, idx) => {
                const packageNames = {
                  starter: 'Starter Package',
                  business: 'Business Package',
                  professional: 'Professional Package'
                };
                const packagePrices = {
                  starter: 'From R4,999 – R8,000',
                  business: 'From R12,000 – R25,000',
                  professional: 'From R30,000 – R60,000+'
                };
                
                return (
                  <motion.button
                    key={pkg}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => navigate(`/package/${pkg}`)}
                    className='p-6 bg-light border border-primary rounded-2xl text-left hover:shadow-lg transition-all duration-300'
                  >
                    <h3 className='text-2xl font-bold text-primary mb-2'>{packageNames[pkg]}</h3>
                    <p className='text-lg font-semibold text-dark2 mb-4'>{packagePrices[pkg]}</p>
                    <span className='inline-block text-primary font-semibold hover:text-secondary transition-colors'>
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

export default PackageDetail;
