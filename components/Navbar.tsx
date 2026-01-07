import React, { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Features', href: '#features' },
    { name: 'AI Planner', href: '#planner' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 group cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="p-2 bg-brand-600 rounded-full text-white transform group-hover:rotate-45 transition-transform duration-500">
            <Compass size={24} />
          </div>
          <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            Wanderlust
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium hover:text-brand-500 transition-colors cursor-pointer ${
                isScrolled ? 'text-slate-600' : 'text-slate-100 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 shadow-lg shadow-brand-500/30">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 border-t border-slate-100">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-slate-600 text-lg font-medium py-3 border-b border-slate-50 last:border-0 hover:text-brand-600 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-600 text-white w-full py-3 rounded-lg font-medium mt-2 active:bg-brand-700">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;