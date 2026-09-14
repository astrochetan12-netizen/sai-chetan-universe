import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// ── 1. Yuji Itadori "SCROLL DOWN" Floating Interactive Sticker ──
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

// ── 2. Spider-Man Hanging Upside Down with Web Thread ──────────
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

// ── 3. Tanjiro Kamado Water Breathing Dragon Sticker ───────────
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

// ── 4. Cid Kagenou / Shadow Gothic Throne Sticker ──────────────
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

// ── 5. JoJo's Bizarre Adventure Menacing Sticker ───────────────
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

// ── 6. Saitama 100 Push-ups Regimen Card ───────────────────────
export function SaitamaRegimenCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-5 rounded-2xl bg-yellow-950/25 border-2 border-yellow-500/40 shadow-xl max-w-md mx-auto my-6 text-center select-none"
    >
      <div className="inline-block px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-400/40 text-yellow-400 text-xs font-black font-mono uppercase mb-2">
        👊 One Punch Man Secret Regimen
      </div>
      <h4 className="text-xl font-black text-white tracking-tight">
        100 PUSHUPS, 100 SITUPS, 100 SQUATS!
      </h4>
      <p className="text-sm font-bold text-yellow-300 mt-1 font-mono">
        AND 10KM RUN EVERY SINGLE DAY!
      </p>
      <p className="text-xs text-white/60 mt-2 italic">
        "Never use the air conditioner in the summer, or heat in the winter... that strengthens the mind!" — Saitama 🥚
      </p>
    </motion.div>
  );
}
