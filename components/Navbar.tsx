// components/Navbar.tsx
"use client"; // Add this at the top for useState

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-pink-50/90 backdrop-blur-md z-50 shadow-sm border-b border-pink-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-['Playwrite_US_Trad'] text-xl bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              Motherly
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            {/* <NavLink href="/features">Features</NavLink> */}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-pink-100 transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // Close (X) icon
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger menu icon
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-200 animate-slideDown">
            <div className="flex flex-col space-y-3">
              <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
              {/* <MobileNavLink href="/features" onClick={() => setIsMobileMenuOpen(false)}>Features</MobileNavLink> */}

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Desktop Nav Link Component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="relative font-['Poiret_One'] text-lg font-semibold text-pink-800 hover:text-pink-600 transition group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
    </Link>
  );
}

// Mobile Nav Link Component
function MobileNavLink({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode;
}) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block px-4 py-2 text-center font-['Poiret_One'] text-lg font-semibold text-pink-800 hover:bg-pink-100 rounded-lg transition"
    >
      {children}
    </Link>
  );
}