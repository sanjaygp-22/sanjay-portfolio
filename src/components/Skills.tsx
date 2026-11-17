import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Cpu, Layout, GitBranch, Code2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const categoryIcons: Record<string, React.ReactNode> = {
    Languages: <Terminal className="w-5 h-5 text-accent" />,
    'AI & Deep Learning': <Cpu className="w-5 h-5 text-accent" />,
    'Frontend & Web Architecture': <Layout className="w-5 h-5 text-accent" />,
    'Version Control & Workflow': <GitBranch className="w-5 h-5 text-accent" />,
  };

  return (
    <section id="skills" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-mono text-accent tracking-[0.2em] uppercase">02 // CAPABILITIES</span>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Technical Skills
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-md">
            Disciplined software engineering toolsets, mathematical algorithms, and modern interface frameworks.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((group) => (
            <div
              key={group.groupName}
              className="p-7 rounded-xl bg-zinc-950/60 border border-white/[0.08] hover:border-white/20 transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/10 group-hover:border-accent/40 transition-colors">
                    {categoryIcons[group.groupName] || <Code2 className="w-5 h-5 text-accent" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-tight">
                      {group.groupName}
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                  {group.items.length} {group.items.length === 1 ? 'Skill' : 'Skills'}
                </span>
              </div>

              <p className="text-xs text-zinc-400 font-mono mb-6 leading-relaxed">
                {group.summary}
              </p>

              {/* Skills Items */}
              <div className="space-y-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-lg bg-zinc-900/50 border border-white/[0.06] hover:border-accent/30 hover:bg-zinc-900/80 transition-all duration-200 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <div>
                        <span className="text-sm font-medium text-zinc-100 block">
                          {skill.name}
                        </span>
                        {skill.note && (
                          <span className="text-[11px] text-zinc-400 font-mono block">
                            {skill.note}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-white/5">
                      {skill.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Summary Banner */}
        <div className="mt-12 p-6 rounded-xl bg-zinc-950/40 border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-accent">●</span>
            <span className="text-xs sm:text-sm text-zinc-300">
              Continuously deepening proficiency through hands-on system building and algorithmic problem solving.
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
            Verified Stack
          </span>
        </div>

      </div>
    </section>
  );
};
