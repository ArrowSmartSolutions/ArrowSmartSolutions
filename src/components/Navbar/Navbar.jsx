import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaChevronUp } from 'react-icons/fa6';
import {motion} from "framer-motion";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "/services",
  },
  {
    id: 3,
    title: "About Us",
    path: "/about",
  },
  {
    id: 4,
    title: "Our Team",
    path: "/team",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
  },

];

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const location = useLocation();
const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGetQuote = () => {
    navigate('/contact');
  };

  return (
    <nav className='w-full'>
      <motion.div
      initial={{opacity:0, y: -50 }}
      animate={{opacity:1, y:0}}

       className='py-4 flex justify-between px-4 lg:px-16
        items-center fixed z-50 bg-light
         bg-opacity-50 backdrop-blur-md w-screen overflow-x-hidden'>
      {/*Logo section*/}
      <div className='flex flex-row items-center gap-3 my-auto'>
        <div className='w-8 h-8 rounded-full bg-secondary'>
          <div>
            <div className='flex flex-col items-center justify-center m-auto pt-2'>
             <FaChevronUp className=' text-white flex items-center my-auto justify-center m-auto dark2'/>
            </div>
          </div>
        </div>
        <h1 className='font-bold my-auto text-lg md:text-2xl whitespace-nowrap'>Arrow Smart Solutions</h1>
      </div>
      {/*Menu section*/}
      <div className='hidden lg:block'>
        <ul className='flex items-center gap-3'>
          {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.path} className={`inline-block py-2 px-3 hover:text-secondary relative group text-lg ${location.pathname === menu.path ? 'text-secondary' : ''}`}>
                  <div className='w-2 h-2 bg-secondary absolute mt-2 rounded-full
                  left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div>
                  {menu.title}
                  </Link>
              </li>
            ))}
            <button aria-label="Get Quote" onClick={handleGetQuote} className='primary-btn'>Get Quote</button>

        </ul>
      </div>
        {/* Mobile Hamburger menu section */}
        <div className='lg:hidden'>
          <button onClick={toggleMenu} aria-label='Menu Toggle Key' className='text-4xl'>
            {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden fixed top-0 left-0 w-full h-full bg-light bg-opacity-90 z-40'>
          <ul className=' top-6 flex flex-col items-center justify-center h-full gap-6'>
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  className={`text-2xl font-medium hover:text-secondary ${location.pathname === menu.path ? 'text-secondary' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
            <button className='primary-btn' onClick={() => { handleGetQuote(); setIsMenuOpen(false); }}>Get Quote</button>
          </ul>
        </div>
      )}
    </nav>
    
  )
}

export default Navbar
