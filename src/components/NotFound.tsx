import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

interface NotFoundProps {
  onBackToHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <span className="text-6xl sm:text-8xl font-mono font-extrabold text-[#00A6D6] tracking-tighter">
          404
        </span>
        <h1 className="text-2xl font-bold mt-4">Page Not Found</h1>
        <p className="text-sm text-gray-400 mt-2">
          The requested section or address does not exist or has been relocated in the portfolio architecture.
        </p>
        <button
          onClick={onBackToHome}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00A6D6] hover:bg-[#0090BB] text-white text-xs font-semibold transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Portfolio Home</span>
        </button>
      </div>
    </div>
  );
};

