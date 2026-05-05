import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-[160px] px-8 lg:px-[48px] max-w-[1320px] mx-auto z-10">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
        
        {/* Left Content */}
        <div className="w-full lg:w-[48%]">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accentRed text-xs font-bold tracking-[0.35em] uppercase mb-5"
          >
            Engineered Beyond Limits
          </motion.p>
          
          <div className="mb-8">
            <h1 className="text-[54px] lg:text-[78px] font-black leading-[0.92] tracking-tighter flex flex-col">
              <AnimatedText text="TWO SOULS." className="text-white" />
              <AnimatedText text="ONE OBSESSION." className="text-accentRed text-glow-red" accent />
            </h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 text-base lg:text-lg max-w-[430px] leading-relaxed mb-10"
          >
            Uncompromising performance. Refined luxury.<br />
            Discover two expressions of automotive perfection.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 bg-white/[0.03] border border-white/10 hover:border-accentRed/40 px-8 py-4 rounded-full group transition-all duration-300 shadow-glow-red"
          >
            <span className="text-sm font-bold tracking-widest uppercase text-white">Explore the Lineup</span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accentRed transition-colors">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </motion.button>
        </div>

        {/* Right Stats */}
        <div className="w-full lg:w-[52%] flex flex-col lg:items-end justify-center lg:pt-20">
          <div className="flex items-center gap-8 lg:gap-12 relative">
            <StatItem number="2" label="Exclusive Models" delay={0.8} />
            <div className="w-[1px] h-12 bg-white/10" />
            <StatItem number="1300+" label="Horsepower" delay={1.0} />
            <div className="w-[1px] h-12 bg-white/10" />
            <StatItem number="0" label="Compromises" delay={1.2} />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ number, label, delay }: { number: string, label: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="flex flex-col items-start lg:items-center"
  >
    <span className="text-[32px] lg:text-[42px] font-black text-white leading-none mb-1 italic">{number}</span>
    <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase text-left lg:text-center max-w-[80px] leading-tight">
      {label}
    </span>
  </motion.div>
);

export default HeroSection;
