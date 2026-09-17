import React from 'react';
import { TabType } from '../types';

interface FooterProps {
  onNavigateContact?: () => void;
  onNavigateHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateContact, onNavigateHome }) => {
  return (
    <footer id="app-footer" className="bg-[#1e2022] w-full py-12 px-6 md:px-8 border-t border-[#40484f]/20">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6 md:gap-0">
        <div className="text-center md:text-left">
          <button
            id="footer-logo-btn"
            onClick={onNavigateHome}
            className="text-lg font-semibold text-[#92ccff] font-headline hover:opacity-80 transition-opacity mb-2 block"
          >
            ARCHI_TECH
          </button>
          <p className="font-label text-[0.75rem] tracking-widest text-[#8a919a] uppercase">
            © 2024 Blueprint Editorial. All rights reserved.
          </p>
          <p className="font-label text-[0.65rem] tracking-wider text-[#40484f] uppercase mt-1">
            Systems for a built world.
          </p>
        </div>

        <div className="flex items-center gap-8 font-label text-[0.75rem] tracking-widest uppercase">
          <a
            id="footer-link-linkedin"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8a919a] hover:text-[#92ccff] transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            id="footer-link-github"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8a919a] hover:text-[#92ccff] transition-colors duration-200"
          >
            GitHub
          </a>
          <button
            id="footer-btn-hire-me"
            onClick={onNavigateContact}
            className="text-[#61de8a] hover:text-[#92ccff] transition-colors duration-200 font-semibold"
          >
            Hire Me
          </button>
        </div>
      </div>
    </footer>
  );
};
