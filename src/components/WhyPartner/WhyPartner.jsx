import React from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { GiAfrica } from 'react-icons/gi';
import { BiTrendingUp } from 'react-icons/bi';
import { FiLock } from 'react-icons/fi';

const items = [
  { id: 1, title: 'Innovative Solutions', body: 'We bring fresh perspectives and cutting-edge technologies to every project, ensuring your digital presence stands out.', icon: <HiOutlineLightBulb className='text-primary text-2xl'/> },
  { id: 2, title: 'Local Expertise', body: 'Based in South Africa, we understand the local market dynamics, tailoring solutions that resonate with your audience.', icon: <GiAfrica className='text-primary text-2xl'/> },
  { id: 3, title: 'Scalable Growth', body: 'Our architectures are built for the future, designed to scale with your business as you expand and evolve.', icon: <BiTrendingUp className='text-primary text-2xl'/> },
  { id: 4, title: 'Transparent Process', body: 'From concept to launch, we maintain clear communication and provide regular updates, keeping you in the loop every step of the way.', icon: <FiLock className='text-primary text-2xl'/> },
];

const WhyPartner = () => {
  return (
    <section className='bg-white'>
      <div className='container py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 leading-tight'>Why Partner with Arrow Smart Solutions?</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 lg:gap-10'>
          {items.map((it) => (
            <div key={it.id} className='text-center'>
              <div className='flex items-center justify-center mb-3 sm:mb-4 md:mb-5'>
                <div className='bg-[#f4f4f4] p-2 sm:p-3 rounded-full'>{it.icon}</div>
              </div>
              <div className='font-semibold text-base sm:text-lg md:text-xl'>{it.title}</div>
              <p className='text-xs sm:text-sm md:text-base text-dark2 mt-2 leading-relaxed'>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
