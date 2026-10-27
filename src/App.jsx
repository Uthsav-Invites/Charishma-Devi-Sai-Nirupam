import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import DetailsSection from './components/DetailsSection';
import Footer from './components/Footer';
import EnvelopeOverlay from './components/EnvelopeOverlay';
import FallingPetals from './components/FallingPetals';
import { INVITATION_CONFIG } from './config/invitationConfig';
import { FaMusic, FaPause } from 'react-icons/fa';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [showEnvelope, setShowEnvelope] = useState(true);

  useEffect(() => {
    if (showEnvelope) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
  }, [showEnvelope]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((e) => console.log('Audio play error:', e));
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleStartMusic = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log('Autoplay handled by user interaction:', e));
    }
  };

  return (
    <>
      {/* Royal Opening Envelope Overlay */}
      <AnimatePresence>
        {showEnvelope && (
          <EnvelopeOverlay
            key="envelope"
            onOpenComplete={() => setShowEnvelope(false)}
            onStartMusic={handleStartMusic}
          />
        )}
      </AnimatePresence>

      <div className="relative min-h-screen bg-[#EFE6D5] flex flex-col font-cormorant selection:bg-[#820A24] selection:text-[#FAF3E6]">
        
        {/* Subtle Ambient Background Warmth */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#C5A15B] rounded-full mix-blend-multiply filter blur-[120px] opacity-15 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#820A24] rounded-full mix-blend-multiply filter blur-[140px] opacity-10 transform translate-x-1/3 translate-y-1/3"></div>
        </div>

        {/* Ambient Slow-Falling Flower Petals from the Top */}
        <FallingPetals count={16} className="fixed inset-0 z-40 pointer-events-none" />

        {/* Music Toggle - Styled in Traditional Antique Gold & Maroon */}
        <button
          onClick={toggleMusic}
          className={`fixed top-4 right-4 z-[9990] p-3 rounded-full shadow-xl border-[1.5px] border-[#C5A15B] transition-all duration-300 backdrop-blur-md cursor-pointer ${
            isPlaying
              ? 'bg-[#820A24] text-[#FAF3E6] hover:bg-[#630519]'
              : 'bg-[#FDF9F0]/95 text-[#820A24] hover:bg-[#FAF3E6] animate-bounce'
          }`}
          aria-label={isPlaying ? 'Pause music' : 'Play traditional background music'}
          title={isPlaying ? 'Pause music' : 'Play traditional background music'}
        >
          {isPlaying ? (
            <FaPause size={14} className="animate-[spin_4s_linear_infinite]" />
          ) : (
            <FaMusic size={14} />
          )}
        </button>

        {/* Background Audio */}
        <audio
          ref={audioRef}
          src={INVITATION_CONFIG.audio.src}
          loop
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Main Invitation Stream */}
        <main className="relative z-10 flex flex-col w-full mx-auto max-w-[560px] shadow-[0_0_50px_rgba(72,52,36,0.12)] bg-[#FAF3E6] min-h-screen border-l border-r border-[#C5A15B]/40 overflow-x-hidden">
          {/* Hero / Main Card matching image exactly */}
          <HeroSection />

          {/* Ornamental Divider */}
          <div className="w-full flex items-center justify-center py-2 bg-[#FAF3E6]">
            <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#C5A15B] to-transparent"></div>
          </div>

          {/* Meet the Couple - Text & Traditional Profiles with Parents */}
          <CoupleSection />

          {/* Ornamental Divider */}
          <div className="w-full flex items-center justify-center py-2 bg-[#FAF3E6]">
            <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#C5A15B] to-transparent"></div>
          </div>

          {/* Event & Venue with Muhurtham & Google Maps */}
          <DetailsSection />

          {/* Final Blessings & Footer */}
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
