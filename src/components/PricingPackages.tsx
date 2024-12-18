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
      "Basic digital strategy",
      "Website optimization",
      "Monthly reporting",
      "Email support",
      "Basic analytics"
    ],
    stripeLink: "https://buy.stripe.com/7sIcPy7btaemgSIeUX" // Replace with actual Stripe link
  },
  {
    name: "Business Growth",
    price: 1499,
    description: "Ideal for growing businesses ready to scale",
    features: [
      "Advanced digital strategy",
      "Priority optimization",
      "Weekly reporting",
      "Priority support",
      "Advanced analytics",
      "Competitor analysis"
    ],
    stripeLink: "https://buy.stripe.com/eVa5n653l72a6e43cd" // Replace with actual Stripe link
  },
  {
    name: "Enterprise Scale",
    price: 2499,
    description: "Comprehensive solution for large-scale operations",
    features: [
      "Custom digital strategy",
      "Dedicated optimization team",
      "Real-time reporting",
      "24/7 support",
      "Enterprise analytics",
      "Market analysis",
      "Custom integrations"
    ],
    stripeLink: "https://buy.stripe.com/5kAeXG2Vd3PY9qgcMO" // Replace with actual Stripe link
  }
];

const PackageCard = ({ tier }: { tier: PricingTier }) => (
  <div className="relative flex flex-col p-8 bg-white rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
    <h3 className="text-2xl font-bold text-[#28282B] mb-2">{tier.name}</h3>
    <p className="text-gray-600 mb-4">{tier.description}</p>
    
    <div className="mb-6">
      <span className="text-4xl font-bold text-[#510f74]">${tier.price}</span>
      <span className="text-gray-600">/month</span>
    </div>

    <ul className="space-y-4 mb-8 flex-grow">
      {tier.features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <Check className="w-5 h-5 text-[#9644e3] shrink-0 mt-1" />
          <span className="text-gray-600">{feature}</span>
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
    <section className="py-16 bg-white to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28282B] mb-4">
            Choose Your Growth Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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