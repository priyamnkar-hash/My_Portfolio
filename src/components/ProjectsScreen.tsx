import React, { useState } from 'react';
import { PROJECTS_ARCHIVE } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsScreenProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'All' | 'Engineering' | 'Code'>('All');

  const filteredProjects = PROJECTS_ARCHIVE.filter((p) => {
    if (filter === 'All') return true;
    return p.tags.includes(filter) || p.category === filter;
  });

  return (
    <div id="projects-screen" className="relative min-h-screen pt-28 md:pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Blueprint Background Grid */}
      <div className="fixed inset-0 pointer-events-none blueprint-grid opacity-60 z-0"></div>

      {/* Header Section (Asymmetric Layout) */}
      <header className="relative z-10 mb-14 md:mb-20 max-w-3xl">
        <div className="mb-4 inline-block">
          <span className="font-label text-[#61de8a] text-[0.75rem] uppercase tracking-[0.2em] font-bold">
            PROJECT ARCHIVE // 2024
          </span>
        </div>
        <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-[#e2e2e5] mb-8">
          Engineered Solutions <br className="hidden md:block" /> &amp; Technical Architecture.
        </h1>
        <p className="text-[#c0c7d1] text-lg md:text-xl leading-relaxed max-w-2xl font-light">
          A curated selection of works merging structural precision with algorithmic logic. Exploring the intersection of digital frameworks and physical infrastructure.
        </p>

        {/* Filter Controls */}
        <div className="flex items-center gap-2 mt-8 pt-4 border-t border-[#40484f]/20">
          <span className="font-label text-xs uppercase tracking-widest text-[#8a919a] mr-2">Filter:</span>
          {(['All', 'Engineering', 'Code'] as const).map((category) => (
            <button
              key={category}
              id={`filter-btn-${category.toLowerCase()}`}
              onClick={() => setFilter(category)}
              className={`font-label text-[0.7rem] uppercase tracking-wider px-3.5 py-1.5 rounded-sm transition-all ${
                filter === category
                  ? 'bg-[#92ccff] text-[#001e31] font-bold'
                  : 'bg-[#1e2022] text-[#8a919a] hover:text-[#92ccff] hover:bg-[#282a2c]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      {/* Projects Grid */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          const isFeaturedSpan = project.featured && filter === 'All';

          if (isFeaturedSpan) {
            // Project Card 4 (Asymmetric Fill - 2 columns on medium & large screens)
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group relative flex flex-col md:flex-row bg-[#1e2022] hover:bg-[#282a2c] transition-colors duration-300 md:col-span-2 rounded-lg overflow-hidden border border-[#40484f]/20 hover:border-[#92ccff]/30 shadow-lg cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <div className="md:w-1/2 aspect-[16/9] md:aspect-auto overflow-hidden bg-[#333537]">
                  <img
                    src={project.image}
                    alt={project.altText}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-label bg-[#36485b] text-[#a4b7cd] px-3 py-1 text-[0.65rem] uppercase tracking-wider rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="font-label text-[#8a919a] text-[0.6rem] tracking-widest font-bold">
                      {project.serialNumber}
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4 text-[#e2e2e5] group-hover:text-[#92ccff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#c0c7d1] text-base leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <button
                    id={`view-specs-btn-${project.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="inline-flex items-center gap-2 font-label text-[#61de8a] text-[0.75rem] uppercase tracking-widest hover:gap-4 transition-all w-fit"
                  >
                    View Specs{' '}
                    <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            );
          }

          // Standard 1-col Card (Cards 1, 2, 3)
          return (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative flex flex-col bg-[#1e2022] hover:bg-[#282a2c] transition-colors duration-300 rounded-lg overflow-hidden border border-[#40484f]/20 hover:border-[#92ccff]/30 shadow-lg cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#333537]">
                <img
                  src={project.image}
                  alt={project.altText}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-label bg-[#36485b] text-[#a4b7cd] px-3 py-1 text-[0.65rem] uppercase tracking-wider rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="font-label text-[#8a919a] text-[0.6rem] tracking-widest font-bold">
                      {project.serialNumber}
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4 text-[#e2e2e5] group-hover:text-[#92ccff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#c0c7d1] text-sm md:text-base leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>
                <button
                  id={`view-specs-btn-${project.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                  className="inline-flex items-center gap-2 font-label text-[#61de8a] text-[0.75rem] uppercase tracking-widest hover:gap-4 transition-all w-fit"
                >
                  View Specs{' '}
                  <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
