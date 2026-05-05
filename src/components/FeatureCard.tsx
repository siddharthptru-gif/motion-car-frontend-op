import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  iconColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0,
  iconColor = "text-white"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
      className="relative h-[104px] glass rounded-[22px] flex items-center px-6 group cursor-pointer transition-colors duration-300 overflow-hidden"
    >
      {/* Shine Sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      {/* Icon */}
      <div className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-5 transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110 ${iconColor}`}>
        <Icon className="w-5 h-5" />
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="text-[11px] font-black tracking-[0.2em] text-white uppercase mb-1 transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </h3>
        <p className="text-[12px] text-white/40 font-medium leading-tight">
          {description}
        </p>
      </div>

      {/* Arrow */}
      <div className="ml-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
        <ArrowRight className="w-4 h-4 text-white/40" />
      </div>
    </motion.div>
  );
};

export default FeatureCard;
