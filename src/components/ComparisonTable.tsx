import React, { useState } from 'react';
import { Check, Minus, ChevronDown, ChevronUp } from 'lucide-react';

interface FeatureDetails {
  category: string;
  essential: string;
  business: string;
  enterprise: string;
}

interface PackageFeatures {
  [key: string]: FeatureDetails;
}

const PACKAGE_FEATURES: PackageFeatures = {
  "Cold Outreach Messages": {
    category: "Core Services",
    essential: "5,000 Cold Outreach Messages/Month",
    business: "10,000 Cold Outreach Messages/Month",
    enterprise: "15,000 Cold Outreach Messages/Month"
  },
  "Lead Generation": {
    category: "Core Services",
    essential: "Advanced Lead Generation",
    business: "Advanced Lead Generation",
    enterprise: "Exact Match Leads"
  },
  "AI Video Content Creation": {
    category: "Marketing",
    essential: "2 Videos/Month",
    business: "4 Videos/Month",
    enterprise: "8 Videos/Month"
  },
  "AI Social Media Posting": {
    category: "Marketing",
    essential: "3 Posts/Week",
    business: "5 Posts/Week",
    enterprise: "Daily Posts"
  },
  "Google Page Optimization": {
    category: "Marketing",
    essential: "Google Page Optimization",
    business: "Google Page Optimization",
    enterprise: "Google Page Optimization"
  },
  "AI Analytics": {
    category: "Support",
    essential: "Monthly Reports",
    business: "Weekly Reports",
    enterprise: "Live Reports"
  },
  "Video Support": {
    category: "Support",
    essential: "24/7 Live Video Support",
    business: "24/7 Live Video Support",
    enterprise: "24/7 Live Video Support"
  },
  "Ads Management": {
    category: "Advertising",
    essential: "Social and Google Ads Management: Limited to $2,000 Ad Spend",
    business: "Social and Google Ads Management: Limited to $5,000 Ad Spend",
    enterprise: "Social and Google Ads Management: Custom Ad Budgets"
  },
  "Advanced Features": {
    category: "Advertising",
    essential: "",
    business: "",
    enterprise: "Includes Advanced Performance Tracking"
  },
  "Performance Guarantee": {
    category: "Performance Guarantees",
    essential: "Money-Back Guarantee if KPIs Are Not Met",
    business: "Money-Back Guarantee if KPIs Are Not Met",
    enterprise: "Money-Back Guarantee if KPIs Are Not Met"
  }
};

interface MobilePackageProps {
  title: string;
  price: string;
  features: PackageFeatures;
  tier: 'essential' | 'business' | 'enterprise';
}

const MobilePackage: React.FC<MobilePackageProps> = ({ title, price, features, tier }) => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = [...new Set(Object.values(features).map(feature => feature.category))];

  return (
    <div className="bg-[#0F0F0F] rounded-lg overflow-hidden mb-2">
      {/* Package Header */}
      <button 
        className="w-full px-3 py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className="mt-1">
            <span className="text-2xl font-bold text-[#9644e3]">${price}</span>
            <span className="text-gray-400">/mo</span>
          </div>
        </div>
        {isOpen ? (
          <ChevronUp className="text-[#9644e3]" />
        ) : (
          <ChevronDown className="text-[#9644e3]" />
        )}
      </button>

      {/* Features Dropdown */}
      {isOpen && (
        <div className="px-3 pb-4">
          {categories.map(category => (
            <div key={category} className="mb-3">
              <h4 className="text-[#9644e3] font-semibold mb-2">{category}</h4>
              {Object.entries(features)
                .filter(([_, feature]) => feature.category === category)
                .map(([featureName, feature]) => (
                  <div key={featureName} className="py-2 border-b border-gray-800 last:border-0">
                    <div className="font-medium text-white mb-1">{featureName}</div>
                    <div className="text-gray-400 text-sm">
                      {feature[tier] || <Minus className="text-gray-400" size={16} />}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ComparisonTable: React.FC = () => {
  const categories = [...new Set(Object.values(PACKAGE_FEATURES).map(feature => feature.category))];
  
  return (
    <section className="py-8 md:py-16 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Compare Our Packages
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find the perfect package that aligns with your business goals
          </p>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-2">
          <MobilePackage
            title="Essential Starter"
            price="999"
            features={PACKAGE_FEATURES}
            tier="essential"
          />
          <MobilePackage
            title="Business Growth"
            price="1,499"
            features={PACKAGE_FEATURES}
            tier="business"
          />
          <MobilePackage
            title="Enterprise Scale"
            price="2,499"
            features={PACKAGE_FEATURES}
            tier="enterprise"
          />
        </div>

        {/* Desktop View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="p-4 text-left min-w-[200px]"></th>
                <th className="p-4 text-left min-w-[250px]">
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-white">Essential Starter</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-[#9644e3]">$999</span>
                      <span className="text-gray-400">/mo</span>
                    </div>
                  </div>
                </th>
                <th className="p-4 text-left min-w-[250px]">
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-white">Business Growth</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-[#9644e3]">$1,499</span>
                      <span className="text-gray-400">/mo</span>
                    </div>
                  </div>
                </th>
                <th className="p-4 text-left min-w-[250px]">
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-white">Enterprise Scale</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-[#9644e3]">$2,499</span>
                      <span className="text-gray-400">/mo</span>
                    </div>
                  </div>
                </th>
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
                        <td className="p-4 text-gray-400">
                          {feature.essential || <Minus className="text-gray-400" size={16} />}
                        </td>
                        <td className="p-4 text-gray-400">
                          {feature.business || <Minus className="text-gray-400" size={16} />}
                        </td>
                        <td className="p-4 text-gray-400">
                          {feature.enterprise || <Minus className="text-gray-400" size={16} />}
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