"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PricingPackages from '../../components/PricingPackages';
import ComparisonTable from '../../components/ComparisonTable';
import FAQSection from '../../components/FAQSection';
import ConsultationScheduler from '../../components/ConsultationScheduler';
import Footer from '../../components/Footer'

interface SelectedAddOns {
  [key: string]: boolean;
}

const GetStarted: React.FC = () => {
  const [showScheduler, setShowScheduler] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowScheduler = window.scrollY > 300;
      setShowScheduler(shouldShowScheduler);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddOnsComplete = (selectedAddOns: string[]): void => {
    const addOnsObject = selectedAddOns.reduce((acc, curr) => ({
      ...acc,
      [curr]: true
    }), {} as SelectedAddOns);
    
    console.log(addOnsObject);
  };

  return (
    <div>
    <main className="relative min-h-screen bg-white px-6 md:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <PricingPackages />

        <div className="max-w-6xl mx-auto my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>

        <section className="py-16">
          <ComparisonTable />
        </section>

        <section>
          <FAQSection />
        </section>
      </div>

      <AnimatePresence>
        {showScheduler && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ConsultationScheduler />
          </motion.div>
        )}
      </AnimatePresence>
      
    </main>
    <Footer/>
    </div>
  );
};

export default GetStarted;
