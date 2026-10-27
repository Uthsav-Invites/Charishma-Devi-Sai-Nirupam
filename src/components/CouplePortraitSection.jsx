import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../config/invitationConfig';

const CouplePortraitSection = () => {
  const { bride, groom } = INVITATION_CONFIG;

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 flex flex-col items-center justify-center bg-[#FAF3E6] overflow-hidden">

      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-tr from-[#F4DDD0]/50 to-[#E8C2B0]/30 blur-3xl pointer-events-none" />

      {/* Main Card with Arched Frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-[460px] bg-gradient-to-b from-[#FBF3ED] via-[#F9ECE4] to-[#FAF1EB] rounded-2xl p-5 sm:p-7 border border-[#E5CFBE] shadow-[0_16px_45px_rgba(72,52,36,0.1)] flex flex-col items-center overflow-hidden"
      >
        {/* Arched Background Frame (Concentric Arch Lines & Soft Fill) */}
        <div className="relative w-full h-[380px] sm:h-[440px] flex items-end justify-center">

          {/* Outer Arch Contour Line */}
          <div className="absolute inset-x-3 sm:inset-x-5 top-2 bottom-8 rounded-t-full border border-[#DDAF98]/50 pointer-events-none" />

          {/* Middle Fine Arch Accent */}
          <div className="absolute inset-x-6 sm:inset-x-8 top-5 bottom-8 rounded-t-full border border-[#E8C4B0]/40 pointer-events-none" />

          {/* Inner Arched Panel Fill with warm blush gradient & border */}
          <div className="absolute inset-x-8 sm:inset-x-11 top-8 bottom-8 rounded-t-full bg-gradient-to-b from-[#F3DFD3] via-[#F7ECE4] to-[#FBF3EE] border-[1.5px] border-[#CCA188]/70 shadow-[inset_0_4px_30px_rgba(204,161,136,0.22)] pointer-events-none" />

          {/* Subtle Arch Top Crown Accent */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 text-[#C5A15B] pointer-events-none">
            <span className="w-4 h-[1px] bg-[#CCA188]/60" />
            <span className="text-[9px] text-[#CCA188]">✦</span>
            <span className="w-4 h-[1px] bg-[#CCA188]/60" />
          </div>

          {/* Couple Figures with Floating Animation */}
          <div className="relative z-10 w-full h-full flex items-end justify-center">

            {/* Bride Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-2 -translate-x-[20%] sm:-translate-x-[18%] h-[88%] sm:h-[92%] z-20 flex items-end"
            >
              <img
                src="/assets/bride.png"
                alt={bride.fullName}
                className="h-full w-auto object-contain drop-shadow-[0_6px_14px_rgba(72,52,36,0.18)]"
              />
            </motion.div>

            {/* Groom Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-2 translate-x-[20%] sm:translate-x-[18%] h-[92%] sm:h-[96%] z-10 flex items-end"
            >
              <img
                src="/assets/groom.png"
                alt={groom.fullName}
                className="h-full w-auto object-contain drop-shadow-[0_6px_14px_rgba(72,52,36,0.2)]"
              />
            </motion.div>

          </div>

          {/* Elegant Couple Names Banner (Overlapping bottom in warm gold script) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 inset-x-0 z-30 flex flex-col items-center text-center py-1 bg-gradient-to-t from-[#FAF1EB] via-[#FAF1EB]/85 to-transparent pt-6"
          >
            <h3 className="font-cursive text-4xl sm:text-5xl md:text-[52px] text-[#A87438] font-semibold leading-tight tracking-wide drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
              {bride.shortName} <span className="font-cormorant italic text-2xl sm:text-3xl text-[#9E782F] mx-1">&amp;</span> {groom.shortName}
            </h3>
          </motion.div>

        </div>

      </motion.div>

      {/* Auspicious Benediction at the very bottom */}
      <div className="relative z-10 mt-8 text-center text-[#9E782F] font-cormorant font-semibold text-sm tracking-[0.25em] uppercase">
        {/* <span>ॐ शुभं भवतु • कल्याणमस्तु</span> */}
      </div>

    </section>
  );
};

export default CouplePortraitSection;
