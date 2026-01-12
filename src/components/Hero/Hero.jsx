import React from 'react';
import hero from '../../assets/hero.png';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { easeInOut, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleViewPackages = () => {
    navigate('/services');
  };

  return (
    <section className='bg-light overflow-hidden' >
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[450px] mt-28" relative>
        {/*Brand Info*/}
        <div className='text-center md:text-left space-y-10 lg:max-w-[600px]'>
            <motion.h1
            variants={FadeUp(0.6)}            
            initial = "initial"
            animate = "animate"
            className='text-4xl lg:text-6xl font-bold !leading-snug'>
              Unlock Your Digital Potential with
              <span className='text-secondary'> Arrow Smart Solutions</span>
            </motion.h1>
            <motion.p
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="text-lg text-dark2 mt-4 max-w-[600px]"
            >
              At Arrow Smart Solutions, based in the heart of South Africa, we craft exceptional web
              experiences and robust digital platforms tailored for your success. Whether you're a startup or
              an established enterprise, our expert team is ready to transform your vision into a dynamic reality.
            </motion.p>
            <motion.div
            variants={FadeUp(0.8)}
            initial="initial"
            animate="animate"
             className='flex justify-center md:justify-start'>
                <button onClick={handleViewPackages} className="primary-btn flex items-center gap-2">
                    View Our Packages
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
           className='rounded-xl w-[400px] xl:w-[600px] relative z-10 drop-shadow' 
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
