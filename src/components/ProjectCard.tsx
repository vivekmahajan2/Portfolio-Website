import React from 'react';
import { Github, ExternalLink, Eye, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
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
    <div className="bg-[#111827] border border-[#1F293D] rounded-xl overflow-hidden hover:border-[#00A6D6]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00A6D6]/10 flex flex-col justify-between group">
      <div>
        {/* Thumbnail Preview Area */}
        <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-90" />

          {/* Status Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border backdrop-blur-sm ${getStatusBadge(project.status)}`}>
              ● {project.status}
            </span>
          </div>

          {/* Quick Category Pill */}
          <div className="absolute top-3 right-3">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#050B14]/80 text-[#00A6D6] border border-[#00A6D6]/30 backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Hover overlay quick action */}
          <button
            onClick={() => onOpenDetails(project)}
            type="button"
            className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2 text-white text-xs font-semibold backdrop-blur-[2px]"
          >
            <Eye className="w-4 h-4 text-[#00A6D6]" />
            <span>Click to View Full Details</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5">
          <h3 
            onClick={() => onOpenDetails(project)}
            className="text-lg font-bold text-white group-hover:text-[#00A6D6] transition-colors cursor-pointer"
          >
            {project.title}
          </h3>

          <p className="text-xs font-medium text-[#00A6D6] mt-0.5 mb-3">
            {project.tagline}
          </p>

          <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#050B14] text-gray-400 border border-gray-800"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#050B14] text-[#00A6D6]">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 py-3.5 bg-[#0D1424] border-t border-[#1F293D] flex items-center justify-between">
        <button
          onClick={() => onOpenDetails(project)}
          type="button"
          className="text-xs font-medium text-gray-300 hover:text-[#00A6D6] flex items-center gap-1 transition-colors"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View GitHub Repository"
            aria-label="GitHub Repository"
            className="p-1.5 text-gray-400 hover:text-white hover:bg-[#1F293D] rounded transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Live Prototype Demo"
              aria-label="Live Demo"
              className="p-1.5 text-[#00A6D6] hover:text-white hover:bg-[#00A6D6] rounded transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

