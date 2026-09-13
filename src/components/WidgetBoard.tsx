import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PlaySquare, BookOpen, Film, Tv, Music, PenTool, Camera, Dumbbell, Briefcase } from 'lucide-react';
import { ShatterOverlay, useShatter } from './ShatterOverlay';

const WIDGETS = [
  { id: 'anime',       label: 'Anime',       icon: PlaySquare, glowColor: '#f97316', path: '/anime',       emoji: '⚔️' },
  { id: 'manhwas',     label: 'Manhwas',     icon: BookOpen,   glowColor: '#6366f1', path: '/manhwas',     emoji: '📖' },
  { id: 'movies',      label: 'Movies',      icon: Film,       glowColor: '#f59e0b', path: '/movies',      emoji: '🎬' },
  { id: 'shows',       label: 'Shows',       icon: Tv,         glowColor: '#ef4444', path: '/shows',       emoji: '📺' },
  { id: 'music',       label: 'Music',       icon: Music,      glowColor: '#22c55e', path: '/music',       emoji: '🎵' },
  { id: 'writing',     label: 'Writing',     icon: PenTool,    glowColor: '#a855f7', path: '/writing',     emoji: '✍️' },
  { id: 'photography', label: 'Photography', icon: Camera,     glowColor: '#06b6d4', path: '/photography', emoji: '📷' },
  { id: 'gym',         label: 'Gym',         icon: Dumbbell,   glowColor: '#94a3b8', path: '/gym',         emoji: '🏋️' },
  { id: 'career',      label: 'Career',      icon: Briefcase,  glowColor: '#14b8a6', path: '/career',      emoji: '💼' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 22 } },
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
      {/* Glass shatter overlay */}
      <ShatterOverlay isVisible={shattering} />

      {/* Discord-style tabs */}
      <div className="flex items-center gap-6 border-b border-white/5 pb-4 mb-8 text-[15px] font-medium">
        <div className="relative text-white px-2 py-1 cursor-pointer select-none">
          Board
          <div className="absolute -bottom-4 left-0 w-full h-[2px] bg-white rounded-t" />
        </div>
        <div className="text-white/40 hover:text-white/80 transition-colors px-2 py-1 cursor-pointer select-none">Activity</div>
        <div className="text-white/40 hover:text-white/80 transition-colors px-2 py-1 cursor-pointer select-none">Wishlist</div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-[17px] font-bold mb-1">Customize your profile with Widgets</h2>
        <p className="text-[14px] text-white/45">
          Choose from our library of Widgets to share more<br />about yourself and your interests
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 gap-3"
      >
        {WIDGETS.map((w) => {
          const Icon = w.icon;
          return (
            <motion.button
              key={w.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleClick(w.path)}
              className="group relative overflow-hidden h-[110px] rounded-xl flex items-center gap-4 px-5 bg-[#111214] border border-[#2b2d31] hover:border-white/10 transition-all duration-200 text-left glass-glint"
            >
              {/* Coloured radial wash on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                style={{ background: `radial-gradient(ellipse at 30% 50%, ${w.glowColor}18 0%, transparent 70%)` }}
              />

              {/* Emoji badge top-right */}
              <div className="absolute top-2.5 right-3 text-base opacity-40 group-hover:opacity-80 transition-opacity">
                {w.emoji}
              </div>

              {/* Icon with glow ring */}
              <div className="relative z-10 shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-white/5 border border-white/8 text-white/50 group-hover:text-white transition-colors duration-200">
                <Icon size={22} />
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: `0 0 14px 2px ${w.glowColor}55` }}
                />
              </div>

              {/* Text */}
              <div className="relative z-10">
                <p className="text-[16px] font-semibold text-white/80 group-hover:text-white transition-colors duration-200 leading-tight">
                  {w.label}
                </p>
                <p className="text-[11px] text-white/25 mt-0.5 group-hover:text-white/45 transition-colors duration-200">
                  Tap to explore →
                </p>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
