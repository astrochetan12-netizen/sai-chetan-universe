import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PlaySquare, BookOpen, Film, Tv, Music, PenTool, Camera, Dumbbell, Briefcase, Sparkles } from 'lucide-react';
import { ShatterOverlay, useShatter } from './ShatterOverlay';

const WIDGETS = [
  { id: 'anime',       label: 'Anime',       icon: PlaySquare, glowColor: '#f97316', path: '/anime',       emoji: '⚔️', desc: '470+ watched · Favs' },
  { id: 'manhwas',     label: 'Manhwas',     icon: BookOpen,   glowColor: '#6366f1', path: '/manhwas',     emoji: '📖', desc: 'God Tier · Solo Leveling' },
  { id: 'movies',      label: 'Movies',      icon: Film,       glowColor: '#f59e0b', path: '/movies',      emoji: '🎬', desc: 'Jersey & Spider-Verse' },
  { id: 'shows',       label: 'Shows',       icon: Tv,         glowColor: '#ef4444', path: '/shows',       emoji: '📺', desc: 'K-Dramas & Netflix' },
  { id: 'music',       label: 'Music',       icon: Music,      glowColor: '#22c55e', path: '/music',       emoji: '🎵', desc: '4 Languages · Player' },
  { id: 'writing',     label: 'Writing',     icon: PenTool,    glowColor: '#a855f7', path: '/writing',     emoji: '✍️', desc: 'Thoughts & notes' },
  { id: 'photography', label: 'Photography', icon: Camera,     glowColor: '#06b6d4', path: '/photography', emoji: '📷', desc: 'Shots & aesthetics' },
  { id: 'gym',         label: 'Gym',         icon: Dumbbell,   glowColor: '#94a3b8', path: '/gym',         emoji: '🏋️', desc: 'Grind & motivation' },
  { id: 'career',      label: 'Career',      icon: Briefcase,  glowColor: '#14b8a6', path: '/career',      emoji: '💼', desc: 'Code · 8.74 CGPA · OIST' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 24 } },
};

export default function WidgetBoard() {
  const navigate = useNavigate();
  const { shattering, triggerShatter } = useShatter();

  const handleClick = (path: string) => {
    triggerShatter();
    setTimeout(() => navigate(path), 280);
  };

  return (
    <div className="w-full text-white">
      {/* Glass shatter overlay on click */}
      <ShatterOverlay isVisible={shattering} />

      {/* Clean Category Header (No Board / Activity / Wishlist tabs) */}
      <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-indigo-400" />
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/80 font-mono">
            Explore My Universe
          </h2>
        </div>
        <span className="text-xs text-white/30 font-mono">9 categories</span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {WIDGETS.map((w) => {
          const Icon = w.icon;
          return (
            <motion.button
              key={w.id}
              variants={itemVariants}
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleClick(w.path)}
              className="group relative overflow-hidden h-[100px] rounded-xl flex items-center gap-4 px-5 bg-[#111214] border border-[#2b2d31] hover:border-white/15 transition-all duration-300 text-left cursor-pointer"
            >
              {/* Subtle hover radial tint (Gentle glow, not too much) */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 25% 50%, ${w.glowColor}15 0%, transparent 75%)`,
                  boxShadow: `inset 0 0 20px ${w.glowColor}10`,
                }}
              />

              {/* Emoji badge top-right */}
              <div className="absolute top-2.5 right-3 text-base opacity-40 group-hover:opacity-90 group-hover:scale-110 transition-all">
                {w.emoji}
              </div>

              {/* Icon with subtle hover glow ring */}
              <div
                className="relative z-10 shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-white/60 group-hover:text-white transition-all duration-300"
                style={{}}
              >
                <Icon size={20} />
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: `0 0 14px 2px ${w.glowColor}44` }}
                />
              </div>

              {/* Text */}
              <div className="relative z-10 min-w-0 flex-1">
                <p className="text-[15px] font-bold text-white/90 group-hover:text-white transition-colors duration-200 leading-tight truncate">
                  {w.label}
                </p>
                <p className="text-[11px] text-white/35 mt-0.5 group-hover:text-white/60 transition-colors duration-200 truncate font-mono">
                  {w.desc}
                </p>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
