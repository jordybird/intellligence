"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Mr Sparky Atlanta",
      role: "Property Manager",
      image: "/MrSparky.png",
      quote: "Intellireach has helped us with social media outreach tremendously, The automated replies to customers helps us spend time on more important matters, allowing us to increase in both engagement and qualified leads since partnering with them."
    },
    {
      name: "The Clack Academy",
      role: "Real Estate Investor",
      image: "/adam.png",
      quote: "Intellireach helped the Adam Clack Academy grow our social media quickly and connect with the right audience. Their AI-driven outreach boosted engagement and follower growth, making a huge impact. Highly recommend!"
    }
  ];

  const titleStyle = {
    background: "linear-gradient(to right, #9333EA, #EC4899, #9333EA)",
    backgroundSize: "200% 100%",
    animation: "wave 8s linear infinite",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textFillColor: "transparent",
  };

  return (
    <section className="w-full py-24 bg-[#0A0A0A]">
      <style jsx global>{`
        @keyframes wave {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-[#1A1A1A] rounded-2xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-[#2A2A2A] hover:border-[#9644e3]">
                <div className="absolute -top-6 left-8">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden relative ring-4 ring-[#9644e3] ring-opacity-50">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="(max-width: 768px) 128px, 128px"
                      quality={100}
                      priority
                      className="object-cover object-center hover:scale-105 transition-transform duration-300"
                      style={{ 
                        imageRendering: 'crisp-edges',
                      }}
                    />
                  </div>
                </div>
                
                <div className="mt-20 ml-4">
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      {testimonial.name}
                    </h4>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;