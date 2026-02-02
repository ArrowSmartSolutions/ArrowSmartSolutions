'use client'
import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FiChevronDown, FiMinus, FiPlus } from 'react-icons/fi';
import {motion} from "framer-motion";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const packagesMenu = [
  { title: 'All Packages', path: '/packages' },
  { title: 'Starter Package', path: '/package/starter' },
  { title: 'Business Package', path: '/package/business' },
  { title: 'Professional Package', path: '/package/professional' },
];

const subscriptionsMenu = [
  { title: 'All Subscriptions', path: '/subscriptions' },
  { title: 'Personal Brand', path: '/subscriptions/personal-brand' },
  { title: 'Business Growth', path: '/subscriptions/business-growth' },
  { title: 'Enterprise Solution', path: '/subscriptions/enterprise-solution' },
  { title: 'Basic Support', path: '/subscriptions/support/basic' },
  { title: 'Standard Support', path: '/subscriptions/support/standard' },
  { title: 'Priority Support', path: '/subscriptions/support/priority' },
];

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
    activePaths: ['/'],
  },
  {
    id: 2,
    title: "Packages",
    path: "/packages",
    activePaths: ['/packages', '/package'],
    submenu: packagesMenu,
  },
  {
    id: 3,
    title: "Subscriptions",
    path: "/subscriptions",
    activePaths: ['/subscriptions', '/subscription-plan', '/support-plan'],
    submenu: subscriptionsMenu,
  },
  {
    id: 4,
    title: "About Us",
    path: "/about",
    activePaths: ['/about'],
  },
];

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [openDropdown, setOpenDropdown] = useState(null);
const [openMobileSection, setOpenMobileSection] = useState(null);
const pathname = usePathname();
const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGetQuote = () => {
    router.push('/contact');
  };

  const isActive = (menu) => {
    if (menu.path === '/') {
      return pathname === '/';
    }
    return (menu.activePaths || []).some((path) => pathname === path || pathname.startsWith(`${path}/`));
  };

  return (
    <nav className='w-full'>
      <motion.div
      initial={{opacity:0, y: -50 }}
      animate={{opacity:1, y:0}}

       className='py-3 sm:py-4 md:py-5 lg:py-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-light bg-opacity-50 backdrop-blur-md w-full'>
      {/*Logo section*/}
      <div className='flex flex-row items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 my-auto'>
      <svg
        viewBox='0 0 100 100'
        aria-hidden='true'
        className='w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-secondary'
      >
        <circle cx='50' cy='50' r='47' fill='none' stroke='currentColor' strokeWidth='4' />
        <circle cx='50' cy='50' r='42' fill='currentColor' />
        <path d='M30 60 L50 40 L70 60' fill='none' stroke='white' strokeWidth='8' strokeLinecap='round' strokeLinejoin='round' />
        <circle cx='50' cy='58' r='5' fill='white' />
      </svg>
        <button
          type="button"
          aria-label="Go to home"
          onClick={() => {
            if (pathname !== '/') {
              router.push('/');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className='font-bold my-auto text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl whitespace-nowrap'
        >
          Arrow Smart Solutions
        </button>
      </div>
      {/*Menu section*/}
      <div className='hidden lg:block'>
        <ul className='flex items-center gap-2 sm:gap-3 md:gap-4'>
          {NavbarMenu.map((menu) => {
            if (menu.submenu) {
              return (
                <li
                  key={menu.id}
                  className='relative'
                  onMouseEnter={() => setOpenDropdown(menu.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link href={menu.path} className={`inline-flex items-center gap-1.5 py-2 px-2 sm:px-3 md:px-4 hover:text-secondary relative group text-xs sm:text-sm md:text-base lg:text-lg font-semibold ${isActive(menu) ? 'text-secondary' : ''}`}>
                    <div className='w-2 h-2 bg-secondary absolute mt-2 rounded-full
                    left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div>
                    {menu.title}
                    <FiChevronDown className='text-base md:text-lg transition-transform duration-200 group-hover:rotate-180' aria-hidden="true" />
                  </Link>
                  {openDropdown === menu.title && (
                    <ul className='absolute top-full left-1/2 -translate-x-1/2 mt-0.5 bg-light bg-opacity-50 backdrop-blur-md border border-white/40 shadow-lg rounded-xl py-2 min-w-[240px] z-50 before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:content-[""]'>
                      {menu.submenu.map((sub) => (
                        <li key={sub.path}>
                          <Link href={sub.path} className='block mx-2 px-4 py-2 text-sm font-semibold rounded-full hover:bg-secondary hover:text-white transition-colors whitespace-nowrap' onClick={() => setOpenDropdown(null)}>
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }
            return (
              <li key={menu.id}>
                <Link href={menu.path} className={`inline-block py-2 px-2 sm:px-3 md:px-4 hover:text-secondary relative group text-xs sm:text-sm md:text-base lg:text-lg font-semibold ${isActive(menu) ? 'text-secondary' : ''}`}>
                  <div className='w-2 h-2 bg-secondary absolute mt-2 rounded-full
                  left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div>
                  {menu.title}
                </Link>
              </li>
            );
          })}
            <button aria-label="Contact Us" onClick={handleGetQuote} className='primary-btn text-xs sm:text-sm md:text-base lg:text-lg py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6'>Contact Us</button>

        </ul>
      </div>
        {/* Mobile Hamburger menu section */}
        <div className='lg:hidden'>
          <button
            onClick={toggleMenu}
            aria-label='Menu Toggle Key'
            className='relative text-2xl sm:text-3xl md:text-4xl p-2 sm:p-2.5 md:p-3 rounded-full border border-secondary/50 text-secondary bg-light bg-opacity-70 backdrop-blur-lg shadow-sm hover:bg-secondary hover:text-white transition-colors'
          >
            {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden fixed top-0 left-0 w-full h-full bg-light bg-opacity-90 z-40'>
          <ul className=' top-6 flex flex-col items-center justify-center h-full gap-4 sm:gap-5 md:gap-6'>
            {NavbarMenu.map((menu) => {
              if (menu.submenu) {
                const isOpen = openMobileSection === menu.title;
                return (
                  <li key={menu.id} className='w-full'>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenMobileSection(isOpen ? null : menu.title)}
                      className={`w-full flex items-center justify-center gap-3 text-lg sm:text-xl md:text-2xl font-semibold hover:text-secondary ${isActive(menu) ? 'text-secondary' : ''}`}
                    >
                      <span>{menu.title}</span>
                      <span className='text-xl'>
                        {isOpen ? <FiMinus /> : <FiPlus />}
                      </span>
                    </button>
                    {isOpen && (
                      <ul className='mt-3 space-y-2 text-center'>
                        {menu.submenu.map((sub) => (
                          <li key={sub.path}>
                            <Link
                              href={sub.path}
                              className='text-sm sm:text-base md:text-lg font-semibold text-dark2 hover:text-secondary'
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
              return (
                <li key={menu.id}>
                  <Link
                    href={menu.path}
                    className={`text-lg sm:text-xl md:text-2xl font-semibold hover:text-secondary ${isActive(menu) ? 'text-secondary' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {menu.title}
                  </Link>
                </li>
              );
            })}
            <button className='primary-btn text-xs sm:text-sm md:text-base' onClick={() => { handleGetQuote(); setIsMenuOpen(false); }}>Contact Us</button>
          </ul>
        </div>
      )}
    </nav>
    
  )
}

export default Navbar
