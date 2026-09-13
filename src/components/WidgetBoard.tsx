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
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 px-4 pb-20 relative z-20 text-white">
      
      {/* Discord style tabs */}
      <div className="flex items-center gap-6 border-b border-white/5 pb-4 mb-8 text-[15px] font-medium">
        <div className="text-white relative px-2 py-1 cursor-pointer">
          Board
          <div className="absolute -bottom-4 left-0 w-full h-[2px] bg-white rounded-t"></div>
        </div>
        <div className="text-white/50 hover:text-white/80 transition-colors px-2 py-1 cursor-pointer">Activity</div>
        <div className="text-white/50 hover:text-white/80 transition-colors px-2 py-1 cursor-pointer">Wishlist</div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-[17px] font-bold mb-1">Customize your profile with Widgets</h2>
        <p className="text-[14px] text-white/50">Choose from our library of Widgets to share more<br/>about yourself and your interests</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {WIDGETS.map((w) => {
          const Icon = w.icon;
          return (
            <motion.button
              key={w.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(w.path)}
              className="relative overflow-hidden h-[120px] rounded-xl flex items-center justify-center group bg-[#111214] border border-[#2b2d31] hover:border-white/10 transition-colors"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${w.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className={`p-2 rounded bg-white/5 border border-white/5 text-white shadow-lg`}>
                  <Icon size={20} />
                </div>
                <span className="font-semibold text-[15px] tracking-wide text-white/90 group-hover:text-white">{w.label}</span>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
