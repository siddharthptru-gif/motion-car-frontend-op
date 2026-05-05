import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const navLinks = ['vehicles', 'performance', 'innovation', 'experience', 'ownership'];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const offsetTop = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section.id);
          }
        }
      });
      
      // If at top
      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] lg:w-[calc(100%-96px)] max-w-[1280px] h-[68px] glass rounded-full flex items-center justify-between px-8 z-50"
    >
      {/* Logo */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center gap-2 group cursor-pointer"
      >
        <div className="w-8 h-8 flex items-center justify-center relative">
          <motion.div 
            className="absolute inset-0 border-2 border-accentRed/50 rounded-sm rotate-45 group-hover:rotate-180 transition-transform duration-500"
          />
          <span className="text-white font-black text-xl italic z-10">V</span>
        </div>
        <span className="text-white font-bold tracking-[0.3em] text-sm ml-1 hidden sm:block">VELOCE</span>
      </div>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = activeSection === link;
          return (
            <li key={link} className="relative">
              <a 
                href={`#${link}`} 
                className={`text-[13px] uppercase tracking-widest font-medium transition-all duration-300 relative group ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {link}
                
                {/* Underline/Active Indicator */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span 
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 w-full h-[1px] bg-accentRed shadow-[0_0_8px_rgba(255,18,56,0.6)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>

                {/* Hover Dot */}
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accentRed rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          );
        })}
      </ul>

      {/* Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-2 bg-white/5 border border-white/10 hover:border-accentRed/50 px-6 py-2.5 rounded-full transition-all duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 bg-accentRed/0 group-hover:bg-accentRed/10 transition-colors duration-300" />
        <span className="text-[13px] uppercase tracking-widest font-bold text-white relative z-10">Configure</span>
        <ArrowUpRight className="w-4 h-4 text-accentRed group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform z-10" />
        
        {/* Subtle Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(255,18,56,0.3)]" />
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
