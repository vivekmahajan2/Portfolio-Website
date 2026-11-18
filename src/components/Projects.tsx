import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Sparkles, Layers, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'Machine Learning',
    'Deep Learning',
    'Generative AI',
    'Agentic AI',
    'Full Stack AI',
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 sm:px-12 md:px-16 lg:px-20 bg-[#0B1120] text-white border-t border-[#1F293D]/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#00A6D6] font-bold">
              Engineering Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white tracking-tight">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-[#00A6D6] rounded mt-3" />
            <p className="text-sm text-gray-400 mt-4 max-w-2xl">
              Architectural prototypes and applied AI systems spanning predictive ML algorithms, RAG knowledge retrieval, real-time streaming, and autonomous multi-agent pipelines.
            </p>
          </div>

          <div className="text-xs font-mono text-gray-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00A6D6]" />
            <span>Showing {filteredProjects.length} of {projectsData.length} projects</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#1F293D]/60">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 mr-2 py-1">
            <Filter className="w-3.5 h-3.5 text-[#00A6D6]" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#00A6D6] text-white shadow-md shadow-[#00A6D6]/20 font-semibold'
                    : 'bg-[#111827] text-gray-300 hover:text-white hover:bg-gray-800 border border-[#1F293D]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#111827] rounded-xl border border-dashed border-gray-800">
            <p className="text-gray-400 text-sm">
              No projects categorized under "{activeCategory}" yet.
            </p>
            <button
              onClick={() => setActiveCategory('All')}
              className="mt-3 text-xs text-[#00A6D6] hover:underline"
            >
              View All Projects
            </button>
          </div>
        )}

        {/* Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

