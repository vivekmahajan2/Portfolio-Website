import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Sparkles, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'In Progress':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Prototype':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0F172A] border border-[#1F293D] rounded-2xl shadow-2xl text-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg bg-[#1E293B] hover:bg-gray-800 transition-colors border border-gray-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Thumbnail Preview Banner */}
        <div className="relative aspect-video sm:aspect-[21/9] rounded-xl overflow-hidden border border-[#1F293D] mb-6">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
          
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded text-xs font-semibold border ${getStatusBadge(project.status)}`}>
              ● {project.status}
            </span>
            <span className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-[#050B14]/80 text-[#00A6D6] border border-[#00A6D6]/40 backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Header Title & Tagline */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          {project.title}
        </h2>
        <p className="text-sm sm:text-base text-[#00A6D6] font-medium mt-1">
          {project.tagline}
        </p>

        {/* Full Overview Description */}
        <div className="mt-6 space-y-4">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">
              System Overview & Problem Statement
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <div className="p-4 rounded-xl bg-[#050B14] border border-[#1F293D]">
              <h4 className="text-xs uppercase tracking-wider text-[#00A6D6] font-bold mb-1.5 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#00A6D6]" />
                Architectural Data Flow
              </h4>
              <p className="text-xs font-mono text-gray-300 leading-relaxed">
                {project.architectureNotes}
              </p>
            </div>
          )}

          {/* Technical Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">
                Key Technical Highlights & Implementation
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#00A6D6] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded bg-[#1E293B] text-gray-200 text-xs font-mono border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-6 border-t border-[#1F293D] flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-gray-500 italic">
            * Portfolio showcase entry with prototype artifacts.
          </p>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1E293B] hover:bg-gray-800 text-white text-xs font-semibold border border-gray-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00A6D6] hover:bg-[#0090BB] text-white text-xs font-semibold transition-colors"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

