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
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function AboutMePage() {
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
                top: `${Math.random() * 50}%`,
                left: `${Math.random() * 80}%`,
                width: `${Math.random() * 10 + 5}%`,
                height: `${Math.random() * 10 + 5}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="">
        <section className="text-center mt-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">
              Welcome I am Hannah <br />
              <span className="text-secondary">Your Professional virtual Assistant</span>
            </h1>
            <p className="text-xl">
              Experienced Customer support | Email Manager | Customer Support |
              Website Development
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 gap-8">
              <div className="relative">
                <div className="absolute inset-0 h-full w-full">
                  <img
                    alt="faabvs ceo"
                    src="/Faabvs-ceo.png"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="relative z-10 flex items-center justify-end">
                    <div className="absolute bottom-0 right-0 bg-primary text-white p-6 rounded-tl-lg">
                      <p className="text-2xl font-bold">3+ Years</p>
                      <p>of Experience</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="relative flex flex-col justify-between shadow-xl border-primary">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-secondary px-10">
                    I am...
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow px-16">
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
                  title: "Customer Support",
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
                  title: "SaaS Development",
                  icon: Briefcase,
                  description:
                    "Developing and implementing Software as a Service solutions.",
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
