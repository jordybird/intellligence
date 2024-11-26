"use client";

import Link from 'next/link';

export default function Footer() {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-gray-200 py-12 md:py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto min-h-[100px] flex flex-col md:flex-row items-center justify-between">
        {/* Left section */}
        <div className="flex items-center gap-1 font-semibold text-lg text-[#28282B]">
          
         
          <span> Intellireach LLC</span>
        </div>

        {/* Right section - Navigation Links */}
        <nav className="mt-4 md:mt-0 flex gap-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-lg text-[#28282B] hover:underline cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-lg text-[#28282B] hover:underline cursor-pointer"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-lg text-[#28282B] hover:underline cursor-pointer"
          >
            Why Us
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-lg text-[#28282B] hover:underline cursor-pointer"
          >
            Pricing
          </button>
          
        </nav>
      </div>
    </footer>
  );
}