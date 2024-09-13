import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
}

const websitePricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "£999",
    description: "Perfect for small businesses just starting out",
    features: [
      "5-page responsive website",
      "Basic SEO optimization",
      "Contact form integration",
      "Mobile-friendly design",
      "1 round of revisions",
      "1 month of support",
    ],
  },
  {
    name: "Professional",
    price: "£2,499",
    description: "Ideal for growing businesses with specific needs",
    features: [
      "10-page responsive website",
      "Advanced SEO optimization",
      "Custom contact form and email integration",
      "Mobile-friendly design",
      "E-commerce functionality (up to 50 products)",
      "Social media integration",
      "2 rounds of revisions",
      "3 months of support",
    ],
  },
  {
    name: "Enterprise",
    price: "£4,999+",
    description: "Comprehensive solution for large businesses",
    features: [
      "20+ page responsive website",
      "Comprehensive SEO strategy",
      "Custom functionality and integrations",
      "Advanced e-commerce solutions",
      "User account systems",
      "Custom admin dashboard",
      "Performance optimization",
      "Unlimited revisions",
      "6 months of support and maintenance",
    ],
  },
];

const emailPricingTiers: PricingTier[] = [
  {
    name: "EMAIL DETOX",
    price: "£120 one-off fee",
    description: "NB: Fee is for a maximum of 3 hours.",
    features: [
      "Login to the specified email account",
      "Organize the inbox into folders",
      "Delete spam and old emails",
      "Set up new folders and categorize some of the emails",
    ],
  },
  {
    name: "Pay as you go £35 per hour ( no additional cost. Only pay for hours used)",
    price: "MONTHLY RETAINER",
    description: "Minimum of 5hrs per month at £30 per hour. Packages ranges from 5-40hrs per month. ",
    features: [
      
      "5 hours - £150",
      "10 hours - £300",
      "20 hours - £600",
      "40 hours - £1,200",
    ],
  },
];

const customerServiceTiers: PricingTier[] = [
  {
    name: "Hourly Support",
    price: "£35 per hour",
    description: "Flexible customer service support (No calls)",
    features: [
      "Minimum of 3 hours per week",
      "Email and chat support",
      "Ticket management",
      "Customer inquiry handling",
    ],
  },
  {
    name: "Monthly Retainer",
    price: "Starting at £350/month",
    description: "Dedicated monthly customer service support",
    features: [
      "10 hours: £350/month",
      "15 hours: £525/month",
      "20 hours: £700/month",
      "30 hours: £1,050/month",
      "Consistent support team",
      "Regular reporting",
    ],
  },
];

const socialMediaTiers: PricingTier[] = [
  {
    name: "Silver",
    price: "£150/month",
    description: "Basic social media management for one platform",
    features: [
      "1 social media platform",
      "5 posts per month",
      "Caption generation for provided content",
      "Basic performance tracking",
    ],
  },
  {
    name: "Gold",
    price: "£300/month",
    description: "Enhanced social media presence for one platform",
    features: [
      "1 social media platform",
      "10 posts per month",
      "Caption generation for provided content",
      "Content calendar planning",
      "Monthly performance report",
    ],
  },
  {
    name: "Bronze",
    price: "£450/month",
    description: "Comprehensive social media management for one platform",
    features: [
      "1 social media platform",
      "15 posts per month",
      "Caption generation for provided content",
      "Content strategy development",
      "Engagement monitoring and response",
      "Detailed analytics and reporting",
    ],
  },
];

const minutesTakingTiers: PricingTier[] = [
  {
    name: "Minutes Taking and Transcription",
    price: "£30 per hour",
    description: "Professional minutes taking and transcription services",
    features: [
      "Accurate meeting minutes",
      "Transcription of audio/video recordings",
      "Editing and formatting of documents",
      "Quick turnaround times",
      "Confidentiality assured",
    ],
  },
];

const personalAssistantTiers: PricingTier[] = [
  {
    name: "Personal Assistant",
    price: "£35 per hour",
    description: "Dedicated personal assistant services",
    features: [
      "Minimum of 3 hours per week",
      "Schedule management",
      "Travel arrangements",
      "Personal errands and tasks",
      "Project coordination",
      "Customized support based on individual needs",
    ],
  },
];

const PricingSection = ({
  title,
  tiers,
}: {
  title: string;
  tiers: PricingTier[];
}) => (
  <div className="mb-32">
    <h2 className="text-3xl font-bold text-center text-secondary mb-8">
      {title}
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {tiers.map((tier, index) => (
        <Card
          key={index}
          className={`flex flex-col ${
            index === 1 ? "border-secondary border-2" : ""
          }`}
        >
          <CardHeader>
            <CardTitle className="text-2xl text-secondary">
              {tier.name}
            </CardTitle>
            <CardDescription className="text-xl font-bold">
              {tier.price}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4 text-gray-600">{tier.description}</p>
            <ul className="space-y-2">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <div className="p-6 mt-auto">
            <Button
              className="w-full text-white border-2 hover:bg-white 
            hover:border-primary hover:text-secondary"
            >
              Get Started
            </Button>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const ComprehensiveServicesPricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50 relative overflow-hidden">
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

      <div className="container mx-auto py-12 px-4 relative z-10 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900  mt-10 relative inline-block">
          <span className="relative z-10">My Services</span> <br />
          <span className="relative z-10 text-primary">  Pricing</span>
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
        </h1>
        <PricingSection
          title="Social Media Management Pricing"
          tiers={socialMediaTiers}
        />
        <PricingSection
          title="Website Development Pricing"
          tiers={websitePricingTiers}
        />
        <PricingSection
          title="Email Management Pricing"
          tiers={emailPricingTiers}
        />
        <PricingSection
          title="Customer Service & Support Pricing"
          tiers={customerServiceTiers}
        />
        <PricingSection
          title="Minutes Taking and Transcription Pricing"
          tiers={minutesTakingTiers}
        />
        <PricingSection
          title="Personal Assistant Pricing"
          tiers={personalAssistantTiers}
        />
      </div>


      <div className="flex flex-col px-10 lg:px-20 mb-10 md:flex-row gap-8 items-start">
      <div className="flex-1">
        <ul className="space-y-4">
        <p className="text-xl">
          <span className="text-md font-bold text-primary">PLEASE NOTE: </span> <br />
          Utilise the retainer hours within the calendar month of purchase 
          unless specifically pre-agreed, the hours cannot be rolled over.
        </p>
        <li className="flex items-start gap-2">
            <Check className="flex-shrink-0 w-5 h-5 text-primary mt-1" />
            <p className="text-xl">
            Time will be tracked via Toggl.
            </p>
          </li>

        <li className="flex items-start gap-2">
            <Check className="flex-shrink-0 w-5 h-5 text-primary mt-1" />
            <p className="text-xl">
            Payments to be made in advance.
            </p>
          </li>

          <li className="flex items-start gap-2">
            <Check className="flex-shrink-0 w-5 h-5 text-primary mt-1" />
            <p className="text-xl">
              Invoices are raised at the end of the month for hours worked (50% deposit for
              new customers for the first month)
            </p>
          </li>
          
          <li className="flex items-start gap-2">
            <Check className="flex-shrink-0 w-5 h-5 text-primary mt-1" />
            <p className="text-xl">
              Hours to be used in same month and cannot be rolled over.
            </p>
          </li>
          
          <li className="flex items-start gap-2">
            <Check className="flex-shrink-0 w-5 h-5 text-primary mt-1" />
            <p className="text-xl">
              1 month notice period to terminate by both parties
            </p>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <p className="text-xl">
          Hours are tracked using time-tracking software and 
          I am fully insured and registered with the Information 
          Commissioner's Office (ICO) for Data Protection purposes.
          That's it! No hidden charges or additional fees. You don't 
          pay for  
          <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <Check className="flex-shrink-0 w-5 h-5 text-primary mt-1" />
            <p className="text-xl">
              national insurance 
            </p>
          </li>
          
          <li className="flex items-start gap-2">
            <Check className="flex-shrink-0 w-5 h-5 text-primary mt-1" />
            <p className="text-xl">
             taxes 
            </p>
          </li>
          
          <li className="flex items-start gap-2">
            <Check className="flex-shrink-0 w-5 h-5 text-primary mt-1" />
            <p className="text-xl">
              pension
            </p>
          </li>

          <li className="flex items-start gap-2">
            <Check className="flex-shrink-0 w-5 h-5 text-primary mt-1" />
            <p className="text-xl">
            sick pay
            </p>
          </li>

          <li className="flex items-start gap-2">
            <Check className="flex-shrink-0 w-5 h-5 text-primary mt-1" />
            <p className="text-xl">
            or even my lunch break...
            </p>
          </li>
        </ul> 
           all you pay for is my complete, undivided 
          attention when you need it!
        </p>
      </div>
      
      
    </div>
    </div>
  );
};

export default ComprehensiveServicesPricing;
