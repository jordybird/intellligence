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
      quote: "TIntelliReach helped the Adam Clack Academy grow our social media quickly and connect with the right audience. Their AI-driven outreach boosted engagement and follower growth, making a huge impact. Highly recommend!"
    }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#28282B]">
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
              <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -top-6 left-8">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden   relative">
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
                    <h4 className="text-xl font-semibold text-[#28282B]">
                      {testimonial.name}
                    </h4>
                   
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
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