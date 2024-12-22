import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "What is included in your digital marketing packages?",
    answer: "Our packages include a comprehensive suite of digital marketing services tailored to your business needs. This includes social media management, content creation, SEO optimization, email marketing, analytics reporting, and strategic planning. Each tier offers different levels of service intensity and frequency to match your business goals and budget."
  },
  {
    question: "How long is the minimum contract period?",
    answer: "We offer flexible contract terms with a minimum commitment of 3 months. This allows enough time to implement our strategies and see meaningful results. After the initial period, you can continue on a month-to-month basis or opt for longer terms with additional benefits."
  },
  {
    question: "Can I upgrade or downgrade my package?",
    answer: "Yes, you can change your package at any time with 30 days notice. We'll work with you to ensure a smooth transition and adjust our services to match your new package level. Our team will help you evaluate the best options based on your business needs and goals."
  },
  {
    question: "What kind of results can I expect?",
    answer: "Results vary based on your package, industry, and current digital presence. Typically, clients see improved engagement within the first month, with more substantial results in traffic and conversions developing over 3-6 months. We provide detailed monthly reports to track your progress and adjust strategies as needed."
  },
  {
    question: "Do you offer custom solutions outside of these packages?",
    answer: "Yes, we can create custom solutions for businesses with specific needs. While our packages cover most common requirements, we understand that some businesses need specialized services. Contact us to discuss your unique needs and we'll develop a tailored solution."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full flex justify-between items-center py-6 px-6 focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-left text-lg font-medium text-white group-hover:text-[#9644e3] transition-colors">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-[#9644e3] transform transition-all duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] pb-6 px-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mb-8">
            Find answers to common questions about our services and packages
          </p>
          
          <div className="bg-[#0F0F0F] rounded-2xl border border-gray-800">
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;