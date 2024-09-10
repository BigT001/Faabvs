import React from 'react';
import { Inbox, Instagram, PenTool, Mail, Globe, ClipboardList, FolderCode,  } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const services = [
  {
    title: "Email Management",
    description: "Transform your inbox from a source of stress into a streamlined communication hub with my expert email management service...",
    icon: Inbox,
  },
  {
    title: "Social Media",
    description: "I craft engaging content, maintain consistent posting schedules, and interact with your audience across platforms...",
    icon: Instagram,
  },
  {
    title: "Minutes Taking",
    description: "I attend your virtual meetings, document key points, decisions, and action items, and deliver polished, accurate minutes...",
    icon: ClipboardList,
  },
  {
    title: "Customer Support",
    description: "I handle inquiries, resolve issues, and provide information promptly and professionally. I ensure your customers feel valued and supported...",
    icon: Mail,
  },
  {
    title: "Web Development",
    description: "Establish a strong online foundation with my website development expertise. I create visually appealing, user-friendly websites tailored to your brand and objectives...",
    icon: Globe,
  },
  {
    title: "Personal Assistant",
    description: "As your Personal Assistant, I help you manage life's essentials, from scheduling appointments to responding to emails, and even taking care of online shopping tasks. With me, you can enjoy a more organized, stress-free day.",
    icon: FolderCode,
  },
];

function ServiceCard({ title, description, icon: Icon }) {
  return (
    <Card className="h-full transition-all border-2 border-purple-900
    shadow-md shadow-secondary duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center space-x-4">
        <div className="bg-primary rounded-full p-3">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-md">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href="Services">
        <Button variant="link" className="text-primary hover:text-secondary">
          Learn More →
        </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

function Services() {
  return (
    <section className="py-12 bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            Services I Offer
          </h2>
          <p className="mt-4 text-xl text-black">
            Comprehensive virtual assistance to elevate your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 trxt-lg gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;