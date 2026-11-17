import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-[#f4f4f5] selection:bg-[#0066FF] selection:text-white relative">
      {/* Precision Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Portfolio Sections */}
      <main>
        {/* Hero Section with Interactive 3D Element */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 01: About Section */}
        <About />

        {/* 02: Technical Skills */}
        <Skills />

        {/* 03: Selected Projects */}
        <Projects />

        {/* 04: Certifications */}
        <Certifications />

        {/* 05: Contact & Inquiries */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Overview & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
