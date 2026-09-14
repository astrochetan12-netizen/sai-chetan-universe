import { motion } from 'framer-motion';

export default function FullMoon() {
  return (
    <div className="fixed top-5 right-6 sm:right-14 md:right-24 z-10 pointer-events-none select-none">
      {/* ── Radiant Halo Glow ── */}
      <motion.div
        className="absolute -inset-10 rounded-full bg-amber-100/10 blur-3xl pointer-events-none"
        animate={{ scale: [0.95, 1.1, 0.95], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute -inset-6 rounded-full bg-yellow-200/15 blur-xl pointer-events-none" />

      {/* ── Full Moon Sphere with Soft Textures ── */}
      <div
        className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-[0_0_50px_15px_rgba(254,240,138,0.25)] border border-amber-100/40"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #fffdf0 0%, #fef3c7 45%, #fde68a 85%, #f59e0b 100%)',
        }}
      >
        {/* Maria / Lunar Crater Textures */}
        <div className="absolute top-5 left-7 w-9 h-8 rounded-full bg-amber-200/40 blur-[1px]" />
        <div className="absolute top-12 left-14 w-12 h-10 rounded-full bg-amber-300/30 blur-[2px]" />
        <div className="absolute bottom-6 left-8 w-11 h-9 rounded-full bg-amber-200/35 blur-[1px]" />
        <div className="absolute bottom-10 right-6 w-8 h-8 rounded-full bg-amber-300/25 blur-[2px]" />
        <div className="absolute top-8 right-8 w-6 h-6 rounded-full bg-amber-200/30 blur-[1px]" />

        {/* Passing Translucent Wisps of Cloud across Moon */}
        <motion.div
          className="absolute -inset-4 bg-gradient-to-r from-transparent via-black/20 to-transparent blur-sm pointer-events-none"
          animate={{ x: [-80, 140] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </div>
  );
}
