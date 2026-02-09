'use client'
import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa6';
import {FaInstagram, FaWhatsapp, FaTwitter} from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show button after scrolling 300px and when scrolling down
      if (currentScrollY > 300 && currentScrollY > lastScrollY) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <footer className='py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 bg-[#f7f7f7]'>
        <motion.div
        initial={{opacity: 0, y:50}}
        whileInView={{opacity:1, y:0}}
         className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.1fr_1.8fr_1.1fr] xl:grid-cols-[1.1fr_2fr_1.1fr] gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
                {/*first section*/}
                <div className='space-y-3 md:space-y-4'>
                    {/*Logo section*/}
                    <div className='flex flex-row items-center gap-1.5 sm:gap-2 my-auto'>
                        <svg
                          viewBox='0 0 100 100'
                          aria-hidden='true'
                          className='w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0'
                        >
                          <circle cx='50' cy='50' r='47' fill='none' stroke='currentColor' strokeWidth='4' />
                          <circle cx='50' cy='50' r='42' fill='currentColor' />
                          <path d='M30 60 L50 40 L70 60' fill='none' stroke='white' strokeWidth='8' strokeLinecap='round' strokeLinejoin='round' />
                          <circle cx='50' cy='58' r='5' fill='white' />
                        </svg>
                        <h1 className='font-bold my-auto text-xs sm:text-sm md:text-base lg:text-base xl:text-lg whitespace-nowrap'>Arrow Smart Solutions</h1>
                    </div>
                    <p className='text-dark2 text-[11px] sm:text-xs md:text-sm lg:text-sm leading-relaxed'>
                    Arrow Smart Solutions offers reliable,
                    affordable IT support tailored to small businesses and individuals.
                    From resolving technical issues to designing professional websites,
                    we ensure your technology needs are expertly managed, 
                    allowing you to focus on growing your business with confidence.
                    </p>
                </div>
                {/*second section*/}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12'>
                    <div className='space-y-2.5 md:space-y-3'>
                        <h1 className='text-sm sm:text-base md:text-base lg:text-base xl:text-lg font-bold leading-tight'>Packages</h1>
                    <div className='text-dark2'>
                            <ul className='space-y-1 md:space-y-1.5 text-[11px] sm:text-xs md:text-sm lg:text-sm'>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/packages">All Packages</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/package/starter">Starter Package</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/package/business">Business Package</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/package/professional">Professional Package</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-2.5 md:space-y-3'>
                        <h1 className='text-sm sm:text-base md:text-base lg:text-base xl:text-lg font-bold leading-tight'>Subscriptions</h1>
                        <div className='text-dark2'>
                            <ul className='space-y-1 md:space-y-1.5 text-[11px] sm:text-xs md:text-sm lg:text-sm'>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/subscriptions">All Subscriptions</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/subscriptions/personal-brand">Personal Brand</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/subscriptions/business-growth">Business Growth</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/subscriptions/enterprise-solution">Enterprise Solution</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/subscriptions/support/basic">Basic Support</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/subscriptions/support/standard">Standard Support</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/subscriptions/support/priority">Priority Support</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-2.5 md:space-y-3'>
                        <h1 className='text-sm sm:text-base md:text-base lg:text-base xl:text-lg font-bold leading-tight'>Navigation</h1>
                        <div className='text-dark2'>
                            <ul className='space-y-1 md:space-y-1.5 text-[11px] sm:text-xs md:text-sm lg:text-sm'>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/">Home</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/packages">Packages</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/subscriptions">Subscriptions</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/about">About Us</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/team">Our Team</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link href="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*third section*/}
                <div className='space-y-2.5 md:space-y-3'>
                    <h1 className='text-sm sm:text-base md:text-base lg:text-base xl:text-lg font-bold'>Newsletter</h1>
                    <p className='text-[11px] sm:text-xs md:text-sm lg:text-sm text-dark2 leading-relaxed mb-3'>
                        Stay updated with the latest IT support tips and business insights delivered to your inbox.
                    </p>
                    <Link
                        href="/newsletter"
                        className='inline-block bg-primary text-white font-semibold py-2 sm:py-2.5 px-4 sm:px-5 rounded-lg hover:bg-opacity-90 transition-all duration-200 text-[11px] sm:text-xs md:text-sm whitespace-nowrap'
                        aria-label="Subscribe to newsletter"
                    >
                        Subscribe to Newsletter
                    </Link>
                    <p className='text-[11px] sm:text-xs md:text-sm lg:text-sm text-dark2 leading-relaxed'>
                        By subscribing, you agree to our <Link href="/terms-conditions" className='text-primary hover:text-secondary font-semibold'>Terms and Conditions</Link> of use.
                    </p>
                    {/* social icons */}
                    <div className='flex justify-start items-center gap-3 sm:gap-4 py-2'>
                        <a target="_blank" href="https://wa.me/message/KWXXB2FOPACRM1" aria-label="Visit our WhatsApp">
                            <FaWhatsapp className='text-base sm:text-lg cursor-pointer hover:text-primary
                             hover:scale-110 duration-200'/>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/arrowsmartsolutions" aria-label="Visit our Instagram">
                            <FaInstagram className='text-base sm:text-lg cursor-pointer hover:text-primary
                             hover:scale-110 duration-200'/>
                        </a>
                        <a target="_blank" href="https://x.com/arrowsmartlife" aria-label="Visit our Twitter">
                            <FaTwitter className='text-base sm:text-lg cursor-pointer hover:text-primary
                             hover:scale-110 duration-200'/>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
                <div className='mt-6 sm:mt-8 md:mt-10'>
                    <div className='container border-t pt-3 sm:pt-4 md:pt-5 text-center text-dark2'>
                        <div className='max-w-[900px] mx-auto space-y-4 md:space-y-6'>
                            <p className='text-[11px] sm:text-xs md:text-sm leading-relaxed'>Please note: All pricing is indicative and may vary based on specific project requirements, scope changes, and additional features. Detailed quotes are provided after an initial consultation and thorough requirement analysis. Prices are subject to change. Excludes VAT.</p>
                            <div className='flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 flex-wrap text-[11px] sm:text-xs md:text-sm'>
                                <Link href="/privacy-policy" className='hover:text-secondary duration-200 font-medium'>Privacy Policy</Link>
                                <Link href="/terms-conditions" className='hover:text-secondary duration-200 font-medium'>Terms & Conditions</Link>
                            </div>
                            <p className='text-[11px] sm:text-xs md:text-sm font-medium'>© 2026 Arrow Smart Solutions. All rights reserved.</p>
                        </div>
                    </div>
                </div>
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              key="footer-back-to-top"
              aria-label="Scroll to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className='fixed bottom-5 right-5 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white shadow-xl hover:shadow-2xl transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 z-40'
            >
              <FaChevronUp className='text-xs sm:text-sm' />
            </motion.button>
          )}
        </AnimatePresence>
    </footer>
  );
};

export default Footer;
