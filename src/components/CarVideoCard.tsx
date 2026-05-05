import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from './AnimatedText';

interface CarVideoCardProps {
  index: string;
  title: string;
  caption: string;
  images: string[];
  videoSrc: string;
  themeColor: 'red' | 'blue';
  phase: 'images' | 'video';
  currentImageIndex: number;
  onVideoEnd: () => void;
  delay?: number;
}

const CarVideoCard: React.FC<CarVideoCardProps> = ({ 
  index, 
  title, 
  caption, 
  images,
  videoSrc,
  themeColor,
  phase,
  currentImageIndex,
  onVideoEnd,
  delay = 0 
}) => {
  const isRed = themeColor === 'red';
  const glowClass = isRed ? "group-hover:border-accentRed/50" : "group-hover:border-accentBlue/50";
  const shadowClass = isRed ? "group-hover:shadow-[0_0_40px_rgba(255,18,56,0.2)]" : "group-hover:shadow-[0_0_40px_rgba(36,183,255,0.2)]";
  const accentTextClass = isRed ? "text-accentRed" : "text-accentBlue";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -6, scale: 1.015 }}
      className={`relative h-[350px] lg:h-[390px] rounded-[28px] overflow-hidden border border-white/10 glass transition-all duration-500 group cursor-pointer ${glowClass} ${shadowClass}`}
    >
      {/* Media Background with Synchronized Transitions */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <AnimatePresence mode="popLayout">
          {phase === 'images' ? (
            <motion.div
              key={`img-${currentImageIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <motion.img
                src={images[currentImageIndex]}
                initial={{ scale: 1.15 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ) : (
            <motion.div
              key="video-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
            >
              <video
                src={videoSrc}
                autoPlay
                muted
                playsInline
                preload="auto"
                onEnded={onVideoEnd}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${isRed ? 'bg-accentRed' : 'bg-accentBlue'} pointer-events-none`} />
      
      {/* Animated Light Streak */}
      <div className={`absolute -inset-[100%] ${isRed ? 'bg-gradient-to-r from-transparent via-accentRed/10 to-transparent' : 'bg-gradient-to-r from-transparent via-accentBlue/10 to-transparent'} -rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none`} />

      {/* Content Top */}
      <div className="absolute top-8 left-8">
        <span className="text-white/40 font-bold text-xs tracking-[0.4em] mb-2 block">{index}</span>
        <div className="text-[20px] lg:text-[24px] font-black tracking-widest uppercase flex gap-2">
          <span className="text-white">VELOCE</span>
          <AnimatedText text={title} className={accentTextClass} accent />
        </div>
      </div>

      {/* Content Bottom */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
        <motion.p 
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
          className="text-white/60 text-xs lg:text-sm font-medium tracking-widest uppercase max-w-[220px]"
        >
          {caption}
        </motion.p>
        
        {/* Progress Indicators */}
        <div className="flex gap-1.5 mb-1">
          {[...Array(3)].map((_, i) => {
            const isActive = (phase === 'images' && currentImageIndex === i) || (phase === 'video' && i === 2);
            return (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-500 ${isActive ? `w-6 ${isRed ? 'bg-accentRed' : 'bg-accentBlue'}` : 'w-1.5 bg-white/20'}`} 
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default CarVideoCard;
