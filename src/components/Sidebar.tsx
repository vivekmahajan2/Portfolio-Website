import React from 'react';
import { 
  Home, 
  User, 
  FileText, 
  Cpu, 
  FolderGit2, 
  Sparkles, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram, 
  X
} from 'lucide-react';
import { personalInfo } from '../data/personal';
import { ThemeToggle } from './ThemeToggle';

interface SidebarProps {
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  isOpen,
  onClose,
  theme,
  toggleTheme,
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'services', label: 'Services', icon: Sparkles },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
    if (isOpen) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-black/75 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 lg:w-72 bg-[#050B14] text-white flex flex-col justify-between py-7 px-5 border-r border-[#1F293D]/60 transition-transform duration-300 ease-in-out select-none overflow-y-auto ${
          isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Mobile close button */}
        <button
          onClick={onClose}
          type="button"
          className="lg:hidden absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg bg-[#111827] border border-gray-800"
          aria-label="Close navigation sidebar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Card / Top Section */}
        <div className="flex flex-col items-center text-center pt-2">
          {/* Avatar Monogram */}
          <div className="relative group">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#1F293D] group-hover:border-[#00A6D6] transition-all duration-300 shadow-xl ring-2 ring-[#00A6D6]/20 bg-[#111827] flex items-center justify-center">
              <img
                src="/images/avatar-vm.svg"
                alt={personalInfo.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Online status indicator */}
            <span 
              className="absolute bottom-1 right-2 w-4 h-4 bg-emerald-500 border-2 border-[#050B14] rounded-full" 
              title="Available for opportunities"
            />
          </div>

          {/* Name & Sub-badge */}
          <h1 className="mt-4 text-xl font-bold tracking-tight text-white group-hover:text-[#00A6D6] transition-colors">
            <a href="#home" onClick={(e) => handleNavClick('home', e)}>
              {personalInfo.name}
            </a>
          </h1>
          <p className="text-xs uppercase tracking-widest text-[#00A6D6] font-semibold mt-1">
            {personalInfo.role}
          </p>

          {/* Social Icons row */}
          <div className="flex items-center gap-2 mt-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-full bg-[#111827] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#00A6D6] transition-all duration-200 border border-gray-800"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full bg-[#111827] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#00A6D6] transition-all duration-200 border border-gray-800"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-9 h-9 rounded-full bg-[#111827] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#00A6D6] transition-all duration-200 border border-gray-800"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="w-9 h-9 rounded-full bg-[#111827] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#00A6D6] transition-all duration-200 border border-gray-800"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Links (Without Certifications) */}
        <nav className="my-6">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className={`flex items-center gap-3.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative ${
                      isActive
                        ? 'text-white bg-[#00A6D6]/15 font-semibold'
                        : 'text-gray-400 hover:text-white hover:bg-[#111827]/70'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-[#00A6D6] rounded-r" />
                    )}

                    <Icon
                      className={`w-5 h-5 transition-colors duration-200 ${
                        isActive
                          ? 'text-[#00A6D6]'
                          : 'text-gray-500 group-hover:text-[#00A6D6]'
                      }`}
                    />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sidebar Footer Area */}
        <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for work</span>
          </div>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </aside>
    </>
  );
};
