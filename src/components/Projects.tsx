import React from 'react';
import { portfolioData, type Project } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, Bot, Video, Activity, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  const projectIcons: Record<string, React.ReactNode> = {
    ember: <Bot className="w-5 h-5 text-accent" />,
    storypilot: <Video className="w-5 h-5 text-accent" />,
    machinesense: <Activity className="w-5 h-5 text-accent" />,
    'ai-crack-detection': <Eye className="w-5 h-5 text-accent" />,
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-mono text-accent tracking-[0.2em] uppercase">03 // SELECTED WORKS</span>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-md">
            Production pipelines, machine learning systems, and intelligent desktop automation tools.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="space-y-10">
          {projects.map((project: Project, index: number) => (
            <div
              key={project.id}
              className="p-8 sm:p-10 rounded-2xl bg-zinc-950/70 border border-white/[0.08] hover:border-white/20 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle accent glow on top right */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/10 transition-all" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                
                {/* Left Header & Meta */}
                <div className="lg:col-span-5 space-y-4">
                  
                  {/* Category & Status */}
                  <div className="flex items-center space-x-3">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-accent px-2.5 py-1 rounded bg-accent/10 border border-accent/20">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      // 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center space-x-3">
                      <span>{project.title}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {projectIcons[project.id]}
                      </span>
                    </h3>
                    <p className="text-sm font-mono text-zinc-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Primary Narrative */}
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pt-2">
                    {project.description}
                  </p>

                  {/* GitHub Action Button or Repository Status */}
                  <div className="pt-4 flex items-center space-x-3">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 hover:border-accent/40 transition-all text-xs font-mono tracking-wide"
                      >
                        <GithubIcon className="w-4 h-4 text-accent" />
                        <span>View on GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-zinc-900/50 border border-white/10 text-zinc-400 text-xs font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                        <span>Academic / Internal Project</span>
                      </span>
                    )}
                  </div>

                </div>

                {/* Right Column: Key Architectural Highlights & Tech Stack */}
                <div className="lg:col-span-7 space-y-6 lg:pl-6 lg:border-l lg:border-white/[0.08]">
                  
                  {/* Architecture & Engineering Highlights */}
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                      Engineering Highlights
                    </span>
                    <ul className="space-y-2.5">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-accent/80 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                      Technologies &amp; Libraries
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
