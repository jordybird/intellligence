"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Plus } from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string[];
  orbitRadius: number;
  planetSize: number;
  icon: string;
}

interface PlanetProps {
  service: ServiceProps;
  isActive: boolean;
  index: number;
  rotation: number;
}

const services: ServiceProps[] = [
  {
    title: "AI-Powered Outreach",
    description: [
      "Automating personalized messages to generate high-quality leads",
      "Predictive lead scoring",
     "Customer acquistion powered by AI tools",

      "Machine learning insights"
    ],
    orbitRadius: 120,
    planetSize: 70,
    icon: "/artificial-intelligence.png"
  },
  {
    title: "Social Media Content Creation ",
    description: [
      "Crafting engaging content tailored to grow your online presence",
      "Community engagement and growth",
      "Analytics and performance tracking",
      "Multi-platform campaign management",
      "Brand voice development"
    ],
    orbitRadius: 180,
    planetSize: 70,
    icon: "/instagram.png"
  },
  {
    title: "SEO Optimization",
    description: [
      "Keyword research and optimization",
      "Technical SEO improvements",
      "Local SEO strategies",
      "Content optimization",
      "Search ranking monitoring"
    ],
    orbitRadius: 240,
    planetSize: 70,
    icon: "/search-engine-optimization.png"
  }
];

const Planet: React.FC<PlanetProps> = ({ service, isActive, index, rotation }) => {
  const angle = (index * 2 * Math.PI) / services.length + rotation;
  const x = Math.cos(angle) * service.orbitRadius;
  const y = Math.sin(angle) * service.orbitRadius;

  return (
    <div
      className="absolute transition-transform duration-300"
      style={{
        transform: `translate(${x + service.orbitRadius}px, ${y + service.orbitRadius}px)`,
        width: service.planetSize,
        height: service.planetSize,
      }}
    >
      <div
        className={`rounded-full bg-white shadow-lg flex items-center justify-center
          ${isActive ? 'ring-4 ring-[#CBB3FF] ring-opacity-50' : ''}`}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Image 
          src={service.icon}
          alt={service.title}
          width={service.planetSize * 0.6}
          height={service.planetSize * 0.6}
          className="object-contain p-2"
        />
      </div>
    </div>
  );
};

export default function Info() {
  const [activeService, setActiveService] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top / (rect.height - window.innerHeight);
        
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          setRotation(scrollProgress * Math.PI * 2);
          setActiveService(Math.min(
            Math.floor(scrollProgress * 3),
            services.length - 1
          ));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Version */}
      <section 
        ref={sectionRef}
        className="hidden md:block w-full bg-white min-h-[300vh]"
      >
        <div className="sticky top-0 w-full px-4 md:px-16 py-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-[#28282B] text-6xl md:text-7xl font-bold mb-12">
                What we do
              </h1>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#28282B]">
                  {services[activeService].title}
                </h2>
                <div className="space-y-4">
                  {services[activeService].description.map((desc, i) => (
                    <p key={i} className="text-gray-600 text-lg">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Solar System */}
            <div className="relative h-[500px] flex items-center justify-center">
              <div className="relative w-[500px] h-[500px]">
                {/* Orbits */}
                {services.map((service, i) => (
                  <div
                    key={`orbit-${i}`}
                    className="absolute border border-gray-200 rounded-full"
                    style={{
                      width: service.orbitRadius * 2,
                      height: service.orbitRadius * 2,
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                ))}

                {/* Central Sun */}
                <div 
                  className="absolute left-1/2 top-1/2 w-16 h-16 bg-[#CBB3FF] rounded-full transform -translate-x-1/2 -translate-y-1/2"
                />

                {/* Planets */}
                {services.map((service, i) => (
                  <Planet
                    key={i}
                    service={service}
                    isActive={i === activeService}
                    index={i}
                    rotation={rotation}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="md:hidden bg-white px-4 py-16">
        <h1 className="text-[#28282B] text-4xl font-bold mb-12">
          What we do
        </h1>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full py-4 flex items-center justify-between text-[#28282B] text-xl font-semibold"
                onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
              >
                <span>{service.title}</span>
                <motion.div
                  initial={false}
                  animate={{ rotate: activeAccordion === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus className="w-6 h-6" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 space-y-2">
                      {service.description.map((desc, i) => (
                        <p key={i} className="text-[#28282B] text-lg">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}