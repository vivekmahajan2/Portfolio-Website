import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/personal';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050B14] border-t border-[#1F293D] text-white py-12 px-6 sm:px-12 md:px-16 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Title */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-white tracking-tight">
            {personalInfo.name}
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            {personalInfo.role} • {personalInfo.tagline}
          </p>
          <p className="text-[11px] text-gray-500 mt-2 font-mono">
            MIT College, Final Year • Maharashtra, India
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-full bg-[#111827] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#00A6D6] transition-colors border border-gray-800"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full bg-[#111827] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#00A6D6] transition-colors border border-gray-800"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full bg-[#111827] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#00A6D6] transition-colors border border-gray-800"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="w-9 h-9 rounded-full bg-[#111827] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#00A6D6] transition-colors border border-gray-800"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-gray-400">
          <span>
            © {currentYear} <span className="text-white font-medium">{personalInfo.name}</span>. All rights reserved.
          </span>

          <button
            onClick={handleScrollTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111827] hover:bg-[#00A6D6] text-gray-300 hover:text-white border border-gray-800 transition-colors cursor-pointer group"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

