import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../config/invitationConfig';

const CouplePortraitSection = () => {
  const { bride, groom } = INVITATION_CONFIG;

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 flex flex-col items-center justify-center bg-[#FAF3E6] overflow-hidden">
      
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-tr from-[#C5A15B]/20 to-[#820A24]/10 blur-3xl pointer-events-none" />

      {/* Main Royal Portrait Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-[460px] bg-[#FDF9F0] rounded-2xl p-3.5 sm:p-5 border-[2px] border-[#C5A15B] shadow-[0_16px_45px_rgba(72,52,36,0.12)] flex flex-col items-center overflow-hidden"
      >
        {/* Inner hairline border */}
        <div className="absolute inset-2 border border-[#C5A15B]/50 rounded-xl pointer-events-none z-30" />

        {/* Framed Portrait Container */}
        <div className="relative w-full aspect-[732/1100] max-h-[580px] rounded-lg overflow-hidden border border-[#C5A15B]/60 shadow-inner flex items-center justify-center">
          
          {/* 1. Background Frame: Traditional Mandap Frame */}
          <img
            src="/assets/mandap-frame-hd.png"
            alt="Traditional Mandap Frame"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
          />

          {/* 2. Bride & Groom Couple Illustration on the Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-[9%] sm:bottom-[11%] left-1/2 -translate-x-1/2 w-[72%] sm:w-[68%] max-w-[310px] z-10 flex items-end justify-center pointer-events-none"
          >
            <img
              src="/assets/traditional-couple.png"
              alt={`${bride.fullName} & ${groom.fullName}`}
              className="w-full h-auto object-contain drop-shadow-[0_8px_18px_rgba(72,52,36,0.3)] select-none"
            />
          </motion.div>

          {/* 3. Names of Both in Single Line on the Frame (Frosted Gold Ribbon) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="absolute bottom-2.5 sm:bottom-3.5 inset-x-2 sm:inset-x-3.5 z-20 py-2 px-2 sm:px-3 rounded-lg bg-[#FDF9F0]/92 backdrop-blur-md border border-[#C5A15B] shadow-[0_4px_14px_rgba(72,52,36,0.18)] flex items-center justify-center text-center"
          >
            <h3 className="font-cursive font-bold text-lg sm:text-2xl md:text-[26px] text-[#820A24] whitespace-nowrap tracking-wide leading-none drop-shadow-[0_1px_1px_rgba(130,10,36,0.1)]">
              {bride.fullName} <span className="font-cormorant italic text-base sm:text-xl text-[#9E782F] mx-1">&amp;</span> {groom.fullName}
            </h3>
          </motion.div>

        </div>

      </motion.div>

    </section>
  );
};

export default CouplePortraitSection;
