import React from 'react';
import { FaChevronUp } from 'react-icons/fa6';
import {FaInstagram, FaWhatsapp, FaTwitter} from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className='py-28 bg-[#f7f7f7]'>
        <motion.div
        initial={{opacity: 0, y:50}}
        whileInView={{opacity:1, y:0}}
         className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4'>
                {/*first section*/}
                <div className='space-y-4 max-w-[300px]'>
                    {/*Logo section*/}
                    <div className='flex flex-row m-auto'>
                        <div className='w-8 h-8 rounded-full bg-secondary'>
                        <div>
                            <div className='flex items-center justify-center m-auto pt-2'>
                            <FaChevronUp className=' text-white flex items-center justify-center m-auto dark2 my-auto -mx-0'/>
                            </div>
                        </div>
                        </div>
                        <h1 className='font-bold text-2xl'>Arrow Smart Solutions</h1>
                    </div>
                    <p className='text-dark2'>
                    Arrow Smart Solutions offers reliable,
                    affordable IT support tailored to small businesses and individuals.
                    From resolving technical issues to designing professional websites,
                    we ensure your technology needs are expertly managed, 
                    allowing you to focus on growing your business with confidence.
                    </p>
                </div>
                {/*second section*/}
                <div className='grid grid-cols-2 gap-10'>
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-bold'>Services</h1>
                        <div className='text-dark2'>
                            <ul className='space-y-2 text-lg'>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                Web Development & Third-Party Hosting
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                Network Support
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                Operating System Support
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                Third-party Software Support
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                Data Backup and Recovery
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                Remote IT Support
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-bold'>Navigation</h1>
                        <div className='text-dark2'>
                            <ul className='space-y-2 text-lg'>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                Home
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                Services
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                About Us
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                Our Team
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                Contact Us
                                </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>
                                Careers
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*third section*/}
                <div className='space-y-4 max-w-[300px]'>
                    <h1 className='text-2xl font-bold'>Newsletter</h1>
                    <div className='flex items-center'>
                        <input 
                        type="text"
                        placeholder='Enter email address'
                        className='p-3 rounded-s-xl bg-white
                        w-full py-4 focus:ring-0
                            focus:outline-none placeholder:text-dark2'
                        />
                        <button
                        className='bg-primary text-white
                        font-semibold py-4 px-6 rounded-e-xl'
                        >
                            Subscribe
                        </button>
                    </div>
                    {/* social icons */}
                    <div className='flex justify-evenly items-center space-x-6 py-3'>
                        <a href="#">
                            <FaWhatsapp className='cursor-pointer hover:text-primary
                             hover:scale-105 duration-200'/>
                        </a>
                        <a href="https://www.instagram.com/arrowsmartsolutions">
                            <FaInstagram className='cursor-pointer hover:text-primary
                             hover:scale-105 duration-200'/>
                        </a>
                        <a href="https://x.com/arrowsmartlife">
                            <FaTwitter className='cursor-pointer hover:text-primary
                             hover:scale-105 duration-200'/>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    </footer>
  )
}

export default Footer