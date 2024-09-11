import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Faq from "../_components/Faq";
import Link from "next/link";


interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
  textColor: string;
  features: { title: string; description: string }[];
}

const services: Service[] = [
  {
    title: "Customer service and support (No Calls)",
    description: "Enhance customer relationships with our responsive support services.",
    icon: "/customersupport.svg",
    color: "bg-purple-100",
    textColor: "text-purple-600",
    features: [
      { title: "Multi-channel customer inquiry management", 
        description: "Respond to customer inquiries via email, chat, or phone." },

      { title: "Real-time chat support", 
        description: "Assist customers in real-time through live chat, helping them navigate the website, answer questions, and troubleshoot issues." },

      { title: "Product and service information provision",  
        description: "I prioritize delivering clear and accurate information to your customers at every touchpoint. By ensuring that all details are precise and easily understandable, I help customers make informed decisions confidently." },

      { title: "Customer satisfaction follow-ups", 
        description: "Check back with customers to ensure their issues have been resolved to their satisfaction." },

      { title: "Positive service experience cultivation", 
        description: "I focus on building strong, lasting relationships with your customers by delivering consistently excellent service. My approach ensures that every interaction is positive, fostering trust and loyalty that keeps your clients coming back." }
    ]
  },

  {
    title: "Email & Diary Management",
    description: "Reclaim your time with our expert email and calendar management services.",
    icon: "/email.svg",
    color: "bg-blue-100",
    textColor: "text-blue-600",
    features: [
      { title: "Daily email check", 
        description: "I prioritize your emails effectively, ensuring that critical messages get your attention first and reducing inbox overwhelm." },

      { title: "Scheduling", 
        description: "Efficiently manage your appointments, meetings, and events so you never miss an important meeting or deadline." },

      { title: "Implementation of folders ", 
        description: "Organize your inbox for maximum efficiency with a systematic folder structure, making it easier to locate important emails and maintain a clutter-free inbox." },

      { title: "Priority email flagging", 
        description: "Ensure important emails are never missed by automatically flagging high-priority messages for quick and easy access." },

      { title: "Spam management and unsubscription", 
        description: "Keep your inbox clean and focused by managing spam and unsubscribing from unnecessary mailing lists." }
    ]
  },
  {
    title: "Social Media Management",
    description: "Struggling to keep up with your social media postings? I can create a package suited to your needs. ",
    icon: "/socialmedia.svg",
    color: "bg-green-100",
    textColor: "text-green-600",
    features: [
      { title: "Strategic content posting across platforms", 
        description: "Increase engagement with well-timed posts across platforms, posting five times a week on two platforms, with content provided by the client for maximum impact." },

      { title: "Local visibility enhancement", 
        description: "Boost your brand's visibility within your community by sourcing and engaging with local pages to enhance your online presence." },

      { title: "Targeted ad campaign setup", 
        description: "Reach your target audience with precision by setting up Meta ads that effectively promote your business and drive results." },

      { title: "Custom promotional content creation", 
        description: "Stand out with tailored promotional content designed specifically for your brand, created in agreement with the client to ensure it resonates with your audience." },

      { title: "Reviews monitoring, reply and Caption creation",
        description: "Stay on top of customer feedback by monitoring reviews, crafting thoughtful replies, and creating compelling captions that enhance your brand's voice and reputation."
      },
    ]
  },
  
  {
    title: "Website Development",
    description: "Bring your ideas to life with our comprehensive website development services.",
    icon: "/website.svg",
    color: "bg-yellow-100",
    textColor: "text-yellow-600",
    features: [
      { title: "Responsive design", 
        description: "Your site will look great on any device, providing a seamless user experience whether on mobile, tablet, or desktop." },

      { title: "SEO optimization", 
        description: " Increase your site's visibility in search results with optimized content and structure, driving more traffic to your site." },

      { title: "Custom development", 
        description: "Get a site that meets your specific needs, with bespoke features and functionalities that align with your business goals." },

      { title: "E-commerce integration", 
        description: "Sell products directly from your site with secure and efficient e-commerce solutions that enhance your online store." },

      { title: "Maintenance and support", 
        description: "Keep your site running smoothly with ongoing maintenance and technical support, ensuring it's always up-to-date and secure." }
    ]
  },
  {
    title: "Minutes Taking",
    description: "Accurate and detailed minutes to capture the essence of your meetings.",
    icon: "/minutes.svg",
    color: "bg-pink-100",
    textColor: "text-pink-600",
    features: [
      { title: "Real-time minutes recording", 
        description: "Capture meeting details as they happen, ensuring accuracy and thoroughness in documenting discussions." }, 

      { title: "Summary preparation", 
        description: "Get concise summaries for quick reference, distilling key points and decisions into easily digestible formats." },

      { title: "Action items tracking", 
        description: "Ensure follow-up on key decisions with clear tracking of action items, so responsibilities are clearly defined and progress is monitored." },

      { title: "Confidential minutes handling", 
        description: "Keep sensitive information secure with confidential handling of minutes, safeguarding your organization’s privacy." },

      { title: "Distribution to stakeholders", 
        description: "Share minutes with the right people, ensuring all stakeholders are informed and on the same page." }
    ]
  },
  {
    "title": "Personal Assistant",
    "description": "I can perfectely assistant you in managing your daily tasks and responsibilities.",
    "icon": "/saas.svg",
    "color": "bg-purple-300",
    "textColor": "text-purple-900",
    "features": [
      {
        "title": "Online Shopping",
        "description": "Get help with online shopping tasks, from researching products to making purchases."
      },
      {
        "title": "Personal Appointment Scheduling",
        "description": "Schedule appointments and manage your calendar with ease."
      },
      {
        "title": "Reminder Services For Important Dates",
        "description": "Stay on top of important dates and deadlines with personalized reminders."
      },
      {
        "title": "Responding To Emails",
        "description": "Get assistance with managing your inbox and responding to emails."
      },
      {
        "title": "Data Entry",
        "description": "Get assistance with entering and managing data, including contacts, calendar events, and documents."
      }
    ]
  }
];

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

const ServiceCard: React.FC<Service> = ({ title, description, icon, color, textColor, features }) => (
  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col bg-white bg-opacity-90">
    <CardHeader className={`${color} p-6 rounded-t-lg`}>
      <div className="flex items-center space-x-4">
        <img src={icon} alt={`${title} icon`} className="w-16 h-16" />
        <h3 className={`text-2xl font-bold ${textColor}`}>{title}</h3>
      </div>
    </CardHeader>
    <CardContent className="p-6 flex-grow">
      <p className="text-gray-600 mb-4">{description}</p>
      <h4 className="text-lg font-semibold mb-3">Features:</h4>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex flex-col items-start">
            <div className="flex items-center mb-1">
              <CheckCircle className={`${textColor} mr-3 h-5 w-5 mt-1`} />
              <span className="text-sm font-bold">{feature.title}</span>
            </div>
            <p className="text-sm text-gray-600 ml-8">{feature.description}</p>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const ServicePage: React.FC = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
            <h1 className="text-6xl font-extrabold text-gray-900 mb-4 relative inline-block">
                <span className="relative z-10">Elevate Your</span>
                <span className="relative z-10 text-primary"> Business Strategy</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 10 C 30 4 70 4 100 10 L 100 0 L 0 0" fill="currentColor"></path>
                </svg>
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Unlock your potential with our comprehensive suite of professional services, tailored to streamline operations and catalyze growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Ready to Transform Your Business?</h2>
            <Link href="BookMe">
            <Button size="lg" className="px-8 py-3 text-lg bg-white text-primary hover:bg-gray-100">
              Book Me Now
            </Button>
            </Link>
            
          </div>
        </section>
        <Faq />
      </div>
    </div>
  );
};

export default ServicePage;