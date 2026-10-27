import { motion } from 'framer-motion';

/**
 * Traditional Hindu Auspicious Motifs and Decorative Elements
 * Tailored precisely to match the reference engagement invitation card.
 */

// Sacred Om (ॐ) with ornamental royal side ribbons and divine animation
export const OmHeaderFlourish = ({ className = "w-full my-0.5 sm:my-1" }) => (
  <div className={`flex items-center justify-center gap-2 sm:gap-3 ${className}`}>
    {/* Left Animated Ornamental Ribbon */}
    <motion.div
      animate={{
        scaleX: [1, 1.05, 1],
        rotate: [0, -1.5, 0, 1.5, 0],
        y: [0, -1, 0]
      }}
      transition={{
        repeat: Infinity,
        duration: 3.8,
        ease: "easeInOut"
      }}
      className="flex items-center origin-right"
    >
      <svg viewBox="0 0 70 24" fill="none" className="w-14 sm:w-18 h-5 sm:h-6 text-[#C5A15B]">
        <defs>
          <linearGradient id="goldRibbonLeft" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#DFBA73" />
            <stop offset="60%" stopColor="#B38728" />
            <stop offset="100%" stopColor="#7E581A" />
          </linearGradient>
        </defs>
        {/* Soft golden ribbon body fill */}
        <path
          d="M70 12 C52 12 44 4 32 10 C20 16 12 6 2 12 C10 14 18 10 26 15 C36 21 48 15 70 12 Z"
          fill="url(#goldRibbonLeft)"
          opacity="0.28"
        />
        {/* Crisp filigree ribbon lines */}
        <path
          d="M70 12 C50 12 42 4 30 10 C18 16 10 7 2 12"
          stroke="url(#goldRibbonLeft)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M60 14 C46 15 38 18 28 15 C20 12 14 14 6 15"
          stroke="url(#goldRibbonLeft)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="2.5 1.5"
        />
        <circle cx="2" cy="12" r="2.2" fill="#B38728" />
        <circle cx="12" cy="7.5" r="1.3" fill="#DFBA73" />
      </svg>
    </motion.div>

    {/* Sacred ॐ Symbol with Divine Glow & Subtle Breathing Animation */}
    <motion.div
      animate={{
        scale: [1, 1.08, 1],
        filter: [
          'drop-shadow(0 0 2px rgba(197,161,91,0.5))',
          'drop-shadow(0 0 10px rgba(223,186,115,0.95))',
          'drop-shadow(0 0 2px rgba(197,161,91,0.5))'
        ]
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut"
      }}
      className="flex items-center justify-center cursor-default select-none px-1"
    >
      <span className="font-serif text-3xl sm:text-4xl text-[#B38728] leading-none font-bold">
        ॐ
      </span>
    </motion.div>

    {/* Right Animated Ornamental Ribbon (Mirrored) */}
    <motion.div
      animate={{
        scaleX: [1, 1.05, 1],
        rotate: [0, 1.5, 0, -1.5, 0],
        y: [0, -1, 0]
      }}
      transition={{
        repeat: Infinity,
        duration: 3.8,
        ease: "easeInOut"
      }}
      className="flex items-center origin-left"
    >
      <svg viewBox="0 0 70 24" fill="none" className="w-14 sm:w-18 h-5 sm:h-6 text-[#C5A15B] transform scale-x-[-1]">
        <defs>
          <linearGradient id="goldRibbonRight" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#DFBA73" />
            <stop offset="60%" stopColor="#B38728" />
            <stop offset="100%" stopColor="#7E581A" />
          </linearGradient>
        </defs>
        {/* Soft golden ribbon body fill */}
        <path
          d="M70 12 C52 12 44 4 32 10 C20 16 12 6 2 12 C10 14 18 10 26 15 C36 21 48 15 70 12 Z"
          fill="url(#goldRibbonRight)"
          opacity="0.28"
        />
        {/* Crisp filigree ribbon lines */}
        <path
          d="M70 12 C50 12 42 4 30 10 C18 16 10 7 2 12"
          stroke="url(#goldRibbonRight)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M60 14 C46 15 38 18 28 15 C20 12 14 14 6 15"
          stroke="url(#goldRibbonRight)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="2.5 1.5"
        />
        <circle cx="2" cy="12" r="2.2" fill="#B38728" />
        <circle cx="12" cy="7.5" r="1.3" fill="#DFBA73" />
      </svg>
    </motion.div>
  </div>
);

// Traditional Horizontal Gold Divider with 4-petal floral rosette (exact match to card)
export const CardRosetteDivider = ({ className = "w-full max-w-xs my-4" }) => (
  <div className={`flex items-center justify-center gap-2 ${className}`}>
    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#C5A15B] to-[#C5A15B]"></div>

    {/* Central 4-petal floral rosette */}
    <div className="text-[#A37B32] flex items-center justify-center relative w-4 h-4">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#A37B32]">
        <circle cx="12" cy="12" r="2.5" fill="#C5A15B" />
        <path d="M12 2 C13.5 6 15 8 19 8 C15 9.5 13.5 11 12 15 C10.5 11 9 9.5 5 8 C9 8 10.5 6 12 2 Z" fill="#A37B32" />
        <path d="M12 22 C13.5 18 15 16 19 16 C15 14.5 13.5 13 12 9 C10.5 13 9 14.5 5 16 C9 16 10.5 18 12 22 Z" fill="#A37B32" />
      </svg>
    </div>

    <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#C5A15B] to-[#C5A15B]"></div>
  </div>
);

// Royal Lotus Crest Divider with gold filigree wings
export const RoyalLotusDivider = ({ className = "w-full max-w-xs my-3" }) => (
  <div className={`flex items-center justify-center gap-2 sm:gap-3 ${className}`}>
    <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#C5A15B] to-[#9E782F]"></div>

    {/* Central Sacred Lotus Emblem */}
    <div className="flex items-center gap-1.5 text-[#9E782F] px-1">
      <svg viewBox="0 0 46 26" fill="currentColor" className="w-10 sm:w-12 h-6 text-[#9E782F] drop-shadow-[0_1px_2px_rgba(163,123,50,0.3)]">
        {/* Center Petal */}
        <path d="M23 2 C25.5 7.5 26.5 14 23 21 C19.5 14 20.5 7.5 23 2 Z" fill="#B38728" />
        {/* Inner Left Petal */}
        <path d="M22 7 C17 10 13 14.5 16.5 19.5 C19.5 18.5 21.5 15 22 7 Z" fill="#A37B32" opacity="0.9" />
        {/* Inner Right Petal */}
        <path d="M24 7 C29 10 33 14.5 29.5 19.5 C26.5 18.5 24.5 15 24 7 Z" fill="#A37B32" opacity="0.9" />
        {/* Outer Left Petal */}
        <path d="M20 12 C14 15 9 18 11.5 22 C15.5 22 19 20 20 12 Z" fill="#9E782F" opacity="0.8" />
        {/* Outer Right Petal */}
        <path d="M26 12 C32 15 37 18 34.5 22 C30.5 22 27 20 26 12 Z" fill="#9E782F" opacity="0.8" />
        {/* Lotus Pond Base */}
        <path d="M8 22 C18 24.5 28 24.5 38 22 C33 21 13 21 8 22 Z" fill="#B38728" />
        <circle cx="23" cy="23" r="1.5" fill="#DFBA73" />
      </svg>
    </div>

    <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#C5A15B] to-[#9E782F]"></div>
  </div>
);

// Leaf Branch Flourish on sides of "with" and compliments
export const LeafBranchFlourish = ({ className = "w-7 h-4", isLeft = true }) => (
  <svg
    viewBox="0 0 36 18"
    fill="none"
    className={`${className} text-[#A37B32] ${isLeft ? '' : 'transform scale-x-[-1]'}`}
  >
    {/* Central curved stem */}
    <path d="M2 9 Q18 4 34 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    {/* Top leaf 1 */}
    <path d="M10 8 Q12 3 16 5 Q14 8 10 8 Z" fill="currentColor" />
    {/* Top leaf 2 */}
    <path d="M22 6 Q25 2 28 5 Q26 7 22 6 Z" fill="currentColor" />
    {/* Bottom leaf 1 */}
    <path d="M14 9 Q16 14 20 12 Q18 9 14 9 Z" fill="currentColor" />
    {/* Bottom leaf 2 */}
    <path d="M25 8 Q27 13 31 11 Q29 8 25 8 Z" fill="currentColor" />
  </svg>
);

// Calendar Icon in matching gold outline with dots
export const CalendarIconExact = ({ className = "w-6 h-6", color = "#A37B32" }) => (
  <svg viewBox="0 0 28 28" fill="none" className={className} style={{ color }}>
    <rect x="3" y="5" width="22" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <line x1="3" y1="10" x2="25" y2="10" stroke="currentColor" strokeWidth="1.4" />
    <line x1="8" y1="3" x2="8" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="20" y1="3" x2="20" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    {/* Dots inside calendar */}
    <circle cx="8" cy="14" r="1.2" fill="currentColor" />
    <circle cx="14" cy="14" r="1.2" fill="currentColor" />
    <circle cx="20" cy="14" r="1.2" fill="currentColor" />
    <circle cx="8" cy="19" r="1.2" fill="currentColor" />
    <circle cx="14" cy="19" r="1.2" fill="currentColor" />
    <circle cx="20" cy="19" r="1.2" fill="currentColor" />
  </svg>
);

// Clock Icon in matching gold outline
export const ClockIconExact = ({ className = "w-6 h-6", color = "#A37B32" }) => (
  <svg viewBox="0 0 28 28" fill="none" className={className} style={{ color }}>
    <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.8" />
    {/* Hands at 11:00 */}
    <line x1="14" y1="14" x2="14" y2="7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="14" y1="14" x2="9.5" y2="10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="14" cy="14" r="1.6" fill="currentColor" />
  </svg>
);

// Location Pin Icon in matching gold
export const LocationIconExact = ({ className = "w-6 h-6", color = "#A37B32" }) => (
  <svg viewBox="0 0 28 28" fill="currentColor" className={className} style={{ color }}>
    <path
      d="M14 2.5 C8.5 2.5 4 7 4 12.5 C4 19.5 14 26 14 26 C14 26 24 19.5 24 12.5 C24 7 19.5 2.5 14 2.5 Z M14 16 C12.1 16 10.5 14.4 10.5 12.5 C10.5 10.6 12.1 9 14 9 C15.9 9 17.5 10.6 17.5 12.5 C17.5 14.4 15.9 16 14 16 Z"
      fill="currentColor"
    />
  </svg>
);

// Om symbol for general use
export const OmSymbol = ({ className = "w-8 h-8", color = "#C5A15B" }) => (
  <span className={`font-serif leading-none select-none font-bold ${className}`} style={{ color }}>
    ॐ
  </span>
);

// Mangal Kalash Motif
export const KalashMotif = ({ className = "w-8 h-8", color = "#C5A15B" }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} style={{ color }}>
    <ellipse cx="32" cy="19" rx="7" ry="9" fill={color} opacity="0.9" />
    <circle cx="32" cy="9" r="2" fill={color} />
    <path d="M24 23 C18 16 12 18 10 22 C12 26 22 26 24 24" fill={color} opacity="0.85" />
    <path d="M40 23 C46 16 52 18 54 22 C52 26 42 26 40 24" fill={color} opacity="0.85" />
    <rect x="22" y="24" width="20" height="5" rx="2" fill={color} />
    <path d="M22 29 C14 33 13 48 20 54 C23 56 41 56 44 54 C51 48 50 33 42 29 Z" fill={color} />
    <ellipse cx="32" cy="55" rx="11" ry="3" fill={color} />
  </svg>
);

// Lotus Motif
export const LotusMotif = ({ className = "w-6 h-6", color = "#C5A15B" }) => (
  <svg viewBox="0 0 60 40" fill="none" className={className} style={{ color }}>
    <path d="M30 4 C27 14 26 24 30 32 C34 24 33 14 30 4 Z" fill={color} opacity="0.9" />
    <path d="M30 14 C22 17 17 24 21 31 C25 29 28 23 30 18" fill={color} opacity="0.8" />
    <path d="M30 14 C38 17 43 24 39 31 C35 29 32 23 30 18" fill={color} opacity="0.8" />
    <path d="M24 22 C14 23 8 28 12 34 C18 34 23 30 25 26" fill={color} opacity="0.65" />
    <path d="M36 22 C46 23 52 28 48 34 C42 34 37 30 35 26" fill={color} opacity="0.65" />
    <path d="M15 35 C23 37 37 37 45 35 C42 38 18 38 15 35 Z" fill={color} />
  </svg>
);

// General Gold Divider
export const GoldDivider = ({ className = "w-full my-4" }) => (
  <CardRosetteDivider className={className} />
);

// Corner Kolam for profile cards
export const CornerKolam = ({ className = "", color = "#C5A15B" }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className} style={{ color }}>
    <path d="M4 76 L4 22 C4 12 12 4 22 4 L76 4" stroke={color} strokeWidth="1.5" />
    <path d="M10 76 L10 24 C10 16 16 10 24 10 L76 10" stroke={color} strokeWidth="0.8" strokeDasharray="2 2" />
    <circle cx="22" cy="22" r="5" fill="none" stroke={color} strokeWidth="1.2" />
    <circle cx="22" cy="22" r="2.5" fill="#820A24" />
  </svg>
);

// Diya Motif
export const DiyaMotif = ({ className = "w-6 h-6", color = "#C5A15B" }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} style={{ color }}>
    <path d="M20 4 C17 12 14 16 17 21 C19 23 21 23 23 21 C26 16 23 12 20 4 Z" fill="#DDA323" />
    <path d="M6 23 C10 32 30 32 34 23 C28 26 12 26 6 23 Z" fill={color} />
    <ellipse cx="20" cy="23" rx="14" ry="2.5" fill="#820A24" />
  </svg>
);
