import React, { useState } from 'react';
import { 
  Code2, 
  BarChart3, 
  Cpu, 
  BrainCircuit, 
  Sparkles, 
  Wrench, 
  Check, 
  Search,
  Layers,
  Terminal
} from 'lucide-react';
import { skillsData } from '../data/skills';

export const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#00A6D6]" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#00A6D6]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#00A6D6]" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-[#00A6D6]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#00A6D6]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#00A6D6]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#00A6D6]" />;
    }
  };

  // Filter skills based on search term
  const filteredCategories = skillsData.map((cat) => ({
    ...cat,
    skills: cat.skills.filter((skill) =>
      skill.toLowerCase().includes(searchTerm.toLowerCase().trim())
    ),
  })).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 px-6 sm:px-12 md:px-16 lg:px-20 bg-[#0B1120] text-white border-t border-[#1F293D]/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#00A6D6] font-bold">
              Technical Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white tracking-tight">
              Skills & Tech Stack
            </h2>
            <div className="w-16 h-1 bg-[#00A6D6] rounded mt-3" />
            <p className="text-sm text-gray-400 mt-4 max-w-2xl">
              Categorized competencies across core programming, classical machine learning, neural architectures, and generative/agentic engineering without arbitrary percentage bars.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skills (e.g. RAG, Python)..."
              className="w-full bg-[#111827] border border-[#1F293D] focus:border-[#00A6D6] rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 6 Category Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#111827] border border-[#1F293D] rounded-xl p-6 hover:border-[#00A6D6]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00A6D6]/5 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-[#050B14] border border-gray-800 group-hover:border-[#00A6D6]/40 transition-colors">
                    {getIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white group-hover:text-[#00A6D6] transition-colors">
                      {cat.category}
                    </h3>
                    <span className="text-[11px] text-gray-500 font-mono">
                      {cat.skills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Category Description */}
                <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#050B14] text-xs font-medium text-gray-300 border border-gray-800/90 hover:text-white hover:border-[#00A6D6]/60 transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A6D6]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>Production & Labs</span>
                <span className="text-[#00A6D6]">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-[#111827] rounded-xl border border-dashed border-gray-800">
            <p className="text-gray-400 text-sm">
              No skills found matching "<span className="text-white font-semibold">{searchTerm}</span>"
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-3 text-xs text-[#00A6D6] hover:underline"
            >
              Reset Search Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

