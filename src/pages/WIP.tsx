import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const WIP_SECTIONS = [
  {
    id: 'writing',
    title: 'Writing',
    emoji: '✍️',
    color: '#a855f7',
    themeColor: 'from-purple-700 to-indigo-900',
    meme: '📝',
    wipText: 'Stories are brewing...',
    subtitle: 'A writer who reads too much anime',
    warning: '⚠️ This section is still being cooked. Check back later.',
  },
  {
    id: 'gym',
    title: 'Gym',
    emoji: '🏋️',
    color: '#94a3b8',
    themeColor: 'from-slate-600 to-gray-900',
    meme: '💪',
    wipText: 'Gains loading...',
    subtitle: 'Pushing plates and watching anime',
    warning: '⚠️ Still figuring out if I even go to the gym or just talk about it.',
  },
];

export default function WIP({ section }: { section: 'writing' | 'gym' }) {
  const cfg = WIP_SECTIONS.find((s) => s.id === section)!;

  return (
    <Layout title={cfg.title} subtitle={cfg.subtitle} themeColor={cfg.themeColor} accentColor={cfg.color}>
      
      <div className="flex flex-col items-center justify-center min-h-[55vh] gap-8 text-center py-16">
        
        {/* Animated emoji */}
        <motion.div
          animate={{ y: [0, -16, 0], rotate: [0, -8, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[80px] md:text-[120px] select-none"
        >
          {cfg.emoji}
        </motion.div>

        {/* WIP heading */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-3"
          >
            Work in Progress
          </motion.h2>
          <p className="text-white/40 text-lg">{cfg.wipText}</p>
        </div>

        {/* Warning box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6"
        >
          <p className="text-sm text-white/50 leading-relaxed">{cfg.warning}</p>
        </motion.div>

        {/* Meme placeholder */}
        <motion.div
          whileHover={{ rotate: [0, -3, 3, 0], scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="text-5xl select-none cursor-pointer"
          title="He just like me fr"
        >
          😤
        </motion.div>

        {/* Fav foods callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 text-white/30 text-sm"
        >
          <span>Fueled by</span>
          <span className="text-2xl">🍛</span>
          <span className="font-medium text-white/50">Biryani</span>
          <span className="text-white/20">+</span>
          <span className="text-2xl">🍦</span>
          <span className="font-medium text-white/50">Ice Cream</span>
          <span>while doing absolutely nothing productive</span>
        </motion.div>

      </div>
    </Layout>
  );
}
