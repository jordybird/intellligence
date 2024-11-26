"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const GridIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="1" fill="#28282B" />
    <rect x="14" y="3" width="7" height="7" rx="1" fill="#28282B" />
    <rect x="3" y="14" width="7" height="7" rx="1" fill="#28282B" />
    <rect x="14" y="14" width="7" height="7" rx="1" fill="#28282B" />
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#28282B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="4" y1="18" x2="20" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#28282B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const DiagonalArrow = () => (
  <svg 
    width="22" 
    height="22" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#28282B" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="rotate-[-45deg]"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const arrowVariants = {
    initial: { 
      x: 0, 
      y: 0, 
      opacity: 1 
    },
    hover: {
      x: [0, 30, -30, 0],
      y: [0, -30, 30, 0],
      opacity: [1, 0, 0, 1],
      transition: {
        duration: 0.5,
        times: [0, 0.4, 0.6, 1],
        ease: "easeInOut"
      }
    }
  };

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Why Us" },
    { id: "pricing", label: "Pricing" },
  ];

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <header className="relative bg-white font-poppins">
      <div className="flex items-center justify-between px-4 md:px-8 py-5">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <GridIcon />
          </div>
          <span className="font-bold text-2xl text-[#28282B]">Intellireach</span>
        </div>

        {/* Desktop Navigation Links and CTA */}
        <div className="hidden md:flex items-center gap-10 ml-auto">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-[#28282B] hover:underline text-lg font-light cursor-pointer"
            >
              {link.label}
            </button>
          ))}

          {/* Call to Action with Get Started hover effect */}
          <div className="flex items-center gap-0.5">
            <Link
              href="/get-started"
              className="flex items-center px-6 py-3 bg-[#CBB3FF] text-black font-light text-lg rounded-full hover:bg-[#E4D5F7]/90 transition"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get Started
            </Link>
            <div className="flex items-center justify-center w-12 h-12 bg-[#CBB3FF] rounded-full hover:bg-[#E4D5F7]/90 transition overflow-hidden">
              <motion.div
                variants={arrowVariants}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
              >
                <DiagonalArrow />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 bg-[#CBB3FF] rounded-xl"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            className="absolute top-full right-4 w-[200px] bg-[#CBB3FF] rounded-2xl p-4 shadow-lg md:hidden z-50"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[#28282B] hover:text-[#28282B]/80 transition text-base font-medium text-left"
                >
                  {link.label}
                </button>
              ))}
              <Link
                href="/get-started"
                className="text-[#28282B] hover:text-[#28282B]/80 transition text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}