import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Cpu, Layers, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const { about } = portfolioData;

  const valueIcons = [
    <Layers key="arch" className="w-5 h-5 text-accent" />,
    <Cpu key="intel" className="w-5 h-5 text-accent" />,
    <Sparkles key="auto" className="w-5 h-5 text-accent" />,
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-xs font-mono text-accent tracking-[0.2em] uppercase">01 // IDENTITY</span>
            <div className="h-[1px] w-12 bg-white/10" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            About Me
          </h2>
        </div>

        {/* Two-Column Grid: Left Profile Photo & Academics | Right Narrative & Tenets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Column 1: Profile Photograph & Academic Background Card */}
          <div className="order-1 lg:col-span-5 space-y-6">
            
            {/* Premium Rounded-Rectangle Profile Photograph Container */}
            <div className="group relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-accent/40 bg-zinc-950 transition-all duration-500 shadow-[0_10px_35px_rgba(0,102,255,0.06)] hover:shadow-[0_15px_45px_rgba(0,102,255,0.16)]">
              {/* Subtle top-right ambient glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-accent/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/20 transition-all duration-500 z-10" />

              {/* Natural Profile Photograph */}
              <img
                src="/images/sanjay-profile.jpg"
                alt="Sanjay G.P. — AI & Data Science Student"
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />

              {/* Minimal Gradient Shadow & Descriptive Label */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent pt-16 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm sm:text-base font-bold font-sans tracking-tight text-white block">
                      SANJAY G.P.
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-accent uppercase block mt-0.5">
                      AI &amp; DATA SCIENCE STUDENT
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#0066FF]" />
                    <span className="text-[9px] font-mono text-zinc-300 uppercase tracking-wider">SKCET</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Background Card */}
            <div className="p-6 sm:p-7 rounded-xl bg-zinc-950/70 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none group-hover:bg-accent/10 transition-all" />
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/10">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 block">
                    Academic Background
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    {about.academic.specialization}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-sm text-zinc-400">
                {about.academic.institution && (
                  <div>
                    <span className="text-xs font-mono text-zinc-500 block">Institution</span>
                    <span className="text-zinc-200">{about.academic.institution}</span>
                  </div>
                )}
                <div>
                  <span className="text-xs font-mono text-zinc-500 block">Program</span>
                  <span className="text-zinc-200">{about.academic.degree}</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 block">Core Coursework &amp; Research</span>
                  <span className="text-zinc-300">{about.academic.focus}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Narrative, Core Domains, and Engineering Tenets */}
          <div className="order-2 lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
            <p className="text-xl sm:text-2xl font-light text-zinc-100 leading-snug">
              {about.lead}
            </p>
            {about.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-zinc-400">
                {paragraph}
              </p>
            ))}

            {/* Core Interest Tags */}
            <div className="pt-2">
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
                Core Domains of Focus
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  'Software Engineering',
                  'Artificial Intelligence',
                  'Process & Workflow Automation',
                  'Deep Learning Systems',
                  'Applied Data Science',
                  'System Architecture',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3.5 py-1.5 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300 hover:border-accent/40 hover:text-white transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering Values List */}
            <div className="pt-4">
              <div className="p-6 sm:p-7 rounded-xl bg-zinc-950/40 border border-white/[0.08] space-y-5">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
                  Engineering Tenets
                </span>
                
                {about.engineeringValues.map((val, idx) => (
                  <div key={val.title} className="flex items-start space-x-3.5">
                    <div className="p-1.5 rounded-md bg-zinc-900 border border-white/10 mt-0.5">
                      {valueIcons[idx] || <Sparkles className="w-4 h-4 text-accent" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-100">{val.title}</h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
