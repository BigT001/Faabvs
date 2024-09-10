import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <div className="h-auto">
      <div className="container mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 relative h-96 md:h-auto">
              <Image
                src="/faabca.png"
                alt="Hannah - Virtual Assistant"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 md:mb-8">
                About <span className="text-primary">Me</span>
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Hello! I'm Hannah, a seasoned virtual assistant dedicated to elevating your business operations. 
                With over 3 years of expertise in digital organization and task management, I'm committed to 
                helping you optimize your workflow and focus on what truly matters - expanding your business horizons.
              </p>
              <ul className="text-gray-700 text-base md:text-lg space-y-3 md:space-y-4 mb-8 md:mb-10">
                {[
                  'Experienced customer service support',
                  'Expert in digital organization',
                  'Efficiency-driven task management',
                  'Creative problem-solving skills',
                  'Proficient in latest productivity tools'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-primary mr-3 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="AboutMe">
              <button className="bg-primary text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full 
                hover:bg-secondary transition duration-300 flex items-center text-sm md:text-base">
                Know More
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}