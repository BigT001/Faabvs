import React from "react";
import {
  Award,
  Briefcase,
  Mail,
  Users,
  Globe,
  Headphones,
  Clock,
  Code,
  CheckCircle,
  HardDrive,
  ClipboardCheck,
  ShieldCheck,
  LayoutDashboard,
  Lightbulb,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
);

function AboutMePage() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <section className="text-center mt-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Welcome I am Hannah <br />
              <span className="text-secondary">Your Professional virtual Assistant</span>
            </h1>
            <p className="text-xl">
              Experienced Customer support | Email Manager | Social Media | Personal Assistant |
              Website Development
            </p>
          </div>
        </section>

        <section className="relative">
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-screen lg:">
                <img
                  alt="faabvs ceo"
                  src="/Faabvs-ceo.png"
                  className="absolute inset-0 w-full h-full object-cover object-center lg:bottom-0"
                />
                <div className="absolute bottom-7 lg:bottom-0 right-0 bg-primary text-white p-6 rounded-tl-lg">
                  <p className="text-2xl font-bold">3+ Years</p>
                  <p>of Experience</p>
                </div>
              </div>

              <Card className="relative flex flex-col justify-between shadow-xl border-primary lg:mt-0 -mt-16">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-secondary lg:px-10">
                    I am...
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow lg:px-16">
                  <p className="text-xl text-gray-600 mb-3">
                    an enthusiastic, competent, and hardworking professional
                    with over 3 years of experience delivering excellent
                    customer service. My expertise lies in creating strong
                    rapport with customers through various communication
                    channels. With a keen eye for detail and a commitment to
                    enhancing customer satisfaction.
                  </p>
                  <p className="text-lg text-gray-600">
                    I excel in managing customer inquiries, resolving issues,
                    and ensuring a seamless experience. My experience with
                    e-commerce giants like IKEA and EON NEXT ENERGY has honed my
                    skills in building strong bonds between brands and their
                    clients.
                  </p>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button 
                    className="w-full text-xl border-2 text-white hover:bg-white
                     hover:border-primary hover:text-secondary" 
                    size="lg" asChild>
                    <a href="/BookMe">Book Me Now</a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Updated My Services Section */}
        <section className="bg-white py-16 pt-8">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              I am exceptional in
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Customer Service & Support",
                  icon: Headphones,
                  description:
                    "Providing excellent customer service via multiple channels.",
                },
                {
                  title: "Email Management",
                  icon: Mail,
                  description:
                    "Efficiently managing and organizing email communications.",
                },
                {
                  title: "Social Media Management",
                  icon: Globe,
                  description:
                    "Creating and managing content for various social media platforms.",
                },
                {
                  title: "Minutes Taking",
                  icon: Clock,
                  description:
                    "Accurate and detailed recording of meeting minutes.",
                },
                {
                  title: "Website Development",
                  icon: Code,
                  description:
                    "Creating and maintaining responsive, user-friendly websites.",
                },
                {
                  title: "Personal Assistant",
                  icon: Briefcase,
                  description:
                    "managing your daily tasks and responsibilities.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="flex text-xl font-semibold text-gray-800 gap-3 items-center">
                    <service.icon className="w-12 h-12 text-primary" />
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Updated Why Choose Me Section */}
        <section className="py-16 bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Why Choose Me?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Skills & Expertise Card */}
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Skills & Expertise
                </h3>
                <ul className="space-y-3 text-lg">
                  {[
                    { icon: ClipboardCheck, label: "Excellent communication skills" },
                    { icon: HardDrive, label: "Proficient in various modern vitual assistant tools" },
                    { icon: LayoutDashboard, label: "Strong problem-solving abilities" },
                    { icon: Lightbulb, label: "Attention to detail" },
                  ].map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <skill.icon className="w-6 h-6 text-primary mr-2" />
                      <span>{skill.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Work Ethic Card */}
              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Work Ethic
                </h3>
                <ul className="space-y-3 text-lg">
                  {[
                    { icon: CheckCircle, label: "Reliable and timely" },
                    { icon: ShieldCheck, label: "Adaptable to changing priorities" },
                    { icon: ClipboardCheck, label: "Committed to continuous learning" },
                    { icon: Lightbulb, label: "Passionate about client success" },
                  ].map((trait, index) => (
                    <li key={index} className="flex items-center">
                      <trait.icon className="w-6 h-6 text-primary mr-2" />
                      <span>{trait.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutMePage;
