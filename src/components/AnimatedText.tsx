import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  accent?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "", accent = false }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const hoverAnimation = (i: number) => ({
    y: i % 2 === 0 ? -6 : 4,
    rotate: i % 2 === 0 ? -2 : 2,
    scale: 1.03,
    filter: accent ? "drop-shadow(0 0 8px currentColor)" : "none",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  });

  return (
    <motion.div
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          whileHover={hoverAnimation(index)}
          className={`inline-block ${letter === " " ? "mr-[0.3em]" : ""}`}
          style={{ cursor: "default" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
