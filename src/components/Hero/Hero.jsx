import React from 'react';
import hero from '../../assets/hero.png';
import { IoIosArrowRoundForward } from 'react-icons/io';
import {animate, easeInOut, motion} from 'framer-motion';

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
  return (
    <section className='bg-light overflow-hidden' >
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[450px] mt-28" relative>
        {/*Brand Info*/}
        <div className='text-center md:text-left space-y-10 lg:max-w-[600px]'>
            <motion.h1
            variants={FadeUp(0.6)}            
            initial = "initial"
            animate = "animate"

            className='text-2xl lg:text-5xl font-bold !leading-snug'> 
              Get affordable & reliable 
              <span className='text-secondary'> IT support</span> or simply a professional 
              <span className="text-secondary"> Website</span>.
            </ motion.h1>
            <motion.div
            variants={FadeUp(0.8)}
            initial="initial"
            animate="animate"
             className='flex justify-center md:justify-start'>
                <button className="primary-btn flex items-center gap-2">
                    Explore Services
                    <IoIosArrowRoundForward className='text-xl group-hover:translate-x-2
                    group-hover:-rotate-45 duration-300' />
                </button>
            </motion.div>
        </div>
        {/*Hero Image*/}
        <div className='flex flex-col justify-start py-10 md:py-0 relative'>
          <motion.img
          initial={{x:50, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{duration:0.6, delay: 0.4, ease:easeInOut}}
           src={hero}
          alt="image of developers and IT support technicians"
           className='rounded-xl w-[400px xl:w-[600px] relative z-10 drop-shadow' 
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
