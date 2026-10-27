import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../config/invitationConfig';
import { OmSymbol, LotusMotif, LeafBranchFlourish } from './TraditionalMotifs';

const Footer = () => {
  const { bride, groom, event } = INVITATION_CONFIG;

  return (
    <footer className="relative py-16 px-4 sm:px-6 flex flex-col items-center justify-center bg-[#FAF3E6] overflow-hidden border-t border-[#C5A15B]/50">

      {/* Blessings Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 w-full max-w-[500px] bg-[#FDF9F0] rounded-lg p-6 sm:p-8 border-[2px] border-[#C5A15B] shadow-[0_12px_35px_rgba(72,52,36,0.1)] text-center"
      >
        {/* Inner thin border */}
        <div className="absolute inset-2 sm:inset-3 border border-[#C5A15B]/50 rounded pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center py-2">

          {/* Top Om & Lotus Emblem */}
          <div className="flex items-center justify-center gap-2 mb-3 text-[#9E782F]">
            <LotusMotif className="w-5 h-5 text-[#9E782F]" />
            <OmSymbol className="w-8 h-8 text-[#9E782F]" />
            <LotusMotif className="w-5 h-5 text-[#9E782F] transform scale-x-[-1]" />
          </div>

          {/* Blessing Message */}
          <p className="font-cormorant italic font-medium text-base sm:text-lg text-[#820A24] leading-relaxed max-w-sm mb-2">
            “{event.presenceNote}”
          </p>

          <p className="font-cormorant text-sm sm:text-base text-[#483424] font-medium leading-relaxed max-w-xs mb-3">
            {event.thankYouNote}
          </p>

          {/* Heart Line Divider above Charishma */}
          <div className="flex items-center justify-center gap-2 my-2 text-[#C5A15B]">
            <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#C5A15B]"></span>
            <span className="text-[9px] text-[#9E782F]">●</span>
            <span className="text-xs sm:text-sm text-[#820A24]">❤</span>
            <span className="text-[9px] text-[#9E782F]">●</span>
            <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#C5A15B]"></span>
          </div>

          {/* Couple's Names */}
          <div className="my-2 flex flex-col items-center">
            <h3 className="font-cursive font-normal text-3xl sm:text-4xl text-[#820A24] leading-tight">
              {bride.fullName}
            </h3>

            {/* Interlocking Rings Image Motif */}
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                rotate: [0, 1.5, -1.5, 0],
              }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="my-1.5 flex items-center justify-center"
            >
              <img
                src="/assets/ring.png"
                alt="Engagement Rings"
                className="w-9 sm:w-11 h-auto object-contain drop-shadow-[0_3px_8px_rgba(163,123,50,0.32)]"
              />
            </motion.div>

            <h3 className="font-cursive font-normal text-3xl sm:text-4xl text-[#820A24] leading-tight">
              {groom.fullName}
            </h3>
          </div>

          {/* Compliments Line */}
          <div className="mt-3 flex items-center justify-center gap-2 text-[#7C5D2C]">
            <LeafBranchFlourish className="w-6 h-3" isLeft={true} />
            <p className="font-cormorant italic font-semibold text-base sm:text-lg text-[#7C5D2C]">
              {event.compliments}
            </p>
            <LeafBranchFlourish className="w-6 h-3" isLeft={false} />
          </div>

        </div>
      </motion.div>

      {/* Auspicious Sanskrit Benediction */}
      <div className="relative z-10 mt-6 text-center text-[#9E782F] font-cormorant font-semibold text-sm tracking-[0.2em] uppercase">
        {/* <span>ॐ शुभं भवतु • कल्याणमस्तु</span> */}
      </div>

    </footer>
  );
};

export default Footer;
