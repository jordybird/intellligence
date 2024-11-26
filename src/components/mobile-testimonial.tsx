"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileTestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);

  const testimonials = [
    {
      text: "Bayt has made managing my properties so much easier. The platform is user friendly and has everything I need to keep track of my tenants and maintenance requests.",
      author: "John D.",
      role: "Customer",
      type: "STORIES"
    },
    {
      text: "The platform has streamlined our entire property management workflow. The automated features have saved us countless hours on routine tasks.",
      author: "Sarah Chen",
      role: "Property Manager",
      type: "STORIES"
    },
    {
      text: "The intuitive interface and comprehensive reporting tools have made it incredibly easy to keep track of all our properties and financial data in one place.",
      author: "Marcus Thompson",
      role: "Real Estate Investor",
      type: "STORIES"
    },
    {
      text: "Outstanding customer support and regular updates. The team is always responsive and the platform keeps getting better with each release.",
      author: "Rachel Martinez",
      role: "Property Owner",
      type: "STORIES"
    }
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default button behavior
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      }
      return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
    });
  };

  return (
    <div className="block md:hidden w-full px-4 py-16 bg-white overflow-hidden">
      <div>
        <div className="mb-6">
          <h2 className="text-4xl font-medium text-[#28282B] mb-4">
            What Our Clients Say
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={paginate(-1)}
              type="button" // Explicitly set button type
              className="w-12 h-12 rounded-full bg-[#E4D5F7] flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button 
              onClick={paginate(1)}
              type="button" // Explicitly set button type
              className="w-12 h-12 rounded-full bg-[#E4D5F7] flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div 
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <div className="bg-gray-50 rounded-3xl p-6 relative">
              <span className="text-sm text-gray-500 mb-4 block">
                {testimonials[currentIndex].type}
              </span>
              <p className="text-lg text-[#28282B] mb-8 relative">
                {testimonials[currentIndex].text}
                <span className="text-6xl text-[#28282B] absolute -top-8 -right-2">
                  "
                </span>
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img 
                    src={`/api/placeholder/${48}/${48}`}
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-[#28282B]">
                    {testimonials[currentIndex].author}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}