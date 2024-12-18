"use client";

import { useEffect } from 'react';
import Hero from "@/components/Hero";
import TabbedSection from "@/components/TabbedSection";
import TestimonialSection from "@/components/testimonial";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Check if there's a stored section to scroll to
    const scrollTo = localStorage.getItem('scrollTo');
    if (scrollTo) {
      // Small delay to ensure the page has loaded
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Clear the stored section
        localStorage.removeItem('scrollTo');
      }, 100);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <div id="hero">
        <Hero />
      </div>
      <div id="services">
        <TabbedSection />
      </div>
      <div id="testimonials">
        <TestimonialSection />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}