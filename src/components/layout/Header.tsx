import React, { useState, useEffect } from 'react';
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface Section {
  id: string;
  title: string;  path: string;
}

interface HeaderProps {
  sections: Section[];
}

export const Header = ({ sections }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (location.pathname === '/') {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    }
  });

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/') {
      setActiveSection('inicio');
    } else {
      const currentSection = sections.find(s => s.path === currentPath);
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    }
  }, [location, sections]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center justify-center">
        <div className="flex items-center gap-2 p-2 rounded-full bg-white/50 backdrop-blur-sm shadow-md">
          {sections.map(({ id, title, path }) => (
            <Link key={id} to={path} className="relative px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary">
              {activeSection === id && (
                <motion.div layoutId="active-pill-desktop" className="absolute inset-0 bg-white rounded-full shadow-sm" />
              )}
              <span className="relative z-10">{title}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end">
        <button onClick={() => setIsMenuOpen(true)} className="p-2 rounded-full bg-white/50 backdrop-blur-sm shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-white p-8 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-4">
                {sections.map(({ id, title, path }) => (
                  <li key={id}>
                    <Link to={path} onClick={() => setIsMenuOpen(false)} className={`text-lg font-semibold ${activeSection === id ? 'text-accent' : 'text-primary'}`}>{title}</Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};