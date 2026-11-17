import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#"
          className="group flex items-center space-x-2.5 text-zinc-100 hover:text-white transition-colors"
        >
          <div className="w-8 h-8 rounded-md bg-zinc-900 border border-white/15 flex items-center justify-center font-mono font-bold text-xs tracking-tighter text-white group-hover:border-accent transition-colors">
            S<span className="text-accent">.</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-semibold tracking-tight text-sm text-zinc-100">
              {portfolioData.personal.name}
            </span>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
              AI &amp; Data Science
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] font-mono text-zinc-400 hover:text-white transition-colors relative py-1 hover:after:w-full after:transition-all after:duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#contact"
            className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center space-x-1.5"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0c]/98 border-b border-white/10 px-6 py-6 transition-all animate-fade-in backdrop-blur-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-widest text-zinc-300 hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-zinc-600 font-mono text-xs">→</span>
              </a>
            ))}
            <div className="pt-2 flex flex-col space-y-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-accent text-white font-medium text-xs tracking-wider uppercase font-mono shadow-[0_0_15px_rgba(0,102,255,0.3)]"
              >
                Get in Touch
              </a>
              {onOpenResume && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full text-center py-2.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 font-mono text-xs tracking-wider uppercase hover:text-white"
                >
                  Resume Overview
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
