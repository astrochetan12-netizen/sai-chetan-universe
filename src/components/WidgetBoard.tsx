import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PlaySquare, BookOpen, Film, Tv, Music, PenTool, Camera, Dumbbell, Briefcase, ChevronRight, Sparkles } from 'lucide-react';
import { ShatterOverlay, useShatter } from './ShatterOverlay';

const WIDGETS = [
  {
    id: 'anime',
    label: 'Anime',
    desc: '470+ watched · Favs',
    icon: PlaySquare,
    glowColor: '#f97316',
    path: '/anime',
    bgImg: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'manhwas',
    label: 'Manhwas',
    desc: 'God Tier · Solo Leveling',
    icon: BookOpen,
    glowColor: '#6366f1',
    path: '/manhwas',
    bgImg: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105398-b673Vt5ZSuz3.jpg',
  },
  {
    id: 'movies',
    label: 'Movies',
    desc: 'Jersey & Spider-Verse',
    icon: Film,
    glowColor: '#f59e0b',
    path: '/movies',
    bgImg: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'shows',
    label: 'Shows',
    desc: 'K-Dramas & Netflix',
    icon: Tv,
    glowColor: '#ef4444',
    path: '/shows',
    bgImg: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'music',
    label: 'Music',
    desc: '4 Languages · Player',
    icon: Music,
    glowColor: '#22c55e',
    path: '/music',
    bgImg: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'writing',
    label: 'Writing',
    desc: 'Thoughts & notes',
    icon: PenTool,
    glowColor: '#a855f7',
    path: '/writing',
    bgImg: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'photography',
    label: 'Photography',
    desc: 'Shots & aesthetics',
    icon: Camera,
    glowColor: '#06b6d4',
    path: '/photography',
    bgImg: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'gym',
    label: 'Gym',
    desc: 'Grind & motivation',
    icon: Dumbbell,
    glowColor: '#94a3b8',
    path: '/gym',
    bgImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'career',
    label: 'Career',
    desc: 'Code · 8.74 CGPA · OIST',
    icon: Briefcase,
    glowColor: '#14b8a6',
    path: '/career',
    bgImg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
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
      {/* Glass shatter transition on click */}
      <ShatterOverlay isVisible={shattering} />

      {/* Category Header */}
      <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-indigo-400" />
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/80 font-mono">
            Custom Profile Widgets
          </h2>
        </div>
        <span className="text-xs text-white/30 font-mono">9 categories</span>
      </div>

      {/* ── 2-Column Grid with Photographic Themed Backdrops ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
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
              className="group relative overflow-hidden h-[95px] rounded-xl flex items-center justify-between px-4 bg-[#111215] border border-[#2b2d31] hover:border-white/20 transition-all duration-300 text-left cursor-pointer shadow-lg"
            >
              {/* Atmospheric Themed Background Illustration */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 pointer-events-none"
                style={{ backgroundImage: `url(${w.bgImg})` }}
              />
              {/* Left-to-right dark vignette to keep typography crystal clear */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#111215] via-[#111215]/80 to-transparent pointer-events-none" />

              {/* Hover Radial Glow Tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 30% 50%, ${w.glowColor}18 0%, transparent 70%)`,
                  boxShadow: `inset 0 0 24px ${w.glowColor}15`,
                }}
              />

              {/* Left Icon + Text */}
              <div className="relative z-10 flex items-center gap-3.5 min-w-0">
                {/* Rounded Square Icon */}
                <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white transition-all shrink-0 group-hover:border-white/25 shadow-md">
                  <Icon size={20} />
                </div>

                {/* Text Content */}
                <div className="min-w-0">
                  <p className="text-[15px] font-bold text-white group-hover:text-white leading-tight truncate">
                    {w.label}
                  </p>
                  <p className="text-[11px] text-white/45 mt-0.5 group-hover:text-white/70 transition-colors truncate font-mono">
                    {w.desc}
                  </p>
                </div>
              </div>

              {/* Right Chevron Arrow */}
              <div className="relative z-10 text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5 transition-all shrink-0">
                <ChevronRight size={18} />
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
