"use client";

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const PrivacyPolicyModal = ({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-white rounded-xl shadow-2xl m-4 animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6" color="#28282B" />
        </button>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl text-[#28282B] font-bold mb-6">Privacy Policy</h2>
          
          <div className="space-y-6 text-gray-700">
            <p>
              <strong>IntelliReach LLC</strong> respects your privacy and is committed to protecting it through this Privacy Policy. This policy explains how we collect, use, disclose, and safeguard your information when you use our services or interact with our website.
            </p>

            {/* Sections */}
            <div className="space-y-8">
              <section>
                <h3 className="text-lg font-semibold mb-2">1. Information We Collect</h3>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, business name, and any other details provided during onboarding or communications.</li>
                  <li><strong>Non-Personal Information:</strong> Browser type, IP address, and device information collected through cookies or similar technologies.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">2. How We Use Your Information</h3>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Provide and improve our services.</li>
                  <li>Communicate with you about campaigns, updates, or support.</li>
                  <li>Analyze user behavior to enhance user experience.</li>
                  <li>Comply with legal obligations or resolve disputes.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">3. Sharing Your Information</h3>
                <p>We do <strong>not</strong> sell or rent your information. We may share your data with:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Service providers who assist in operating our business (e.g., email hosting).</li>
                  <li>Legal authorities if required by law or to protect our rights.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">4. Data Security</h3>
                <p>We implement industry-standard measures to protect your information from unauthorized access, alteration, or misuse. However, no system is completely secure.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">5. Your Rights</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access, correct, or delete your personal information.</li>
                  <li>Opt-out of marketing communications at any time.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">6. Cookies</h3>
                <p>We may use cookies to improve your browsing experience. You can adjust cookie settings in your browser.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">7. Third-Party Links</h3>
                <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">8. Changes to This Policy</h3>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-2">9. Contact Us</h3>
                <p>If you have questions about this Privacy Policy or how your information is handled, please contact us:</p>
                <div className="mt-2">
                  <p><strong>IntelliReach LLC</strong></p>
                  <p>Bennett Spooner</p>
                  <p>678-372-8881</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;