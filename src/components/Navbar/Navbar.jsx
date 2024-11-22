import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { FaChevronUp } from 'react-icons/fa6';
import {motion} from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "/",
  },
  {
    id: 3,
    title: "About Us",
    path: "#",
  },
  {
    id: 4,
    title: "Our Team",
    path: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "#",
  },

];

const Navbar = () => {
  return (
    <nav>
      <motion.div
      initial={{opacity:0, y: -50 }}
      animate={{opacity:1, y:0}}

       className='container py-8 flex justify-between
        items-center fixed z-50 bg-light
         bg-opacity-50 backdrop-blur-md min-w-100'>
      {/*Logo section*/}
      <div className='flex flex-row justify-start my-auto -mx-0 sm:scale-50'>
        <div className='w-8 h-8 rounded-full bg-secondary'>
          <div>
            <div className='flex flex-col items-center justify-center m-auto pt-2'>
             <FaChevronUp className=' text-white flex items-center justify-center m-auto dark2'/>
            </div>
          </div>
        </div>
        <h1 className='font-bold text-2xl md:text-xl whitespace-nowrap'>Arrow Smart Solutions</h1>
      </div>
      {/*Menu section*/}
      <div className='hidden lg:block'>
        <ul className='flex items-center gap-3'>
          {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a href={menu.path} className='inline-block py-2 px-3 hover:text-secondary relative group'>
                  <div className='w-2 h-2 bg-secondary absolute mt-2 rounded-full
                  left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div>
                  {menu.title}
                  </a>
              </li>
            ))}
            <button className='primary-btn'>Get Quote</button>

        </ul>
      </div>
      {/*Mobile Hamburger menu section*/}
      <div className='lg:hidden'>
        <IoMdMenu className='text-4xl'/>
      </div>
      </motion.div>
    </nav>
  )
}

export default Navbar
