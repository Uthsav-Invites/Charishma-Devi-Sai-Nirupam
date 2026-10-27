import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../config/invitationConfig';
import { OmSymbol, LotusMotif } from './TraditionalMotifs';

const EnvelopeOverlay = ({ onOpenComplete, onStartMusic }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const { bride, groom } = INVITATION_CONFIG;

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    if (onStartMusic) onStartMusic();

    setTimeout(() => {
      setIsExpanding(true);
    }, 1200);

    setTimeout(() => {
      onOpenComplete();
    }, 2200);
  };

  const handleSkip = (e) => {
    e.stopPropagation();
    if (onStartMusic) onStartMusic();
    onOpenComplete();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#2A1C14]/90 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden p-4 select-none"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      {/* Top Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-5 right-5 z-[10000] px-4 py-1.5 rounded-full bg-[#FFFDF9]/20 hover:bg-[#FFFDF9]/30 text-[#FFFDF9] border border-[#D4AF37]/50 font-serif text-xs tracking-widest uppercase transition-all duration-300 backdrop-blur-sm cursor-pointer shadow-lg"
      >
        Skip to Invitation ➔
      </button>

      {/* Auspicious Inscription Above Envelope */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 pointer-events-none"
        >
          <div className="flex items-center justify-center gap-2 text-[#E8CA7C] mb-1">
            <span className="text-xs">✦</span>
            <span className="font-serif text-xs tracking-[0.25em] uppercase text-[#D4AF37]">
              || श्री गणेशाय नमः ||
            </span>
            <span className="text-xs">✦</span>
          </div>
          <h2 className="font-cursive text-3xl sm:text-4xl text-[#FFFDF9] drop-shadow-md">
            {bride.fullName} &amp; {groom.fullName}
          </h2>
        </motion.div>
      )}

      {/* Envelope Container */}
      <div
        className="relative flex items-center justify-center cursor-pointer transform hover:scale-[1.02] transition-transform duration-300"
        style={{ width: '340px', height: '220px' }}
        onClick={handleOpen}
      >
        {/* ENVELOPE BACK (Deep Royal Sandalwood / Maroon) */}
        <div className="absolute inset-0 bg-[#7B1123] rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.6)] z-0 overflow-hidden border border-[#D4AF37]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/30"></div>
        </div>

        {/* PAPER (The Invitation Letter) */}
        <motion.div
          className="absolute left-1/2 bottom-0 w-[300px] h-[190px] bg-[#FFFDF9] rounded-t-lg shadow-xl flex flex-col items-center justify-center p-4 border border-[#D4AF37]"
          initial={{ x: '-50%', y: 0, scale: 1, zIndex: 10 }}
          animate={
            isOpen
              ? {
                  y: isExpanding ? 100 : -160,
                  scale: isExpanding ? 25 : 1,
                  zIndex: isExpanding ? 50 : 10,
                }
              : { x: '-50%', y: 0, scale: 1, zIndex: 10 }
          }
          transition={{
            duration: isExpanding ? 1.0 : 1.2,
            delay: isOpen && !isExpanding ? 0.3 : 0,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "center center" }}
        >
          {/* Inner card frame */}
          <motion.div
            animate={{ opacity: isExpanding ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="border border-[#D4AF37] w-full h-full rounded-md flex flex-col items-center justify-center py-2 px-3 text-center bg-[#FAF3E8]"
          >
            <OmSymbol className="w-8 h-8 text-[#C59B27] mb-1" />
            <span className="font-display text-[9px] tracking-[0.2em] uppercase text-[#996D19] font-bold">
              ENGAGEMENT INVITATION
            </span>
            <h3 className="font-cursive text-2xl text-[#7B1123] leading-tight my-1">
              {bride.fullName} &amp; {groom.fullName}
            </h3>
            <span className="font-serif text-[10px] text-[#5C4535]">
              Thursday, 29 October 2026
            </span>
          </motion.div>
        </motion.div>

        {/* ENVELOPE BOTTOM FLAP (Front) */}
        <div
          className="absolute bottom-0 left-0 w-0 h-0 z-20 pointer-events-none drop-shadow-md"
          style={{
            borderLeft: '170px solid transparent',
            borderRight: '170px solid transparent',
            borderBottom: '120px solid #8E1B32',
          }}
        ></div>

        {/* ENVELOPE LEFT FLAP */}
        <div
          className="absolute bottom-0 left-0 w-0 h-0 z-20 pointer-events-none drop-shadow-sm"
          style={{
            borderTop: '110px solid transparent',
            borderBottom: '110px solid transparent',
            borderLeft: '170px solid #7B1123',
          }}
        ></div>

        {/* ENVELOPE RIGHT FLAP */}
        <div
          className="absolute bottom-0 right-0 w-0 h-0 z-20 pointer-events-none drop-shadow-sm"
          style={{
            borderTop: '110px solid transparent',
            borderBottom: '110px solid transparent',
            borderRight: '170px solid #730F20',
          }}
        ></div>

        {/* ENVELOPE TOP FLAP */}
        <motion.div
          className="absolute top-0 left-0 w-0 h-0 z-30 pointer-events-none drop-shadow-xl"
          style={{
            borderLeft: '170px solid transparent',
            borderRight: '170px solid transparent',
            borderTop: '130px solid #630C1B',
            transformOrigin: 'top center',
          }}
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpen ? 180 : 0, zIndex: isOpen ? 5 : 30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Royal Wax Seal with Om */}
          <motion.div
            className="absolute flex items-center justify-center shadow-2xl rounded-full"
            style={{
              width: '64px',
              height: '64px',
              background: 'radial-gradient(circle, #E8CA7C 0%, #C59B27 60%, #936F15 100%)',
              top: '-32px',
              left: '-32px',
              border: '2px solid #FFF5D6',
            }}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-1 rounded-full border border-[#7B1123]/40"></div>
            <OmSymbol className="w-8 h-8 text-[#7B1123] drop-shadow" />
          </motion.div>
        </motion.div>
      </div>

      {/* Tap Instruction */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="mt-8 text-[#E8CA7C] font-serif tracking-[0.2em] text-xs uppercase flex items-center gap-2 cursor-pointer"
          onClick={handleOpen}
        >
          <span>✦</span>
          <span>Tap the Envelope to Open</span>
          <span>✦</span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default EnvelopeOverlay;
