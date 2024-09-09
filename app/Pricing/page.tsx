import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

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
      "1 month of support"
    ]
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
      "3 months of support"
    ]
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
      "6 months of support and maintenance"
    ]
  }
];

const emailPricingTiers: PricingTier[] = [
  {
    name: "Basic Email Management",
    price: "Starting at £120",
    description: "Essential email services for busy professionals",
    features: [
      "One-off email detox: £120",
      "Email maintenance: £30 per hour",
      "Email & calendar management: £35 per hour (min. 2hrs/week)",
      "Minutes taking and transcription: £30 per hour"
    ]
  },
  {
    name: "Monthly Retainer",
    price: "Starting at £150/month",
    description: "Ongoing email management support",
    features: [
      "Minimum of 5 hours per month at £30/hour",
      "5 hours: £150/month",
      "10 hours: £300/month",
      "20 hours: £600/month",
      "40 hours: £1,200/month",
      "Flexible scheduling",
      "Priority support"
    ]
  }
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
      "Customer inquiry handling"
    ]
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
      "Regular reporting"
    ]
  }
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
      "Basic performance tracking"
    ]
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
      "Monthly performance report"
    ]
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
      "Detailed analytics and reporting"
    ]
  }
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
      "Confidentiality assured"
    ]
  }
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
      "Customized support based on individual needs"
    ]
  }
];

const PricingSection = ({ title, tiers }: { title: string; tiers: PricingTier[] }) => (
  <div className="mb-32">
    <h2 className="text-3xl font-bold text-center text-secondary mb-8">{title}</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {tiers.map((tier, index) => (
        <Card key={index} className={`flex flex-col ${index === 1 ? 'border-secondary border-2' : ''}`}>
          <CardHeader>
            <CardTitle className="text-2xl text-secondary">{tier.name}</CardTitle>
            <CardDescription className="text-xl font-bold">{tier.price}</CardDescription>
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
            <Button className="w-full text-white border-2 hover:bg-white 
            hover:border-primary hover:text-secondary">
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

      <div className="container mx-auto py-12 px-4 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-20">
          My Comprehensive <br/>
          <span className='text-primary'>Services Pricing</span>
        </h1>
        <PricingSection title="Social Media Management Pricing" tiers={socialMediaTiers} />
        <PricingSection title="Website Development Pricing" tiers={websitePricingTiers} />
        <PricingSection title="Email Management Pricing" tiers={emailPricingTiers} />
        <PricingSection title="Customer Service & Support Pricing" tiers={customerServiceTiers} />
        <PricingSection title="Minutes Taking and Transcription Pricing" tiers={minutesTakingTiers} />
        <PricingSection title="Personal Assistant Pricing" tiers={personalAssistantTiers} />
      </div>
    </div>
  );
};

export default ComprehensiveServicesPricing;