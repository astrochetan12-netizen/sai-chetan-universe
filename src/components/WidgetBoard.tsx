import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PlaySquare, BookOpen, Film, Tv, Music, PenTool, Camera, Dumbbell, Briefcase } from 'lucide-react';

const WIDGETS = [
  { id: 'anime',       label: 'Anime',       icon: PlaySquare, glowColor: '#f97316', path: '/anime' },
  { id: 'manhwas',     label: 'Manhwas',     icon: BookOpen,   glowColor: '#6366f1', path: '/manhwas' },
  { id: 'movies',      label: 'Movies',      icon: Film,       glowColor: '#f59e0b', path: '/movies' },
  { id: 'shows',       label: 'Shows',       icon: Tv,         glowColor: '#ef4444', path: '/shows' },
  { id: 'music',       label: 'Music',       icon: Music,      glowColor: '#22c55e', path: '/music' },
  { id: 'writing',     label: 'Writing',     icon: PenTool,    glowColor: '#a855f7', path: '/writing' },
  { id: 'photography', label: 'Photography', icon: Camera,     glowColor: '#06b6d4', path: '/photography' },
  { id: 'gym',         label: 'Gym',         icon: Dumbbell,   glowColor: '#94a3b8', path: '/gym' },
  { id: 'career',      label: 'Career',      icon: Briefcase,  glowColor: '#14b8a6', path: '/career' },
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

  return (
    <div className="w-full text-white">

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
        className="grid grid-cols-2 gap-4"
      >
        {WIDGETS.map((w) => {
          const Icon = w.icon;
          return (
            <motion.button
              key={w.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(w.path)}
              className="group relative overflow-hidden h-[110px] rounded-xl flex items-center gap-5 px-6 bg-[#111214] border border-[#2b2d31] hover:border-white/10 transition-all duration-200 text-left"
              style={{
                // Subtle glow on the border on hover — done via box-shadow, not a bright blob
              }}
            >
              {/* Very subtle colored bg wash on hover only */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                style={{ background: `radial-gradient(ellipse at center, ${w.glowColor}18 0%, transparent 70%)` }}
              />

              {/* Icon container — subtle glow ring on hover */}
              <div
                className="relative z-10 shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-white/5 border border-white/8 text-white/60 group-hover:text-white transition-colors duration-200"
                style={{
                  // icon glow: gentle, not blinding
                }}
              >
                <Icon size={22} />
                {/* glow ring: only visible on hover, very soft */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `0 0 12px 2px ${w.glowColor}55`,
                  }}
                />
              </div>

              {/* Label */}
              <div className="relative z-10">
                <p className="text-[16px] font-semibold text-white/80 group-hover:text-white transition-colors duration-200">
                  {w.label}
                </p>
                <p className="text-[12px] text-white/30 mt-0.5 group-hover:text-white/50 transition-colors duration-200">
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
