import React, { useState } from 'react';
import { portfolioData, type Certification } from '../data/portfolioData';
import { Award, ArrowUpRight, Check, ShieldCheck, Calendar, Hash } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Generative AI & Data', 'Software & Web', 'Honors & Workshops'];

  const filteredCerts =
    activeTab === 'All'
      ? certifications
      : certifications.filter((cert) => cert.category === activeTab);

  return (
    <section id="certifications" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-mono text-accent tracking-[0.2em] uppercase">04 // CREDENTIALS</span>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Certifications &amp; Honors
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-md">
            Verified professional specializations from Microsoft, Meta, IBM, Snowflake, IIIT Hyderabad, and ISRO.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/[0.06]">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? certifications.length
                : certifications.filter((c) => c.category === cat).length;
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wide transition-all duration-200 flex items-center space-x-2 ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-[0_0_15px_rgba(255,255,255,0.15)]'
                    : 'bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-900 border border-white/5'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-zinc-300 text-zinc-900' : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert: Certification) => (
            <div
              key={cert.id}
              className="p-7 rounded-2xl bg-zinc-950/70 border border-white/[0.08] hover:border-white/20 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-white group-hover:border-accent/40 transition-colors">
                      {cert.issuerLogoText}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                        {cert.issuer}
                      </span>
                      <span className="text-xs font-mono text-zinc-300 flex items-center space-x-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>Verified Credential</span>
                      </span>
                    </div>
                  </div>
                  <Award className="w-4 h-4 text-accent/80" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2 group-hover:text-zinc-100 transition-colors">
                  {cert.title}
                </h3>

                {/* Meta: Issue Date & Credential ID */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-[11px] font-mono text-zinc-500">
                  {cert.issueDate && (
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-zinc-500" />
                      <span>{cert.issueDate}</span>
                    </span>
                  )}
                  {cert.credentialId && (
                    <span className="flex items-center space-x-1">
                      <Hash className="w-3 h-3 text-zinc-500" />
                      <span className="truncate max-w-[120px]">{cert.credentialId}</span>
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-5 font-normal">
                  {cert.description}
                </p>

                {/* Core Competencies */}
                <div className="mb-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                    Key Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.coreCompetencies.map((comp) => (
                      <span
                        key={comp}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-white/5 text-zinc-300"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verify Link Button */}
              <div className="pt-4 border-t border-white/[0.06]">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors group-hover:text-accent"
                  >
                    <span>Verify on Platform</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-zinc-500 flex items-center space-x-1">
                    <Check className="w-3 h-3 text-accent" />
                    <span>Official Institutional Participation</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
