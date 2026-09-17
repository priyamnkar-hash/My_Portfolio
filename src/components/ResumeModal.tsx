import React, { useState } from 'react';
import { X, Download, Printer, CheckCircle, Mail, MapPin, Globe, Award, Code, Building2 } from 'lucide-react';
import { ENGINEERING_SKILLS, PROGRAMMING_SKILLS, EDUCATION_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onContactClick }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate downloadable markdown/text resume or notify user
    const resumeText = `ARCHI_TECH // SYSTEM ARCHITECT & CIVIL ENGINEER
Email: contact@archi-tech.io | Location: San Francisco, CA / Remote

PROFILE
Civil Engineering Undergraduate & Software Developer bridging the gap between physical infrastructure and digital environments with structural precision.

EDUCATION
- B.S. Civil Engineering, Institute of Structural Excellence (2018 - 2022)
  Specialization: Computational Analysis, Finite Element Modeling & Material Science.
- Full-Stack Certification, Tech-Draft Academy (2022 - 2023)
  Specialization: Cloud architecture, distributed systems, high-concurrency APIs.

ENGINEERING CAPABILITIES
- AutoCAD / Revit: 95%
- Structural Analysis (ETABS / FEA): 90%
- BIM Coordination (IFC / Revit API): 85%
- Project Management & Structural Compliance: 80%

PROGRAMMING CAPABILITIES
- Python: Data science, NumPy, SciPy, genetic optimization algorithms.
- JavaScript / TypeScript: WebGL visualizers, high-performance UI engines.
- React: Component modularity, state machines, architectural dashboards.
- SQL & Time-Series DBs: TimescaleDB, PostgreSQL, sensor telemetry storage.
- Git / DevOps: CI/CD, Terraform, containerized simulation environments.
- REST & Streaming APIs: Real-time sensor ingest, WebSockets, Kafka pipelines.

FEATURED PROJECTS
1. Structural Health Monitoring App (SN: 882-SHM)
   Real-time sensor data integration for predictive maintenance of industrial steel structures.
2. Bridge Optimization Algorithm (SN: 404-OPT)
   Evolutionary algorithm minimizing material usage with full Eurocode / AISC compliance.
3. Infrastructure-as-Code Framework (SN: 501-IFR)
   Custom Terraform modules deploying HPC architectural simulation nodes.
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ARCHI_TECH_Professional_CV_v4.2.0.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="bg-[#1a1c1e] border border-[#40484f]/40 text-[#e2e2e5] rounded-xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#1e2022] px-6 py-4 border-b border-[#40484f]/30 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-label text-[0.65rem] text-[#61de8a] tracking-widest uppercase font-bold px-2 py-0.5 bg-[#00391a] rounded">
              DOC_TYPE: PDF/2024
            </span>
            <span className="font-label text-xs text-[#8a919a]">SN: 882-ARCH // VERSION 4.2.0 (STABLE)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="p-2 rounded bg-[#282a2c] hover:bg-[#333537] text-[#8a919a] hover:text-[#92ccff] transition-colors"
              title="Print CV"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              className="p-2 rounded bg-[#282a2c] hover:bg-[#333537] text-[#8a919a] hover:text-[#92ccff] transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Printable Document Body */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-8 bg-[#121416]">
          {/* Header */}
          <div className="border-b border-[#40484f]/30 pb-6 flex flex-col md:flex-row justify-between md:items-end gap-4">
            <div>
              <span className="font-label text-[0.7rem] uppercase tracking-[0.2em] text-[#61de8a] font-bold">
                SYSTEM ARCHITECT // CIVIL ENGINEER &amp; CODER
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mt-1">
                ARCHI_TECH
              </h2>
              <p className="text-sm text-[#8a919a] mt-2 max-w-xl leading-relaxed">
                Bridging physical infrastructure and digital environments through generative algorithms,
                structural finite element analysis, and cloud compute systems.
              </p>
            </div>
            <div className="space-y-1 font-label text-xs text-[#c0c7d1]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#92ccff]" />
                <span>contact@archi-tech.io</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#61de8a]" />
                <span>San Francisco, CA / Remote</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#92ccff]" />
                <span>archi-tech.io</span>
              </div>
            </div>
          </div>

          {/* Education & Credentials */}
          <div>
            <div className="flex items-center gap-2 mb-4 font-headline text-lg font-bold text-[#92ccff]">
              <Award className="w-4 h-4 text-[#61de8a]" />
              Education &amp; Academic Background
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="p-4 bg-[#1e2022] rounded border border-[#40484f]/20">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-headline font-semibold text-white text-sm">{edu.degree}</h4>
                    <span className="font-label text-[0.7rem] text-[#8a919a]">{edu.period}</span>
                  </div>
                  <p className="text-xs text-[#92ccff] italic">{edu.institution}</p>
                  {edu.detail && <p className="text-xs text-[#8a919a] mt-2">{edu.detail}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Dual Disciplines: Engineering & Programming */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Engineering */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-headline text-lg font-bold text-[#92ccff]">
                <Building2 className="w-4 h-4 text-[#92ccff]" />
                Engineering Capabilities
              </div>
              <div className="space-y-3">
                {ENGINEERING_SKILLS.map((s) => (
                  <div key={s.name} className="space-y-1.5">
                    <div className="flex justify-between font-label text-xs uppercase tracking-wider">
                      <span className="text-[#c0c7d1]">{s.name}</span>
                      <span className="text-[#61de8a] font-bold">{s.percentage}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#282a2c] rounded-full overflow-hidden">
                      <div className="h-full bg-[#92ccff]" style={{ width: `${s.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Programming */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-headline text-lg font-bold text-[#61de8a]">
                <Code className="w-4 h-4 text-[#61de8a]" />
                Programming &amp; Cloud Stack
              </div>
              <div className="grid grid-cols-2 gap-3">
                {PROGRAMMING_SKILLS.map((p) => (
                  <div key={p.id} className="p-3 bg-[#1e2022] rounded border border-[#40484f]/20">
                    <span className="font-headline font-semibold text-white text-xs block">{p.name}</span>
                    <span className="font-label text-[0.6rem] text-[#61de8a] uppercase tracking-wider block mt-0.5">
                      {p.subtitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Engineering Impact Stats */}
          <div className="p-5 bg-gradient-to-r from-[#1e2022] to-[#282a2c] rounded-lg border border-[#40484f]/20 flex flex-wrap justify-around text-center gap-6">
            <div>
              <div className="font-headline text-3xl font-bold text-[#92ccff]">45+</div>
              <div className="font-label text-[0.65rem] uppercase tracking-widest text-[#8a919a]">
                Projects Engineered
              </div>
            </div>
            <div>
              <div className="font-headline text-3xl font-bold text-[#61de8a]">12k+</div>
              <div className="font-label text-[0.65rem] uppercase tracking-widest text-[#8a919a]">
                Lines of Production Code
              </div>
            </div>
            <div>
              <div className="font-headline text-3xl font-bold text-white">99.8%</div>
              <div className="font-label text-[0.65rem] uppercase tracking-widest text-[#8a919a]">
                Simulation Convergence
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="bg-[#1e2022] px-6 py-4 border-t border-[#40484f]/30 flex flex-wrap justify-between items-center gap-4 shrink-0">
          <button
            id="modal-hire-me-btn"
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="text-xs font-label uppercase tracking-widest text-[#61de8a] hover:text-[#92ccff] transition-colors"
          >
            Ready to collaborate? Execute Transmission &rarr;
          </button>
          <div className="flex items-center gap-3">
            <button
              id="resume-download-btn"
              onClick={handleDownload}
              className="bg-[#92ccff] text-[#001e31] font-label text-xs uppercase tracking-widest px-5 py-2.5 rounded font-bold hover:bg-[#4797d1] hover:text-white transition-all flex items-center gap-2"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 text-[#00391a]" />
                  Downloaded
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Download CV (v4.2.0)
                </>
              )}
            </button>
            <button
              id="resume-close-btn"
              onClick={onClose}
              className="px-4 py-2.5 bg-[#282a2c] hover:bg-[#333537] text-[#e2e2e5] font-label text-xs uppercase tracking-widest rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
