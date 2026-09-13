import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Play, Info } from 'lucide-react';
import data from '../../site-data/shows-movies-music.json';

const SHOW_COLORS: Record<string, string> = {
  'Attack on Titan': 'from-slate-700',
  'Chainsaw Man': 'from-red-900',
  'Solo Leveling': 'from-blue-900',
  'Spy x Family Season 3': 'from-pink-900',
  'My Hero Academia Final Season': 'from-green-900',
  'The Eminence in Shadow': 'from-indigo-900',
  'Haikyu!!': 'from-orange-900',
};

export default function Shows() {
  const { shows } = data;
  const rest = shows.watched_full_list.filter(
    (t) => !t.toLowerCase().includes('note:')
  );

  return (
    <Layout title="Shows" subtitle="What I've Watched" themeColor="from-red-700 to-zinc-900" accentColor="#ef4444">

      {/* ── Netflix Hero ─────────────────────────────────── */}
      <div className="relative w-full h-[55vh] md:h-[72vh] rounded-2xl overflow-hidden mb-4 border border-white/5 shadow-[0_0_60px_rgba(239,68,68,0.15)] bg-[#141414] group">
        
        {/* Cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent z-10" />
        {/* Dark red bg tint */}
        <div className="absolute inset-0 bg-red-900/25 z-0" />

        {/* "Screen content" placeholder art */}
        <div className="absolute inset-0 flex items-center justify-end pr-12 opacity-30 z-0 pointer-events-none">
          <div className="w-72 h-72 rounded-full bg-red-600/20 blur-3xl" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-14 z-20 flex flex-col justify-end" style={{ minHeight: '100%' }}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            {/* Netflix-style N badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-5 h-6 bg-red-600 flex items-center justify-center rounded-sm">
                <span className="text-white font-black text-[11px] leading-none">N</span>
              </div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase">Series · Top Pick</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-3 tracking-tighter text-white leading-none drop-shadow-2xl">
              {shows.top_favorite.title}
            </h1>
            <p className="text-base md:text-lg text-white/60 font-medium mb-6">
              {shows.top_favorite.season_note} &nbsp;•&nbsp; Action · Drama · School Life
            </p>
            <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-sm">
              The only show that gets a real hero treatment on this page. Weak students, brutal fights, real growth. Peak.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="px-7 py-3 bg-white text-black rounded-md font-bold flex items-center gap-2 hover:bg-white/85 transition-colors text-[15px]">
                <Play size={18} className="fill-current" /> Play
              </button>
              <button className="px-7 py-3 bg-white/15 text-white rounded-md font-semibold flex items-center gap-2 hover:bg-white/25 transition-colors backdrop-blur-sm text-[15px]">
                <Info size={18} /> More Info
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Top 10 label */}
      <div className="flex items-center gap-3 mb-6 mt-8">
        <div className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded text-xs font-black tracking-wider">
          <span className="text-[10px]">TOP</span>
          <span className="text-base leading-none">10</span>
        </div>
        <h3 className="text-lg font-bold text-white/80">Watch It Again</h3>
        <div className="flex-1 h-px bg-white/5" />
        <span className="text-xs text-white/30">{rest.length} titles</span>
      </div>

      {/* Title Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {rest.map((title, idx) => {
          const grad = Object.entries(SHOW_COLORS).find(([k]) => title.includes(k))?.[1] ?? 'from-zinc-800';
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.012 }}
              whileHover={{ scale: 1.03 }}
              className={`aspect-video rounded-xl overflow-hidden border border-white/5 relative group cursor-pointer bg-gradient-to-br ${grad} to-zinc-900`}
            >
              {/* Subtle number */}
              <span className="absolute top-2 left-2 text-[10px] font-black text-white/20 font-mono">{String(idx + 1).padStart(2, '0')}</span>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Title at bottom */}
              <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-xs font-semibold text-white/85 leading-tight line-clamp-2">{title}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </Layout>
  );
}
