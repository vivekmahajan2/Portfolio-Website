import React from 'react';
import {
  FileText,
  Download,
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle,
  ExternalLink,
  Code
} from 'lucide-react';
import { personalInfo } from '../data/personal';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 px-6 sm:px-12 md:px-16 lg:px-20 bg-[#0B1120] text-white border-t border-[#1F293D]/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#00A6D6] font-bold">
              Background & Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white tracking-tight">
              Resume & Journey
            </h2>
            <div className="w-16 h-1 bg-[#00A6D6] rounded mt-3" />
            <p className="text-sm text-gray-400 mt-4 max-w-xl">
              An authentic representation of academic coursework, foundational computer science training, and end-to-end AI project architectures.
            </p>
          </div>

          <a
            href="/resume.pdf"
            download="Vivek_Mahajan_Resume.pdf"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#00A6D6] hover:bg-[#0090BB] text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-[#00A6D6]/20 self-start md:self-auto hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            <span>Download Full Resume (PDF)</span>
          </a>
        </div>

        {/* Timeline Grid: Education & Summary vs Project Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Summary & Education */}
          <div className="lg:col-span-5 space-y-10">
            {/* Professional Summary Box */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-[#00A6D6]" />
                <h3 className="text-xl font-bold text-white">Summary</h3>
              </div>
              <div className="relative pl-6 border-l-2 border-[#1F293D]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#050B14] border-2 border-[#00A6D6]" />
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                  {personalInfo.name}
                </h4>
                <p className="text-xs font-semibold text-[#00A6D6] mt-1">
                  {personalInfo.role}
                </p>
                <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                  {personalInfo.bio}
                </p>
                <ul className="mt-4 space-y-2 text-xs text-gray-400">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#00A6D6]" />
                    <span>{personalInfo.location}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-semibold text-gray-300">Degree Status:</span>
                    <span>{personalInfo.education.status}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-semibold text-gray-300">CGPA:</span>
                    <span className="text-white font-bold">{personalInfo.education.cgpa}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Education Timeline */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-[#00A6D6]" />
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-[#1F293D] space-y-8">
                {/* Final Year Engineering */}
                <div className="relative">
                  <div className="absolute -left-[33px] top-0.5 w-4 h-4 rounded-full bg-[#050B14] border-2 border-[#00A6D6]" />
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#111827] text-[#00A6D6] border border-[#1F293D] mb-2 font-mono">
                    {personalInfo.education.period}
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {personalInfo.education.degree}
                  </h4>
                  <p className="text-sm font-medium text-gray-300 mt-1">
                    {personalInfo.education.institution}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-gray-400">Academic Standing:</span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      CGPA: {personalInfo.education.cgpa}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    Relevant Key Coursework:
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {personalInfo.education.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#111827] text-gray-300 border border-gray-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Experience & Applied Engineering */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-[#00A6D6]" />
              <h3 className="text-xl font-bold text-white">
                Technical Experience & Project Leadership
              </h3>
            </div>
            <p className="text-xs text-gray-400 mb-6 italic">
              * Detailed project-based architectural experience, research prototypes, and applied open-source implementations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

