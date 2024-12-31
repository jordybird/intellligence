"use client";

import React from 'react';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  stripeLink: string;
}

const PRICING_TIERS: PricingTier[] = [
  {
    name: "Essential Starter",
    price: 999,
    description: "Perfect for businesses just starting their digital journey",
    features: [
      "5,000 cold outreach messages",
      "AI-Powered Content Creation",
      "Google Page Optimization",
      "3 Social Media Posts/Week"
    ],
    stripeLink: "https://buy.stripe.com/7sIcPy7btaemgSIeUX"
  },
  {
    name: "Business Growth",
    price: 1499,
    description: "Ideal for growing businesses ready to scale",
    features: [
      "10,000 cold outreach messages",
      "Multi-platform engagement",
      "Weekly performance reports",
      "AI-Powered Content Creation",
      "5 Social Media Posts/Week"
    ],
    stripeLink: "https://buy.stripe.com/eVa5n653l72a6e43cd"
  },
  {
    name: "Enterprise Scale",
    price: 2499,
    description: "Comprehensive solution for large-scale operations",
    features: [
      "15,000 cold outreach messages",
      "Multi-platform outreach",
      "Real-time analytics",
      "AI-Driven Engagement",
      "Daily Social Media Posts"
    ],
    stripeLink: "https://buy.stripe.com/5kAeXG2Vd3PY9qgcMO"
  }
];

const PackageCard = ({ tier }: { tier: PricingTier }) => (
  <div className="relative flex flex-col p-8 bg-[#0A0A0A] rounded-2xl border border-gray-800 transition-all duration-300 hover:border-[#8034d1]">
    <h3 className="text-2xl font-semibold text-white mb-2">{tier.name}</h3>
    <p className="text-gray-400 mb-4">{tier.description}</p>
    
    <div className="mb-6">
      <span className="text-4xl font-bold text-[#9644e3]">${tier.price}</span>
      <span className="text-gray-400">/month</span>
    </div>

    <ul className="space-y-4 mb-8 flex-grow">
      {tier.features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <Check className="w-5 h-5 text-[#9644e3] shrink-0 mt-1" />
          <span className="text-gray-400">{feature}</span>
        </li>
      ))}
    </ul>

    <a 
      href={tier.stripeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full px-6 py-3 text-center text-white bg-[#9644e3] rounded-xl hover:bg-[#8034d1] transition-colors font-semibold"
    >
      Get Started
    </a>
  </div>
);

const PricingPackages = () => {
  return (
    <section className="py-16 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Growth Plan
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect package for your business needs and accelerate your growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier, index) => (
            <PackageCard key={index} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;