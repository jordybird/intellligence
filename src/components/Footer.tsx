"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import PrivacyPolicyModal from './PrivacyPolicyModal';

export default function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (elementId: string) => {
    if (pathname === '/') {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      localStorage.setItem('scrollTo', elementId);
      router.push('/');
    }
  };

  return (
    <>
      <footer className="w-full bg-gray-100 py-12 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company section */}
            <div>
              <h2 className="font-semibold text-xl text-[#28282B] mb-2">Intellireach LLC</h2>
              <p className="text-gray-600 text-sm">
                Empowering businesses with innovative solutions
              </p>
            </div>

            {/* Navigation section */}
            <div>
              <h3 className="font-semibold text-[#28282B] mb-4">Navigation</h3>
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-600 hover:text-gray-800 text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-600 hover:text-gray-800 text-left"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-600 hover:text-gray-800 text-left"
                >
                  Why Us
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-600 hover:text-gray-800 text-left"
                >
                  Pricing
                </button>
                <a 
                  href="/blog"
                  className="text-gray-600 hover:text-gray-800 text-left cursor-pointer"
                >
                  Blog
                </a>
              </div>
            </div>

            {/* Legal section */}
            <div>
              <h3 className="font-semibold text-[#28282B] mb-4">Legal</h3>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="text-gray-600 hover:text-gray-800 text-left"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => {}}
                  className="text-gray-600 hover:text-gray-800 text-left"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>

          {/* Footer bottom - copyright and social links */}
          <div className="pt-8 border-t border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-600 text-sm">
                © 2024 Intellireach LLC. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.linkedin.com/company/intellireach/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-300 transition-colors duration-200"
                >
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </a>
                <a 
                  href="https://x.com/intellireachllc?s=21&t=gbVyMKrjHgwwXbR-VTaXTw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-300 transition-colors duration-200"
                >
                  <Image
                    src="/social-media.png"
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </a>
                <a 
                  href="https://www.instagram.com/intellireachllc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-300 transition-colors duration-200"
                >
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </>
  );
}