import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Calendar, ArrowRight } from 'lucide-react';

const BACKGROUND_MUSIC_PATH = "/backgroundmusic/love_nwatitti.mp3";

const BottomBar: React.FC = () => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Confirm the component is mounted and the audio path
    console.log("BottomBar mounted, music path:", BACKGROUND_MUSIC_PATH);
  }, []);

  const toggleSound = async () => {
    console.log("Sound button clicked");
    const audio = audioRef.current;
    if (!audio) {
      console.error("Audio element not found");
      return;
    }

    try {
      if (!soundEnabled) {
        audio.muted = false;
        audio.volume = 0.5;
        audio.loop = true;

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
          console.log("Audio play started");
          setSoundEnabled(true);
        }
      } else {
        audio.pause();
        console.log("Audio paused");
        setSoundEnabled(false);
      }
    } catch (error) {
      console.error("Audio failed:", error);
      setSoundEnabled(false);
    }
  };

  const handleAudioError = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const target = e.target as HTMLAudioElement;
    console.error("Audio failed to load at path:", BACKGROUND_MUSIC_PATH);
    console.error("Exact error:", target.error);
    console.log("Audio failed");
  };

  const handleAudioLoaded = () => {
    console.log("Audio loaded");
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={BACKGROUND_MUSIC_PATH}
        preload="auto"
        loop
        onCanPlayThrough={handleAudioLoaded}
        onError={handleAudioError}
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] lg:w-[calc(100%-96px)] max-w-[1320px] flex items-center justify-between z-40 pointer-events-none"
      >
        {/* Left: Sound */}
        <div className="pointer-events-auto">
          <button 
            type="button"
            onClick={toggleSound}
            aria-pressed={soundEnabled}
            aria-label={soundEnabled ? "Turn background music off" : "Turn background music on"}
            className={`flex items-center gap-3 glass rounded-full px-5 py-2.5 group transition-all duration-300 cursor-pointer ${
              soundEnabled ? 'border-accentRed/40 bg-accentRed/5' : 'hover:border-white/20'
            }`}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-accentRed" />
            ) : (
              <VolumeX className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
            )}
            
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
              soundEnabled ? 'text-white' : 'text-white/60 group-hover:text-white'
            }`}>
              {soundEnabled ? 'Sound On' : 'Sound Off'}
            </span>
            
            <div className="flex items-end gap-[2px] h-3">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={soundEnabled ? { height: [4, 12, 4] } : { height: 4 }}
                  transition={soundEnabled ? { 
                    duration: 0.8, 
                    repeat: Infinity, 
                    delay: i * 0.1,
                    ease: "easeInOut"
                  } : { duration: 0.3 }}
                  className={`w-[2px] rounded-full transition-colors duration-300 ${
                    soundEnabled ? 'bg-accentRed shadow-[0_0_8px_rgba(255,18,56,0.5)]' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </button>
        </div>

        {/* Center: Scroll */}
        <div className="hidden md:flex flex-col items-center gap-3">
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
            Scroll to Discover
          </span>
          <div className="relative w-[1px] h-12 bg-white/10 overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-accentRed to-transparent"
            />
          </div>
        </div>

        {/* Right: Book */}
        <div className="pointer-events-auto">
          <button 
            type="button"
            className="flex items-center gap-4 glass rounded-full px-6 py-3 group hover:border-accentRed/40 transition-all duration-300 shadow-glow-red/20 hover:shadow-glow-red/40"
          >
            <Calendar className="w-4 h-4 text-accentRed" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-white uppercase">
              Book a Private Experience
            </span>
            <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white transition-all group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default BottomBar;
