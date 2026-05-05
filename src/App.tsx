import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CarVideoCard from './components/CarVideoCard';
import FeatureCard from './components/FeatureCard';
import BottomBar from './components/BottomBar';
import BackgroundDecor from './components/BackgroundDecor';
import { Zap, Target, Shield, Diamond } from 'lucide-react';
import { 
  VehiclesSection, 
  PerformanceSection, 
  InnovationSection, 
  ExperienceSection, 
  OwnershipSection, 
  PolicySection, 
  Footer 
} from './components/DetailSections';

// MEDIA ASSETS
const MUSTANG_IMAGES = [
  "/carimages/an_ultra_realistic_elite_tier_luxury_automotive_advertisement_visual_of_a_red.png",
  "/carimages/an_ultra_realistic_elite_tier_luxury_automotive_advertisement_visual_of_a_red.png"
];

const BMW_IMAGES = [
  "/carimages/an_ultra_realistic_premium_3d_hero_visual_for_a_luxury_bmw_supercar_website (1).png",
  "/carimages/an_ultra_realistic_premium_3d_hero_visual_for_a_luxury_bmw_supercar_website (1).png"
];

const MUSTANG_VIDEO = "/carvideos/MUSTANG.mp4";
const BMW_VIDEO = "/carvideos/BMW.mp4";

const App: React.FC = () => {
  const [phase, setPhase] = useState<'images' | 'video'>('images');
  const [imageIndex, setImageIndex] = useState(0);
  const [videosEnded, setVideosEnded] = useState({ 0: false, 1: false });

  // Synchronized Image Cycling Logic
  useEffect(() => {
    if (phase === 'images') {
      const timer = setInterval(() => {
        setImageIndex(prev => {
          if (prev === 0) return 1;
          // After showing both images, switch to video phase
          setPhase('video');
          return 0; // Reset index for next cycle
        });
      }, 2200);
      return () => clearInterval(timer);
    }
  }, [phase]);

  // Handle synchronized video completion
  const handleVideoEnd = useCallback((id: number) => {
    setVideosEnded(prev => {
      const newState = { ...prev, [id]: true };
      // Switch back to images only when BOTH videos have finished
      if (newState[0] && newState[1]) {
        setPhase('images');
        return { 0: false, 1: false };
      }
      return newState;
    });
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-background text-white selection:bg-accentRed selection:text-white overflow-x-hidden scroll-smooth">
      {/* Background & Effects */}
      <BackgroundDecor />
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content Wrapper */}
      <div className="max-w-[1320px] mx-auto px-8 lg:px-[48px] pt-12 pb-32">
        
        {/* Car Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-6">
          <CarVideoCard 
            index="01"
            title="MUSTANG"
            caption="PURE MUSCLE. REFINED POWER."
            images={MUSTANG_IMAGES}
            videoSrc={MUSTANG_VIDEO}
            themeColor="red"
            phase={phase}
            currentImageIndex={imageIndex}
            onVideoEnd={() => handleVideoEnd(0)}
            delay={0.2}
          />
          <CarVideoCard 
            index="02"
            title="BMW"
            caption="PRECISION. LUXURY. PERFORMANCE."
            images={BMW_IMAGES}
            videoSrc={BMW_VIDEO}
            themeColor="blue"
            phase={phase}
            currentImageIndex={imageIndex}
            onVideoEnd={() => handleVideoEnd(1)}
            delay={0.4}
          />
        </div>

        {/* Feature Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          <FeatureCard 
            icon={Zap}
            title="Extreme Performance"
            description="Relentless power. Track-born engineering."
            delay={0.6}
            iconColor="text-accentRed"
          />
          <FeatureCard 
            icon={Target}
            title="Precise Control"
            description="Perfect balance. Total confidence."
            delay={0.7}
            iconColor="text-accentBlue"
          />
          <FeatureCard 
            icon={Shield}
            title="Advanced Safety"
            description="Intelligent systems. Protect what matters."
            delay={0.8}
          />
          <FeatureCard 
            icon={Diamond}
            title="Bespoke Luxury"
            description="Personalized details. Crafted for you."
            delay={0.9}
          />
        </div>
      </div>

      {/* Detailed Content Sections */}
      <VehiclesSection />
      <PerformanceSection />
      <InnovationSection />
      <ExperienceSection />
      <OwnershipSection />
      <PolicySection />

      {/* Footer */}
      <Footer />

      {/* Bottom Utility Bar */}
      <BottomBar />
    </main>
  );
};

export default App;
