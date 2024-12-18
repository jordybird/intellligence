"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const DiagonalArrow = () => (
  <svg 
    width="22" 
    height="22" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="white" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="rotate-[-45deg]"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPathHovered, setIsPathHovered] = useState(false);
  const [isCompaniesHovered, setIsCompaniesHovered] = useState(false);

  const arrowVariants = {
    initial: { 
      x: 0, 
      y: 0, 
      opacity: 1 
    },
    hover: {
      x: [0, 30, -30, 0],
      y: [0, -30, 30, 0],
      opacity: [1, 0, 0, 1],
      transition: {
        duration: 0.5,
        times: [0, 0.4, 0.6, 1],
        ease: "easeInOut"
      }
    }
  };

  const pathArrowVariants = {
    initial: { x: 0 },
    hover: {
      x: [0, 10, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="w-full px-4 py-8 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-4">
          {/* Left Column */}
          <div className="flex-1 md:w-[60%] relative">
            {/* Text Content */}
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-semibold text-[#28282B] leading-tight">
                <span className="whitespace-nowrap">AI MARKETING SOLUTIONS</span><br />
                TO GROW YOUR BUSINESS
              </h1>
              
              <p className="text-lg md:text-xl pt-4 md:pt-8 text-[#28282B] pb-8 max-w-xl mx-auto md:mx-0 font-light">
                Social media management, lead generation, and personalized outreach crafted to connect with your ideal audience.
              </p>

              {/* Container for Get Started Button and Bottom Right Image */}
              <div className="relative">
                {/* Get Started Button Group */}
                <div 
                  className="flex items-center justify-center md:justify-start gap-0.5"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Link
                    href="/get-started"
                    className="flex items-center px-12 py-3.5 bg-[#9644e3] text-white font-light text-lg rounded-full transition hover:shadow-lg hover:bg-[#8034d1]"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/get-started"
                    className="flex items-center justify-center w-14 h-14 bg-[#9644e3] rounded-full transition hover:shadow-lg hover:bg-[#8034d1] overflow-hidden"
                  >
                    <motion.div
                      variants={arrowVariants}
                      initial="initial"
                      animate={isHovered ? "hover" : "initial"}
                    >
                      <DiagonalArrow />
                    </motion.div>
                  </Link>
                </div>

                {/* Bottom Right Image - Hidden on Mobile */}
                <div className="hidden md:block absolute top-0 mt-8 right-0 w-[230px] h-[220px] rounded-[2rem] overflow-hidden">
                  <div className="absolute bottom-4 right-4 bg-white rounded-2xl p-3 shadow-lg">
                    <p className="text-[#28282B] font-medium text-sm">
                      Unlock the true potential with our app
                    </p>
                  </div>
                  <Image
                    src="/pic.png"
                    alt="Modern real estate property"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Your Path Starts Here Link */}
                <Link 
                  href="/get-started" 
                  className="absolute w-full md:w-auto text-center md:text-left top-[210px] left-0 text-[#28282B] font-medium text-xl flex items-center justify-center md:justify-start gap-1"
                  onMouseEnter={() => setIsPathHovered(true)}
                  onMouseLeave={() => setIsPathHovered(false)}
                >
                  Growth Starts Here
                  <motion.div
                    variants={pathArrowVariants}
                    initial="initial"
                    animate={isPathHovered ? "hover" : "initial"}
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-[40%]">
            <div className="relative w-full h-[400px] md:h-[500px] bg-[#1A2238] rounded-[2rem] md:rounded-[3rem] overflow-hidden">
              {/* Listings Badge */}
              <motion.div 
                className="absolute bottom-6 left-6 md:bottom-auto md:left-auto md:top-4 md:right-4 z-10"
                onHoverStart={() => setIsCompaniesHovered(true)}
                onHoverEnd={() => setIsCompaniesHovered(false)}
              >
                <Link 
                  href="/companies" 
                  className="bg-[#9644e3] text-white px-4 py-2.5 rounded-full flex items-center gap-3 hover:shadow-lg hover:bg-[#8034d1] transition-all"
                >
                  <span className="font-medium">+100 Companies</span>
                  <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                    <motion.div
                      variants={arrowVariants}
                      initial="initial"
                      animate={isCompaniesHovered ? "hover" : "initial"}
                    >
                      <DiagonalArrow />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>

              {/* Background Image */}
              <Image
                src="/team.jpg"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}