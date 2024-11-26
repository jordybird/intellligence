"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
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
    },
    {
      text: "The maintenance request tracking system has greatly improved our response times and tenant satisfaction. A game-changer for our operations.",
      author: "David Wilson",
      role: "Facilities Director",
      type: "STORIES"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="hidden md:block w-full px-4 md:px-16 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl font-normal text-[#28282B] text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="flex justify-end gap-2">
            <button 
              onClick={prevSlide}
              className="w-16 h-16 rounded-full bg-[#E4D5F7] flex items-center justify-center hover:bg-[#CBB3FF] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8 text-black" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-16 h-16 rounded-full bg-[#E4D5F7] flex items-center justify-center hover:bg-[#CBB3FF] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8 text-black" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-3xl p-8 relative"
            >
              <span className="text-sm text-gray-500 mb-4 block">
                {testimonial.type}
              </span>
              <p className="text-lg text-[#28282B] mb-12">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img 
                    src={`/api/placeholder/${48}/${48}`} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-[#28282B]">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
                <span className="text-6xl text-[#28282B] absolute bottom-8 right-8">
                  "
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}