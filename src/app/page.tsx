import Hero from "@/components/Hero";
import SocialMediaServices from "@/components/social-media";
import Info from "@/components/info";

import TestimonialSection from "@/components/testimonial";
import MobileTestimonialSection from "@/components/mobile-testimonial";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="hero">
        <Hero />
      </div>
      <div id="services">
        <SocialMediaServices />
      </div>
      <Info />
      
      <div id="testimonials">
        <TestimonialSection />
        <MobileTestimonialSection />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <Footer />
    </main>
  );
}