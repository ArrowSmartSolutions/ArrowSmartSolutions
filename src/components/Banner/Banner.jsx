import React from 'react';
import hero1 from '../../assets/hero1.png';
import { FaShippingFast } from 'react-icons/fa';
import { FaRecycle } from 'react-icons/fa';
import { FaSmile } from 'react-icons/fa';
import { FaPiggyBank } from 'react-icons/fa';
import { FadeUp } from '../Hero/Hero';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section>
        <div className='container py-14 md:py-24 grid grid-cols-1
         md:grid-cols-2 gap-8 space-y-6 md:space-y-0'>
            {/*Banner Image*/}
            <div className='felx justify-center items-center mx-auto'>
                <motion.img
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                transition={{duration:0.5, ease:'easeInOut'}}
                 src={hero1} alt="Banner Image" className='rounded-full
                w-[350px] md:max-w-[450px] object-cover drop-shadow' />
            </div>
            {/*Banner Text*/}
            <div className='flex flex-col justify-center gap-1'>
                <div className='text-center md:text-left space-y-12'>
                    <motion.h1
                    initial={{opacity:0, scale: 0.5}}
                    whileInView={{opacity:1, scale:1}}
                    viewport={{once:true}}
                    transition={{duration:0.5}}

                     className='text-3xl md:text-4xl font-bold !leading-snug'>
                        Affordable, Reliable IT Solutions in South Africa
                    </motion.h1>
                </div>
                <motion.div
                variants={FadeUp(0.2)}
                initial='initial'
                whileInView={'animate'}
                viewport={{once:true}}

                 className='flex items-center gap-4 p-3 bg-[#f4f4f4] rounded-2xl
                 hover:bg-white duration-300 hover:shadow-2xl'>
                    <FaShippingFast className='text-2xl'/>
                    <p className='text-lg'>Fast & reliable services</p>
                </motion.div>
                <motion.div
                variants={FadeUp(0.4)}
                initial='initial'
                whileInView={'animate'}
                viewport={{once:true}}

                 className='flex items-center gap-4 p-3 bg-[#f4f4f4] rounded-2xl
                 hover:bg-white duration-300 hover:shadow-2xl'>
                    <FaRecycle className='text-2xl'/>
                    <p className='text-lg'>Sustainable practices</p>
                </motion.div>
                <motion.div
                variants={FadeUp(0.6)}
                initial='initial'
                whileInView={'animate'}
                viewport={{once:true}}

                 className='flex items-center gap-4 p-3 bg-[#f4f4f4] rounded-2xl
                 hover:bg-white duration-300 hover:shadow-2xl'>
                    <FaSmile className='text-2xl'/>
                    <p className='text-lg'>Customer centric support team</p>
                </motion.div>
                <motion.div
                variants={FadeUp(0.8)}
                initial='initial'
                whileInView={'animate'}
                viewport={{once:true}}

                 className='flex items-center gap-4 p-3 bg-[#f4f4f4] rounded-2xl
                 hover:bg-white duration-300 hover:shadow-2xl'>
                    <FaPiggyBank className='text-2xl'/>
                    <p className='text-lg'>Affordable pricing for small businesses and individuals</p>
                </motion.div>
            </div>

        </div>
    </section>
  )
}

export default Banner