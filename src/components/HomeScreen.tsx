import React from 'react';
import { HERO_DATA, BENTO_STRUCTURAL_ITEMS } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface HomeScreenProps {
  onViewWork: () => void;
  onGetInTouch: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onViewWork,
  onGetInTouch,
  onSelectProject,
}) => {
  const handleBentoClick = (bentoItem: (typeof BENTO_STRUCTURAL_ITEMS)[0]) => {
    // Construct a ProjectItem representation to open the spec sheet modal
    const projectItem: ProjectItem = {
      id: bentoItem.id,
      serialNumber: bentoItem.modCode,
      title: bentoItem.title,
      category: 'Engineering',
      tags: bentoItem.tags,
      description: bentoItem.description,
      image: HERO_DATA.heroImage,
      altText: bentoItem.title,
      specs: bentoItem.specs,
    };
    onSelectProject(projectItem);
  };

  return (
    <div id="home-screen" className="relative w-full">
      {/* Main Hero Section */}
      <main
        id="hero-main-section"
        className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20"
      >
        {/* Architectural Background Elements */}
        <div className="blueprint-grid absolute inset-0 z-0 pointer-events-none opacity-80"></div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute h-px w-[40%] top-[20%] right-0 bg-[#92ccff]/10"></div>
          <div className="absolute h-px w-[60%] top-[80%] left-[-10%] rotate-12 bg-[#92ccff]/10"></div>
          <div className="absolute w-px h-[50%] left-[15%] top-0 bg-[#92ccff]/10"></div>
          <div className="absolute w-px h-[30%] right-[25%] bottom-0 bg-[#92ccff]/10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="w-12 h-px bg-[#61de8a]"></span>
              <span className="font-label text-[0.75rem] uppercase tracking-[0.2em] text-[#61de8a] font-bold">
                {HERO_DATA.systemTag}
              </span>
            </div>

            <h1 className="font-headline text-[3.2rem] leading-[1.08] sm:text-[4.2rem] md:text-[5rem] font-bold tracking-[-0.04em] text-[#e2e2e5] mb-6">
              Building Bridges <span className="text-[#92ccff]">&amp;</span> Building Systems
            </h1>

            <p className="font-body text-lg md:text-xl text-[#8a919a] mb-10 md:mb-12 max-w-2xl leading-[1.6]">
              {HERO_DATA.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6">
              <button
                id="hero-view-work-btn"
                onClick={onViewWork}
                className="px-8 py-4 bg-gradient-to-br from-[#92ccff] to-[#4797d1] text-[#002c47] font-label text-[0.75rem] uppercase tracking-widest font-bold rounded-md hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md cursor-pointer"
              >
                View My Work
              </button>
              <button
                id="hero-get-in-touch-btn"
                onClick={onGetInTouch}
                className="px-8 py-4 border border-[#40484f] text-[#e2e2e5] font-label text-[0.75rem] uppercase tracking-widest font-bold rounded-md hover:border-[#61de8a] hover:text-[#61de8a] active:scale-95 transition-all duration-300 cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Asymmetric Visual Element */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-[#1e2022] rounded-xl overflow-hidden relative group border border-[#40484f]/20 shadow-xl">
              <img
                src={HERO_DATA.heroImage}
                alt="Architectural structure"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />

              {/* Spec badge top right */}
              <div className="absolute top-4 right-4 bg-[#282a2c]/85 backdrop-blur-sm p-4 rounded-lg border border-[#40484f]/30">
                <div className="font-label text-[0.6rem] text-[#61de8a] mb-1 uppercase tracking-wider font-bold">
                  SPEC_CODE: {HERO_DATA.specCode}
                </div>
                <div className="font-headline text-lg font-bold text-[#92ccff]">
                  {HERO_DATA.structTag}
                </div>
              </div>

              {/* Bottom Gradient overlay & Tech Icons */}
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#121416] via-[#121416]/70 to-transparent">
                <div className="flex gap-4">
                  <div className="p-2.5 bg-[#333537]/70 rounded border border-[#40484f]/30 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[#92ccff] text-2xl" data-icon="architecture">
                      architecture
                    </span>
                  </div>
                  <div className="p-2.5 bg-[#333537]/70 rounded border border-[#40484f]/30 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[#61de8a] text-2xl" data-icon="terminal">
                      terminal
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Offset Ghost Card */}
            <div className="absolute -bottom-6 -left-12 w-52 aspect-square bg-[#1a1c1e]/90 border border-[#40484f]/30 p-6 rounded-lg backdrop-blur-md hidden xl:block shadow-2xl">
              <div className="font-label text-[0.65rem] text-[#8a919a] uppercase tracking-widest mb-4 font-bold">
                {HERO_DATA.latestDeployment.label}
              </div>
              <div className="font-headline text-2xl font-medium text-[#e2e2e5]">
                {HERO_DATA.latestDeployment.title}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#61de8a] animate-ping"></div>
                <span className="font-label text-[0.6rem] text-[#61de8a] uppercase tracking-wider font-bold">
                  {HERO_DATA.latestDeployment.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Project Preview Section (Bento Grid) */}
      <section id="portfolio-index-section" className="bg-[#1a1c1e] py-20 md:py-28 relative border-t border-[#40484f]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-14">
            <span className="font-label text-[0.75rem] uppercase tracking-[0.2em] text-[#61de8a] font-bold">
              PORTFOLIO INDEX
            </span>
            <h2 className="font-headline text-[2.2rem] md:text-[2.5rem] font-bold tracking-tight text-[#e2e2e5] mt-3">
              Structural Projects
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[580px]">
            {/* Bento Card 1: Urban Truss System */}
            <div
              id="bento-card-urban-truss"
              onClick={() => handleBentoClick(BENTO_STRUCTURAL_ITEMS[0])}
              className="md:col-span-2 md:row-span-2 bg-[#282a2c] rounded-xl p-8 flex flex-col justify-between group cursor-pointer overflow-hidden relative border border-[#40484f]/20 hover:border-[#92ccff]/40 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 p-6">
                <span className="font-label text-[0.7rem] text-[#61de8a] uppercase tracking-wider font-bold">
                  {BENTO_STRUCTURAL_ITEMS[0].modCode}
                </span>
              </div>
              <div className="pr-12">
                <h3 className="font-headline text-3xl font-bold mb-4 text-[#e2e2e5] group-hover:text-[#92ccff] transition-colors">
                  {BENTO_STRUCTURAL_ITEMS[0].title}
                </h3>
                <p className="text-[#8a919a] max-w-sm leading-relaxed text-sm md:text-base">
                  {BENTO_STRUCTURAL_ITEMS[0].description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {BENTO_STRUCTURAL_ITEMS[0].tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-[#36485b] text-[#a4b7cd] font-label text-[0.65rem] rounded-sm uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="font-label text-xs text-[#61de8a] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  View Specs &rarr;
                </span>
              </div>
            </div>

            {/* Bento Card 2: Digital Twin Engine */}
            <div
              id="bento-card-digital-twin"
              onClick={() => handleBentoClick(BENTO_STRUCTURAL_ITEMS[1])}
              className="md:col-span-2 bg-[#282a2c] rounded-xl p-8 flex items-center justify-between group cursor-pointer overflow-hidden relative border border-[#40484f]/20 hover:border-[#92ccff]/40 transition-all duration-300 hover:shadow-xl"
            >
              <div className="z-10 pr-4">
                <h3 className="font-headline text-2xl font-bold mb-2 text-[#e2e2e5] group-hover:text-[#92ccff] transition-colors">
                  {BENTO_STRUCTURAL_ITEMS[1].title}
                </h3>
                <p className="text-[#8a919a] text-sm">
                  {BENTO_STRUCTURAL_ITEMS[1].description}
                </p>
              </div>
              <span
                className="material-symbols-outlined text-4xl text-[#40484f] group-hover:text-[#61de8a] group-hover:scale-110 transition-all duration-300 shrink-0"
                data-icon="precision_manufacturing"
              >
                precision_manufacturing
              </span>
            </div>

            {/* Bento Card 3: Hydraulics */}
            <div
              id="bento-card-hydraulics"
              onClick={() => handleBentoClick(BENTO_STRUCTURAL_ITEMS[2])}
              className="md:col-span-1 bg-[#282a2c] rounded-xl p-8 flex flex-col justify-center group cursor-pointer overflow-hidden relative border border-[#40484f]/20 hover:border-[#92ccff]/40 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="font-headline text-xl font-bold mb-2 text-[#e2e2e5] group-hover:text-[#92ccff] transition-colors">
                {BENTO_STRUCTURAL_ITEMS[2].title}
              </h3>
              <div className="font-label text-[0.65rem] text-[#61de8a] uppercase mt-auto tracking-wider font-bold">
                {BENTO_STRUCTURAL_ITEMS[2].modCode}
              </div>
            </div>

            {/* Bento Card 4: BIM Auth */}
            <div
              id="bento-card-bim-auth"
              onClick={() => handleBentoClick(BENTO_STRUCTURAL_ITEMS[3])}
              className="md:col-span-1 bg-[#282a2c] rounded-xl p-8 flex flex-col justify-center group cursor-pointer overflow-hidden relative border border-[#40484f]/20 hover:border-[#92ccff]/40 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="font-headline text-xl font-bold mb-2 text-[#e2e2e5] group-hover:text-[#92ccff] transition-colors">
                {BENTO_STRUCTURAL_ITEMS[3].title}
              </h3>
              <div className="font-label text-[0.65rem] text-[#61de8a] uppercase mt-auto tracking-wider font-bold">
                {BENTO_STRUCTURAL_ITEMS[3].modCode}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
