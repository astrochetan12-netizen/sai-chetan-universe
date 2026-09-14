import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import { Play, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import data from '../../site-data/shows-movies-music.json';

const TOP_SHOWS = [
  { title: 'Attack on Titan', img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg' },
  { title: 'Chainsaw Man', img: 'https://cdn.myanimelist.net/images/anime/1806/126216.jpg' },
  { title: 'Solo Leveling', img: 'https://cdn.myanimelist.net/images/anime/1247/138881.jpg' },
  { title: 'Spy x Family', img: 'https://cdn.myanimelist.net/images/anime/1441/122795.jpg' },
  { title: 'My Hero Academia', img: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg' },
  { title: 'The Eminence in Shadow', img: 'https://cdn.myanimelist.net/images/anime/1647/117271.jpg' },
  { title: 'Haikyu!!', img: 'https://cdn.myanimelist.net/images/anime/7/76014.jpg' },
  { title: 'Vinland Saga', img: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg' },
];

const SHOW_GRADIENTS: Record<string, string> = {
  'Attack on Titan': 'from-slate-700 to-gray-900',
  'Chainsaw Man': 'from-red-900 to-zinc-900',
  'Solo Leveling': 'from-blue-900 to-indigo-950',
  'Spy x Family Season 3': 'from-pink-900 to-rose-950',
  'My Hero Academia Final Season': 'from-emerald-900 to-teal-950',
  'The Eminence in Shadow': 'from-indigo-900 to-violet-950',
  'Haikyu!!': 'from-orange-900 to-amber-950',
};

export default function Shows() {
  const { shows } = data;
  const rest = shows.watched_full_list.filter((t) => !t.toLowerCase().includes('note:'));

  return (
    <Layout title="Shows" subtitle="What I've Watched" themeColor="from-red-700 to-zinc-900" accentColor="#ef4444">
      {/* Netflix scan-lines */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 3px)' }} />

      <div className="relative z-10">
        {/* Netflix Hero */}
        <div className="relative w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden mb-8 border border-white/5 bg-[#141414]" style={{ boxShadow: '0 0 60px rgba(239,68,68,0.15)' }}>
          <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: 'url(https://cdn.myanimelist.net/images/anime/1587/119200.jpg)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-red-900/10" />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-14 flex flex-col justify-end" style={{ minHeight: '100%' }}>
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-5 h-6 bg-red-600 flex items-center justify-center rounded-sm">
                  <span className="text-white font-black text-[11px] leading-none">N</span>
                </div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase font-mono">Series · #1 Pick</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-3 tracking-tighter text-white leading-none drop-shadow-2xl">{shows.top_favorite.title}</h1>
              <p className="text-base md:text-lg text-white/55 font-medium mb-4">{shows.top_favorite.season_note} · Action · Drama · School Life</p>
              <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-sm">The only show that gets a real hero treatment. Weak students, brutal fights, real growth. Peak.</p>
              <div className="flex flex-wrap gap-3">
                <button className="px-7 py-3 bg-white text-black rounded-md font-bold flex items-center gap-2 hover:bg-white/85 transition-colors text-[15px]"><Play size={18} className="fill-current" /> Play</button>
                <button className="px-7 py-3 bg-white/15 text-white rounded-md font-semibold flex items-center gap-2 hover:bg-white/25 transition-colors backdrop-blur-sm text-[15px]"><Info size={18} /> More Info</button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Top Picks horizontal scroll */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5 bg-red-600 text-white px-2.5 py-1 rounded text-xs font-black"><span className="text-[10px]">TOP</span><span className="text-sm leading-none">10</span></div>
            <h3 className="text-lg font-bold">Peak Picks</h3>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-3" style={{ scrollbarWidth: 'none' }}>
            {TOP_SHOWS.map((show, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, y: -4 }} className="relative shrink-0 w-32 aspect-[2/3] rounded-xl overflow-hidden border border-white/5 cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${show.img})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded">#{i + 1}</div>
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <p className="text-[10px] font-bold text-white leading-tight">{show.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full list */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <h3 className="text-lg font-bold text-white/70">Watch It Again</h3>
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-xs text-white/25 font-mono">{rest.length} titles</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {rest.map((title, idx) => {
              const grad = Object.entries(SHOW_GRADIENTS).find(([k]) => title.includes(k))?.[1] ?? 'from-zinc-800 to-zinc-900';
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.008 }} whileHover={{ scale: 1.03, y: -2 }}
                  className={`aspect-video rounded-xl overflow-hidden border border-white/5 relative group cursor-pointer bg-gradient-to-br ${grad}`}
                >
                  <span className="absolute top-2 left-2 text-[10px] font-black text-white/20 font-mono">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-full p-2.5 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="text-xs font-semibold text-white/85 leading-tight line-clamp-2">{title}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
