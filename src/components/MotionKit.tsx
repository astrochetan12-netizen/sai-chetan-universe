import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

// ── Reveal on scroll ─────────────────────────────────────────
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Floating emoji sticker (used across pages) ───────────────
export function FloatingSticker({ emoji, className = '', delay = 0 }: { emoji: string; className?: string; delay?: number }) {
  return (
    <motion.div
      className={`select-none pointer-events-none text-2xl ${className}`}
      animate={{ y: [0, -10, 0], rotate: [-4, 4, -4] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {emoji}
    </motion.div>
  );
}

// ── Orbiting particles (decorative, any page) ────────────────
export function OrbitParticles({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{ background: color, top: `${20 + i * 12}%`, left: `${10 + i * 15}%` }}
          animate={{
            y: [0, -20, 0, 10, 0],
            x: [0, 10, -5, 15, 0],
            opacity: [0.2, 0.6, 0.2, 0.5, 0.2],
            scale: [1, 1.5, 0.8, 1.3, 1],
          }}
          transition={{ duration: 6 + i * 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
        />
      ))}
    </div>
  );
}

// ── Typing text effect ───────────────────────────────────────
export function GlowText({ text, color }: { text: string; color: string }) {
  return (
    <span
      className="font-black"
      style={{
        color,
        textShadow: `0 0 20px ${color}88, 0 0 40px ${color}44`,
        WebkitBackgroundClip: 'text',
      }}
    >
      {text}
    </span>
  );
}

// ── Magnetic button ──────────────────────────────────────────
export function MagButton({ children, className = '', onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

// ── Shimmer card ─────────────────────────────────────────────
export function ShimmerCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)',
          backgroundSize: '200% 100%',
          animation: 'glass-glint 4s linear infinite',
        }}
      />
      {children}
    </div>
  );
}

// ── Neon border pulse ────────────────────────────────────────
export function NeonBorder({ color, children, className = '' }: { color: string; children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative rounded-2xl ${className}`}
      animate={{ boxShadow: [`0 0 0px ${color}00`, `0 0 20px ${color}44`, `0 0 0px ${color}00`] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
