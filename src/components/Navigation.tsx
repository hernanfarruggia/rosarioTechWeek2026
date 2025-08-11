'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: '¿Qué es?', href: '#about' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Asistentes', href: '#asistentes' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Hosts', href: '#hosts' },
    { name: 'Prensa', href: '#press' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/50 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero">
              <img
                src="/logo.svg"
                alt="Rosario TechWeek Logo"
                className="h-14 w-auto inline-block align-middle rotate-12 hover:scale-105 transition-all duration-300"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://luma.com/rosario-techweek-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 hover:bg-orange-600 transition-colors duration-200 font-medium"
            >
              Registrate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden h-screen">
            <div className="px-2 pt-2 pb-3 space-y-1 text-right">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-6 text-white hover:text-primary transition-colors duration-200 font-medium text-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://luma.com/rosario-techweek-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 bg-primary text-white hover:bg-orange-600 transition-colors duration-200 font-medium text-center mt-4"
              >
                Registrate
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}