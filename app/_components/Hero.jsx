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
    <div className="relative overflow-hidden">
      {/* Updated professional background */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#d49af5", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#e9ecef", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#grad1)" />
          <circle cx="0" cy="0" r="60" fill="#007bff" fillOpacity="0.1" />
          <circle cx="100" cy="100" r="40" fill="#6610f2" fillOpacity="0.1" />
          <polygon
            points="0,100 100,0 100,100"
            fill="#28a745"
            fillOpacity="0.05"
          />
          <path
            d="M0 70 Q 50 50 100 80 L 100 100 L 0 100 Z"
            fill="#dc3545"
            fillOpacity="0.05"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-10">
        <div className="text-4xl font-bold text-white bg-secondary md:max-w-96 lg:text-center text-center md:text-center">
          Faab Virtual Solutions
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative w-full h-screen md:h-[500px] lg:h-[550px] order-1 md:order-2">
            <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/Faabvs-ceo.png"
                alt="Virtual Assistant"
                layout="fill"
                objectFit="cover"
                className="rounded-lg transform scale-x-[-1] shadow-2xl brightness-105 contrast-95"
              />

              {/*mobile and tablet */}
              <div className="bg-white/70 absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t  to-transparent md:hidden">
                <h1 className="text-3xl sm:text-3xl font-bold text-black text-center mb-4">
                  Elevate Your <span className="text-secondary">Business</span>{" "}
                  <br />
                  With An Expert Virtual Assistance
                </h1>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary opacity-30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 10 C 30 4 70 4 100 10 L 100 0 L 0 0"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="text-xl text-black text-center">
                  I help entrepreneurs and businesses save time and boost
                  productivity with top-notch virtual assistant services.
                </p>
              </div>
            </div>
          </div>

          {/* Large device */}
          <div className="order-2 md:order-1 mt-10 md:mt-0">
            <h1 className="hidden md:block text-4xl md:text-5xl font-bold text-black mb-6">
              Elevate Your <span className="text-secondary">Business</span> With An {" "}
              <span className="text-secondary">Expert</span> Virtual Assistance
            </h1>
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-primary opacity-30"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 10 C 30 4 70 4 100 10 L 100 0 L 0 0"
                fill="currentColor"
              ></path>
            </svg>
            <p className="hidden md:block text-xl text-black mb-8">
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

            <div className="flex flex-row flex-wrap gap-6">
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

      {/* Spacing div to create gap */}
      <div className="lg:hidden h-20 md:h-24"></div>

      {/* Infinity Testimony Scroll */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 bg-white/50 backdrop-blur-sm">
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
