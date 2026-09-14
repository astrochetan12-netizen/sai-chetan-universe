import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  themeColor?: string;
  accentColor?: string;
  sectionStickers?: string[]; // emoji floaters for each section
}

// Per-section floating emoji stickers
const SECTION_STICKERS: Record<string, string[]> = {
  'Anime':       ['⚔️', '🔥', '🌸', '⛩️'],
  'Manhwas & Manga': ['📖', '👑', '🌙', '💫'],
  'Shows':       ['📺', '🎬', '🍿', '🎭'],
  'Movies':      ['🕷️', '🎬', '🎞️', '🏆'],
  'Music Vibes': ['🎵', '🎧', '🎼', '🎹'],
  'Career':      ['💼', '🚀', '⌨️', '🏆'],
  'Photography': ['📷', '🌅', '✨', '🎞️'],
};

export default function Layout({
  children,
  title,
  subtitle,
  themeColor = 'from-indigo-600 to-indigo-900',
  accentColor = '#5865f2',
}: LayoutProps) {
  const stickers = SECTION_STICKERS[title] ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen w-full relative bg-[#0b0c10] text-white pb-24"
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] pointer-events-none mix-blend-overlay z-0" />

      {/* ── Header Banner ── */}
      <div className="w-full relative overflow-hidden" style={{ minHeight: '230px' }}>
        {/* Gradient bg */}
        <div className={`absolute inset-0 bg-gradient-to-br ${themeColor}`} />

        {/* Animated radial pulse */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: `radial-gradient(ellipse at 20% 50%, ${accentColor}33 0%, transparent 60%)` }}
        />

        {/* Vignette bottom */}
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#0b0c10] to-transparent z-10" />
        {/* Halftone texture */}
        <div className="absolute inset-0 halftone opacity-10 z-0" />
        {/* Shimmer accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-px z-20"
          animate={{ width: ['0%', '100%', '0%'], left: ['0%', '0%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`, opacity: 0.7 }}
        />

        {/* Floating section stickers */}
        {stickers.map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl pointer-events-none select-none"
            style={{ right: `${8 + i * 8}%`, top: `${15 + (i % 2) * 30}%`, opacity: 0.25 }}
            animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
          >
            {emoji}
          </motion.div>
        ))}

        <div className="relative z-20 max-w-6xl mx-auto px-6 pt-6 pb-10 flex flex-col gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium w-fit group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Hub
          </Link>

          <div className="flex items-end gap-4 mt-2">
            {/* Accent bar with pulse */}
            <motion.div
              className="w-1.5 h-14 rounded-full"
              animate={{ boxShadow: [`0 0 10px ${accentColor}55`, `0 0 25px ${accentColor}99`, `0 0 10px ${accentColor}55`] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ background: accentColor }}
            />
            <div>
              {subtitle && (
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-1 font-mono">{subtitle}</p>
              )}
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl font-black tracking-tight leading-none text-white drop-shadow-lg"
              >
                {title}
              </motion.h1>
            </div>
          </div>
        </div>
      </div>

      {/* ── Page Content ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto px-6 mt-6 relative z-10"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
