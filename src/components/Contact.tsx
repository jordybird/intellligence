"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptPolicy: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: '',
        acceptPolicy: false
      });
    }, 1000);
  };

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-semibold text-[#28282B] text-left mb-4 ">Get In Touch</h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/contact.jpg"
              alt="Background"
              fill
              className="object-cover brightness-[0.4]" // Increased from 0.2
              priority
            />
          </div>

          {/* Form Content */}
          <div className="relative z-10 p-6 md:p-8">
            <div className="max-w-xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-white uppercase text-sm tracking-wider">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl bg-[#1A1A1A]/60 text-white border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors backdrop-blur-sm"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-white uppercase text-sm tracking-wider">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl bg-[#1A1A1A]/60 text-white border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors backdrop-blur-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-white uppercase text-sm tracking-wider">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl bg-[#1A1A1A]/60 text-white border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors backdrop-blur-sm min-h-[100px]"
                    placeholder="Start typing here ..."
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={formData.acceptPolicy}
                    onChange={(e) => setFormData({ ...formData, acceptPolicy: e.target.checked })}
                    className="w-4 h-4 rounded-lg border-gray-700 text-purple-500 focus:ring-purple-500"
                    required
                  />
                  <label htmlFor="privacy" className="text-white text-sm">
                    I agree to the{' '}
                    <a href="#" className="text-purple-400 hover:text-purple-300 underline">
                      privacy policy
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-[#9644e3] text-white rounded-xl hover:bg-[#8034d1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}