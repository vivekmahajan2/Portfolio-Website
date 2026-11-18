import React from 'react';
import { 
  Cpu, 
  Layers, 
  Sparkles, 
  Database, 
  Bot, 
  BarChart3, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { servicesData } from '../data/services';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#00A6D6]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#00A6D6]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#00A6D6]" />;
      case 'Database':
        return <Database className="w-6 h-6 text-[#00A6D6]" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-[#00A6D6]" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-[#00A6D6]" />;
      default:
        return <Cpu className="w-6 h-6 text-[#00A6D6]" />;
    }
  };

  return (
    <section id="services" className="py-20 px-6 sm:px-12 md:px-16 lg:px-20 bg-[#0B1120] text-white border-t border-[#1F293D]/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-[#00A6D6] font-bold">
            Areas of Interest & Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white tracking-tight">
            Services & Technical Capabilities
          </h2>
          <div className="w-16 h-1 bg-[#00A6D6] rounded mt-3" />
          <p className="text-sm text-gray-400 mt-4 max-w-2xl">
            Applied technical specializations and collaboration opportunities offered for research projects, startup engineering, and AI prototype development.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#111827] border border-[#1F293D] rounded-xl p-6 hover:border-[#00A6D6]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00A6D6]/5 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-lg bg-[#050B14] border border-gray-800 group-hover:border-[#00A6D6]/40 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-2xl font-mono font-bold text-gray-700 group-hover:text-[#00A6D6]/40 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#00A6D6] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-[#00A6D6] font-medium mt-1 mb-3">
                  {service.shortDesc}
                </p>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Technologies List */}
              <div className="mt-6 pt-4 border-t border-gray-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#050B14] text-gray-400 border border-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Notice */}
        <div className="mt-12 p-6 rounded-xl bg-[#050B14] border border-[#1F293D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white">Have a project or internship opening?</h4>
            <p className="text-xs text-gray-400 mt-1">
              I am eager to contribute to innovative AI/ML pipelines and collaborate with engineering teams.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00A6D6] hover:bg-[#0090BB] text-white text-xs font-semibold whitespace-nowrap transition-colors"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

