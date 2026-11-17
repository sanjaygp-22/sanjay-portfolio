import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Hero3D } from './Hero3D';
import { ArrowDown, FileText, FolderGit2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Subtle depth lighting backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_50%_-15%,rgba(0,102,255,0.09),rgba(5,5,5,0))]" />
      
      {/* Precision grid pattern overlay (ultra subtle) */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col space-y-7 text-left z-10"
          >
            
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 w-fit backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs font-mono text-zinc-300 tracking-wide">
                {personal.status}
              </span>
            </motion.div>

            {/* Main Headline & Identity */}
            <div className="space-y-3">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400"
              >
                {personal.role}
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.04]"
              >
                {personal.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="pt-1.5"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl font-light text-zinc-300 tracking-tight block">
                  &ldquo;{personal.headline}&rdquo;
                </span>
              </motion.div>
            </div>

            {/* Narrative Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="text-base sm:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed"
            >
              {personal.intro}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group px-6 py-3.5 rounded-lg bg-zinc-100 text-zinc-950 font-medium text-sm tracking-wide flex items-center space-x-2.5 hover:bg-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,102,255,0.28)] hover:-translate-y-0.5 active:translate-y-0 duration-200"
              >
                <FolderGit2 className="w-4 h-4 text-zinc-900 group-hover:text-accent transition-colors" />
                <span>View Projects</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm tracking-wide border border-white/15 hover:border-white/30 transition-all flex items-center space-x-2.5 hover:-translate-y-0.5 active:translate-y-0 duration-200"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>Download Resume</span>
              </button>
            </motion.div>

            {/* Quick Metadata Pillars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.46 }}
              className="pt-4 grid grid-cols-3 gap-4 border-t border-white/[0.08] max-w-lg"
            >
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  Focus
                </span>
                <span className="text-xs font-medium text-zinc-300">AI &amp; Deep Learning</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  Engineering
                </span>
                <span className="text-xs font-medium text-zinc-300">Software &amp; Automation</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  Aesthetic
                </span>
                <span className="text-xs font-medium text-zinc-300">Pure Minimalist</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Interactive 3D Kinetic Sculpture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <Hero3D />
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 pb-4 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center space-y-2 text-zinc-500 hover:text-zinc-300 transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] group-hover:text-accent transition-colors">
              Explore Portfolio
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce text-zinc-500 group-hover:text-accent transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
};
