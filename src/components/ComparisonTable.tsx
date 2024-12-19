import React from 'react';
import { Check, Minus } from 'lucide-react';

interface Feature {
  category: string;
  essential: string;
  business: string;
  enterprise: string;
}

type PlanType = 'essential' | 'business' | 'enterprise';

interface PackageFeatures {
  [key: string]: Feature;
}

const PACKAGE_FEATURES: PackageFeatures = {
  "Strategy": {
    category: "Core Services",
    essential: "Basic digital strategy",
    business: "Advanced strategy",
    enterprise: "Custom strategy"
  },
  "Website": {
    category: "Core Services",
    essential: "Basic optimization",
    business: "Advanced optimization",
    enterprise: "Premium optimization"
  },
  "Content": {
    category: "Marketing",
    essential: "2 posts per month",
    business: "4 posts per month",
    enterprise: "8 posts per month"
  },
  "Social Media": {
    category: "Marketing",
    essential: "3 posts per week",
    business: "5 posts per week",
    enterprise: "Daily posts"
  },
  "Analytics": {
    category: "Support",
    essential: "Monthly reports",
    business: "Weekly reports",
    enterprise: "Real-time dashboard"
  },
  "Support": {
    category: "Support",
    essential: "Email support",
    business: "Priority support",
    enterprise: "24/7 support"
  }
};

const ComparisonTable = () => {
  const categories = [...new Set(Object.values(PACKAGE_FEATURES).map(feature => feature.category))];
  
  const getPriceByPlan = (plan: string): string => {
    switch(plan) {
      case 'Essential':
        return '999';
      case 'Business':
        return '1,499';
      case 'Enterprise':
        return '2,499';
      default:
        return '';
    }
  };

  return (
    <section className="py-16 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Compare Plans
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the plan that best fits your needs
          </p>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-8">
          {(['essential', 'business', 'enterprise'] as const).map((plan) => (
            <div key={plan} className="bg-[#0F0F0F] rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">
                {plan.charAt(0).toUpperCase() + plan.slice(1)}
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#9644e3]">
                  ${getPriceByPlan(plan.charAt(0).toUpperCase() + plan.slice(1))}
                </span>
                <span className="text-gray-400">/mo</span>
              </div>
              <div className="space-y-4">
                {Object.entries(PACKAGE_FEATURES).map(([featureName, feature]) => (
                  <div key={featureName} className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-400">{featureName}</span>
                    <span className="text-white">{feature[plan]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="p-4 text-left min-w-[200px]"></th>
                {['Essential', 'Business', 'Enterprise'].map((plan) => (
                  <th key={plan} className="p-4 text-left min-w-[250px]">
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold text-white">{plan}</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold text-[#9644e3]">
                          ${getPriceByPlan(plan)}
                        </span>
                        <span className="text-gray-400">/mo</span>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <React.Fragment key={category}>
                  <tr className="bg-[#0F0F0F]">
                    <td colSpan={4} className="p-4 font-semibold text-[#9644e3]">
                      {category}
                    </td>
                  </tr>
                  {Object.entries(PACKAGE_FEATURES)
                    .filter(([_, feature]) => feature.category === category)
                    .map(([featureName, feature]) => (
                      <tr key={featureName} className="border-b border-gray-800">
                        <td className="p-4 font-medium text-white">{featureName}</td>
                        <td className="p-4 text-gray-400">{feature.essential}</td>
                        <td className="p-4 text-gray-400">{feature.business}</td>
                        <td className="p-4 text-gray-400">{feature.enterprise}</td>
                      </tr>
                    ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;