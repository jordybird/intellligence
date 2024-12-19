import React, { useState, useEffect } from 'react';
import { X, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
        prefill?: Record<string, any>;
        utm?: Record<string, any>;
      }) => void;
    }
  }
}

const ConsultationScheduler = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const handleScroll = () => {
      const shouldShow = window.scrollY > 300;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isOpen && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/spoonerbennett/15min',
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {},
        utm: {}
      });
    }
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 right-8 z-50">
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.04, 0.62, 0.23, 0.98]
              }}
              className="absolute bottom-0 right-0 w-[320px] rounded-t-2xl overflow-hidden shadow-[0_0_25px_-5px_rgba(0,0,0,0.3)]"
            >
              <div className="bg-[#0A0A0A] p-4 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">
                    Schedule a Consultation
                  </h3>
                  <button
                    onClick={toggleOpen}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-t-2xl -mt-2">
                <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '630px' }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggleOpen}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className={`
            w-[320px]
            flex items-center justify-between 
            bg-[#0A0A0A] text-white 
            px-6 py-4 
            rounded-t-2xl
            shadow-[0_-8px_25px_-5px_rgba(0,0,0,0.3)]
            hover:shadow-[0_-12px_30px_-5px_rgba(0,0,0,0.4)]
            transition-all duration-300
            ${isOpen ? 'opacity-0' : 'opacity-100'}
            border border-gray-800
            hover:border-gray-700
            relative
            before:absolute before:inset-0 
            before:rounded-t-2xl
            before:border before:border-gray-700/50
            before:shadow-[0_0_15px_rgba(255,255,255,0.1)]
            hover:before:shadow-[0_0_20px_rgba(255,255,255,0.15)]
            before:transition-all before:duration-300
          `}
        >
          <span className="font-semibold">Schedule Consultation</span>
          <ChevronUp className="w-5 h-5 stroke-[2.5px]" />
        </motion.button>
      </div>
    </div>
  );
};

export default ConsultationScheduler;