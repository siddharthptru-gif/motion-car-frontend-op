import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { Zap, Shield, Target, Diamond, Cpu, MousePointer2, Box, Layers, PlayCircle, Lock, FileText, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

const SectionWrapper: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({ id, children, className = "" }) => (
  <section id={id} className={`py-24 px-8 lg:px-[48px] max-w-[1320px] mx-auto ${className}`}>
    {children}
  </section>
);

const SectionHeader: React.FC<{ title: string; heading: string; accentColor?: string }> = ({ title, heading, accentColor = "text-accentRed" }) => (
  <div className="mb-16">
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-[12px] font-bold tracking-[0.5em] text-white/40 uppercase block mb-4"
    >
      {title}
    </motion.span>
    <AnimatedText 
      text={heading} 
      className={`text-4xl md:text-6xl font-black italic tracking-tighter max-w-3xl leading-[1.1]`}
      accent
    />
  </div>
);

const StatCard: React.FC<{ label: string; value: string; delay?: number }> = ({ label, value, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="glass p-8 rounded-3xl border border-white/5 hover:border-accentRed/30 transition-all duration-500 group"
  >
    <div className="text-4xl font-black text-white mb-2 group-hover:text-accentRed transition-colors italic">{value}</div>
    <div className="text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase">{label}</div>
  </motion.div>
);

const DetailCard: React.FC<{ icon: any; title: string; description: string; delay?: number; iconColor?: string }> = ({ icon: Icon, title, description, delay = 0, iconColor = "text-accentRed" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="glass p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500 group"
  >
    <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
      <Icon className={`w-6 h-6 ${iconColor}`} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 italic tracking-tight">{title}</h3>
    <p className="text-white/50 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export const VehiclesSection: React.FC = () => (
  <SectionWrapper id="vehicles">
    <SectionHeader title="Vehicles" heading="Two Machines. One Legacy." />
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <p className="text-white/60 text-lg leading-relaxed max-w-xl">
          Experience the pinnacle of automotive contrast. Our showcase brings together the <span className="text-accentRed font-bold">Mustang's</span> raw, unbridled aggression and the <span className="text-accentBlue font-bold">BMW's</span> calculated, surgical precision.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 glass rounded-2xl border-l-4 border-accentRed">
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Mustang</h4>
            <p className="text-white/40 text-[13px]">Raw muscle, red aggression, explosive torque, and magnetic part-reveal motion.</p>
          </div>
          <div className="p-6 glass rounded-2xl border-l-4 border-accentBlue">
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">BMW</h4>
            <p className="text-white/40 text-[13px]">Blue-black precision, luxury performance, controlled engineering, and refined power.</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <StatCard label="Signature Models" value="2" delay={0.1} />
        <StatCard label="Combined HP" value="1300+" delay={0.2} />
        <StatCard label="Compromises" value="0" delay={0.3} />
        <StatCard label="Motion Showcase" value="6s" delay={0.4} />
        <StatCard label="Auto-Loop Media" value="Dual" delay={0.5} />
      </div>
    </div>
  </SectionWrapper>
);

export const PerformanceSection: React.FC = () => (
  <SectionWrapper id="performance" className="bg-white/[0.02]">
    <SectionHeader title="Performance" heading="Built For Speed, Control, And Presence." />
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      <div className="lg:col-span-1">
        <p className="text-white/60 text-lg leading-relaxed mb-8">
          Engineering the ultimate digital showroom requires a focus on <span className="text-accentRed font-bold">visual performance</span>. Every frame is optimized for instant impact and track-inspired motion.
        </p>
        <div className="space-y-4">
          {[
            { label: "0–100 Visual Impact", value: "2.9s" },
            { label: "Motion Smoothness", value: "120fps Feel" },
            { label: "Hero Load Priority", value: "Optimized" },
            { label: "Interaction Delay", value: "Ultra Low" },
            { label: "Showcase Loop", value: "Continuous" }
          ].map((stat, i) => (
            <div key={i} className="flex justify-between items-center py-3 border-b border-white/5">
              <span className="text-white/40 text-[11px] font-bold uppercase tracking-wider">{stat.label}</span>
              <span className="text-white font-bold italic">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <DetailCard icon={Zap} title="Power Delivery" description="Instant response across all digital touchpoints with zero latency." delay={0.1} />
        <DetailCard icon={Target} title="Aerodynamic Presence" description="Fluid layouts that guide the eye through cinematic vehicle reveals." delay={0.2} iconColor="text-accentBlue" />
        <DetailCard icon={Shield} title="Motion Stability" description="Consistent, jitter-free animations even during complex transitions." delay={0.3} />
        <DetailCard icon={Diamond} title="Responsive Control" description="Perfectly balanced interaction model across every device size." delay={0.4} iconColor="text-accentBlue" />
      </div>
    </div>
  </SectionWrapper>
);

export const InnovationSection: React.FC = () => (
  <SectionWrapper id="innovation">
    <SectionHeader title="Innovation" heading="Motion-First Digital Engineering." />
    
    <div className="mb-16">
      <p className="text-white/60 text-lg leading-relaxed max-w-3xl mb-12">
        This website uses a <span className="text-accentRed font-bold">synchronized media engine</span>, glassmorphism, and scroll-based reveal animations to create an immersive futuristic experience.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DetailCard icon={Cpu} title="Synchronized Media" description="Photo carousel → video motion → photo carousel cycle." delay={0.1} />
        <DetailCard icon={Layers} title="Ambient Neon Layers" description="Deep volumetric lighting with dynamic red and blue glows." delay={0.2} />
        <DetailCard icon={PlayCircle} title="Premium Video Cards" description="Auto-playing high-fidelity loops with seamless transitions." delay={0.3} />
        <DetailCard icon={Box} title="Letter Motion System" description="Cursor-reactive typography that breathes life into every word." delay={0.4} />
        <DetailCard icon={MousePointer2} title="Smooth Transitions" description="Fluid section changes that maintain visual momentum." delay={0.5} />
        <DetailCard icon={Layers} title="Responsive Layout" description="Optimized motion-first experience for desktop and mobile." delay={0.6} />
      </div>
    </div>
  </SectionWrapper>
);

export const ExperienceSection: React.FC = () => (
  <SectionWrapper id="experience" className="bg-white/[0.02]">
    <SectionHeader title="Experience" heading="A Showroom That Moves With You." />
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <p className="text-white/60 text-lg leading-relaxed">
          The <span className="text-accentRed font-bold">VELOCE</span> digital showroom is designed to be felt. It's a split-personality journey between red aggression and blue precision.
        </p>
        <ul className="space-y-4">
          {[
            "Explore vehicles through cursor-reactive motion",
            "Watch vehicles assemble through synchronized cycles",
            "Experience glowing glassmorphism and ambient glows",
            "Navigate smoothly through cinematic media panels"
          ].map((item, i) => (
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="flex items-center gap-4 text-white/80"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accentRed shadow-[0_0_8px_rgba(255,18,56,1)]" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="aspect-square glass rounded-3xl flex flex-col items-center justify-center p-6 text-center border-accentRed/20">
            <PlayCircle className="w-8 h-8 text-accentRed mb-4" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">Explore by Motion</span>
          </div>
          <div className="aspect-[4/5] glass rounded-3xl flex flex-col items-center justify-center p-6 text-center border-accentBlue/20">
            <Box className="w-8 h-8 text-accentBlue mb-4" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">Compare Identities</span>
          </div>
        </div>
        <div className="space-y-4 pt-8">
          <div className="aspect-[4/5] glass rounded-3xl flex flex-col items-center justify-center p-6 text-center border-accentRed/20">
            <Layers className="w-8 h-8 text-accentRed mb-4" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">Watch Assembly</span>
          </div>
          <div className="aspect-square glass rounded-3xl flex flex-col items-center justify-center p-6 text-center border-accentBlue/20">
            <Target className="w-8 h-8 text-accentBlue mb-4" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">Feel Precision</span>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export const OwnershipSection: React.FC = () => (
  <SectionWrapper id="ownership">
    <SectionHeader title="Ownership" heading="Designed For A Private Luxury Journey." />
    
    <div className="glass p-12 rounded-[40px] border border-white/5 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accentRed/10 blur-[100px] -mr-48 -mt-48 group-hover:bg-accentRed/20 transition-colors duration-700" />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Access a personalized digital showroom tailored to your aesthetic. From custom motion reveals to private viewings, the <span className="text-accentRed font-bold">VELOCE</span> journey is yours to configure.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-accentRed hover:bg-accentRed-dark text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-full transition-all shadow-glow-red/20 hover:shadow-glow-red/40 flex items-center gap-2">
              Book Private Experience
              <ExternalLink className="w-3 h-3" />
            </button>
            <button className="glass border-white/10 hover:border-white/30 text-white font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-full transition-all">
              Configure Showcase
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            "Private Viewing",
            "Configure Experience",
            "Personalized Showroom",
            "Custom Motion Reveal"
          ].map((text, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <span className="text-[10px] font-bold text-accentRed uppercase tracking-[0.2em] mb-2 block">0{i+1}</span>
              <span className="text-white font-bold text-sm uppercase tracking-wider">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export const PolicySection: React.FC = () => (
  <SectionWrapper id="privacy" className="pt-24 pb-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <SectionHeader title="Privacy Policy" heading="Privacy Built Into Every Interaction." />
        <p className="text-white/40 text-sm leading-relaxed mb-8">
          This website is a <span className="text-white/60">frontend-only demonstration experience</span>. It does not collect payment data, personal identification, or sensitive information by default. Media assets are displayed locally or through provided file paths.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DetailCard icon={Lock} title="No Data Collection" description="No hidden tracking in this demo." delay={0.1} />
          <DetailCard icon={Shield} title="User Controlled" description="Media paths are locally managed." delay={0.2} iconColor="text-accentBlue" />
        </div>
      </div>
      
      <div id="legal">
        <SectionHeader title="Legal" heading="Responsible Digital Showcase." accentColor="text-accentBlue" />
        <p className="text-white/40 text-sm leading-relaxed mb-8">
          All vehicle visuals, videos, and branding are concept/demo content. Actual production sites should use owned or licensed car images, videos, and logos. This project is a <span className="text-white/60">technical showcase</span> of motion and UI design.
        </p>
        <div className="glass p-8 rounded-3xl border border-white/5 space-y-4">
          <div className="flex items-center gap-4 text-white/60">
            <FileText className="w-5 h-5 text-accentBlue" />
            <span className="text-xs font-bold uppercase tracking-widest">Concept Asset Usage</span>
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <FileText className="w-5 h-5 text-accentBlue" />
            <span className="text-xs font-bold uppercase tracking-widest">Technical Demonstration Only</span>
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <FileText className="w-5 h-5 text-accentBlue" />
            <span className="text-xs font-bold uppercase tracking-widest">Licensed Content Required for Production</span>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export const Footer: React.FC = () => (
  <footer className="border-t border-white/5 pt-24 pb-12 px-8 lg:px-[48px]">
    <div className="max-w-[1320px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 flex items-center justify-center relative">
              <div className="absolute inset-0 border-2 border-accentRed/50 rounded-sm rotate-45" />
              <span className="text-white font-black text-2xl italic z-10">V</span>
            </div>
            <span className="text-white font-bold tracking-[0.4em] text-xl ml-2">VELOCE</span>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed">
            The next generation of digital automotive experiences. Precision engineered, motion driven, and luxury inspired.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Vehicles', 'Performance', 'Innovation', 'Experience', 'Ownership'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-accentRed transition-colors text-sm uppercase tracking-widest font-medium">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-white/40 hover:text-white transition-colors cursor-pointer">
              <Mail className="w-4 h-4" />
              <span className="text-sm">hello@veloce.auto</span>
            </li>
            <li className="flex items-center gap-3 text-white/40 hover:text-white transition-colors cursor-pointer">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (555) VELOCE</span>
            </li>
            <li className="flex items-center gap-3 text-white/40 hover:text-white transition-colors cursor-pointer">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Silicon Valley, CA</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
        <span className="text-white/20 text-[11px] font-bold uppercase tracking-[0.2em]">
          © 2026 VELOCE Concept Automotive Experience. All rights reserved.
        </span>
        <div className="flex gap-8">
          <a href="#privacy" className="text-white/20 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-[0.2em]">Privacy Policy</a>
          <a href="#legal" className="text-white/20 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-[0.2em]">Legal</a>
        </div>
      </div>
    </div>
  </footer>
);
