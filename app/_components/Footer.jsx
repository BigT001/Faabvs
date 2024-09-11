import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Me', path: '/AboutMe' },
  { name: 'Services', path: '/Services' },
  { name: 'Prices', path: '/Pricing' },
  { name: 'Book Me', path: '/BookMe' },
];

const socialMediaLinks = [
  { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/your-profile' },
  { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/your-profile' },
  { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://www.linkedin.com/in/your-profile' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-300 via-white to-pink-200">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-lg bg-gradient-to-r from-purple-900 to-purple-700 p-6 shadow-lg sm:flex-row sm:justify-between">
          <strong className="text-xl text-white sm:text-xl text-center sm:text-left">
            Ready to boost your business productivity?
          </strong>
          
          <Link href="/BookMe" className="inline-flex items-center gap-2 rounded-full border
           border-white bg-white px-8 py-3 text-purple-950 hover:bg-transparent hover:text-white
           focus:outline-none focus:ring active:bg-white/90 transition duration-300">
            <span className="text-sm font-medium">Book Me Now</span>
            <ArrowRight className="size-5" />
          </Link>
        </div>
        
        <nav className="mt-16">
          <ul className="grid gap-4 sm:flex justify-center items-center sm:space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path} className="text-gray-800 hover:text-purple-700 transition duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mt-8">
          <ul className="flex justify-center gap-6">
            {socialMediaLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  rel="noreferrer"
                  target="_blank"
                  className="text-purple-800 transition hover:text-purple-600 duration-300"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="size-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8 flex flex-col items-center">
          <div className="mb-4 w-[150px] h-[150px] bg-black rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/exec.png"
              alt="Executive"
              width={180}
              height={180}
              className="rounded-full object-cover"
            />
          </div>
          <div className="w-full flex justify-between items-center mt-4">
            <Link 
              href="/Document/PrivacyPolicy.docx.pdf" 
              className="text-sm text-gray-600 hover:text-purple-700 transition duration-300">
              Privacy Policy
            </Link>
            <p className="text-sm text-gray-600 text-center">
              Copyright &copy; Faabvs {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}