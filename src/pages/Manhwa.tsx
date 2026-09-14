import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import manhwaData from '../../site-data/manhwa.json';
import { Search, ChevronLeft, ChevronRight, Crown } from 'lucide-react';

const TOP_COLORS = [
  { bg: 'from-blue-600/60 to-indigo-900/90', glow: '#6366f1' },
  { bg: 'from-amber-500/60 to-orange-900/90', glow: '#f59e0b' },
  { bg: 'from-cyan-500/60 to-teal-900/90', glow: '#06b6d4' },
  { bg: 'from-rose-500/60 to-pink-900/90', glow: '#f43f5e' },
  { bg: 'from-emerald-500/60 to-green-900/90', glow: '#22c55e' },
];

const MANHWA_IMAGES: Record<string, string> = {
  'Solo Leveling': 'https://cdn.myanimelist.net/images/manga/3/222295.jpg',
  'Tower of God': 'https://cdn.myanimelist.net/images/manga/2/177591.jpg',
  'The Beginning After The End': 'https://cdn.myanimelist.net/images/manga/2/205579.jpg',
  'Lookism': 'https://cdn.myanimelist.net/images/manga/1/215881.jpg',
  'Omniscient Reader': 'https://cdn.myanimelist.net/images/manga/1/234617.jpg',
};

export default function Manhwa() {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const ITEMS_PER_PAGE = 30;

  const topFavs: string[] = manhwaData.favorites;
  const fullList: string[] = manhwaData.full_list;

  const next = useCallback(() => setSlide((p) => (p + 1) % topFavs.length), [topFavs.length]);
  const prev = useCallback(() => setSlide((p) => (p - 1 + topFavs.length) % topFavs.length), [topFavs.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [paused, next]);

  const filtered = fullList.filter((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
  const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);
  const coverImg = MANHWA_IMAGES[topFavs[slide]];

  return (
    <Layout title="Manhwas & Manga" subtitle="웹툰 · Reading Shelf" themeColor="from-blue-700 to-indigo-900" accentColor="#6366f1">
      {/* Comic panel grid bg */}
      <div style={{ backgroundImage: 'linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} className="fixed inset-0 pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Hero slider */}
        <div
          className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 shadow-2xl border border-white/5 select-none"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className={`absolute inset-0 bg-gradient-to-br ${TOP_COLORS[slide].bg}`}
            >
              {coverImg && <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${coverImg})` }} />}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-10">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg border-2 border-white/30" style={{ background: TOP_COLORS[slide].glow + '44', boxShadow: `0 0 20px ${TOP_COLORS[slide].glow}66` }}>
                  {slide === 0 ? <Crown size={20} className="text-yellow-300" /> : `#${slide + 1}`}
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white text-center leading-tight drop-shadow-xl tracking-tight">{topFavs[slide]}</h2>
                <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-mono">God Tier Pick</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/90 text-white flex items-center justify-center z-10 transition-colors"><ChevronLeft size={18} /></button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/90 text-white flex items-center justify-center z-10 transition-colors"><ChevronRight size={18} /></button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {topFavs.map((_, i) => <button key={i} onClick={() => setSlide(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === slide ? 'w-6 bg-white' : 'w-1.5 bg-white/25'}`} />)}
          </div>
        </div>

        {/* Top 5 rank cards */}
        <div className="grid grid-cols-5 gap-3 mb-14">
          {topFavs.map((title, idx) => {
            const img = MANHWA_IMAGES[title];
            return (
              <motion.button key={idx} onClick={() => setSlide(idx)} whileHover={{ y: -6, scale: 1.04 }} transition={{ type: 'spring', stiffness: 300 }}
                className={`relative aspect-[2/3] rounded-xl overflow-hidden border-2 transition-all duration-200 ${slide === idx ? 'border-white/40' : 'border-white/5'} bg-gradient-to-b ${TOP_COLORS[idx].bg}`}
                style={slide === idx ? { boxShadow: `0 0 20px ${TOP_COLORS[idx].glow}55` } : {}}
              >
                {img && <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url(${img})` }} />}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
                {idx === 0 && <Crown size={14} className="absolute top-2 right-2 text-yellow-300 z-10" />}
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <p className="text-[9px] font-bold text-white/40 mb-0.5 font-mono">#{idx + 1}</p>
                  <p className="text-[10px] font-bold text-white leading-tight line-clamp-2">{title}</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Archives */}
        <div className="bg-[#0e0f12] rounded-2xl border border-white/5 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h3 className="text-2xl font-black">The Archives <span className="text-white/25 text-base font-normal font-mono">({fullList.length})</span></h3>
            <div className="relative w-full sm:w-60">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input type="text" placeholder="Search manhwas..." value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setPage(1); }} className="w-full bg-[#111214] border border-white/8 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-indigo-500/50 transition-colors" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-0">
            {paginated.map((title, idx) => (
              <div key={idx} className="group flex items-center gap-2.5 py-2.5 border-b border-white/[0.04] hover:border-indigo-500/30 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 shrink-0 transition-colors" />
                <span className="text-sm text-white/70 group-hover:text-white transition-colors leading-snug">{title}</span>
              </div>
            ))}
          </div>
          {paginated.length < filtered.length && (
            <div className="mt-10 flex justify-center">
              <button onClick={() => setPage((p) => p + 1)} className="px-8 py-3 rounded-full bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 font-semibold text-sm text-indigo-300 hover:text-white transition-all">
                Load {Math.min(ITEMS_PER_PAGE, filtered.length - paginated.length)} more →
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
