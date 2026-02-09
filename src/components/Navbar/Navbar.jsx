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
    title: "Project Estimator",
    path: "/fee-calculator",
    activePaths: ['/fee-calculator'],
  },
  {
    id: 5,
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

       className='py-2 sm:py-2.5 md:py-3 lg:py-4 fixed top-0 left-0 right-0 z-50 bg-light bg-opacity-50 backdrop-blur-md w-full lg:px-[5vw]'>
        <div className='container flex items-center justify-between gap-4 md:gap-6 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10 xl:gap-14 lg:max-w-none lg:w-full lg:px-0'>
          {/*Logo section*/}
          <div className='flex flex-row items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 my-auto lg:justify-self-start'>
          <svg
            viewBox='0 0 100 100'
            aria-hidden='true'
            className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-secondary'
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
              className='font-bold my-auto text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap'
            >
              Arrow Smart Solutions
            </button>
          </div>
          {/*Menu section*/}
          <div className='hidden lg:flex items-center justify-center min-w-0 lg:justify-self-center'>
            <ul className='flex flex-wrap xl:flex-nowrap items-center justify-center gap-x-2.5 gap-y-1 min-w-0 max-w-full'>
              {NavbarMenu.map((menu) => {
                if (menu.submenu) {
                  return (
                    <li
                      key={menu.id}
                      className='relative'
                      onMouseEnter={() => setOpenDropdown(menu.title)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link href={menu.path} className={`inline-flex items-center gap-1 py-1.5 px-2 sm:px-2.5 md:px-3 hover:text-secondary relative group text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold whitespace-nowrap ${isActive(menu) ? 'text-secondary lg:border lg:border-secondary lg:rounded-full' : ''}`}>
                        <div className='w-2 h-2 bg-secondary absolute mt-2 rounded-full
                        left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div>
                        {menu.title}
                        <FiChevronDown className='text-sm md:text-base transition-transform duration-200 group-hover:rotate-180' aria-hidden="true" />
                      </Link>
                      {openDropdown === menu.title && (
                        <ul className='absolute top-full left-1/2 -translate-x-1/2 mt-0.5 bg-light bg-opacity-50 backdrop-blur-md border border-white/40 shadow-lg rounded-xl py-1.5 min-w-[220px] z-50 before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:content-[""]'>
                          {menu.submenu.map((sub) => (
                            <li key={sub.path}>
                              <Link href={sub.path} className='block mx-2 px-3 py-1.5 text-xs font-semibold rounded-full hover:bg-secondary hover:text-white transition-colors whitespace-nowrap' onClick={() => setOpenDropdown(null)}>
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
                    <Link href={menu.path} className={`inline-block py-1.5 px-2 sm:px-2.5 md:px-3 hover:text-secondary relative group text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold whitespace-nowrap ${isActive(menu) ? 'text-secondary lg:border lg:border-secondary lg:rounded-full' : ''}`}>
                      <div className='w-2 h-2 bg-secondary absolute mt-2 rounded-full
                      left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div>
                      {menu.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <button aria-label="Contact Us" onClick={handleGetQuote} className='hidden lg:inline-flex primary-btn py-1.5 sm:py-2 md:py-2.5 px-3 sm:px-4 md:px-5 text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap lg:justify-self-end'>Contact Us</button>
            {/* Mobile Hamburger menu section */}
            <div className='lg:hidden'>
              <button
                onClick={toggleMenu}
                aria-label='Menu Toggle Key'
                className='relative text-xl sm:text-2xl md:text-3xl p-1.5 sm:p-2 md:p-2.5 rounded-full border border-secondary/50 text-secondary bg-light bg-opacity-70 backdrop-blur-lg shadow-sm hover:bg-secondary hover:text-white transition-colors'
              >
                {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
              </button>
            </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden fixed top-0 left-0 w-full h-full bg-light bg-opacity-90 z-40'>
          <ul className=' top-6 flex flex-col items-center justify-center h-full gap-3 sm:gap-4 md:gap-5'>
            {NavbarMenu.map((menu) => {
              if (menu.submenu) {
                const isOpen = openMobileSection === menu.title;
                return (
                  <li key={menu.id} className='w-full'>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenMobileSection(isOpen ? null : menu.title)}
                      className={`w-full flex items-center justify-center gap-2.5 text-sm sm:text-base md:text-lg font-semibold hover:text-secondary ${isActive(menu) ? 'text-secondary' : ''}`}
                    >
                      <span>{menu.title}</span>
                      <span className='text-lg'>
                        {isOpen ? <FiMinus /> : <FiPlus />}
                      </span>
                    </button>
                    {isOpen && (
                      <ul className='mt-3 space-y-2 text-center'>
                        {menu.submenu.map((sub) => (
                          <li key={sub.path}>
                            <Link
                              href={sub.path}
                              className='text-xs sm:text-sm md:text-base font-semibold text-dark2 hover:text-secondary'
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
                    className={`text-sm sm:text-base md:text-lg font-semibold hover:text-secondary ${isActive(menu) ? 'text-secondary' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {menu.title}
                  </Link>
                </li>
              );
            })}
            <button className='primary-btn py-1.5 px-4 text-[10px] sm:text-xs md:text-sm' onClick={() => { handleGetQuote(); setIsMenuOpen(false); }}>Contact Us</button>
          </ul>
        </div>
      )}
    </nav>
    
  )
}

export default Navbar
