import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  MessageSquare,
  FileText,
  ClipboardCheck,
  Rocket,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formspreeState, sendToFormspree] = useFormspree("xyzgvarn");
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("Form data:", data);
    try {
      await sendToFormspree(data);
      console.log("Form submitted successfully");
      form.reset();
      setIsSubmitSuccessful(true);
      setTimeout(() => setIsSubmitSuccessful(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const hiringSteps = [
    { text: "Schedule a free consultation call", icon: Calendar },
    { text: "Discuss your needs and expectations", icon: MessageSquare },
    { text: "Receive a tailored proposal", icon: FileText },
    { text: "Review and approve the contract", icon: ClipboardCheck },
    { text: "Begin our productive collaboration", icon: Rocket },
  ];

  const contactInfo = [
    { icon: Mail, text: "hannah@faabvs.com" },
    { icon: Phone, text: "+44 7518 665842" },
  ];

  const socialMedia = [
    { icon: Instagram, 
      link: "https://www.instagram.com/hannah_faab" },
    { icon: Twitter, 
      link: "https://twitter.com" },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/hannah-olafayo-b093242b3",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-secondary">
        You Can Contact Me
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold text-center text-secondary">
              Get in Touch
            </h2>
          </CardHeader>
          <CardContent>
            {isSubmitSuccessful && (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
                role="alert"
              >
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline">
                  {" "}
                  Thanks for your message! I will get back to you soon.
                </span>
              </div>
            )}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary">
                        Company Name (Optional)
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message here..."
                          className="h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full text-white border-2 hover:border-primary hover:text-secondary hover:bg-white"
                  disabled={formspreeState.submitting}
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Steps in Hiring Me Section */}
        <div className="space-y-8 p-10">
          <h2 className="text-3xl font-bold text-secondary">
            Steps in Hiring Me as Your Virtual Assistant
          </h2>

          <ol className="relative border-l border-gray-200 dark:border-primary ml-10">
            {hiringSteps.map((step, index) => (
              <li key={index} className="mb-8 ml-10">
                <span
                  className="absolute flex items-center justify-center w-8 h-8  
                  bg-blue-100 rounded-full -left-4 ring-2 dark:ring-primary dark:bg-white"
                >
                  <step.icon className="w-4 h-4 text-primary dark:text-secondary" />
                </span>
                <p className="text-base font-normal text-gray-500 dark:text-gray-900">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>

          <div className="space-y-4 justify-center items-center mt-5">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center mt-10">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <item.icon className="w-5 h-5 text-secondary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 items-center">
            <div className="flex space-x-4 items-center justify-center">
              {socialMedia.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <item.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
