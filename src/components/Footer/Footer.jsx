import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa6';
import {FaInstagram, FaWhatsapp, FaTwitter} from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    <footer className='py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 bg-[#f7f7f7]'>
        <motion.div
        initial={{opacity: 0, y:50}}
        whileInView={{opacity:1, y:0}}
         className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16'>
                {/*first section*/}
                <div className='space-y-4 md:space-y-6'>
                    {/*Logo section*/}
                    <div className='flex flex-row items-center gap-2 sm:gap-3 my-auto'>
                        <div className='w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0'>
                            <FaChevronUp className='text-white text-xs sm:text-sm'/>
                        </div>
                        <h1 className='font-bold my-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl whitespace-nowrap'>Arrow Smart Solutions</h1>
                    </div>
                    <p className='text-dark2 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
                    Arrow Smart Solutions offers reliable,
                    affordable IT support tailored to small businesses and individuals.
                    From resolving technical issues to designing professional websites,
                    we ensure your technology needs are expertly managed, 
                    allowing you to focus on growing your business with confidence.
                    </p>
                </div>
                {/*second section*/}
                <div className='grid grid-cols-2 gap-6 sm:gap-8 md:gap-10'>
                    <div className='space-y-3 md:space-y-4'>
                        <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>Services</h1>
                        <div className='text-dark2'>
                            <ul className='space-y-1 md:space-y-2 text-xs sm:text-sm md:text-base lg:text-lg'>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link to="/services">Web Development & Third-Party Hosting</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link to="/services">Network Support</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link to="/services">Operating System Support</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link to="/services">Third-party Software Support</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link to="/services">Data Backup and Recovery</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link to="/services">Remote IT Support</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-3 md:space-y-4'>
                        <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>Navigation</h1>
                        <div className='text-dark2'>
                            <ul className='space-y-1 md:space-y-2 text-xs sm:text-sm md:text-base lg:text-lg'>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link to="/">Home</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link to="/services">Services</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link to="/about">About Us</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link to="/team">Our Team</Link>
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                <Link to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*third section*/}
                <div className='space-y-3 md:space-y-4'>
                    <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>Newsletter</h1>
                    <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-2'>
                        <input 
                        type="email"
                        placeholder='Enter email address'
                        className='p-2 sm:p-3 rounded-lg sm:rounded-s-lg sm:rounded-e-none bg-white
                        w-full py-3 sm:py-4 focus:ring-0
                            focus:outline-none placeholder:text-dark2 text-xs sm:text-sm md:text-base'
                        aria-label="Email address for newsletter subscription"
                        />
                        <button
                        aria-label="Subscribe to newsletter button"
                        className='bg-primary text-white
                        font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-s-none sm:rounded-e-lg hover:bg-opacity-90 transition-all duration-200 text-xs sm:text-sm md:text-base whitespace-nowrap'
                        >
                            Subscribe
                        </button>
                    </div>
                    <p className='text-xs sm:text-sm text-dark2 leading-relaxed'>
                        By subscribing, you agree to our <Link to="/terms-conditions" className='text-primary hover:text-secondary font-semibold'>Terms and Conditions</Link> of use.
                    </p>
                    {/* social icons */}
                    <div className='flex justify-start items-center gap-4 sm:gap-6 py-2 md:py-3'>
                        <a target="_blank" href="https://wa.me/message/KWXXB2FOPACRM1" aria-label="Visit our WhatsApp">
                            <FaWhatsapp className='text-lg sm:text-2xl cursor-pointer hover:text-primary
                             hover:scale-110 duration-200'/>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/arrowsmartsolutions" aria-label="Visit our Instagram">
                            <FaInstagram className='text-lg sm:text-2xl cursor-pointer hover:text-primary
                             hover:scale-110 duration-200'/>
                        </a>
                        <a target="_blank" href="https://x.com/arrowsmartlife" aria-label="Visit our Twitter">
                            <FaTwitter className='text-lg sm:text-2xl cursor-pointer hover:text-primary
                             hover:scale-110 duration-200'/>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
                <div className='mt-8 sm:mt-10 md:mt-12 border-t pt-4 sm:pt-6 md:pt-8 text-center text-dark2 px-4 sm:px-6'>
                    <div className='max-w-[900px] mx-auto space-y-4 md:space-y-6'>
                        <p className='text-xs sm:text-sm md:text-base leading-relaxed'>Please note: All pricing is indicative and may vary based on specific project requirements, scope changes, and additional features. Detailed quotes are provided after an initial consultation and thorough requirement analysis. Prices are subject to change. Excludes VAT.</p>
                        <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 flex-wrap text-xs sm:text-sm md:text-base'>
                            <Link to="/privacy-policy" className='hover:text-secondary duration-200 font-medium'>Privacy Policy</Link>
                            <Link to="/terms-conditions" className='hover:text-secondary duration-200 font-medium'>Terms & Conditions</Link>
                        </div>
                        <p className='text-xs sm:text-sm md:text-base font-medium'>© 2026 Arrow Smart Solutions. All rights reserved.</p>
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
              className='fixed bottom-6 right-6 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white shadow-xl hover:shadow-2xl transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 z-40'
            >
              <FaChevronUp className='text-sm sm:text-base' />
            </motion.button>
          )}
        </AnimatePresence>
    </footer>
  );
};

export default Footer;