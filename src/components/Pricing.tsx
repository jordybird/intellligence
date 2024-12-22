"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

interface Plan {
  title: string;
  price: string;
  period: string;
  billing: string;
  tag?: string;
  paymentLink: string;
  features: string[];
}

export default function Pricing() {
  const [isLoading, setIsLoading] = useState(false);

  const plans: Plan[] = [
    {
      title: "Starter Package",
      price: "999",
      period: "m",
      billing: "Billed Monthly",
      paymentLink: "https://buy.stripe.com/7sIcPy7btaemgSIeUX",
      features: [
        "5,000 cold outreach messages",
        "AI-Powered Content Creation",
        "Google Page Optimization",
        " 3 Social Media Posts/Week",
      ],
    },
    {
      title: "Growth Package",
      price: "1,499",
      period: "m",
      billing: "Billed Monthly",
      tag: "Most Popular",
      paymentLink: "https://buy.stripe.com/eVa5n653l72a6e43cd",
      features: [
        "10,000 cold outreach messages",
        "Multi-platform engagement",
        "Weekly performance reports",
        "AI-Powered Content Creation",
        "5 Social Media Posts/Week",
      ],
    },
    {
      title: "Elite Package",
      price: "2,499",
      period: "m",
      billing: "Billed Monthly",
      paymentLink: "https://buy.stripe.com/5kAeXG2Vd3PY9qgcMO",
      features: [
        "15,000 cold outreach messages",
        "Multi-platform outreach",
        "Real-time analytics",
        "AI-Driven Engagement",
        "Daily Social Media Posts",
      ],
    },
  ];

  const handleCheckout = (paymentLink: string) => {
    setIsLoading(true);
    window.location.href = paymentLink;
  };

  return (
    <section className="w-full py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-white text-center mb-4">
            Pricing
          </h1>
          <p className="text-gray-400 text-lg">
            Choose the perfect plan for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl backdrop-blur-sm ${
                plan.tag 
                  ? 'bg-[#1A1A1A] border-[3px] border-[#9644e3] -translate-y-4 shadow-2xl shadow-purple-500/20' 
                  : 'bg-[#1A1A1A] border border-[#2A2A2A]'
              } p-8 relative transform transition-all duration-300 h-full flex flex-col`}
            >
              {plan.tag && (
                <div className="absolute -top-3 left-6 inline-block px-4 py-1 bg-[#9644e3] text-white text-sm font-medium rounded-full">
                  {plan.tag}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {plan.title}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-xl text-gray-400 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-400 mt-2">{plan.billing}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full ${
                      plan.tag ? 'bg-purple-500/20' : 'bg-gray-800'
                    } flex items-center justify-center mt-0.5`}>
                      <Check size={12} className={`${
                        plan.tag ? 'text-purple-400' : 'text-gray-400'
                      }`} />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleCheckout(plan.paymentLink)}
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2
                  ${plan.tag 
                    ? 'bg-gradient-to-r from-[#9644e3] to-pink-500 text-white hover:opacity-90' 
                    : 'bg-[#9644e3] text-white hover:opacity-90'
                  }`}
              >
                {isLoading ? "Processing..." : "Get Started"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}