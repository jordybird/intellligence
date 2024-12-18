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
      price: "799",
      period: "m",
      billing: "Billed Monthly",
      paymentLink: "https://buy.stripe.com/7sIcPy7btaemgSIeUX",
      features: [
        "3,500 cold outreach messages",
        "AI-Powered follow-up sequences",
        "Basic Content Creation",
        "Social Media Outreach",
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
        "7,000 cold outreach messages",
        "Multi-platform engagement",
        "Weekly performance reports",
        "Enhanced Content Creation",
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
        "Premium Content Creation",
      ],
    },
  ];

  const handleCheckout = (paymentLink: string) => {
    setIsLoading(true);
    window.location.href = paymentLink;
  };

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-[#28282B] text-center mb-4 ">Pricing</h1>
          <p className="text-gray-600 text-lg">
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
                  ? 'bg-gradient-to-b from-purple-50 to-white border-2 border-purple-100' 
                  : 'bg-white border border-gray-100'
              } p-8 relative transform transition-all duration-300 hover:scale-[1.02]`}
            >
              {plan.tag && (
                <div className="absolute -top-3 left-6 inline-block px-4 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                  {plan.tag}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#28282B] mb-4">
                  {plan.title}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-[#28282B]">${plan.price}</span>
                  <span className="text-xl text-gray-500 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-500 mt-2">{plan.billing}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full ${plan.tag ? 'bg-purple-100' : 'bg-gray-100'} flex items-center justify-center mt-0.5`}>
                      <Check size={12} className={`${plan.tag ? 'text-purple-600' : 'text-gray-600'}`} />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleCheckout(plan.paymentLink)}
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2
                  ${plan.tag 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
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