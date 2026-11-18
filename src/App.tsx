import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MobileHeader } from './components/MobileHeader';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NotFound } from './components/NotFound';
import { useActiveSection } from './hooks/useActiveSection';
import { useTheme } from './hooks/useTheme';

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [is404, setIs404] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const sectionIds = [
    'home',
    'about',
    'resume',
    'skills',
    'projects',
    'services',
    'contact',
  ];

  const activeSection = useActiveSection(sectionIds, 150);

  if (is404) {
    return <NotFound onBackToHome={() => setIs404(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-[#00A6D6] selection:text-white">
      {/* Mobile Top Navigation Header */}
      <MobileHeader
        onToggleSidebar={() => setIsSidebarOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Fixed Left Sidebar for Desktop & Offcanvas for Mobile */}
      <Sidebar
        activeSection={activeSection}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Scrollable Content Area */}
      <main className="lg:pl-72 w-full transition-all duration-300">
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
