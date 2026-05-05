import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundDecor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#030406]">
      {/* Radial Glows */}
      <motion.div 
        className="absolute -left-[10%] top-[20%] w-[60%] h-[60%] rounded-full bg-accentRed/10 blur-[120px]"
        animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
      />
      <motion.div 
        className="absolute -right-[10%] top-[10%] w-[60%] h-[60%] rounded-full bg-accentBlue/10 blur-[120px]"
        animate={{ x: -mousePos.x * 0.5, y: -mousePos.y * 0.5 }}
      />

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Arcs/Rings */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        {/* Large Metallic Arc */}
        <motion.div 
          className="absolute -top-[20%] -right-[10%] w-[80%] h-[120%] border-[1px] border-white/5 rounded-full"
          style={{ transform: 'rotate(-15deg)' }}
          animate={{ x: mousePos.x * 0.2, y: mousePos.y * 0.2 }}
        />
        
        {/* Red Glowing Arc Segment */}
        <motion.div 
          className="absolute top-[10%] right-[15%] w-[400px] h-[600px] border-t-2 border-r-2 border-accentRed/40 rounded-tr-[300px] blur-[2px]"
          animate={{ x: mousePos.x * 0.3, y: mousePos.y * 0.3 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-0 right-0 w-4 h-4 bg-accentRed rounded-full shadow-[0_0_20px_#ff1238]" />
        </motion.div>

        {/* Blue Glowing Arc Segment */}
        <motion.div 
          className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] border-b-2 border-l-2 border-accentBlue/30 rounded-bl-[250px] blur-[1px]"
          animate={{ x: -mousePos.x * 0.2, y: -mousePos.y * 0.2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-40" />
    </div>
  );
};

export default BackgroundDecor;
