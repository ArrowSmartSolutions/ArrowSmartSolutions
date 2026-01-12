import React from 'react';
import { FaChevronUp } from 'react-icons/fa6';
import {FaInstagram, FaWhatsapp, FaTwitter} from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
                    <div className='flex flex-row items-center gap-3 my-auto'>
                        <div className='w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0'>
                            <FaChevronUp className='text-white text-sm'/>
                        </div>
                        <h1 className='font-bold my-auto text-lg md:text-2xl whitespace-nowrap'>Arrow Smart Solutions</h1>
                    </div>
                    <p className='text-dark2 text-lg'>
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
                        <h1 className='text-3xl font-bold'>Services</h1>
                        <div className='text-dark2'>
                            <ul className='space-y-2 text-xl'>
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
                    <div className='space-y-4'>
                        <h1 className='text-3xl font-bold'>Navigation</h1>
                        <div className='text-dark2'>
                            <ul className='space-y-2 text-xl'>
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
                <div className='space-y-4 max-w-[300px]'>
                    <h1 className='text-3xl font-bold'>Newsletter</h1>
                    <div className='flex items-center'>
                        <input 
                        type="email"
                        placeholder='Enter email address'
                        className='p-3 rounded-s-xl bg-white
                        w-full py-4 focus:ring-0
                            focus:outline-none placeholder:text-dark2'
                        />
                        <button
                        aria-label="Subscribe to newsletter button"
                        className='bg-primary text-white
                        font-semibold py-4 px-6 rounded-e-xl'
                        >
                            Subscribe
                        </button>
                    </div>
                    {/* social icons */}
                    <div className='flex justify-evenly items-center space-x-6 py-3'>
                        <a target="_blank" href="https://wa.me/message/KWXXB2FOPACRM1">
                            <FaWhatsapp className='cursor-pointer hover:text-primary
                             hover:scale-105 duration-200'/>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/arrowsmartsolutions">
                            <FaInstagram className='cursor-pointer hover:text-primary
                             hover:scale-105 duration-200'/>
                        </a>
                        <a target="_blank" href="https://x.com/arrowsmartlife">
                            <FaTwitter className='cursor-pointer hover:text-primary
                             hover:scale-105 duration-200'/>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
                <div className='mt-10 border-t pt-6 text-center text-lg text-dark2'>
                    <div className='max-w-[900px] mx-auto'>
                        <p className='text-base'>Please note: All pricing is indicative and may vary based on specific project requirements, scope changes, and additional features. Detailed quotes are provided after an initial consultation and thorough requirement analysis. Prices are subject to change. Excludes VAT.</p>
                        <div className='mt-6 flex justify-center gap-6 flex-wrap text-base'>
                            <Link to="/privacy-policy" className='hover:text-secondary duration-200'>Privacy Policy</Link>
                            <Link to="/terms-conditions" className='hover:text-secondary duration-200'>Terms & Conditions</Link>
                        </div>
                        <p className='mt-6 text-base'>© 2026 Arrow Smart Solutions. All rights reserved.</p>
                    </div>
                </div>
    </footer>
  )
}

export default Footer