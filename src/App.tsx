import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { TabType, ProjectItem } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { ProjectsScreen } from './components/ProjectsScreen';
import { AboutScreen } from './components/AboutScreen';
import { ContactScreen } from './components/ContactScreen';
import { ProjectSpecModal } from './components/ProjectSpecModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setIsResumeOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#121416] text-[#e2e2e5] flex flex-col selection:bg-[#92ccff] selection:text-[#003351] font-body relative">
      {/* Top Header Navigation */}
      <Navigation
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onResumeClick={() => setIsResumeOpen(true)}
      />

      {/* Main Dynamic View Area */}
      <div className="flex-1 w-full relative">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <HomeScreen
                onViewWork={() => handleTabChange('projects')}
                onGetInTouch={() => handleTabChange('contact')}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            </motion.div>
          )}

          {activeTab === 'projects' && (
            <motion.div
              key="projects-view"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectsScreen onSelectProject={(project) => setSelectedProject(project)} />
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about-view"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <AboutScreen />
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              key="contact-view"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <ContactScreen onOpenResume={() => setIsResumeOpen(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer across all views */}
      <Footer
        onNavigateHome={() => handleTabChange('home')}
        onNavigateContact={() => handleTabChange('contact')}
      />

      {/* Interactive Project Specification Modal */}
      <ProjectSpecModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onContactClick={() => handleTabChange('contact')}
      />
    </div>
  );
}
