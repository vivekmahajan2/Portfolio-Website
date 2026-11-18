import React from 'react';
import { ChevronDown, ArrowRight, Download, Terminal, Sparkles, BrainCircuit, Cpu } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { useTypingEffect } from '../hooks/useTypingEffect';

export const Hero: React.FC = () => {
  const typedRole = useTypingEffect(personalInfo.subtitles, 80, 45, 1800);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center lg:justify-start px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden bg-[#0B1120]"
    >
      {/* Dynamic AI / Neural Geometric Ambient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep ambient glow orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#00A6D6]/10 blur-3xl animate-pulse-subtle" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 left-10 w-80 h-80 rounded-full bg-[#00A6D6]/5 blur-3xl" />

        {/* Precision Tech Grid */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(#00A6D6 1px, transparent 1px), linear-gradient(90deg, #00A6D6 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Abstract AI Neural Network Vectors on the Right */}
        <svg 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-20 hidden md:block" 
          viewBox="0 0 600 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#00A6D6" strokeWidth="1">
            <line x1="100" y1="150" x2="250" y2="100" />
            <line x1="100" y1="150" x2="220" y2="280" />
            <line x1="250" y1="100" x2="420" y2="180" />
            <line x1="220" y1="280" x2="420" y2="180" />
            <line x1="220" y1="280" x2="350" y2="450" />
            <line x1="420" y1="180" x2="520" y2="340" />
            <line x1="350" y1="450" x2="520" y2="340" />
            <line x1="100" y1="150" x2="160" y2="400" />
            <line x1="160" y1="400" x2="350" y2="450" />
          </g>
          {/* Glowing Neural Nodes */}
          <circle cx="100" cy="150" r="5" fill="#00A6D6" />
          <circle cx="250" cy="100" r="6" fill="#38BDF8" />
          <circle cx="220" cy="280" r="7" fill="#00A6D6" />
          <circle cx="420" cy="180" r="8" fill="#38BDF8" />
          <circle cx="350" cy="450" r="6" fill="#00A6D6" />
          <circle cx="520" cy="340" r="7" fill="#38BDF8" />
          <circle cx="160" cy="400" r="5" fill="#00A6D6" />
        </svg>

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-[#0B1120]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl pt-20 lg:pt-0">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827]/90 border border-[#1F293D] backdrop-blur-md text-xs font-medium text-gray-300 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#00A6D6] animate-pulse" />
          <span className="text-[#00A6D6] font-semibold">Aspiring AI/ML Engineer</span>
          <span className="text-gray-500">•</span>
          <span>Open to Roles & Collaborations</span>
        </div>

        {/* Large Name Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-sans leading-[1.1]">
          {personalInfo.name}
        </h1>

        {/* Dynamic Typing Subtitle */}
        <div className="mt-4 sm:mt-5 text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium flex flex-wrap items-center gap-2">
          <span>I'm</span>
          <span className="text-[#00A6D6] font-semibold underline decoration-[#00A6D6]/40 underline-offset-8">
            {typedRole}
          </span>
          <span className="w-0.5 h-7 sm:h-8 bg-[#00A6D6] animate-pulse inline-block" />
        </div>

        {/* Professional Summary Sentence */}
        <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl font-normal">
          {personalInfo.bio}
        </p>

        {/* Key Quick Badges */}
        <div className="flex flex-wrap gap-2 mt-6">
          {["Generative AI", "RAG Architectures", "Agentic Systems", "Machine Learning", "FastAPI"].map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded bg-[#111827] text-gray-300 border border-gray-800 font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Two Call To Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#00A6D6] hover:bg-[#0090BB] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#00A6D6]/20 hover:shadow-xl hover:shadow-[#00A6D6]/30 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore My Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/resume.pdf"
            download="Vivek_Mahajan_Resume.pdf"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#111827] hover:bg-[#172033] text-white font-semibold text-sm border border-[#1F293D] hover:border-[#00A6D6]/50 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#00A6D6]" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        onClick={handleScrollDown}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-20 lg:translate-x-0 z-10 flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-[#00A6D6] transition-colors group cursor-pointer"
      >
        <span className="uppercase tracking-widest text-[11px]">Scroll Down</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#00A6D6]" />
      </a>
    </section>
  );
};
