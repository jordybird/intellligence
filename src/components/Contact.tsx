"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PrivacyPolicyModal from "./PrivacyPolicyModal"; // <-- Adjust if your file path differs

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptPolicy: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Example: sending POST request to your /api/contact route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        message: "",
        acceptPolicy: false,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-12 bg-[#0A0A0A]" id="contact-section">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-semibold text-white text-left mb-8">
            Get In Touch
          </h1>

          <div className="bg-gradient-to-r from-[#9644e3] to-pink-500 p-[3px] rounded-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden w-full h-full"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/contact.jpg"
                  alt="Background"
                  fill
                  className="object-cover brightness-[0.5]"
                  priority
                />
              </div>

              {/* Form Content */}
              <div className="relative z-10 p-6 md:p-8">
                <div className="max-w-xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-white uppercase text-sm tracking-wider font-medium"
                      >
                        NAME
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A]/80 text-white border border-[#9644e3]/20 focus:border-[#9644e3] focus:outline-none focus:ring-1 focus:ring-[#9644e3] transition-colors"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-white uppercase text-sm tracking-wider font-medium"
                      >
                        EMAIL
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A]/80 text-white border border-[#9644e3]/20 focus:border-[#9644e3] focus:outline-none focus:ring-1 focus:ring-[#9644e3] transition-colors"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-white uppercase text-sm tracking-wider font-medium"
                      >
                        MESSAGE
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1A1A]/80 text-white border border-[#9644e3]/20 focus:border-[#9644e3] focus:outline-none focus:ring-1 focus:ring-[#9644e3] transition-colors min-h-[120px]"
                        placeholder="Start typing here ..."
                        required
                      />
                    </div>

                    {/* Privacy Policy Checkbox */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        checked={formData.acceptPolicy}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            acceptPolicy: e.target.checked,
                          })
                        }
                        className="w-4 h-4 rounded-lg border-[#9644e3]/20 text-[#9644e3] focus:ring-[#9644e3]"
                        required
                      />
                      <label htmlFor="privacy" className="text-white text-sm">
                        I agree to the{" "}
                        <span
                          onClick={() => setIsPrivacyModalOpen(true)}
                          className="text-[#9644e3] hover:text-[#8034d1] underline cursor-pointer"
                        >
                          privacy policy
                        </span>
                        .
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-gradient-to-r from-[#9644e3] to-pink-500 text-white rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </>
  );
}
