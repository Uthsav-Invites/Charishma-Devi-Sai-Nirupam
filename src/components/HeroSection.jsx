import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../config/invitationConfig';
import {
  OmHeaderFlourish,
  CardRosetteDivider,
  LeafBranchFlourish,
  CalendarIconExact,
  ClockIconExact,
} from './TraditionalMotifs';

const HeroSection = () => {
  const { bride, groom, event, schedule } = INVITATION_CONFIG;

  return (
    <section className="relative w-full h-[100dvh] min-h-[580px] max-h-[100dvh] flex items-center justify-center p-2 sm:p-3 overflow-hidden bg-[#EFE6D5]">
      {/* Real Card Canvas - Full border visible within one screen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-[500px] h-[calc(100dvh-16px)] sm:h-[calc(100dvh-24px)] max-h-[790px] mx-auto p-3 sm:p-4 rounded-sm shadow-[0_15px_45px_rgba(72,52,36,0.18)] border border-[#C5A15B] overflow-hidden flex flex-col justify-between items-center text-center"
        style={{
          background: 'radial-gradient(circle at 50% 35%, #FDF9F0 0%, #FAF3E6 55%, #F3E6CD 100%)',
        }}
      >
        {/* Outer Hairline Border (1px) */}
        <div className="absolute inset-1.5 sm:inset-2 border border-[#C5A15B]/70 pointer-events-none z-0"></div>

        {/* Inner Gold Border (2px) */}
        <div className="absolute inset-2.5 sm:inset-3 border-[2px] border-[#C5A15B] pointer-events-none z-0">
          {/* Inward Curved Corner Notches */}
          <div className="absolute -top-[4px] -left-[4px] w-3 h-3 border-t-[2px] border-l-[2px] border-[#A37B32]"></div>
          <div className="absolute -top-[4px] -right-[4px] w-3 h-3 border-t-[2px] border-r-[2px] border-[#A37B32]"></div>
          <div className="absolute -bottom-[4px] -left-[4px] w-3 h-3 border-b-[2px] border-l-[2px] border-[#A37B32]"></div>
          <div className="absolute -bottom-[4px] -right-[4px] w-3 h-3 border-b-[2px] border-r-[2px] border-[#A37B32]"></div>
        </div>

        {/* Corner Florals: Animated Hanging Lotus Chains (Behind) + Flowers in Front (Static) */}

        {/* 1. Top Left Corner */}
        {/* Animated Hanging Chains */}
        <motion.div
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}
          style={{ transformOrigin: '20% 15%' }}
          className="absolute top-0 left-0 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none z-10 -translate-x-1 -translate-y-1"
        >
          <img
            src="/assets/floral-corner-chains.png"
            alt=""
            className="w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(163,123,50,0.25)]"
          />
        </motion.div>
        {/* Static Flowers in Front of Border */}
        <div className="absolute top-0 left-0 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none z-20 -translate-x-1 -translate-y-1">
          <img
            src="/assets/floral-corner-flowers.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* 2. Top Right Corner (Mirrored) */}
        {/* Animated Hanging Chains */}
        <motion.div
          animate={{ rotate: [3, -3, 3] }}
          transition={{ repeat: Infinity, duration: 4.6, ease: 'easeInOut' }}
          style={{ transformOrigin: '80% 15%' }}
          className="absolute top-0 right-0 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none z-10 translate-x-1 -translate-y-1"
        >
          <img
            src="/assets/floral-corner-chains.png"
            alt=""
            className="w-full h-full object-contain transform scale-x-[-1] drop-shadow-[0_2px_4px_rgba(163,123,50,0.25)]"
          />
        </motion.div>
        {/* Static Flowers in Front of Border */}
        <div className="absolute top-0 right-0 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none z-20 translate-x-1 -translate-y-1 transform scale-x-[-1]">
          <img
            src="/assets/floral-corner-flowers.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* 3. Bottom Left Corner */}
        {/* Animated Hanging Chains */}
        <motion.div
          animate={{ rotate: [-2.5, 2.5, -2.5] }}
          transition={{ repeat: Infinity, duration: 4.4, ease: 'easeInOut' }}
          style={{ transformOrigin: '20% 85%' }}
          className="absolute bottom-0 left-0 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none z-10 -translate-x-1 translate-y-1"
        >
          <img
            src="/assets/floral-corner-chains.png"
            alt=""
            className="w-full h-full object-contain transform scale-y-[-1] drop-shadow-[0_2px_4px_rgba(163,123,50,0.25)]"
          />
        </motion.div>
        {/* Static Flowers in Front of Border */}
        <div className="absolute bottom-0 left-0 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none z-20 -translate-x-1 translate-y-1 transform scale-y-[-1]">
          <img
            src="/assets/floral-corner-flowers.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* 4. Bottom Right Corner (Mirrored) */}
        {/* Animated Hanging Chains */}
        <motion.div
          animate={{ rotate: [2.5, -2.5, 2.5] }}
          transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
          style={{ transformOrigin: '80% 85%' }}
          className="absolute bottom-0 right-0 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none z-10 translate-x-1 translate-y-1"
        >
          <img
            src="/assets/floral-corner-chains.png"
            alt=""
            className="w-full h-full object-contain transform scale-[-1] drop-shadow-[0_2px_4px_rgba(163,123,50,0.25)]"
          />
        </motion.div>
        {/* Static Flowers in Front of Border */}
        <div className="absolute bottom-0 right-0 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none z-20 translate-x-1 translate-y-1 transform scale-[-1]">
          <img
            src="/assets/floral-corner-flowers.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Main Card Content Container distributed gracefully across the height */}
        <div className="relative z-10 flex flex-col items-center justify-between h-full w-full py-1 sm:py-2">

          {/* 1. Animated Sacred Om Symbol with Ornate Gold Side Ribbons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="w-full my-0.5"
          >
            <OmHeaderFlourish />
          </motion.div>

          {/* 2. Tagline in one single line */}
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="font-cormorant italic text-[14px] sm:text-[15.5px] text-[#483424] font-semibold tracking-wider leading-none mt-0.5 mb-1"
          >
            Two hearts... One journey...
          </motion.p>

          {/* 3. Invitation note with compact spacing */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-0.5 mb-1"
          >
            <p className="font-cormorant text-[13px] sm:text-[14px] text-[#483424] font-medium leading-[1.25] max-w-[280px] sm:max-w-xs mx-auto">
              With the blessings of our families,<br />
              we cordially invite you to the
            </p>
          </motion.div>

          {/* 4. "Engagement CEREMONY" with dedicated breathing space */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="my-1 sm:my-1.5 flex flex-col items-center"
          >
            <h1 className="font-cursive text-5xl sm:text-6xl md:text-[68px] text-[#820A24] font-semibold leading-none drop-shadow-[0_1px_1px_rgba(130,10,36,0.12)]">
              Engagement
            </h1>
            <p className="font-cinzel text-xs sm:text-sm tracking-[0.42em] text-[#9E782F] font-bold uppercase mt-1.5 sm:mt-2">
              CEREMONY
            </p>

            {/* Small Gold Heart Line */}
            <div className="flex items-center justify-center gap-2 mt-1 sm:mt-1.5 text-[#C5A15B]">
              <span className="w-5 h-[1px] bg-[#C5A15B]"></span>
              <span className="text-[9px] text-[#9E782F]">●</span>
              <span className="text-xs text-[#820A24]">❤</span>
              <span className="text-[9px] text-[#9E782F]">●</span>
              <span className="w-5 h-[1px] bg-[#C5A15B]"></span>
            </div>
          </motion.div>

          {/* 5. Couple Names with Interlocking Gold Rings in between */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="my-1 sm:my-1.5 w-full flex flex-col items-center"
          >
            {/* Bride Name - exact same cursive script font as Groom */}
            <h2 className="font-cursive font-semibold text-4xl sm:text-5xl md:text-[54px] text-[#820A24] tracking-normal leading-tight">
              {bride.fullName}
            </h2>

            {/* Interlocking Rings Image Motif with subtle floating glow */}
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                rotate: [0, 1.5, -1.5, 0],
              }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="my-1 sm:my-1.5 flex items-center justify-center"
            >
              <img
                src="/assets/ring.png"
                alt="Engagement Rings"
                className="w-10 sm:w-12 h-auto object-contain drop-shadow-[0_3px_8px_rgba(163,123,50,0.32)]"
              />
            </motion.div>

            {/* Groom Name */}
            <h2 className="font-cursive font-semibold text-4xl sm:text-5xl md:text-[54px] text-[#820A24] tracking-normal leading-tight">
              {groom.fullName}
            </h2>
          </motion.div>

          {/* 6. Gracious Presence Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-cormorant font-medium text-[12px] sm:text-[13px] text-[#483424] leading-snug max-w-[320px] mx-auto my-0.5 sm:my-1"
          >
            {event.welcomeNote}
          </motion.p>

          {/* 7. Gold Heart Line Divider (Above Date & Time) */}
          <div className="flex items-center justify-center gap-2 my-1 text-[#C5A15B]">
            <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#C5A15B]"></span>
            <span className="text-[9px] text-[#9E782F]">●</span>
            <span className="text-xs sm:text-sm text-[#820A24]">❤</span>
            <span className="text-[9px] text-[#9E782F]">●</span>
            <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#C5A15B]"></span>
          </div>

          {/* 8. Event Schedule: Date & Muhurtham (Enlarged & Highlighted) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="w-full max-w-[400px] flex items-center justify-center gap-4 sm:gap-7 my-0.5 sm:my-1 px-2 py-0.5"
          >
            {/* Date Box */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-7 sm:w-8 h-7 sm:h-8 flex items-center justify-center shrink-0">
                <CalendarIconExact className="w-6 sm:w-7 h-6 sm:h-7 text-[#9E782F]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-cormorant font-bold tracking-[0.2em] uppercase text-[11px] sm:text-xs text-[#9E782F] leading-tight">
                  {schedule.dayOfWeek}
                </span>
                <span className="font-cormorant font-bold text-lg sm:text-[21px] text-[#820A24] tracking-wide leading-tight drop-shadow-[0_1px_1px_rgba(130,10,36,0.12)]">
                  {schedule.dateFormatted}
                </span>
              </div>
            </div>

            {/* Vertical Gold Divider */}
            <div className="w-[1.5px] h-9 sm:h-10 bg-gradient-to-b from-[#C5A15B]/30 via-[#C5A15B] to-[#C5A15B]/30 shrink-0"></div>

            {/* Time / Muhurtham Box */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-7 sm:w-8 h-7 sm:h-8 flex items-center justify-center shrink-0">
                <ClockIconExact className="w-6 sm:w-7 h-6 sm:h-7 text-[#9E782F]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-cormorant font-bold tracking-[0.2em] uppercase text-[11px] sm:text-xs text-[#9E782F] leading-tight">
                  MUHURTHAM
                </span>
                <span className="font-cormorant font-bold text-lg sm:text-[21px] text-[#820A24] tracking-wide leading-tight drop-shadow-[0_1px_1px_rgba(130,10,36,0.12)]">
                  {schedule.muhurthamTime}
                </span>
              </div>
            </div>
          </motion.div>

          {/* 9. Gold Heart Line Divider (Below Date & Time) */}
          <div className="flex items-center justify-center gap-2 my-1 text-[#C5A15B]">
            <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#C5A15B]"></span>
            <span className="text-[9px] text-[#9E782F]">●</span>
            <span className="text-xs sm:text-sm text-[#820A24]">❤</span>
            <span className="text-[9px] text-[#9E782F]">●</span>
            <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#C5A15B]"></span>
          </div>

          {/* 10. Closing Message: With best compliments from Both Families */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="my-0.5 flex items-center justify-center gap-2 text-[#7C5D2C]"
          >
            <LeafBranchFlourish className="w-5 sm:w-6 h-3" isLeft={true} />
            <div className="flex flex-col items-center">
              <span className="font-cormorant italic font-medium text-[12px] sm:text-[13px] leading-tight">
                With best compliments from
              </span>
              <span className="font-cormorant italic font-semibold text-[13px] sm:text-[14px] leading-tight mt-0.5">
                Both Families
              </span>
            </div>
            <LeafBranchFlourish className="w-5 sm:w-6 h-3" isLeft={false} />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

