import React from 'react'
import Image from 'next/image'
import { Calendar, Clock, Globe } from 'lucide-react'

function Hero() {
  const testimonials = [
    "Amazing service! Saved me so much time.",
    "Hannah is a game-changer for my business.",
    "Highly professional and efficient.",
    "Best decision I've made for my company.",
    "Incredible attention to detail.",
  ];

  return (
    <div className="relative bg-gradient-to-r from-purple-50 to-pink-50 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"
              style={{
                backgroundColor: `hsl(${Math.random() * 360}, 70%, 80%)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}%`,
                height: `${Math.random() * 10 + 5}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-28">
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
              {/* Title overlay for mobile and tablet */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent md:hidden">
                <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
                  Elevate Your <span className='text-primary'>Business</span> with Expert Virtual Assistance
                </h1>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 md:order-1 mt-10 md:mt-0">
            <h1 className="hidden md:block text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Elevate Your <span className='text-primary'>Business</span> with Expert Virtual Assistance
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Hi, I'm Hannah Olafayo. I help entrepreneurs and businesses save time
              and boost productivity with top-notch virtual assistant services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary transition duration-300 shadow-lg hover:shadow-xl">
                Book Me Now
              </button>
              <button className="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition duration-300 shadow-lg hover:shadow-xl">
                View Services
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <Clock className="text-primary mr-2" size={20} />
                <span className="text-gray-700">Save 20+ hours/week</span>
              </div>
              <div className="flex items-center">
                <Calendar className="text-primary mr-2" size={20} />
                <span className="text-gray-700">24/7 Availability</span>
              </div>
              <div className="flex items-center">
                <Globe className="text-primary mr-2" size={20} />
                <span className="text-gray-700">Global Clientele</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinity Testimony Scroll */}
      <div className="absolute border-secondary bottom-0 left-0 right-0 overflow-hidden py-4 bg-white/50 backdrop-blur-sm">
        <div className="flex animate-scroll">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-64 mx-4 border-purple-950  border-2 p-4 bg-purple-00 rounded-lg">
              <p className="text-black italic">&ldquo;{testimonial}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
