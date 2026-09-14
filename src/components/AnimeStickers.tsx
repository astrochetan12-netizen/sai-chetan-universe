import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// ── 1. Bocchi the Rock "Scroll Down" Sticker (Music page) ──────
export function BocchiScrollDown({ className = '' }: { className?: string }) {
  const handleScroll = () => {
    window.scrollBy({ top: 520, behavior: 'smooth' });
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
      {/* Real Bocchi cutout from user's sticker pack */}
      <div className="relative w-28 sm:w-32 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]">
        <img
          src="/assets/stickers/bocchi_clean.png"
          alt="Bocchi the Rock"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Speech bubble */}
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-1 flex items-center gap-1 bg-pink-600/95 text-white text-[11px] font-black px-3 py-1 rounded-full shadow-lg border border-pink-300/40 uppercase tracking-wider font-mono"
      >
        <span>Scroll... please 🎸</span>
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
        🕷️ Scroll down! 👇
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
        🌊 Water Breathing: Tenth Form!
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
        ☕ "I am Atomic..."
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
      className="p-5 rounded-2xl bg-yellow-950/30 border-2 border-yellow-500/50 shadow-2xl max-w-md mx-auto my-6 text-center select-none"
    >
      {/* Real Saitama 100 Pushups sticker from user pack */}
      <div className="flex justify-center mb-2">
        <img
          src="/assets/stickers/saitama_100pushups_clean.png"
          alt="Saitama 100 Pushups"
          className="w-44 sm:w-48 h-auto object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.85)]"
        />
      </div>

      <div className="inline-block px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-400/40 text-yellow-400 text-xs font-black font-mono uppercase mb-2">
        👊 One Punch Man Secret Regimen
      </div>
      <h4 className="text-xl font-black text-white tracking-tight">
        100 PUSHUPS · 100 SITUPS · 100 SQUATS
      </h4>
      <p className="text-sm font-bold text-yellow-300 mt-1 font-mono">
        + 10KM RUN — EVERY SINGLE DAY!
      </p>
      <p className="text-xs text-white/60 mt-2 italic">
        "Never use the AC in summer, or heat in winter... that strengthens the mind!" — Saitama 🥚
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
      <div className="text-center group cursor-pointer pointer-events-auto">
        <div className="w-16 sm:w-20 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] hover:scale-110 transition-transform">
          <img
            src="/assets/stickers/gojo_blindfold_clean.png"
            alt="Gojo Satoru"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="text-[9px] font-black text-white/80 font-mono mt-1 bg-black/80 px-2 py-0.5 rounded-full border border-white/20 shadow-md">
          Gojo · NAH ID WIN
        </div>
      </div>
    ),
  },
  {
    id: 'anya-left',
    side: 'left',
    top: '46%',
    delay: 1.2,
    content: (
      <div className="text-center group cursor-pointer pointer-events-auto">
        <div className="w-16 sm:w-20 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] hover:scale-110 transition-transform">
          <img
            src="/assets/stickers/anya_smug_clean.png"
            alt="Anya Heh"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="text-[9px] font-black text-pink-300 font-mono mt-1 bg-black/80 px-2 py-0.5 rounded-full border border-pink-500/30 shadow-md">
          Anya heh 😏
        </div>
      </div>
    ),
  },
  {
    id: 'eren-left',
    side: 'left',
    top: '70%',
    delay: 2.1,
    content: (
      <div className="text-center group cursor-pointer pointer-events-auto">
        <div className="w-16 sm:w-20 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] hover:scale-110 transition-transform">
          <img
            src="/assets/stickers/eren_tatakae_clean.png"
            alt="Eren Tatakae"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="text-[9px] font-black text-green-300 font-mono mt-1 bg-black/80 px-2 py-0.5 rounded-full border border-green-500/30 shadow-md">
          TATAKAE! ⚔️
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
      <div className="text-center group cursor-pointer pointer-events-auto">
        <div className="w-16 sm:w-20 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] hover:scale-110 transition-transform">
          <img
            src="/assets/stickers/saitama_shrug_clean.png"
            alt="Saitama Shrug"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="text-[9px] font-black text-yellow-300 font-mono mt-1 bg-black/80 px-2 py-0.5 rounded-full border border-yellow-500/30 shadow-md">
          Saitama 👊 OKAY.
        </div>
      </div>
    ),
  },
  {
    id: 'rem-right',
    side: 'right',
    top: '50%',
    delay: 1.8,
    content: (
      <div className="text-center group cursor-pointer pointer-events-auto">
        <div className="w-16 sm:w-20 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] hover:scale-110 transition-transform">
          <img
            src="/assets/stickers/rem_emilia_clean.png"
            alt="Rem"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="text-[9px] font-black text-blue-300 font-mono mt-1 bg-black/80 px-2 py-0.5 rounded-full border border-blue-500/30 shadow-md">
          Rem 💙 Re:Zero
        </div>
      </div>
    ),
  },
  {
    id: 'subaru-right',
    side: 'right',
    top: '72%',
    delay: 0.9,
    content: (
      <div className="text-center group cursor-pointer pointer-events-auto">
        <div className="w-20 sm:w-24 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform">
          <img
            src="/assets/stickers/subaru_schedule_clean.png"
            alt="Subaru Daily Schedule"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="text-[9px] font-black text-red-300 font-mono mt-1 bg-black/80 px-2 py-0.5 rounded-full border border-red-500/30 shadow-md">
          Subaru 💀 09:00 DIE
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
          className="fixed left-2 sm:left-4 z-20 pointer-events-none select-none hidden xl:flex flex-col items-center"
          style={{ top: sticker.top }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3.2 + sticker.delay * 0.4,
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
          className="fixed right-2 sm:right-4 z-20 pointer-events-none select-none hidden xl:flex flex-col items-center"
          style={{ top: sticker.top }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3.2 + sticker.delay * 0.4,
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
