// src/components/Pricing.tsx
"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface Plan {
  title: string;
  price: string;
  period: string;
  billing: string;
  background: string;
  buttonStyle: string;
  productId: string;
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
      background: "bg-white",
      buttonStyle: "bg-[#E4D5F7] text-black",
      productId: "prod_RI6V6MTbIWRCoD", // Starter Package Product ID
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
      background: "bg-[#E4D5F7]",
      buttonStyle: "bg-white text-black",
      productId: "prod_RI6W7WxJ2mDI0b", // Growth Package Product ID
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
      background: "bg-white",
      buttonStyle: "bg-[#E4D5F7] text-black",
      productId: "prod_RI6WYHQqXrHnhZ", // Elite Package Product ID
      features: [
        "15,000 cold outreach messages",
        "Multi-platform outreach",
        "Real-time analytics",
        "AI-Driven Engagement",
        "Premium Content Creation",
      ],
    },
  ];

  const handleCheckout = async (productId: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }), // Send productId instead of priceId
      });

      const data = await response.json();

      if (response.ok && data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else if (data.error) {
        alert(data.error);
      } else {
        throw new Error("Unexpected response from the server.");
      }
    } catch (error: any) {
      console.error("Error:", error);
      alert(error.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="pricing" className="w-full py-24 px-4 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-normal text-[#28282B] text-center mb-16">
          Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.productId}
              className={`${plan.background} rounded-3xl p-8 flex flex-col relative 
                border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300
                ${index === 1 ? "md:scale-105" : ""}`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#CBB3FF] text-black px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-2">
                <h3 className="text-2xl font-medium text-[#28282B] mb-6">
                  {plan.title}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-medium text-[#28282B]">
                    ${plan.price}
                  </span>
                  <span className="text-lg text-[#28282B]">/{plan.period}</span>
                </div>
                <p className="text-sm text-[#28282B] mt-1">{plan.billing}</p>
              </div>

              <div className="w-full h-px bg-gray-200 my-6"></div>

              <div className="flex flex-col gap-4 mb-12 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E4D5F7] flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="#28282B"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-[#28282B] font-light">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCheckout(plan.productId)}
                  className={`flex items-center justify-center gap-2 px-6 py-3.5 ${plan.buttonStyle} rounded-full flex-grow transition-all hover:opacity-90 font-medium`}
                  disabled={isLoading}
                >
                  <span>{isLoading ? "Processing..." : "Get Started"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
