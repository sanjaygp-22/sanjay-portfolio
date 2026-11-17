import React from 'react';
import { contactConfig } from '../config/contact';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] py-12 bg-black text-zinc-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Monogram */}
        <div className="flex items-center space-x-3">
          <div className="w-7 h-7 rounded bg-zinc-900 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-white">
            S<span className="text-accent">.</span>
          </div>
          <div>
            <span className="text-xs font-mono tracking-wider text-zinc-300 block">
              {contactConfig.name}
            </span>
            <span className="text-[10px] font-mono text-zinc-500 block">
              AI &amp; Data Science Undergraduate
            </span>
          </div>
        </div>

        {/* Center Tagline */}
        <div className="text-xs font-mono text-zinc-500 text-center">
          &ldquo;Building the Future Through Code.&rdquo;
        </div>

        {/* Socials, Phone, Email & Back to Top */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <a
              href={contactConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={contactConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={contactConfig.emailHref}
              aria-label="Send Email"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={contactConfig.phoneHref}
              aria-label="Direct Phone"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          <div className="h-4 w-[1px] bg-white/10" />

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-colors flex items-center justify-center"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-600 gap-2">
        <span>Designed with precision. Pure black &amp; electric blue minimalism.</span>
        <div className="flex items-center space-x-4 text-zinc-500">
          <span>{contactConfig.email}</span>
          <span>•</span>
          <span>{contactConfig.phone}</span>
        </div>
      </div>
    </footer>
  );
};
