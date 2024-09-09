import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Faq from "../_components/Faq";


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
    icon: "/emailsupport.svg",
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
    title: "Personal Assistant",
    description: "Enhance your business with comprehensive Software as a Service (SaaS) development, delivering scalable solutions for your specific needs.",
    icon: "/saas.svg",
    color: "bg-purple-300",
    textColor: "text-purple-900",
    features: [
      { title: "Custom SaaS Solutions", 
        description: "Build scalable cloud-based software tailored to your unique business requirements, driving efficiency and growth." },

      { title: "Agile SaaS Development", 
        description: "Stay ahead with our agile SaaS development, enabling rapid iteration, continuous delivery, and quick adaptation to market changes." },

      { title: "Secure and Scalable SaaS Solutions ",  
        description: "Ensure business continuity with our secure, robust SaaS solutions, built to industry-leading standards.." },

      { title: "User-Centric Design", 
        description: "CCreate exceptional experiences with our intuitive, user-focused SaaS designs, offering seamless navigation and personalization.." },

      { title: " Cost-Effective", 
        description: "Get high-quality SaaS development within your budget, using the latest technologies and best practices." }
    ]
  }
];

const ServiceCard: React.FC<Service> = ({ title, description, icon, color, textColor, features }) => (
  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
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
    {/* <CardFooter className="p-6">
    <Button className={`w-full ${textColor.replace('text', 'bg')} hover:${textColor.replace('text', 'bg')}-dark text-white`}>
      Book Me Now
    </Button>
  </CardFooter> */}
  </Card>
);

const ServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
              Elevate Your <span className="text-primary">Business Strategy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <Button size="lg" className="px-8 py-3 text-lg bg-white text-primary hover:bg-gray-100">
            Book Me Now
          </Button>
        </div>
      </section>

      <Faq/>
    </div>
  );
};

export default ServicePage;