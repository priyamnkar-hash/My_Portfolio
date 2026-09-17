import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { X, CheckCircle, Cpu, Layers, Activity, Download } from 'lucide-react';

interface ProjectSpecModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectSpecModal: React.FC<ProjectSpecModalProps> = ({ project, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!project) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div
      id="spec-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="spec-modal-container"
        className="bg-[#1a1c1e] border border-[#40484f]/40 text-[#e2e2e5] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#1e2022] px-6 md:px-8 py-5 border-b border-[#40484f]/30 flex justify-between items-center z-10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#61de8a] animate-pulse"></span>
            <div>
              <span className="font-label text-[0.65rem] text-[#61de8a] tracking-[0.2em] uppercase font-bold">
                SPECIFICATION SHEET // {project.serialNumber}
              </span>
              <h3 className="font-headline text-2xl font-bold text-[#e2e2e5]">{project.title}</h3>
            </div>
          </div>
          <button
            id="close-spec-modal-btn"
            onClick={onClose}
            className="p-2 rounded-lg bg-[#282a2c] hover:bg-[#333537] text-[#8a919a] hover:text-[#92ccff] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Image & Quick Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#121416] p-4 rounded-lg border border-[#40484f]/20">
            <div className="md:col-span-5 aspect-video md:aspect-[4/3] rounded overflow-hidden bg-[#1e2022]">
              <img
                src={project.image}
                alt={project.altText}
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
            <div className="md:col-span-7 space-y-3">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="font-label text-[0.65rem] uppercase tracking-wider px-2.5 py-1 rounded-sm bg-[#36485b] text-[#a4b7cd]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#c0c7d1] leading-relaxed">{project.description}</p>
              <div className="text-xs font-label text-[#8a919a] flex items-center gap-2">
                <span className="text-[#61de8a]">STATUS:</span> VERIFIED STRUCTURAL DATA
              </div>
            </div>
          </div>

          {/* Technical Specs Breakdown */}
          {project.specs && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-[#1e2022] rounded-lg border border-[#40484f]/15">
                <div className="flex items-center gap-2 text-[#92ccff] mb-2 font-label text-xs uppercase tracking-wider font-semibold">
                  <Layers className="w-4 h-4" />
                  Structural System
                </div>
                <p className="text-sm text-[#e2e2e5] font-medium">{project.specs.structuralSystem}</p>
              </div>

              <div className="p-4 bg-[#1e2022] rounded-lg border border-[#40484f]/15">
                <div className="flex items-center gap-2 text-[#61de8a] mb-2 font-label text-xs uppercase tracking-wider font-semibold">
                  <Cpu className="w-4 h-4" />
                  Algorithmic Approach
                </div>
                <p className="text-sm text-[#e2e2e5] font-medium">{project.specs.algorithmicApproach}</p>
              </div>

              <div className="p-4 bg-[#1e2022] rounded-lg border border-[#40484f]/15">
                <div className="flex items-center gap-2 text-[#92ccff] mb-2 font-label text-xs uppercase tracking-wider font-semibold">
                  <Activity className="w-4 h-4" />
                  Load Capacity & Safety Margin
                </div>
                <p className="text-sm text-[#e2e2e5] font-medium">{project.specs.loadCapacity}</p>
              </div>

              <div className="p-4 bg-[#1e2022] rounded-lg border border-[#40484f]/15">
                <div className="flex items-center gap-2 text-[#61de8a] mb-2 font-label text-xs uppercase tracking-wider font-semibold">
                  <span className="material-symbols-outlined text-base">terminal</span>
                  Benchmark Performance
                </div>
                <p className="text-sm text-[#e2e2e5] font-medium">{project.specs.benchmark}</p>
              </div>
            </div>
          )}

          {/* Technology & Language Stack */}
          {project.specs?.languageStack && (
            <div className="p-4 bg-[#1e2022] rounded-lg border border-[#40484f]/15">
              <span className="font-label text-xs uppercase tracking-widest text-[#8a919a] block mb-3">
                Computational & Modeling Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {project.specs.languageStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-label text-xs px-3 py-1.5 rounded bg-[#282a2c] text-[#92ccff] border border-[#40484f]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Telemetry Simulation Visual */}
          <div className="p-4 bg-[#121416] rounded-lg border border-[#40484f]/30">
            <div className="flex justify-between items-center mb-2 font-label text-xs text-[#8a919a]">
              <span>FINITE ELEMENT STRESS SPECTRUM // SAMPLING RATE: 100HZ</span>
              <span className="text-[#61de8a]">CONVERGENCE: 99.8%</span>
            </div>
            <div className="h-16 flex items-end gap-1.5 py-2 px-1">
              {[42, 65, 55, 80, 48, 92, 70, 85, 60, 45, 78, 64, 90, 82, 50, 75, 88, 60, 94, 72].map(
                (h, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-gradient-to-t from-[#4797d1] to-[#92ccff] rounded-t-xs hover:bg-[#61de8a] transition-all"
                    style={{ height: `${h}%` }}
                    title={`Node ${idx + 1}: ${h}% strain threshold`}
                  ></div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 md:px-8 py-4 bg-[#1e2022] border-t border-[#40484f]/30 flex flex-wrap justify-between items-center gap-4">
          <div className="font-label text-xs text-[#8a919a]">
            ARCHITECTURAL SPECIFICATION DOC // APPROVED BY ARCHI_TECH
          </div>
          <div className="flex items-center gap-3">
            <button
              id="export-spec-btn"
              onClick={handleDownload}
              className="bg-[#92ccff] text-[#001e31] font-label text-xs uppercase tracking-widest px-4 py-2.5 rounded-md font-bold hover:bg-[#4797d1] hover:text-white transition-all flex items-center gap-2"
            >
              {downloaded ? (
                <>
                  <CheckCircle className="w-4 h-4 text-[#00391a]" />
                  Spec Copied &amp; Exported
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Export Blueprint Spec
                </>
              )}
            </button>
            <button
              id="dismiss-spec-btn"
              onClick={onClose}
              className="px-4 py-2.5 bg-[#282a2c] hover:bg-[#333537] text-[#e2e2e5] font-label text-xs uppercase tracking-widest rounded-md transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
