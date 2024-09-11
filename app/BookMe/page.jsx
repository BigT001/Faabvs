"use client";

import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ContactMePage from "../ContactMe/page";

const BookMeContactPage = () => {
  const [calendlyUrl, setCalendlyUrl] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    setCalendlyUrl(
      `https://calendly.com/hannah-faabvs/30min?back=1&month=${year}-${month}`
    );
  }, []);

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

      <div className="container mx-auto p-4 relative z-10">
        <section className="text-center mt-10">
          <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-20 mt-10 relative inline-block">
          <span className="relative z-10">Book now for exceptional</span> <br />
          <span className="relative z-10 text-primary"> service and collaboration.</span>
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
            
            <p className="text-xl">
              Customer support | Email Manager | Social Media | Minutes Taking |
              Website Development
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-1 gap-6 mt-10">
          <Card>
            <CardHeader></CardHeader>
            <CardContent>
              {calendlyUrl && (
                <InlineWidget
                  url={calendlyUrl}
                  styles={{ height: "600px", width: "100%" }}
                />
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-20">
          <ContactMePage />
        </div>
      </div>
    </div>
  );
};

export default BookMeContactPage;