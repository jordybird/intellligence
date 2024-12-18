declare global {
    interface Window {
      Calendly?: {
        initInlineWidget: (options: {
          url: string;
          parentElement: Element | null;
          prefill?: Record<string, any>;
          utm?: Record<string, any>;
        }) => void;
      };
    }
  }
  
  import React, { useState, useEffect } from 'react';
  import { CalendarDays, X, ChevronUp } from 'lucide-react';
  import { motion, AnimatePresence } from 'framer-motion';
  
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
      <div className="fixed bottom-0 right-0 z-50">
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
                className="absolute bottom-0 right-0 w-[320px] bg-white shadow-2xl rounded-t-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-[#28282B]">
                      Schedule a Consultation
                    </h3>
                    <button
                      onClick={toggleOpen}
                      className="text-[#28282B] hover:text-gray-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
  
                  <div
                    className="calendly-inline-widget"
                    style={{ minWidth: '320px', height: '630px' }}
                  />
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
              flex items-center justify-center space-x-2 
              bg-white text-[#510f74] 
              px-6 py-4 
              rounded-t-lg
              shadow-[0_-8px_25px_-5px_rgba(0,0,0,0.2)]
              hover:bg-gray-50 
              transition-colors duration-200
              ${isOpen ? 'opacity-0' : 'opacity-100'}
            `}
          >
            <CalendarDays className="w-5 h-5" />
            <span className="font-medium">Schedule Consultation</span>
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    );
  };
  
  export default ConsultationScheduler;