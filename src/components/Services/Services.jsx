import { div } from 'framer-motion/client';
import React from 'react';
import { IoAnalytics, IoPulseOutline } from 'react-icons/io5';
import { RiComputerLine } from 'react-icons/ri';
import { SiWindowsxp } from 'react-icons/si';
import { TbWorldWww } from 'react-icons/tb';
import { TiCloudStorage } from 'react-icons/ti';
import { motion } from 'framer-motion';
import { MdDesignServices, MdDomain } from 'react-icons/md';
import { GrDomain } from 'react-icons/gr';

const ServicesData = [
    {
        id:1,
        title:"Web Development",
        link:"#",
        icon:<TbWorldWww/>,
        delay: 0.2,
    },
    {
        id:2,
        title:"Software Installation & Updates",
        link:"#",
        icon:<RiComputerLine />,
        delay: 0.3,
    },
    {
        id:3,
        title:"Windows Activation",
        link:"#",
        icon:<SiWindowsxp />,
        delay: 0.4,
    },
    {
        id:4,
        title:"Data Backup & Recovery",
        link:"#",
        icon:<TiCloudStorage />,
        delay: 0.5,
    },
    {
      id:5,
      title:"SEO Optimization",
      link:"#",
      icon:<IoPulseOutline />,
      delay: 0.6,
  },
  {
      id:2,
      title:"UI/UX Design",
      link:"#",
      icon:<MdDesignServices />,
      delay: 0.7,
  },
    {
        id:2,
        title:"Analytics & Reporting",
        link:"#",
        icon:<IoAnalytics />,
        delay: 0.8,
    },
    {
        id:2,
        title:"Third Party Domain & Hosting",
        link:"#",
        icon:<GrDomain />,
        delay: 0.3,
    },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease:"easeInOut",
      },
    },
  };
};

const Services = () => {
  return (
    <section className='bg-white'>
      <div className='container pb-14 pt-16' >
        <h1 className='text-4xl font-bold text-left pb-10'>
            Services Offered
        </h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8' >
            {
              ServicesData.map((service) => (
                <motion.div
                variants={SlideLeft(service.delay)}
                initial='initial'
                whileInView={'animate'}
                viewport={{once:true}}
                
                className='bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center
                  p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                  <div className='text-4xl mb-4'>
                    {service.icon}
                  </div>
                  <h1 className='text-lg font-semibold text-center px-3'>
                    {service.title}
                  </h1> 
                </motion.div>
              ))
            }
        </div>
        
      </div>
    </section>
  )
}

export default Services
