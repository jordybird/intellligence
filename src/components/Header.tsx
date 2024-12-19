"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter, usePathname } from 'next/navigation';

// Updated GridIcon with white fill
const GridIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="1" fill="white" />
    <rect x="14" y="3" width="7" height="7" rx="1" fill="white" />
    <rect x="3" y="14" width="7" height="7" rx="1" fill="white" />
    <rect x="14" y="14" width="7" height="7" rx="1" fill="white" />
  </svg>
);

// MenuIcon remains unchanged as it already uses white stroke
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="4" y1="18" x2="20" y2="18"></line>
  </svg>
);

// CloseIcon remains unchanged as it already uses white stroke
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// DiagonalArrow remains unchanged as it already uses white stroke
const DiagonalArrow = () => (
  <svg 
    width="22" 
    height="22" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="white" 
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
    setIsMenuOpen(false);
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
    { id: "contact", label: "Contact" },
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
    <header className="relative bg-[#0A0A0A] font-poppins">
      <div className="flex items-center justify-between px-4 md:px-8 py-5">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="hidden md:block">
              <GridIcon />
            </div>
            {/* Changed text color to white */}
            <span className="font-bold text-2xl text-white">Intellireach</span>
          </Link>
        </div>

        {/* Desktop Navigation Links and CTA */}
        <div className="hidden md:flex items-center gap-10 ml-auto">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              /* Changed text color to white */
              className="text-white hover:underline text-lg font-light cursor-pointer"
            >
              {link.label}
            </button>
          ))}

          {/* Call to Action with Get Started hover effect */}
          <div className="flex items-center gap-0.5">
            <Link
              href="/get-started"
              className="flex items-center px-6 py-3 bg-[#9644e3] text-white font-light text-lg rounded-full hover:bg-[#8034d1] transition"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get Started
            </Link>
            <div className="flex items-center justify-center w-12 h-12 bg-[#9644e3] rounded-full hover:bg-[#8034d1] transition overflow-hidden">
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
          className="md:hidden p-2 bg-[#9644e3] rounded-xl"
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
            className="absolute top-full right-4 w-[200px] bg-[#9644e3] rounded-2xl p-4 shadow-lg md:hidden z-50"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-white/80 transition text-base font-medium text-left"
                >
                  {link.label}
                </button>
              ))}
              <Link
                href="/get-started"
                className="text-white hover:text-white/80 transition text-base font-medium"
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
