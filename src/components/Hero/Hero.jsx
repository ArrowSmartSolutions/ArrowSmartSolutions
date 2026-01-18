'use client'
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { easeInOut, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y:50,
    },
      animate: {
        opacity:1,
        y:0,
        transition: {
          type:"spring",
          stiffness: 100,
          duration: 0.5,
          delay: delay,
          ease: "easeInOut",
        }
      }
  }
}

const Hero = () => {
  const router = useRouter();

  const handleViewPackages = () => {
    router.push('/services');
  };

  return (
    <section className='bg-light overflow-hidden' >
      <div className="container flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8 lg:gap-10 min-h-[450px] md:min-h-[500px] mt-20 sm:mt-24 md:mt-28 lg:mt-32">
        {/*Brand Info*/}
        <div className='text-center md:text-left space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 lg:max-w-[600px]'>
            <motion.h1
            variants={FadeUp(0.6)}            
            initial = "initial"
            animate = "animate"
            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold !leading-snug'>
              Unlock Your Digital Potential with
              <span className='text-secondary'> Arrow Smart Solutions</span>
            </motion.h1>
            <motion.p
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="text-xs sm:text-sm md:text-base lg:text-lg text-dark2 max-w-[600px] leading-relaxed"
            >
              At Arrow Smart Solutions, based in the heart of South Africa, we craft exceptional web
              experiences and robust digital platforms tailored for your success. Whether you're a startup or
              an established enterprise, our expert team is ready to transform your vision into a dynamic reality.
            </motion.p>
            <motion.div
            variants={FadeUp(0.8)}
            initial="initial"
            animate="animate"
             className='flex justify-center md:justify-start p-2 sm:p-3 md:p-4'>
                <button onClick={handleViewPackages} className="primary-btn flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg py-2.5 sm:py-3 md:py-3.5 px-5 sm:px-6 md:px-8">
                    View Our Packages
                    <IoIosArrowRoundForward className='text-sm sm:text-base md:text-lg lg:text-xl group-hover:translate-x-2
                    group-hover:-rotate-45 duration-300' />
                </button>
            </motion.div>
        </div>
        {/*Hero Image*/}
        <div className='flex flex-col justify-start py-6 sm:py-8 md:py-0 relative w-full md:w-auto'>
          <motion.img
          initial={{x:50, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{duration:0.6, delay: 0.4, ease:easeInOut}}
           src="/assets/hero.png"
          alt="image of developers and IT support technicians"
           className='rounded-lg sm:rounded-xl w-full sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[600px] relative z-10 drop-shadow' 
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
