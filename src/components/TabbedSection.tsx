"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Brain, Share2, LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface TabContent {
  title: string;
  features: string[];
  buttonText: string;
  graph: React.ReactNode;
}

interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
  content: TabContent;
}

const tabs: Tab[] = [
  {
    id: 'ai-outreach',
    label: 'AI Outreach',
    icon: Brain,
    content: {
      title: 'Enhance your outreach with AI-powered solutions',
      features: [
        'Automated personalized messaging at scale',
        'Smart audience segmentation and targeting',
        'AI-driven response optimization',
        'Real-time engagement analytics'
      ],
      buttonText: 'Try AI Outreach Tools',
      graph: (
        <div className="h-full w-full bg-gray-50 rounded-lg overflow-hidden">
          <Image 
            src="/lead.png"
            alt="AI Outreach Analytics"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      )
    }
  },
  {
    id: 'lead-generation',
    label: 'Lead Generation',
    icon: Users,
    content: {
      title: 'Generate quality leads that convert',
      features: [
        'Advanced lead scoring and qualification',
        'Multi-channel lead capture',
        'Automated lead nurturing workflows',
        'ROI tracking and reporting'
      ],
      buttonText: 'Start Generating Leads',
      graph: (
        <div className="h-full w-full bg-gray-50 rounded-lg overflow-hidden">
          <Image 
            src="/lead.png"
            alt="Lead Generation Dashboard"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      )
    }
  },
  {
    id: 'social-media',
    label: 'Social Media',
    icon: Share2,
    content: {
      title: 'Maximize your social media impact',
      features: [
        'Cross-platform content management',
        'Engagement analytics and insights',
        'Automated posting schedules',
        'Social listening and monitoring'
      ],
      buttonText: 'Explore Social Tools',
      graph: (
        <div className="h-full w-full bg-gray-50 rounded-lg overflow-hidden">
          <Image 
            src="/chartsm.png"
            alt="Social Media Analytics Dashboard"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      )
    }
  }
];

const TabContent: React.FC<{ content: TabContent }> = ({ content }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="w-full"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Content Section */}
      <div className="flex flex-col space-y-6">
        <h2 className="text-2xl font-semibold text-center md:text-left text-[#28282B]">
          {content.title}
        </h2>
        
        <ul className="space-y-4">
          {content.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#9644e3]" />
              <span className="text-[#28282B] text-base">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Desktop button */}
        <div className="hidden md:flex justify-start">
          <button className="bg-[#9644e3] text-white px-6 py-3 rounded-lg hover:bg-[#8034d1] transition-colors text-base font-semibold">
            {content.buttonText}
          </button>
        </div>
      </div>

      {/* Graph Section with Mobile Button */}
      <div className="flex flex-col space-y-6">
        <div className="h-64 md:h-80">
          {content.graph}
        </div>
        {/* Mobile button */}
        <div className="flex md:hidden justify-center">
          <button className="bg-[#9644e3] text-white px-6 py-3 rounded-lg hover:bg-[#8034d1] transition-colors text-base font-semibold">
            {content.buttonText}
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const TabbedSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToTab = (tabId: string) => {
    const tabElement = document.getElementById(`tab-${tabId}`);
    if (tabElement && scrollRef.current) {
      const scrollLeft = tabElement.offsetLeft - (scrollRef.current.clientWidth / 2) + (tabElement.clientWidth / 2);
      scrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#28282B] text-center mb-12">
          Solutions We Provide
        </h1>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
            {/* Tab Bar */}
            <div 
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hide mb-12"
            >
              <div className="flex justify-center gap-8 min-w-max md:min-w-0">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      id={`tab-${tab.id}`}
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="flex flex-col items-center gap-2 relative px-4"
                    >
                      <Icon 
                        size={24} 
                        className={isActive ? 'text-[#9644e3]' : 'text-gray-400'} 
                      />
                      <span 
                        className={`text-base whitespace-nowrap ${
                          isActive ? 'text-[#9644e3] font-medium' : 'text-[#28282B]'
                        }`}
                      >
                        {tab.label}
                      </span>
                      <div 
                        className={`absolute bottom-0 left-0 right-0 h-0.5 transition-colors ${
                          isActive ? 'bg-[#9644e3]' : 'bg-transparent'
                        }`} 
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab Content */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <TabContent
                  key={activeTab}
                  content={tabs.find(tab => tab.id === activeTab)!.content}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabbedSection;