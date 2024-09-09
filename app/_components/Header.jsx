"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Instagram, Search, Menu, X } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/Services' },
    { name: 'About Me', path: '/AboutMe' },
    { name: 'Book Me', path: '/BookMe' },
    { name: 'Prices', path: '/Pricing' },
  ];

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 h-16  ${
      isScrolled
        ? 'bg-white/70 backdrop-blur-md border-b'
        : 'bg-transparent'
    }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-4'>
        <div className='flex justify-between items-center py-4 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <h1 className='font-bold text-secondary text-xl'>
              Faabvs.
            </h1>
          </div>

          <div className='-mr-2 -my-2 md:hidden'>
            <button
              type='button'
              className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className='sr-only'>Open menu</span>
              {isMenuOpen ? (
                <X className='h-6 w-6' aria-hidden='true' />
              ) : (
                <Menu className='h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>

          <nav className='hidden md:flex space-x-2'>
            {navItems.map((item) => (
              <Link key={item.name} href={item.path}
                className='block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-white hover:text-black hover:border-primary border-2 transition-colors duration-300'>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <div className='relative mr-3'>
              <input
                type="text"
                placeholder="Search..."
                className='w-40 pl-8 pr-2 py-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-gray-800 text-sm bg-white bg-opacity-20'
              />
              <Search className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400' size={16} />
            </div>
            <a href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className='ml-3 hover:text-secondary'>
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          {navItems.map((item) => (
            <Link key={item.name} href={item.path}
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50'>
              {item.name}
            </Link>
          ))}
        </div>

        <div className='pt-4 pb-3 border-t '>
          <div className='flex items-center px-5'>
            <div className='relative'>
              <input
                type="text"
                placeholder="Search..."
                className='pl-8 pr-2 py-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-gray-800 text-sm'
              />
              <Search
                className='absolute left-2 top-1/2 transform -translate-y-1/2 text-black'
                size={16} />
            </div>

            <a href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className='ml-3 hover:text-secondary'>
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
