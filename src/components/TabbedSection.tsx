"use client";

import React, { useState } from 'react';
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
        <div className="h-full w-full rounded-lg overflow-hidden">
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
        <div className="h-full w-full rounded-lg overflow-hidden">
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
        <div className="h-full w-full rounded-lg overflow-hidden">
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

const TabContentComponent: React.FC<{ content: TabContent }> = ({ content }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="w-full"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div className="flex flex-col space-y-8">
        <h2 className="text-3xl font-bold text-center md:text-left text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {content.title}
        </h2>
        
        <ul className="space-y-6">
          {content.features.map((feature, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-600" />
              <span className="text-white/90 text-lg">{feature}</span>
            </motion.li>
          ))}
        </ul>
        
        <div className="hidden md:flex justify-start">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
          >
            {content.buttonText}
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col space-y-8">
        <motion.div 
          className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {content.graph}
        </motion.div>
        <div className="flex md:hidden justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
          >
            {content.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  </motion.div>
);

const TabbedSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <section className="w-full bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-2">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-white text-center mb-16 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Solutions We Provide
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
          style={{
            boxShadow: '0 25px 50px -12px rgba(150, 68, 227, 0.15)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div className="max-w-6xl mx-auto py-12 md:py-16 px-2 md:px-4">
            <div className="flex justify-center mb-16">
              <div className="flex gap-12">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="flex flex-col items-center gap-3 relative px-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon 
                        size={28} 
                        className={`transition-colors duration-300 ${
                          isActive ? 'text-purple-400' : 'text-gray-400'
                        }`} 
                      />
                      <span 
                        className={`text-lg whitespace-nowrap transition-colors duration-300 ${
                          isActive ? 'text-purple-400 font-semibold' : 'text-white/70'
                        }`}
                      >
                        {tab.label}
                      </span>
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600"
                        initial={false}
                        animate={{ 
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0.9
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <TabContentComponent
                  key={activeTab}
                  content={tabs.find(tab => tab.id === activeTab)!.content}
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TabbedSection;