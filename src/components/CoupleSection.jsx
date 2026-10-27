import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../config/invitationConfig';
import { RoyalLotusDivider, DiyaMotif } from './TraditionalMotifs';

const CoupleSection = () => {
  const { bride, groom } = INVITATION_CONFIG;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 flex flex-col items-center relative overflow-hidden bg-[#FAF3E6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-10 flex flex-col items-center w-full max-w-xl mx-auto"
      >
        {/* Section Header */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-1 text-[#9E782F]">
          <DiyaMotif className="w-5 h-5 text-[#9E782F]" />
          <h2 className="font-cormorant italic font-bold text-2xl sm:text-3xl text-[#820A24] tracking-wide">
            Meet the Couple
          </h2>
          <DiyaMotif className="w-5 h-5 text-[#9E782F]" />
        </div>

        <RoyalLotusDivider className="my-2 max-w-[240px] mx-auto" />

        {/* Single Unified Connected Couple Card - No Separate Boxes */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="w-full max-w-[500px] bg-gradient-to-b from-[#FDF9F0] via-[#FAF3E6] to-[#FDF9F0] rounded-xl p-6 sm:p-8 border-[2px] border-[#C5A15B] shadow-[0_15px_40px_rgba(72,52,36,0.12)] relative overflow-hidden mt-4"
        >
          {/* Inner hairline border */}
          <div className="absolute inset-2 sm:inset-2.5 border border-[#C5A15B]/50 rounded-lg pointer-events-none"></div>

          {/* Inward corner notches */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-[2px] border-l-[2px] border-[#A37B32] pointer-events-none"></div>
          <div className="absolute top-2 right-2 w-3 h-3 border-t-[2px] border-r-[2px] border-[#A37B32] pointer-events-none"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-[2px] border-l-[2px] border-[#A37B32] pointer-events-none"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-[2px] border-r-[2px] border-[#A37B32] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center text-center">

            {/* 1. BRIDE SECTION */}
            <div className="w-full flex flex-col items-center">
              {/* Bride Name in signature cursive script */}
              <h3 className="font-cursive font-semibold text-4xl sm:text-5xl md:text-[52px] text-[#820A24] leading-tight">
                {bride.fullName}
              </h3>

              {/* Daughter of (D/o) */}
              <div className="mt-1 flex flex-col items-center">
                <span className="font-cinzel text-[11px] sm:text-xs text-[#9E782F] font-bold tracking-[0.25em] uppercase">
                  D/o
                </span>
                <p className="font-cormorant font-semibold text-base sm:text-lg text-[#483424] mt-0.5 leading-snug">
                  Smt. {bride.motherName} &amp; Sri {bride.fatherName}
                </p>
              </div>
            </div>

            {/* 2. THE SACRED CONNECTION (Interlocking Rings & Golden Filament Bridge) */}
            <div className="w-full my-4 sm:my-5 flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-center gap-2 sm:gap-3">
                {/* Left connecting gold vine */}
                <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#C5A15B] to-[#9E782F]"></div>

                {/* Central Interlocking Rings Medallion */}
                <motion.div
                  animate={{
                    scale: [1, 1.07, 1],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                  className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-gradient-to-b from-[#FFFDF9] to-[#FAF3E6] border-[1.5px] border-[#C5A15B] shadow-[0_4px_12px_rgba(163,123,50,0.25)] flex items-center justify-center p-2.5 shrink-0 z-10"
                >
                  <img
                    src="/assets/ring.png"
                    alt="Two Souls United"
                    className="w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(163,123,50,0.3)]"
                  />
                </motion.div>

                {/* Right connecting gold vine */}
                <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#C5A15B] to-[#9E782F]"></div>
              </div>

              {/* Romantic Connection Tagline */}
              <span className="font-cormorant italic font-semibold text-[#9E782F] text-xs sm:text-sm tracking-wider mt-1.5">
                {/* Two Souls United by Destiny */}
              </span>
            </div>

            {/* 3. GROOM SECTION */}
            <div className="w-full flex flex-col items-center">
              {/* Groom Name in exact same cursive script */}
              <h3 className="font-cursive font-semibold text-4xl sm:text-5xl md:text-[52px] text-[#820A24] leading-tight">
                {groom.fullName}
              </h3>

              {/* Son of (S/o) */}
              <div className="mt-1 flex flex-col items-center">
                <span className="font-cinzel text-[11px] sm:text-xs text-[#9E782F] font-bold tracking-[0.25em] uppercase">
                  S/o
                </span>
                <p className="font-cormorant font-semibold text-base sm:text-lg text-[#483424] mt-0.5 leading-snug">
                  Smt. {groom.motherName} &amp; Sri {groom.fatherName}
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoupleSection;
