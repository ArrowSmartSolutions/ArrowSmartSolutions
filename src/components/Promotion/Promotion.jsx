import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Component inspired by https://uiverse.io/Yaya12085/empty-horse-27
// License: MIT
// Modifications: Adjusted fonts and colors to match the website theme

const Promotion = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className='py-16'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='w-full rounded-2xl bg-gradient-to-br from-[#04051dea] to-[#2b566e] shadow-lg hover:shadow-2xl transition-shadow duration-300'
        >
          <div className='flex flex-col items-center justify-center p-8 md:p-12 lg:p-16 text-center min-h-[350px] md:min-h-[400px]'>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='space-y-6'
            >
              <div className='font-extrabold uppercase text-[rgba(255,255,255,0.64)] text-lg md:text-2xl tracking-[1px]'>
                Exclusive Offer
              </div>

              <div className='text-white font-bold text-2xl md:text-4xl lg:text-5xl [text-shadow:0px_0px_10px_rgba(0,0,0,0.42)]'>
                Promo code: FIRSTWEB2026
              </div>

              <div className='font-regular text-[rgba(255,255,255,0.6)] text-base md:text-lg max-w-[600px] mx-auto'>
                New here? Get 10% off your first website! Contact us today and unlock exclusive perks made just for you.
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactClick}
                aria-label="Contact us now to claim exclusive offer"
                className='select-none border-none outline-none text-white uppercase font-bold text-sm md:text-base py-3 md:py-4 px-8 md:px-10 bg-[rgb(33_150_243)] rounded-lg [text-shadow:0px_4px_18px_#2c3442] cursor-pointer hover:opacity-90 hover:bg-blue-600 transition-all duration-300'
              >
                Contact Us Now!
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Promotion;