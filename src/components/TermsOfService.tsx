"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
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
          <h2 className="text-2xl text-[#28282B] font-bold mb-6">
            Terms of Service
          </h2>

          <div className="space-y-6 text-gray-700">
            <p className="mb-2">
             
            </p>
            <p className="mb-4">
  Welcome to <span className="font-bold">Intellireach LLC</span>. These Terms of Service ("Terms")
  govern your access to and use of our digital marketing services,
  website, and tools (collectively, the "Services"). By engaging our
  Services, you agree to be bound by these Terms. If you do not
  agree, do not use our Services.
</p>
            <section>
              <h3 className="text-lg font-semibold mb-2">1. Services</h3>
              <p className="mb-2">
                The Company provides digital marketing services, including but
                not limited to AI-driven outreach, lead generation, content
                creation, social media management, SEO, and paid advertising
                campaigns. Specific details will be outlined in the Statement of
                Work (SOW) or contract.
              </p>
              <p className="mb-2">
                Services are provided as per the agreed-upon scope in the SOW.
                Modifications to the scope will require mutual agreement and may
                incur additional costs.
              </p>
              <p>
                While we strive to deliver the best possible outcomes, results
                may vary based on factors beyond our control, including market
                conditions, algorithm updates, and user behavior.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">
                2. Client Responsibilities
              </h3>
              <p className="mb-2">
                The client agrees to provide timely approvals, feedback, and
                access to necessary materials (e.g., branding assets, website
                credentials) for the successful execution of the Services.
              </p>
              <p className="mb-2">
                The client ensures that all information provided to the Company
                is accurate, current, and complete.
              </p>
              <p>
                The client is responsible for ensuring that all campaigns comply
                with industry-specific regulations and advertising guidelines.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">
                3. Fees and Payment
              </h3>
              <p className="mb-2">
                Fees for Services are detailed in the SOW or invoice. Payment is
                due [e.g., upfront, upon completion, monthly, etc.], unless
                otherwise agreed.
              </p>
              <p className="mb-2">
                Late payments may incur a fee of [insert percentage or amount]
                per [time period].
              </p>
              <p>
                Refunds will be issued only if explicitly stated in the SOW.
                Results-based guarantees, if applicable, are subject to specific
                conditions outlined in the contract.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">
                4. Intellectual Property
              </h3>
              <p className="mb-2">
                The Company retains ownership of all intellectual property
                created during the provision of Services until full payment is
                received. Upon full payment, ownership of deliverables will
                transfer to the client.
              </p>
              <p>
                The client grants the Company permission to use non-confidential
                campaign materials for portfolio or marketing purposes unless
                otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">5. Confidentiality</h3>
              <p>
                Both parties agree to maintain the confidentiality of
                proprietary or sensitive information shared during the
                engagement. This obligation survives the termination of the
                agreement.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">6. Termination</h3>
              <p className="mb-2">
                Either party may terminate the agreement with [insert notice
                period, e.g., 30 days] written notice.
              </p>
              <p className="mb-2">
                The Company reserves the right to terminate the agreement
                immediately if the client breaches these Terms.
              </p>
              <p>
                All outstanding payments will be due immediately upon
                termination. The Company will deliver any completed work as per
                the agreement.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">
                7. Limitation of Liability
              </h3>
              <p>
                To the fullest extent permitted by law, the Company will not be
                liable for any indirect, incidental, or consequential damages
                arising out of or related to the use of the Services.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">8. Indemnification</h3>
              <p>
                The client agrees to indemnify and hold the Company harmless
                from any claims, liabilities, or damages resulting from the
                client’s use of the Services.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">9. Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of [insert jurisdiction]. Any disputes shall be
                resolved exclusively in the courts of [insert jurisdiction].
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">10. Amendments</h3>
              <p>
                The Company reserves the right to update these Terms at any
                time. Clients will be notified of significant changes, and
                continued use of the Services constitutes acceptance of the
                updated Terms.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">
                11. Contact Information
              </h3>
              <p className="mb-2">
                For any questions or concerns about these Terms, please contact
                us at:
              </p>
              <ul className="space-y-1">
                <li>
                  <strong>Email:</strong> bennett@intellireachllc.com
                </li>
                <li>
                  <strong>Phone:</strong> 6783728881
                </li>
                <li>
                  <strong>Address:</strong> 13025 Birmingham hwy, Milton GA
                  30004
                </li>
              </ul>
            </section>

            <p className="mt-4 text-sm text-gray-500">
              This document is a starting point. Adjust it to reflect your
              agency’s policies and consult with a legal professional to ensure
              compliance with applicable laws and regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
