import React, { useState } from 'react';
import { contactConfig } from '../config/contact';
import { Mail, Phone, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactConfig.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(`${formData.message}\n\nSender Email: ${formData.email}`);
    window.open(`${contactConfig.emailHref}?subject=${subject}&body=${body}`, '_blank');

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-mono text-accent tracking-[0.2em] uppercase">05 // INITIATE DIALOGUE</span>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Get in Touch
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-md">
            Open for technical roles, research initiatives, AI engineering projects, and software collaborations.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Links & Fast Copy */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary Email Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/[0.08] relative overflow-hidden group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                  Email Channel
                </span>
                <Mail className="w-5 h-5 text-accent" />
              </div>

              <div className="mb-5">
                <span className="text-xs text-zinc-400 block mb-1">Direct Email</span>
                <span className="text-base sm:text-lg font-mono font-medium text-white break-all">
                  {contactConfig.email}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-2.5 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 hover:border-white/20 transition-all flex items-center justify-center space-x-2 text-xs font-mono"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied Email</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-accent" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={contactConfig.emailHref}
                  className="py-2.5 px-4 rounded-lg bg-accent hover:bg-accent-hover text-white transition-all flex items-center justify-center space-x-1.5 text-xs font-mono"
                  aria-label="Open native mail client"
                >
                  <span>Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Phone Channel Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/[0.08] relative overflow-hidden group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                  Voice / Direct Phone
                </span>
                <Phone className="w-5 h-5 text-accent" />
              </div>

              <div className="mb-5">
                <span className="text-xs text-zinc-400 block mb-1">Mobile Contact</span>
                <span className="text-base sm:text-lg font-mono font-medium text-white">
                  {contactConfig.phone}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={handleCopyPhone}
                  className="flex-1 py-2.5 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 hover:border-white/20 transition-all flex items-center justify-center space-x-2 text-xs font-mono"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied Number</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-accent" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>

                <a
                  href={contactConfig.phoneHref}
                  className="py-2.5 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white transition-all flex items-center justify-center space-x-1.5 text-xs font-mono"
                  aria-label="Call direct phone"
                >
                  <span>Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                </a>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* GitHub */}
              <a
                href={contactConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-zinc-950/60 border border-white/[0.08] hover:border-white/25 hover:bg-zinc-900/40 transition-all duration-200 group flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-white/10 group-hover:border-accent/40 transition-colors">
                    <GithubIcon className="w-4 h-4 text-zinc-200 group-hover:text-accent" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 block">github.com</span>
                    <span className="text-sm font-semibold text-white">sanjaygp-22</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={contactConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-zinc-950/60 border border-white/[0.08] hover:border-white/25 hover:bg-zinc-900/40 transition-all duration-200 group flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-white/10 group-hover:border-accent/40 transition-colors">
                    <LinkedinIcon className="w-4 h-4 text-zinc-200 group-hover:text-accent" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 block">linkedin.com</span>
                    <span className="text-sm font-semibold text-white">Sanjay G.P.</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>

            </div>

            {/* Location & Availability Note */}
            <div className="p-5 rounded-xl bg-zinc-950/40 border border-white/[0.06] space-y-1.5">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  {contactConfig.location} // Status: Available
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                {contactConfig.availability}
              </p>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-zinc-950/70 border border-white/[0.08] relative">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
                Direct Message Dispatch
              </span>
              <h3 className="text-xl font-bold text-white mb-6">
                Send a Project or Role Inquiry
              </h3>

              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                    <Check className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-base font-semibold text-white">Message Prepared</h4>
                  <p className="text-xs text-zinc-400 max-w-sm font-mono">
                    Your native email client has been triggered to dispatch this inquiry directly to {contactConfig.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-white/10 text-white placeholder-zinc-600 text-sm font-mono focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-white/10 text-white placeholder-zinc-600 text-sm font-mono focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Message / Project Scope
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your initiative, engineering project, or timeline..."
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-white/10 text-white placeholder-zinc-600 text-sm font-mono focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,102,255,0.25)] hover:shadow-[0_0_25px_rgba(0,102,255,0.4)]"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
