import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import BottomMotionClouds from './BottomMotionClouds';

interface LayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  themeColor?: string;
  accentColor?: string;
}

// Clean section header mascots (sitting cleanly in the top banner, no screen overlays)
const SECTION_MASCOTS: Record<string, { img: string; name: string }> = {
  'Anime':           { img: '/assets/stickers/gojo_blindfold_clean.png', name: 'Gojo Satoru' },
  'Manhwas & Manga': { img: '/assets/stickers/eren_tatakae_clean.png', name: 'Eren Yeager' },
  'Shows':           { img: '/assets/stickers/cid_shadow.png', name: 'Lord Shadow' },
  'Shows & K-Dramas':{ img: '/assets/stickers/cid_shadow.png', name: 'Lord Shadow' },
  'Movies':          { img: '/assets/stickers/spiderman_scroll.png', name: 'Spider-Man' },
  'Music Vibes':     { img: '/assets/stickers/bocchi_clean.png', name: 'Bocchi' },
  'Career':          { img: '/assets/stickers/anya_smug_clean.png', name: 'Anya' },
  'Photography':     { img: '/assets/stickers/osaka_clean.png', name: 'Osaka' },
  'Gym & Gains':     { img: '/assets/stickers/saitama_shrug_clean.png', name: 'Saitama' },
  'Writing & Lore':  { img: '/assets/stickers/tsundere.png', name: 'Tsundere' },
};

export default function Layout({
  children,
  title,
  subtitle,
  themeColor = 'from-indigo-600 to-indigo-900',
  accentColor = '#5865f2',
}: LayoutProps) {
  const mascot = SECTION_MASCOTS[title];

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

        {/* Header Mascot Sticker sitting cleanly at top right of banner */}
        {mascot && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 0.95, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 },
              y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="absolute right-6 sm:right-12 bottom-2 z-20 pointer-events-none select-none hidden sm:block"
          >
            <div className="w-24 sm:w-28 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]">
              <img
                src={mascot.img}
                alt={mascot.name}
                className="w-full h-auto object-contain max-h-28 sm:max-h-32"
              />
            </div>
          </motion.div>
        )}

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

      {/* ── Anime Silhouette Background Watermark at Bottom (aniKoto aesthetic) ── */}
      <div className="absolute bottom-0 right-0 pointer-events-none z-0 overflow-hidden select-none opacity-25">
        <img
          src="/assets/backgrounds/anime_bottom_watermark.png"
          alt="Anime Silhouette"
          className="w-[340px] sm:w-[480px] md:w-[620px] h-auto object-contain object-bottom-right"
        />
      </div>

      {/* ── Tiny Drifting Motion Clouds along Bottom ── */}
      <BottomMotionClouds />
    </motion.div>
  );
}
