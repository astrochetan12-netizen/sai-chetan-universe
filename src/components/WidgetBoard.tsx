import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PlaySquare, BookOpen, Film, Tv, Music, PenTool, Camera, Dumbbell, Briefcase } from 'lucide-react';

const WIDGETS = [
  { id: 'anime', label: 'Anime', icon: PlaySquare, color: 'from-orange-500 to-red-500', path: '/anime' },
  { id: 'manhwas', label: 'Manhwas', icon: BookOpen, color: 'from-blue-500 to-indigo-500', path: '/manhwas' },
  { id: 'movies', label: 'Movies', icon: Film, color: 'from-yellow-400 to-amber-600', path: '/movies' },
  { id: 'shows', label: 'Shows', icon: Tv, color: 'from-red-500 to-rose-700', path: '/shows' },
  { id: 'music', label: 'Music', icon: Music, color: 'from-green-400 to-emerald-600', path: '/music' },
  { id: 'writing', label: 'Writing', icon: PenTool, color: 'from-purple-500 to-fuchsia-600', path: '/writing' },
  { id: 'photography', label: 'Photography', icon: Camera, color: 'from-cyan-400 to-blue-600', path: '/photography' },
  { id: 'gym', label: 'Gym', icon: Dumbbell, color: 'from-gray-500 to-slate-700', path: '/gym' },
  { id: 'career', label: 'Career', icon: Briefcase, color: 'from-teal-400 to-emerald-600', path: '/career' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export default function WidgetBoard() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 px-4 pb-20 relative z-20">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
      >
        {WIDGETS.map((widget) => {
          const Icon = widget.icon;
          return (
            <Link to={widget.path} key={widget.id}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group cursor-pointer flex flex-col items-center gap-2"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${widget.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                
                {/* Icon Tile */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#1e1f22] border border-white/5 rounded-2xl flex items-center justify-center shadow-lg group-hover:border-white/20 transition-colors">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                
                {/* Label */}
                <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  {widget.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
