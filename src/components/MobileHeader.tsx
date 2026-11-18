import React from 'react';
import { Menu } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { ThemeToggle } from './ThemeToggle';

interface MobileHeaderProps {
  onToggleSidebar: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  onToggleSidebar,
  theme,
  toggleTheme,
}) => {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#050B14]/90 backdrop-blur-md border-b border-[#1F293D] px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-[#00A6D6] bg-gray-900 flex items-center justify-center">
          <img
            src="/images/avatar-vm.svg"
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <span className="font-bold text-sm text-white tracking-tight block">
            {personalInfo.name}
          </span>
          <span className="text-[10px] text-[#00A6D6] uppercase tracking-wider block font-semibold">
            {personalInfo.role}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <button
          onClick={onToggleSidebar}
          type="button"
          className="p-2 rounded-lg bg-[#111827] text-white hover:bg-[#00A6D6] transition-colors border border-gray-800"
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
