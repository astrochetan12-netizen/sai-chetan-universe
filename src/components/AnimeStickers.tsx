import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// ── 1. Bocchi the Rock "Scroll Down" Sticker (Music page) ──────
export function BocchiScrollDown({ className = '' }: { className?: string }) {
  const handleScroll = () => {
    window.scrollBy({ top: 500, behavior: 'smooth' });
  };

  return (
    <motion.div
      onClick={handleScroll}
      whileHover={{ scale: 1.08, rotate: -2 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      className={`fixed right-3 sm:right-6 bottom-8 z-40 cursor-pointer select-none flex flex-col items-center group ${className}`}
      title="Bocchi says: Scroll down please..."
    >
      <div className="relative w-28 sm:w-32 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]">
        <svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Sticker white border */}
          <circle cx="60" cy="55" r="40" fill="white" stroke="white" strokeWidth="8" />
          {/* Pink hair */}
          <ellipse cx="60" cy="30" rx="38" ry="28" fill="#f9a8d4" />
          <ellipse cx="60" cy="45" rx="35" ry="22" fill="#f9a8d4" />
          {/* Side hair strands */}
          <ellipse cx="25" cy="55" rx="12" ry="20" fill="#f9a8d4" />
          <ellipse cx="95" cy="55" rx="12" ry="20" fill="#f9a8d4" />
          {/* Face */}
          <ellipse cx="60" cy="58" rx="30" ry="28" fill="#ffe4c4" />
          {/* Eyes - worried */}
          <ellipse cx="48" cy="54" rx="5" ry="7" fill="#1e3a5f" />
          <ellipse cx="72" cy="54" rx="5" ry="7" fill="#1e3a5f" />
          <circle cx="50" cy="52" r="2" fill="white" />
          <circle cx="74" cy="52" r="2" fill="white" />
          {/* Sweat drop */}
          <ellipse cx="88" cy="45" rx="4" ry="5" fill="#93c5fd" opacity="0.8" />
          {/* Blush */}
          <ellipse cx="44" cy="62" rx="7" ry="4" fill="#fca5a5" opacity="0.6" />
          <ellipse cx="76" cy="62" rx="7" ry="4" fill="#fca5a5" opacity="0.6" />
          {/* Mouth - nervous */}
          <path d="M54,68 Q60,72 66,68" stroke="#b45309" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Hair accessory */}
          <rect x="50" y="24" width="8" height="4" rx="2" fill="#dc2626" />
          {/* Body / guitar */}
          <rect x="35" y="84" width="50" height="45" rx="8" fill="#831843" />
          <ellipse cx="60" cy="118" rx="20" ry="15" fill="#9f1239" />
          <line x1="60" y1="85" x2="60" y2="130" stroke="#f59e0b" strokeWidth="2" />
          <line x1="50" y1="92" x2="70" y2="92" stroke="#f59e0b" strokeWidth="1" />
          <line x1="50" y1="96" x2="70" y2="96" stroke="#f59e0b" strokeWidth="1" />
          <line x1="50" y1="100" x2="70" y2="100" stroke="#f59e0b" strokeWidth="1" />
          <path d="M75,108 L95,120 L85,122 Z" fill="#ffe4c4" />
        </svg>
      </div>
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-1 flex items-center gap-1 bg-pink-600/90 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg border border-pink-300/40 uppercase tracking-wider font-mono"
      >
        <span>Scroll... (sobs)</span>
        <ChevronDown size={12} className="animate-bounce" />
      </motion.div>
    </motion.div>
  );
}

// ── 2. Yuji Itadori "SCROLL DOWN" (homepage) ───────────────────
export function ScrollDownYuji({ className = '' }: { className?: string }) {
  const handleScroll = () => {
    window.scrollBy({ top: 500, behavior: 'smooth' });
  };

  return (
    <motion.div
      onClick={handleScroll}
      whileHover={{ scale: 1.08, rotate: -2 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className={`fixed right-3 sm:right-6 bottom-8 z-40 cursor-pointer select-none flex flex-col items-center group ${className}`}
      title="Click to scroll down!"
    >
      <div className="relative w-28 sm:w-36 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]">
        <img
          src="/assets/stickers/yuji_scrolldown.png"
          alt="Yuji Itadori Scroll Down"
          className="w-full h-auto object-contain"
        />
      </div>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-1 flex items-center gap-1 bg-red-600/90 text-white text-[11px] font-black px-3 py-1 rounded-full shadow-lg border border-red-400/40 uppercase tracking-wider font-mono"
      >
        <span>Scroll Down</span>
        <ChevronDown size={13} className="animate-bounce" />
      </motion.div>
    </motion.div>
  );
}

// ── 3. Spider-Man Hanging Upside Down with Web Thread ──────────
export function SpiderManScroll({ className = '' }: { className?: string }) {
  const handleScroll = () => {
    window.scrollBy({ top: 550, behavior: 'smooth' });
  };

  return (
    <motion.div
      onClick={handleScroll}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      animate={{ rotate: [-3, 3, -3] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      className={`fixed right-3 sm:right-8 top-16 z-30 cursor-pointer select-none flex flex-col items-center ${className}`}
      style={{ transformOrigin: 'top center' }}
      title="Spider-Man: Scroll down web-head!"
    >
      {/* Web thread hanging from top */}
      <div className="w-[1.5px] h-20 bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />

      {/* Spider-Man Hanging Figure */}
      <div className="w-24 sm:w-28 -mt-2 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
        <img
          src="/assets/stickers/spiderman_scroll.png"
          alt="Spider-Man Hanging"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Comic dialogue badge */}
      <div className="mt-2 bg-red-600 text-white font-black text-[10px] px-2.5 py-1 rounded-lg border border-yellow-400 shadow-md uppercase tracking-wider font-mono">
        Scroll down!
      </div>
    </motion.div>
  );
}

// ── 4. Tanjiro Kamado Water Breathing Dragon Sticker ───────────
export function TanjiroWaterDragon({ className = '' }: { className?: string }) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className={`relative select-none pointer-events-none filter drop-shadow-[0_14px_28px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="relative w-36 sm:w-48">
        {/* Glowing water aura behind */}
        <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full -z-10" />
        <img
          src="/assets/stickers/tanjiro_water.png"
          alt="Tanjiro Water Breathing"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="text-center mt-1 bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg font-mono">
        Water Breathing: Tenth Form!
      </div>
    </motion.div>
  );
}

// ── 5. Cid Kagenou / Shadow Gothic Throne Sticker ──────────────
export function CidShadowThrone({ className = '' }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      className={`relative select-none filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="relative w-36 sm:w-44">
        {/* Purple Shadow Aura */}
        <div className="absolute inset-0 bg-purple-600/25 blur-2xl rounded-full -z-10" />
        <img
          src="/assets/stickers/cid_shadow.png"
          alt="Lord Shadow"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="text-center mt-1 bg-purple-950/90 border border-purple-500/40 text-purple-300 text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg font-mono">
        I am Atomic...
      </div>
    </motion.div>
  );
}

// ── 6. JoJo's Bizarre Adventure Menacing Sticker ───────────────
export function JoJoMenacingSticker({ className = '' }: { className?: string }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      className={`relative select-none filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] ${className}`}
    >
      <div className="relative w-36 sm:w-48">
        {/* Menacing purple aura */}
        <div className="absolute inset-0 bg-purple-700/30 blur-xl rounded-full -z-10" />
        <img
          src="/assets/stickers/jojo_menacing.png"
          alt="Jotaro JoJo Menacing"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="flex justify-around text-purple-400 font-black text-lg tracking-widest mt-1">
        <span>ゴ</span>
        <span>ゴ</span>
        <span>ゴ</span>
        <span>ゴ</span>
      </div>
    </motion.div>
  );
}

// ── 7. Saitama 100 Push-ups Regimen Card ───────────────────────
export function SaitamaRegimenCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-5 rounded-2xl bg-yellow-950/25 border-2 border-yellow-500/40 shadow-xl max-w-md mx-auto my-6 text-center select-none"
    >
      {/* Saitama SVG chibi */}
      <div className="flex justify-center mb-3">
        <svg viewBox="0 0 100 110" className="w-24 h-24" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="60" width="40" height="42" rx="6" fill="#fbbf24" />
          <path d="M25,65 Q10,80 15,100 L30,95 Z" fill="#dc2626" />
          <path d="M75,65 Q90,80 85,100 L70,95 Z" fill="#dc2626" />
          <ellipse cx="50" cy="42" rx="28" ry="30" fill="#ffe0b2" />
          <ellipse cx="40" cy="28" rx="8" ry="5" fill="white" opacity="0.4" />
          <ellipse cx="42" cy="42" rx="5" ry="5" fill="white" stroke="#374151" strokeWidth="1" />
          <ellipse cx="58" cy="42" rx="5" ry="5" fill="white" stroke="#374151" strokeWidth="1" />
          <circle cx="43" cy="43" r="2.5" fill="#374151" />
          <circle cx="59" cy="43" r="2.5" fill="#374151" />
          <line x1="44" y1="52" x2="56" y2="52" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="20" cy="80" rx="10" ry="10" fill="#dc2626" />
          <ellipse cx="80" cy="80" rx="10" ry="10" fill="#dc2626" />
          <rect x="30" y="68" width="40" height="5" rx="2" fill="white" />
          <rect x="32" y="96" width="14" height="10" rx="3" fill="#dc2626" />
          <rect x="54" y="96" width="14" height="10" rx="3" fill="#dc2626" />
          <text x="50" y="15" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#374151" fontFamily="monospace">OKAY.</text>
        </svg>
      </div>
      <div className="inline-block px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-400/40 text-yellow-400 text-xs font-black font-mono uppercase mb-2">
        One Punch Man Secret Regimen
      </div>
      <h4 className="text-xl font-black text-white tracking-tight">
        100 PUSHUPS · 100 SITUPS · 100 SQUATS
      </h4>
      <p className="text-sm font-bold text-yellow-300 mt-1 font-mono">
        + 10KM RUN — EVERY SINGLE DAY!
      </p>
      <p className="text-xs text-white/60 mt-2 italic">
        "Never use the AC in summer, or heat in winter... that strengthens the mind!" — Saitama
      </p>
    </motion.div>
  );
}

// ── 8. GLOBAL FLOATING SIDE STICKERS — renders on every page ───
interface StickerDef {
  id: string;
  side: 'left' | 'right';
  top: string;
  delay: number;
  content: React.ReactNode;
}

const LEFT_STICKERS: StickerDef[] = [
  {
    id: 'gojo-left',
    side: 'left',
    top: '22%',
    delay: 0,
    content: (
      <div className="text-center">
        <svg viewBox="0 0 80 90" className="w-14 h-14" xmlns="http://www.w3.org/2000/svg">
          {/* Face */}
          <ellipse cx="40" cy="48" rx="26" ry="28" fill="#e2e8f0" />
          {/* White hair */}
          <ellipse cx="40" cy="26" rx="28" ry="20" fill="#f8fafc" />
          <ellipse cx="16" cy="38" rx="10" ry="16" fill="#f8fafc" />
          <ellipse cx="64" cy="38" rx="10" ry="16" fill="#f8fafc" />
          {/* Blindfold */}
          <rect x="16" y="40" width="48" height="12" rx="6" fill="#1a1a2e" />
          <rect x="14" y="41" width="52" height="10" rx="5" fill="#0f172a" />
          {/* Smirk */}
          <path d="M32,62 Q40,68 48,62" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Body */}
          <rect x="22" y="74" width="36" height="14" rx="5" fill="#1e293b" />
          <text x="40" y="86" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#94a3b8" fontFamily="monospace">NAH ID WIN</text>
        </svg>
        <div className="text-[9px] font-black text-white/70 font-mono mt-0.5 bg-black/60 px-1.5 py-0.5 rounded-full border border-white/10">
          Gojo
        </div>
      </div>
    ),
  },
  {
    id: 'anya-left',
    side: 'left',
    top: '42%',
    delay: 1.2,
    content: (
      <div className="text-center">
        <svg viewBox="0 0 80 90" className="w-14 h-14" xmlns="http://www.w3.org/2000/svg">
          {/* Face */}
          <ellipse cx="40" cy="50" rx="24" ry="26" fill="#ffe4c4" />
          {/* Pink hair */}
          <ellipse cx="40" cy="30" rx="28" ry="22" fill="#fda4af" />
          {/* Ahoges */}
          <ellipse cx="30" cy="15" rx="8" ry="10" fill="#fda4af" />
          <ellipse cx="50" cy="15" rx="8" ry="10" fill="#fda4af" />
          {/* Eyes - heh squint */}
          <path d="M30,48 Q34,54 38,48" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M42,48 Q46,54 50,48" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Blush */}
          <ellipse cx="28" cy="56" rx="6" ry="3.5" fill="#fca5a5" opacity="0.7" />
          <ellipse cx="52" cy="56" rx="6" ry="3.5" fill="#fca5a5" opacity="0.7" />
          {/* Body - uniform */}
          <rect x="22" y="74" width="36" height="14" rx="4" fill="white" />
          <rect x="37" y="74" width="6" height="12" rx="2" fill="#dc2626" />
        </svg>
        <div className="text-[9px] font-black text-pink-300 font-mono mt-0.5 bg-black/60 px-1.5 py-0.5 rounded-full border border-pink-500/30">
          Anya heh
        </div>
      </div>
    ),
  },
  {
    id: 'eren-left',
    side: 'left',
    top: '64%',
    delay: 2.1,
    content: (
      <div className="text-center">
        <svg viewBox="0 0 80 90" className="w-14 h-14" xmlns="http://www.w3.org/2000/svg">
          {/* Face */}
          <ellipse cx="40" cy="47" rx="26" ry="28" fill="#d4a57a" />
          {/* Dark hair */}
          <ellipse cx="40" cy="26" rx="26" ry="18" fill="#2d3748" />
          <ellipse cx="19" cy="40" rx="10" ry="18" fill="#2d3748" />
          <ellipse cx="61" cy="40" rx="10" ry="18" fill="#2d3748" />
          {/* Green eyes */}
          <ellipse cx="31" cy="46" rx="7" ry="7" fill="#68d391" />
          <ellipse cx="49" cy="46" rx="7" ry="7" fill="#68d391" />
          <ellipse cx="31" cy="46" rx="4" ry="5" fill="#1a202c" />
          <ellipse cx="49" cy="46" rx="4" ry="5" fill="#1a202c" />
          <circle cx="33" cy="44" r="1.5" fill="white" />
          <circle cx="51" cy="44" r="1.5" fill="white" />
          {/* Stern mouth */}
          <line x1="33" y1="58" x2="47" y2="58" stroke="#744210" strokeWidth="2" strokeLinecap="round" />
          {/* Survey Corps jacket */}
          <rect x="22" y="73" width="36" height="15" rx="4" fill="#2d4a2d" />
          <text x="40" y="84" textAnchor="middle" fontSize="5" fill="#a7f3d0" fontFamily="monospace" fontWeight="bold">TATAKAE</text>
        </svg>
        <div className="text-[9px] font-black text-green-300 font-mono mt-0.5 bg-black/60 px-1.5 py-0.5 rounded-full border border-green-500/30">
          TATAKAE!
        </div>
      </div>
    ),
  },
];

const RIGHT_STICKERS: StickerDef[] = [
  {
    id: 'saitama-right',
    side: 'right',
    top: '25%',
    delay: 0.5,
    content: (
      <div className="text-center">
        <svg viewBox="0 0 80 90" className="w-14 h-14" xmlns="http://www.w3.org/2000/svg">
          {/* Bald head */}
          <ellipse cx="40" cy="40" rx="28" ry="30" fill="#ffe0b2" />
          <ellipse cx="32" cy="26" rx="8" ry="5" fill="white" opacity="0.3" />
          {/* Blank eyes */}
          <ellipse cx="33" cy="40" rx="5" ry="5" fill="white" stroke="#555" strokeWidth="1" />
          <ellipse cx="47" cy="40" rx="5" ry="5" fill="white" stroke="#555" strokeWidth="1" />
          <circle cx="34" cy="41" r="2.5" fill="#555" />
          <circle cx="48" cy="41" r="2.5" fill="#555" />
          {/* Deadpan mouth */}
          <line x1="35" y1="50" x2="45" y2="50" stroke="#555" strokeWidth="2" strokeLinecap="round" />
          {/* Yellow suit */}
          <rect x="22" y="68" width="36" height="20" rx="5" fill="#fbbf24" />
          {/* Gloves */}
          <ellipse cx="18" cy="78" rx="9" ry="9" fill="#dc2626" />
          <ellipse cx="62" cy="78" rx="9" ry="9" fill="#dc2626" />
          <text x="40" y="14" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#374151" fontFamily="monospace">OKAY.</text>
        </svg>
        <div className="text-[9px] font-black text-yellow-300 font-mono mt-0.5 bg-black/60 px-1.5 py-0.5 rounded-full border border-yellow-500/30">
          Saitama
        </div>
      </div>
    ),
  },
  {
    id: 'rem-right',
    side: 'right',
    top: '48%',
    delay: 1.8,
    content: (
      <div className="text-center">
        <svg viewBox="0 0 80 90" className="w-14 h-14" xmlns="http://www.w3.org/2000/svg">
          {/* Face */}
          <ellipse cx="40" cy="50" rx="24" ry="26" fill="#ffe4e6" />
          {/* Blue hair */}
          <ellipse cx="40" cy="30" rx="26" ry="20" fill="#60a5fa" />
          <ellipse cx="17" cy="44" rx="10" ry="18" fill="#60a5fa" />
          {/* Hair ornament */}
          <circle cx="26" cy="22" r="5" fill="#93c5fd" />
          {/* Blue eyes */}
          <ellipse cx="33" cy="50" rx="6" ry="6" fill="#3b82f6" />
          <ellipse cx="47" cy="50" rx="6" ry="6" fill="#3b82f6" />
          <circle cx="34" cy="48" r="2" fill="white" />
          <circle cx="48" cy="48" r="2" fill="white" />
          {/* Blush */}
          <ellipse cx="27" cy="56" rx="6" ry="3" fill="#fca5a5" opacity="0.7" />
          <ellipse cx="53" cy="56" rx="6" ry="3" fill="#fca5a5" opacity="0.7" />
          {/* Smile */}
          <path d="M34,62 Q40,67 46,62" stroke="#be185d" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Maid body */}
          <rect x="22" y="74" width="36" height="14" rx="4" fill="#1e3a5f" />
          <rect x="28" y="74" width="24" height="6" fill="white" opacity="0.8" />
        </svg>
        <div className="text-[9px] font-black text-blue-300 font-mono mt-0.5 bg-black/60 px-1.5 py-0.5 rounded-full border border-blue-500/30">
          Rem
        </div>
      </div>
    ),
  },
  {
    id: 'subaru-right',
    side: 'right',
    top: '70%',
    delay: 0.9,
    content: (
      <div className="text-center">
        <div className="bg-black/70 border border-white/20 rounded-xl px-2 py-2 text-center w-24">
          <div className="text-[10px] font-black text-white/80 font-mono leading-tight">
            Subaru's Day:
          </div>
          <div className="text-[9px] font-mono text-red-300 mt-0.5 leading-snug">
            09:00 - DIE<br />
            09:01 - DIE<br />
            09:02 - DIE
          </div>
          <div className="text-[9px] text-white/50 mt-0.5">Re:Zero</div>
        </div>
      </div>
    ),
  },
];

export function GlobalSideStickers() {
  return (
    <>
      {/* Left side stickers */}
      {LEFT_STICKERS.map((sticker) => (
        <motion.div
          key={sticker.id}
          className="fixed left-1 sm:left-2 z-20 pointer-events-none select-none hidden xl:flex flex-col items-center"
          style={{ top: sticker.top }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3 + sticker.delay * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: sticker.delay,
          }}
        >
          {sticker.content}
        </motion.div>
      ))}

      {/* Right side stickers */}
      {RIGHT_STICKERS.map((sticker) => (
        <motion.div
          key={sticker.id}
          className="fixed right-1 sm:right-2 z-20 pointer-events-none select-none hidden xl:flex flex-col items-center"
          style={{ top: sticker.top }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3 + sticker.delay * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: sticker.delay,
          }}
        >
          {sticker.content}
        </motion.div>
      ))}
    </>
  );
}
