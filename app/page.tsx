"use client"

import Head from "next/head";
import React, { useEffect, useState } from "react";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Aboutme from "./_components/Aboutme";
import Contact from "./_components/Contact";
import Reviews from "./_components/Reviews";
import Faq from "./_components/Faq";

const AnimatedCircle = ({ size, position, colors }: {
  size: number;
  position: string;
  colors: string;
}) => {
  const [animationDelay, setAnimationDelay] = useState(0);
  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);

  useEffect(() => {
    setAnimationDelay(Math.random() * 10000);
    setMoveX(Math.random() * 200 - 100);
    setMoveY(Math.random() * 200 - 100);
  }, []);

  return (
    <div
      className={`absolute w-[${size}px] h-[${size}px] ${position} bg-gradient-to-br ${colors} rounded-full opacity-30 animate-custom-ping`}
      style={{
        animationDelay: `${animationDelay}ms`,
        ['--move-x' as string]: `${moveX}px`,
        ['--move-y' as string]: `${moveY}px`,
      } as React.CSSProperties}
    ></div>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Faabvs - Virtual Assistant Services - Executive Virtual Assistant
        </title>
        <meta
          name="description"
          content="Professional virtual assistant services to help you save time and boost productivity."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services />

      {/* Unified Background Section for About Me and Contact */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-300 via-pink-100 to-purple-200">
        
          <Aboutme />
          <Contact />
      
      </div>

      <div className="relative bg-gradient-to-r from-purple-50 to-pink-50 overflow-hidden">
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

        <Faq />
        <Reviews />
      </div>
        

     
    </div>
  );
}