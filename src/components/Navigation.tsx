import React, { useState } from 'react';
import { TabType } from '../types';
import { Menu, X, FileText } from 'lucide-react';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onResumeClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onTabChange,
  onResumeClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: TabType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (tab: TabType) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="main-navigation"
      className="fixed top-0 w-full z-50 bg-[#121416]/85 backdrop-blur-md border-b border-[#40484f]/20 transition-all duration-300"
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <button
          id="logo-brand-btn"
          onClick={() => handleLinkClick('home')}
          className="text-xl font-bold tracking-tighter text-[#92ccff] font-headline hover:opacity-90 transition-opacity focus:outline-none flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#61de8a] animate-pulse"></span>
          ARCHI_TECH
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 font-label text-[0.75rem] uppercase tracking-widest">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-all duration-200 py-1 relative ${
                  isActive
                    ? 'text-[#92ccff] font-semibold border-b-2 border-[#92ccff]'
                    : 'text-[#8a919a] hover:text-[#92ccff]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            id="nav-resume-btn"
            onClick={onResumeClick}
            className="bg-[#92ccff] text-[#001e31] font-label text-[0.75rem] uppercase tracking-widest px-5 md:px-6 py-2 rounded-md font-bold hover:bg-[#4797d1] hover:text-white transition-all active:scale-95 duration-200 flex items-center gap-1.5 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </button>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#92ccff] hover:bg-[#1e2022] rounded-md transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden px-6 pt-2 pb-6 bg-[#121416]/95 border-b border-[#40484f]/30 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-4 pt-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left font-label text-sm uppercase tracking-widest py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? 'text-[#92ccff] bg-[#1e2022] font-bold border-l-2 border-[#92ccff]'
                      : 'text-[#8a919a] hover:text-[#92ccff] hover:bg-[#1a1c1e]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
