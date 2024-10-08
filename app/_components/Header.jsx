"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Instagram, Search, Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/AboutMe" },
    { name: "Services", path: "/Services" },
    { name: "Prices", path: "/Pricing" },
    { name: "Book Me", path: "/BookMe" },
  ];

  const handleItemClick = () => {
    setIsMenuOpen(false);
  };

  const getItemClass = (itemPath) => {
    const baseClass = "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 border-2 ";
    const activeClass = "text-primary bg-white border-primary ";
    const inactiveClass = "text-white bg-primary border-primary hover:bg-white hover:text-primary ";

    return baseClass + (pathname === itemPath ? activeClass : inactiveClass);
  };

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 h-20  ${
        isScrolled ? "bg-white/70 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto p sm:px-6 lg:px-4">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" onClick={handleItemClick}>
            <img
              src="Faabvs-Logo.png"
              alt="Exec logo"
              width={80}
              height={80}
              className=""
            />
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <div className="relative mr-3">
             
              
            </div>
            
            
            
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={handleItemClick}
                className={getItemClass(item.path)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            
            <a
               href="https://www.instagram.com/hannah_faab"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 hover:text-secondary"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-primary`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={handleItemClick}
              className={getItemClass(item.path)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;