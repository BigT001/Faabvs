import React from "react";
import Image from "next/image";
import { Calendar, Clock, Globe } from "lucide-react";
import Link from "next/link";

function Hero() {
  const testimonials = [
    "Amazing service! Saved me so much time.",
    "Hannah is a game-changer for my business.",
    "Highly professional and efficient.",
    "Best decision I've made for my company.",
    "Incredible attention to detail.",
  ];

  return (
    <div className="relative overflow-hidden mt-10">
      {/* Background SVG */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff9a9e" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#fad0c4" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a18cd1" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#fbc2eb" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="grad3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#84fab0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8fd3f4" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          <path fill="url(#grad1)">
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="
            M0,0 C25,25 75,25 100,0 L100,100 L0,100 Z;
            M0,25 C25,0 75,0 100,25 L100,100 L0,100 Z;
            M0,0 C25,25 75,25 100,0 L100,100 L0,100 Z"
            />
          </path>

          <path fill="url(#grad2)">
            <animate
              attributeName="d"
              dur="23s"
              repeatCount="indefinite"
              values="
            M0,25 C50,0 50,50 100,25 L100,100 L0,100 Z;
            M0,0 C50,25 50,0 100,0 L100,100 L0,100 Z;
            M0,25 C50,0 50,50 100,25 L100,100 L0,100 Z"
            />
          </path>

          <path fill="url(#grad3)">
            <animate
              attributeName="d"
              dur="25s"
              repeatCount="indefinite"
              values="
            M0,0 C50,0 50,50 100,50 L100,100 L0,100 Z;
            M0,50 C50,25 50,0 100,0 L100,100 L0,100 Z;
            M0,0 C50,0 50,50 100,50 L100,100 L0,100 Z"
            />
          </path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 lg:py-10 md:py-10">
        {/* Mobile version - now at the top */}
        <div className="md:hidden text-center mb-6">
          <div className="text-3xl font-bold text-white mb-4 bg-secondary">
            <p className="">FAAB Virtual Solutions.</p>
          </div>
          <h1 className="text-5xl sm:text-3xl font-bold text-black mb-4">
            Elevate Your{" "}
            <span className="bg-secondary text-white">Business</span> <br />
            With An <span className="bg-secondary text-white">Expert</span>{" "}
            Virtual Assistance
          </h1>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative w-full h-[90vh] md:h-[500px] lg:h-[550px] order-1 md:order-2">
            <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/Faabvs-ceo.png"
                alt="Virtual Assistant"
                layout="fill"
                objectFit="cover"
                className="rounded-lg transform scale-x-[-1] shadow-2xl brightness-105 contrast-95"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 md:order-1 mt-0 md:mt-0">
            {/* Desktop version */}
            <div className="hidden md:block relative">
              <div className="text-4xl font-bold text-secondary absolute -top-8 left-0 z-10">
                <p className="bg-secondary text-white">FAAB Virtual Solutions.</p>
              </div>
              <h1 className="text-4xl pt-6 md:text-5xl font-bold text-secondary mb-6 relative z-0">
                Elevate Your{" "}
                <span className="bg-secondary text-white">Business</span> With
                An <span className="bg-secondary text-white">Expert</span>{" "}
                Virtual Assistance
              </h1>
            </div>

            <p className="text-xl text-black mb-8 lg:px-0 px-8">
              I help entrepreneurs and businesses save time and boost
              productivity with top-notch virtual assistant services.
            </p>
            <div className="flex flex-row gap-4 mb-12 justify-center md:justify-start">
              <Link href="BookMe" className="inline-block">
                <button
                  className="bg-primary text-white px-6 py-3 rounded-full font-semibold
                 hover:bg-secondary transition duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Book Me Now
                </button>
              </Link>
              <Link href="Services" className="inline-block">
                <button
                  className="border-2 border-primary text-primary px-6 py-3 rounded-full 
                font-semibold hover:bg-primary hover:text-white transition duration-300 
                shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  View Services
                </button>
              </Link>
            </div>

            <div className="lg:flex grid flex-row  gap-4 mb-8 lg:w-full justify-center md:justify-start">
              <div className="flex items-center">
                <Clock className="text-primary mr-2" size={20} />
                <span className="text-gray-700 whitespace-nowrap">
                  Save 20+ hours/week
                </span>
              </div>
              <div className="flex items-center">
                <Calendar className="text-primary mr-2" size={20} />
                <span className="text-gray-700 whitespace-nowrap">
                  24/7 Availability
                </span>
              </div>
              <div className="flex items-center">
                <Globe className="text-primary mr-2" size={20} />
                <span className="text-gray-700 whitespace-nowrap">
                  Global Clientele
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinity Testimony Scroll */}
      <div className=" bottom-0 left-0 right-0 overflow-hidden py-4 bg-white/50 backdrop-blur-sm">
        <div className="flex animate-scroll">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 mx-4 border-purple-950 border-2 p-4 bg-purple-00 rounded-lg"
            >
              <p className="text-black italic">&ldquo;{testimonial}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
