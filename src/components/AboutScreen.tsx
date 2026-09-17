import React, { useState } from 'react';
import {
  ENGINEERING_SKILLS,
  PROGRAMMING_SKILLS,
  EDUCATION_DATA,
  ABOUT_DESK_IMAGE,
} from '../data/portfolioData';

export const AboutScreen: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  return (
    <div id="about-screen" className="relative min-h-screen pt-28 md:pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Structural Background Lines */}
      <div className="fixed inset-0 pointer-events-none blueprint-grid opacity-60 z-0"></div>
      <div className="absolute top-0 right-0 w-px h-full bg-[#40484f] opacity-10 -mr-4 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-[#40484f] opacity-10 mt-24 pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-10 mb-14 md:mb-20">
        <span className="font-label text-[#61de8a] text-[0.75rem] uppercase tracking-[0.2em] block mb-4 font-bold">
          LOG_02 // PROFILE_SPEC
        </span>
        <h1 className="font-headline text-5xl md:text-7xl font-bold -tracking-[0.04em] text-[#e2e2e5]">
          The Engineer <br />&amp; Coder.
        </h1>
      </header>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Story */}
        <div className="lg:col-span-5 space-y-10 md:space-y-12">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#92ccff]"></div>
              <h2 className="font-headline text-2xl font-semibold text-[#e2e2e5]">
                Evolution of Craft
              </h2>
            </div>
            <p className="text-lg text-[#c0c7d1] leading-relaxed mb-6">
              Bridging the gap between physical durability and digital scalability. My journey began in the world of heavy steel and concrete structures, where precision isn&apos;t just a requirement—it&apos;s a safety mandate.
            </p>
            <p className="text-lg text-[#c0c7d1] leading-relaxed">
              Transitioning into software development, I applied the same structural rigor to code architecture. I don&apos;t just build apps; I engineer digital foundations that are resilient, modular, and performance-optimized.
            </p>
          </section>

          {/* Education.sys */}
          <section className="bg-[#1e2022] p-8 border-l-4 border-[#61de8a] rounded-r-lg shadow-md">
            <span className="font-label text-[#61de8a] text-[0.65rem] uppercase tracking-widest mb-6 block font-bold">
              Education.sys
            </span>
            <div className="space-y-8">
              {EDUCATION_DATA.map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l border-[#40484f]/40">
                  <div
                    className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ${
                      item.active ? 'bg-[#61de8a] ring-4 ring-[#61de8a]/20' : 'bg-[#8a919a]'
                    }`}
                  ></div>
                  <div className="mb-1 flex justify-between items-baseline gap-2">
                    <h4 className="font-headline font-medium text-base text-[#e2e2e5]">
                      {item.degree}
                    </h4>
                    <span className="font-label text-xs text-[#8a919a] whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-[#92ccff] italic">{item.institution}</p>
                  {item.detail && (
                    <p className="text-sm text-[#8a919a] mt-2 leading-normal">{item.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Drafting Table Monochromatic Image */}
          <div className="hidden lg:block overflow-hidden rounded-xl border border-[#40484f]/20 bg-[#1e2022]">
            <img
              src={ABOUT_DESK_IMAGE}
              alt="Drafting table with schematics"
              className="w-full grayscale opacity-45 hover:grayscale-0 hover:opacity-90 transition-all duration-700 scale-100 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Column: Skills */}
        <div className="lg:col-span-7 space-y-12 md:space-y-16">
          {/* Engineering Skills */}
          <div>
            <div className="flex justify-between items-end mb-8 border-b border-[#40484f]/30 pb-4">
              <h3 className="font-headline text-3xl font-bold tracking-tight text-[#e2e2e5]">
                Engineering
              </h3>
              <span className="font-label text-xs text-[#8a919a] font-mono">ID: STRUCT_01</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ENGINEERING_SKILLS.map((skill) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between font-label text-[0.7rem] uppercase tracking-wider">
                    <span className="text-[#e2e2e5]">{skill.name}</span>
                    <span className="text-[#61de8a] font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#333537] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#92ccff] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Programming Skills Grid */}
          <div className="bg-[#1a1c1e] p-6 sm:p-10 rounded-xl border border-[#40484f]/20 shadow-lg">
            <div className="flex justify-between items-end mb-8 border-b border-[#40484f]/30 pb-4">
              <h3 className="font-headline text-3xl font-bold tracking-tight text-[#e2e2e5]">
                Programming
              </h3>
              <span className="font-label text-xs text-[#8a919a] font-mono">ID: CODE_01</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {PROGRAMMING_SKILLS.map((item) => {
                const isSelected = selectedTech === item.id;
                return (
                  <div
                    key={item.id}
                    id={`skill-card-${item.id}`}
                    onClick={() => setSelectedTech(isSelected ? null : item.id)}
                    className={`group p-5 sm:p-6 bg-[#282a2c] rounded-md transition-all duration-300 cursor-pointer border ${
                      isSelected
                        ? 'border-[#61de8a] ring-1 ring-[#61de8a] bg-[#333537]'
                        : 'border-[#40484f]/20 hover:border-[#61de8a]/60 hover:bg-[#333537]'
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-[#61de8a] mb-4 text-3xl group-hover:scale-110 transition-transform"
                      data-icon={item.iconName}
                    >
                      {item.iconName}
                    </span>
                    <h5 className="font-headline font-semibold text-lg text-[#e2e2e5]">
                      {item.name}
                    </h5>
                    <p className="text-[0.65rem] font-label uppercase text-[#8a919a] mt-2 tracking-widest font-bold">
                      {item.subtitle}
                    </p>
                    {isSelected && (
                      <p className="text-xs text-[#c0c7d1] mt-3 pt-2 border-t border-[#40484f]/40 leading-snug animate-in fade-in duration-150">
                        {item.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bento Grid Extra Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="aspect-video bg-gradient-to-br from-[#1e2022] to-[#282a2c] p-8 flex flex-col justify-end border border-[#40484f]/20 rounded-lg shadow-md">
              <span className="font-headline text-4xl sm:text-5xl font-bold text-[#92ccff] mb-1">
                45+
              </span>
              <span className="font-label text-[0.65rem] uppercase tracking-[0.2em] text-[#8a919a] font-bold">
                Projects Engineered
              </span>
            </div>

            <div className="aspect-video bg-gradient-to-br from-[#1e2022] to-[#282a2c] p-8 flex flex-col justify-end border border-[#40484f]/20 rounded-lg shadow-md">
              <span className="font-headline text-4xl sm:text-5xl font-bold text-[#61de8a] mb-1">
                12k+
              </span>
              <span className="font-label text-[0.65rem] uppercase tracking-[0.2em] text-[#8a919a] font-bold">
                Lines of Production Code
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
