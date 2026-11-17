import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Download, ExternalLink, GraduationCap, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, about, skills, projects, certifications, contact } = portfolioData;

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c0c0e] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-zinc-950/60">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent block">
              Curriculum Vitae // Overview
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {personal.name} — Resume
            </h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-xs font-mono flex items-center space-x-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans">
          
          {/* Header Summary */}
          <div className="border-b border-white/[0.08] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="text-2xl font-extrabold text-white">{personal.name}</h3>
              <span className="text-xs font-mono text-zinc-400">{contact.location}</span>
            </div>
            <p className="text-sm font-mono text-accent mb-3">{personal.role}</p>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {personal.intro}
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
              <span>Email: <a href={contact.emailHref} className="text-zinc-200 hover:text-accent transition-colors underline">{contact.email}</a></span>
              <span>Phone: <a href={contact.phoneHref} className="text-zinc-200 hover:text-accent transition-colors underline">{contact.phone}</a></span>
              <span>GitHub: <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-accent transition-colors underline">{contact.githubUsername}</a></span>
              <span>LinkedIn: <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-accent transition-colors underline">Sanjay G.P.</a></span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-accent mb-3 flex items-center space-x-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h4>
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 space-y-1.5">
              {about.academic.institution && (
                <div className="text-xs font-mono text-accent">{about.academic.institution}</div>
              )}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-sm font-semibold text-white">{about.academic.specialization}</span>
                <span className="text-xs font-mono text-zinc-400">{about.academic.degree}</span>
              </div>
              <p className="text-xs text-zinc-400">{about.academic.focus}</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-accent mb-3">
              Technical Competencies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((grp) => (
                <div key={grp.groupName} className="p-3.5 rounded-lg bg-zinc-900/40 border border-white/5">
                  <span className="text-xs font-medium text-white block mb-1.5">{grp.groupName}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {grp.items.map((it) => (
                      <span key={it.name} className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800 text-zinc-300">
                        {it.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-accent mb-3">
              Featured Engineering Projects
            </h4>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{proj.title} – {proj.subtitle}</span>
                    <span className="text-[10px] font-mono text-accent uppercase">{proj.category}</span>
                  </div>
                  <p className="text-xs text-zinc-300">{proj.description}</p>
                  <ul className="space-y-1">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent/80 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {proj.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-zinc-400 bg-black/40 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-accent mb-3">
              Professional Certifications & Accreditations ({certifications.length})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((c) => (
                <div key={c.id} className="p-3 rounded-lg bg-zinc-900/40 border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase">{c.issuer}</span>
                      {c.issueDate && <span className="text-[10px] font-mono text-zinc-500">{c.issueDate}</span>}
                    </div>
                    <div className="text-xs font-medium text-white">{c.title}</div>
                  </div>
                  {c.credentialUrl && (
                    <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[9px] font-mono text-zinc-500 truncate max-w-[130px]">
                        {c.credentialId ? `ID: ${c.credentialId}` : 'Verified'}
                      </span>
                      <a
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono text-accent hover:underline flex items-center space-x-1"
                      >
                        <span>Verify</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-zinc-950 flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>Editable data via portfolioData.ts</span>
          <a
            href={contact.emailHref}
            className="text-accent hover:underline flex items-center space-x-1"
          >
            <span>Direct Email</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
};
