import React, { useState } from 'react';
import { Send, CheckCircle2, RefreshCw } from 'lucide-react';

interface ContactScreenProps {
  onOpenResume: () => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onOpenResume }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [transmissionSerial, setTransmissionSerial] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
      setTransmissionSerial(`TX-${randomHex}`);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact-screen" className="relative min-h-screen pt-28 md:pt-32 pb-20 px-6 md:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Blueprint Grid Background */}
      <div className="fixed inset-0 pointer-events-none blueprint-grid opacity-60 z-0"></div>

      {/* Structural Accent Lines */}
      <div className="fixed top-1/4 left-10 w-px h-64 bg-[#40484f]/20 pointer-events-none"></div>
      <div className="fixed bottom-1/3 right-12 w-96 h-px bg-[#40484f]/20 pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
        {/* Left Column: Header & Form */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Technical Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#61de8a]"></span>
              <span className="font-label text-[0.75rem] uppercase tracking-[0.2em] text-[#61de8a] font-bold">
                Deployment / Contact
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-[#e2e2e5] mb-6">
              Let&apos;s build the <br />next architecture.
            </h1>

            <p className="font-body text-[#8a919a] text-base md:text-lg max-w-lg mb-10 md:mb-12">
              Reach out for collaborations, technical consultations, or just to discuss system design. My stack is ready for deployment.
            </p>

            {/* Contact Form or Confirmation State */}
            {submitted ? (
              <div
                id="transmission-confirmation"
                className="bg-[#1e2022] border border-[#61de8a]/40 p-8 rounded-lg max-w-xl animate-in fade-in zoom-in-95 duration-300 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4 text-[#61de8a]">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <span className="font-label text-xs uppercase tracking-widest font-bold">
                    TRANSMISSION DISPATCHED // ACKNOWLEDGED
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-white mb-2">
                  Message Encrypted &amp; Logged
                </h3>
                <p className="text-sm text-[#c0c7d1] leading-relaxed mb-6">
                  Thank you, <span className="text-[#92ccff] font-semibold">{formState.name}</span>. Your dispatch payload has been routed to the primary terminal. Expect an architectural response at{' '}
                  <span className="text-[#92ccff] font-semibold">{formState.email}</span> within 24 hours.
                </p>

                <div className="bg-[#121416] p-4 rounded border border-[#40484f]/40 font-mono text-xs text-[#8a919a] space-y-1 mb-6">
                  <div>DISPATCH_ID: {transmissionSerial}</div>
                  <div>TIMESTAMP: {new Date().toISOString()}</div>
                  <div>SECURITY_PROTOCOL: TLS 1.3 // SHA-256</div>
                  <div className="text-[#61de8a]">STATUS: QUEUED FOR SYSTEM ARCHITECT REVIEW</div>
                </div>

                <button
                  id="reset-form-btn"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-[#92ccff] hover:underline cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Send Another Dispatch
                </button>
              </div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-6 max-w-xl"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-label text-[0.7rem] uppercase tracking-widest text-[#8a919a] mb-2 font-semibold"
                  >
                    Identification / Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="w-full bg-[#1e2022] border-0 border-b border-[#40484f] focus:border-[#92ccff] focus:ring-0 text-[#e2e2e5] font-body text-sm py-3 px-4 transition-colors outline-none rounded-t"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-label text-[0.7rem] uppercase tracking-widest text-[#8a919a] mb-2 font-semibold"
                  >
                    Protocol / Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="elena@structural-sys.io"
                    className="w-full bg-[#1e2022] border-0 border-b border-[#40484f] focus:border-[#92ccff] focus:ring-0 text-[#e2e2e5] font-body text-sm py-3 px-4 transition-colors outline-none rounded-t"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-label text-[0.7rem] uppercase tracking-widest text-[#8a919a] mb-2 font-semibold"
                  >
                    Payload / Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Specify project parameters, timelines, and technical requirements..."
                    className="w-full bg-[#1e2022] border-0 border-b border-[#40484f] focus:border-[#92ccff] focus:ring-0 text-[#e2e2e5] font-body text-sm py-3 px-4 transition-colors resize-none outline-none rounded-t"
                  ></textarea>
                </div>

                <button
                  id="submit-contact-btn"
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 bg-[#92ccff] text-[#001e31] font-label text-[0.75rem] uppercase tracking-widest font-bold hover:bg-[#4797d1] hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 group cursor-pointer shadow-md disabled:opacity-50"
                >
                  {sending ? (
                    <span>Encrypting Transmission...</span>
                  ) : (
                    <>
                      Execute Transmission
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Asymmetric Accent / CV Download */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 md:space-y-12 lg:pl-8">
          {/* Document Card */}
          <div
            id="cv-card"
            className="bg-[#1e2022] border border-[#40484f]/30 p-8 rounded-lg relative overflow-hidden group shadow-lg"
          >
            <div className="absolute top-0 right-0 p-4 font-label text-[0.6rem] text-[#8a919a] tracking-widest uppercase font-bold">
              DOC_TYPE: PDF/2024
            </div>

            <div className="mb-8">
              <span className="material-symbols-outlined text-4xl text-[#92ccff] mb-4 block">
                description
              </span>
              <h3 className="font-headline text-2xl font-bold text-[#e2e2e5]">
                Professional_CV
              </h3>
              <p className="font-label text-xs text-[#8a919a] tracking-wider mt-1">
                SN: 882-ARCH // RESUME_DATA
              </p>
            </div>

            {/* Minimalist Abstract Representation of CV lines */}
            <div className="space-y-2 mb-8 opacity-40">
              <div className="h-1 bg-[#40484f] w-3/4"></div>
              <div className="h-1 bg-[#40484f] w-full"></div>
              <div className="h-1 bg-[#40484f] w-5/6"></div>
              <div className="h-1 bg-[#40484f] w-1/2"></div>
            </div>

            <button
              id="download-cv-btn"
              onClick={onOpenResume}
              className="w-full flex items-center justify-between p-4 bg-[#282a2c] hover:bg-[#333537] text-[#e2e2e5] font-label text-xs uppercase tracking-widest rounded transition-all group-hover:border group-hover:border-[#92ccff]/50 cursor-pointer"
            >
              <span>View &amp; Download CV</span>
              <span className="material-symbols-outlined text-sm text-[#92ccff]">
                download
              </span>
            </button>
          </div>

          {/* Status / Availability Card */}
          <div className="p-6 border border-[#40484f]/20 bg-[#121416] rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#61de8a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#61de8a]"></span>
              </span>
              <span className="font-label text-[0.65rem] uppercase tracking-widest text-[#61de8a] font-bold">
                Status: Available
              </span>
            </div>
            <p className="font-body text-xs text-[#8a919a] leading-relaxed">
              Accepting select contracts for structural software integrations and full-stack system developments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
