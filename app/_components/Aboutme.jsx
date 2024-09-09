import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function AboutMe() {
  return (
    <div className="h-auto">
      <div className="container mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 relative">
              <Image
                src="/faabca.png"
                alt="Hannah - Virtual Assistant"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 p-12">
              <h2 className="text-5xl font-extrabold text-gray-800 mb-8">
                About <span className="text-primary">Me</span>
              </h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Hello! I'm Hannah, a seasoned virtual assistant dedicated to elevating your business operations. 
                With over 3 years of expertise in digital organization and task management, I'm committed to 
                helping you optimize your workflow and focus on what truly matters - expanding your business horizons.
              </p>
              <ul className="text-gray-700 text-lg space-y-4 mb-10">
                {[
                  'Experienced customer service support',
                  'Expert in digital organization',
                  'Efficiency-driven task management',
                  'Creative problem-solving skills',
                  'Proficient in latest productivity tools'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-primary mr-3 h-5 w-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-primary text-white font-bold py-3 px-8 rounded-full
               hover:bg-secondary transition duration-300 flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
