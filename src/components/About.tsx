import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  ChevronRight,
  Terminal,
  Cpu,
  BrainCircuit,
  Activity,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/personal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 sm:px-12 md:px-16 lg:px-20 bg-[#0B1120] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-[#00A6D6] font-bold">
            Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#00A6D6] rounded mt-3" />
        </div>

        {/* Intro Paragraph */}
        <p className="text-lg text-gray-300 leading-relaxed max-w-4xl font-normal mb-12">
          {personalInfo.extendedBio}
        </p>

        {/* Two-Column Profile & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Personalized AI Engineer Identity & Terminal Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl overflow-hidden border border-[#1F293D] bg-[#111827] shadow-xl group hover:border-[#00A6D6]/50 transition-all duration-300">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-[#050B14] border-b border-[#1F293D] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400">
                  <Terminal className="w-3.5 h-3.5 text-[#00A6D6]" />
                  <span>engineer.profile</span>
                </div>
              </div>

              {/* Central Identity Graphic */}
              <div className="p-6 bg-gradient-to-b from-[#0F172A] to-[#111827] flex flex-col items-center text-center border-b border-[#1F293D]">
                <div className="w-24 h-24 rounded-full border-2 border-[#00A6D6] p-1 bg-[#050B14] shadow-lg shadow-[#00A6D6]/10 mb-4 flex items-center justify-center">
                  <img
                    src="/images/avatar-vm.svg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-bold text-white text-lg">{personalInfo.name}</h3>
                <p className="text-xs text-[#00A6D6] font-semibold mt-0.5">{personalInfo.role}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#050B14] border border-[#1F293D] text-[11px] font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Final Year • MIT College</span>
                </div>
              </div>

              {/* Quick Spec Rows */}
              <div className="p-5 space-y-3 text-xs bg-[#111827]">
                <div className="flex items-center justify-between pb-2 border-b border-gray-800">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <BrainCircuit className="w-3.5 h-3.5 text-[#00A6D6]" />
                    Domain Focus
                  </span>
                  <span className="text-white font-medium">GenAI, RAG, ML</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-gray-800">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#00A6D6]" />
                    Academic CGPA
                  </span>
                  <span className="text-emerald-400 font-mono font-bold">{personalInfo.education.cgpa}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-gray-800">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#00A6D6]" />
                    Location
                  </span>
                  <span className="text-white font-medium">{personalInfo.location}</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    Status
                  </span>
                  <span className="text-emerald-400 font-semibold">Available for Roles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Education */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                AI/ML Engineer & Generative AI Developer
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Passionate about turning mathematical concepts and cutting-edge model research into operational software. Focused on creating resilient RAG systems, modular multi-agent workflows, and predictive machine learning models that deliver clear real-world utility.
              </p>
            </div>

            {/* Quick Metadata Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[#1F293D]">
              <div className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4 text-[#00A6D6] shrink-0" />
                <span className="text-gray-400 text-sm">Education:</span>
                <span className="text-white text-sm font-semibold">{personalInfo.education.institution}</span>
              </div>
              <div className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4 text-[#00A6D6] shrink-0" />
                <span className="text-gray-400 text-sm">Degree:</span>
                <span className="text-white text-sm font-semibold">Final-year Engineering</span>
              </div>
              <div className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4 text-[#00A6D6] shrink-0" />
                <span className="text-gray-400 text-sm">Academic CGPA:</span>
                <span className="text-[#00A6D6] text-sm font-bold bg-[#00A6D6]/10 px-2 py-0.5 rounded border border-[#00A6D6]/30">
                  {personalInfo.education.cgpa}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4 text-[#00A6D6] shrink-0" />
                <span className="text-gray-400 text-sm">Location:</span>
                <span className="text-white text-sm font-semibold">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4 text-[#00A6D6] shrink-0" />
                <span className="text-gray-400 text-sm">Primary Focus:</span>
                <span className="text-white text-sm font-semibold">ML, RAG & Agentic Systems</span>
              </div>
              <div className="flex items-center gap-3">
                <ChevronRight className="w-4 h-4 text-[#00A6D6] shrink-0" />
                <span className="text-gray-400 text-sm">Status:</span>
                <span className="text-emerald-400 text-sm font-semibold">Open for Roles / Internships</span>
              </div>
            </div>

            {/* Areas of Interest Tags */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                Core Areas of Interest & Research
              </h4>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111827] text-gray-200 text-xs font-medium border border-[#1F293D] hover:border-[#00A6D6] transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-[#00A6D6]" />
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Honest Achievement & Statistic Cards */}
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#111827] border border-[#1F293D] hover:border-[#00A6D6]/50 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A6D6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="text-3xl sm:text-4xl font-extrabold text-[#00A6D6] font-mono">
                  {stat.value}
                </div>
                <h4 className="font-bold text-white text-base mt-2">
                  {stat.label}
                </h4>
                <p className="text-xs font-semibold text-gray-400 mt-1 uppercase tracking-wider">
                  {stat.subtext}
                </p>
                <p className="text-xs text-gray-400 mt-3 border-t border-gray-800/80 pt-3 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">
            * All figures represent hands-on engineering builds and verified coursework. No inflated metrics.
          </p>
        </div>
      </div>
    </section>
  );
};
