import React from 'react';
import { Check, Minus } from 'lucide-react';

const PACKAGE_FEATURES = {
  "Digital Strategy": {
    category: "Strategy & Planning",
    essential: "Basic digital strategy with quarterly reviews",
    business: "Advanced strategy with monthly optimization",
    enterprise: "Custom strategy with weekly optimization and dedicated strategist"
  },
  "Website Optimization": {
    category: "Website & Technical",
    essential: "Basic SEO and monthly performance checks",
    business: "Advanced SEO and bi-weekly optimization",
    enterprise: "Comprehensive SEO with continuous optimization"
  },
  "Content Creation": {
    category: "Content & Social",
    essential: "2 blog posts per month, basic social media content",
    business: "4 blog posts per month, advanced social content strategy",
    enterprise: "8 blog posts per month, premium content across all channels"
  },
  "Social Media Management": {
    category: "Content & Social",
    essential: "3 platforms, 3 posts per week",
    business: "5 platforms, 5 posts per week",
    enterprise: "All platforms, daily posts with stories and reels"
  },
  "Email Marketing": {
    category: "Marketing & Automation",
    essential: "Monthly newsletter and basic automation",
    business: "Bi-weekly newsletters and advanced automation",
    enterprise: "Weekly newsletters and custom automation workflows"
  },
  "Analytics & Reporting": {
    category: "Analytics & Insights",
    essential: "Monthly reports with basic metrics",
    business: "Weekly reports with advanced analytics",
    enterprise: "Real-time dashboard with comprehensive analytics"
  },
  "Support Level": {
    category: "Support & Communication",
    essential: "Email support with 24hr response",
    business: "Priority support with 12hr response",
    enterprise: "24/7 dedicated support team"
  }
};

const ComparisonTable = () => {
  const categories = [...new Set(Object.values(PACKAGE_FEATURES).map(feature => feature.category))];
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28282B] mb-4">
            Compare Our Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect package that aligns with your business goals
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="p-4 text-left min-w-[200px]"></th>
                <th className="p-4 text-left min-w-[250px]">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-[#28282B]">Essential Starter</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-[#510f74]">$999</span>
                      <span className="text-gray-600">/mo</span>
                    </div>
                  </div>
                </th>
                <th className="p-4 text-left min-w-[250px]">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-[#28282B]">Business Growth</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-[#510f74]">$1,499</span>
                      <span className="text-gray-600">/mo</span>
                    </div>
                  </div>
                </th>
                <th className="p-4 text-left min-w-[250px]">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-[#28282B]">Enterprise Scale</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-[#510f74]">$2,499</span>
                      <span className="text-gray-600">/mo</span>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <React.Fragment key={category}>
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="p-4 font-semibold text-[#510f74]">
                      {category}
                    </td>
                  </tr>
                  {Object.entries(PACKAGE_FEATURES)
                    .filter(([_, feature]) => feature.category === category)
                    .map(([featureName, feature]) => (
                      <tr key={featureName} className="border-b border-gray-200">
                        <td className="p-4 font-medium text-[#28282B]">{featureName}</td>
                        <td className="p-4 text-[#28282B]">
                          {feature.essential || <Minus className="text-[#28282B]" size={16} />}
                        </td>
                        <td className="p-4 text-[#28282B]">
                          {feature.business || <Minus className="text-[#28282B]" size={16} />}
                        </td>
                        <td className="p-4 text-[#28282B]">
                          {feature.enterprise || <Minus className="text-[#28282B]" size={16} />}
                        </td>
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