import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import animeData from '../../site-data/anime.json';
import { ChevronLeft, ChevronRight, Star, Search } from 'lucide-react';

const TOP_FAV = 'Chainsaw Man';

// Gradient per slide index for visual variety
const SLIDE_GRADIENTS = [
  'from-orange-500/30 to-red-900/40',
  'from-violet-500/30 to-indigo-900/40',
  'from-pink-500/30 to-rose-900/40',
  'from-amber-500/30 to-yellow-900/40',
  'from-cyan-500/30 to-blue-900/40',
  'from-emerald-500/30 to-teal-900/40',
  'from-fuchsia-500/30 to-purple-900/40',
  'from-red-500/30 to-pink-900/40',
  'from-sky-500/30 to-indigo-900/40',
  'from-lime-500/30 to-green-900/40',
  'from-orange-500/30 to-amber-900/40',
];

export default function Anime() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeGenre, setActiveGenre] = useState<string>('All');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [paused, setPaused] = useState(false);
  const ITEMS_PER_PAGE = 24;

  const topPicks: string[] = animeData.top_picks;
  const genres = Object.keys(animeData.genres as Record<string, string[]>);

  const next = useCallback(() => setCurrentSlide((p) => (p + 1) % topPicks.length), [topPicks.length]);
  const prev = useCallback(() => setCurrentSlide((p) => (p - 1 + topPicks.length) % topPicks.length), [topPicks.length]);

  // Auto-rotate, pause on hover
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 3800);
    return () => clearInterval(t);
  }, [paused, next]);

  // Flatten + filter list
  const allTitles = Object.entries(animeData.genres as Record<string, string[]>).flatMap(
    ([genre, titles]) => titles.map((title) => ({ title, genre }))
  );
  const filtered = allTitles
    .filter((t) => activeGenre === 'All' || t.genre === activeGenre)
    .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()));
  const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);

  return (
    <Layout title="Anime" subtitle="The Vault" themeColor="from-orange-600 to-red-900" accentColor="#f97316">
      
      {/* ── Hero Carousel ─────────────────────────────────── */}
      <div
        className="relative w-full h-56 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-10 shadow-2xl border border-white/5 select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
            className={`absolute inset-0 bg-gradient-to-br ${SLIDE_GRADIENTS[currentSlide % SLIDE_GRADIENTS.length]} flex flex-col items-center justify-center gap-4 px-12`}
          >
            {/* Number badge */}
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              #{currentSlide + 1} of {topPicks.length}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white text-center leading-tight tracking-tighter drop-shadow-2xl">
              {topPicks[currentSlide]}
            </h2>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrow controls */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors backdrop-blur-sm z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors backdrop-blur-sm z-10"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dot progress bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {topPicks.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-orange-400 w-6' : 'bg-white/25 w-1.5'}`}
            />
          ))}
        </div>
      </div>

      {/* ── Pinned Top Fave (taped note-paper) ────────────── */}
      <motion.div
        initial={{ opacity: 0, rotate: -1 }}
        animate={{ opacity: 1, rotate: -1 }}
        whileHover={{ rotate: 0, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="relative max-w-lg mx-auto mb-14 bg-[#fdf6e3] text-[#3b2e00] rounded-md shadow-[6px_6px_0px_0px_rgba(0,0,0,0.35)] px-8 py-6"
      >
        {/* Red tape */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-red-400/60 backdrop-blur-sm border border-red-300/30 -rotate-1 rounded-sm" />
        <div className="flex items-center gap-4">
          <Star className="w-9 h-9 text-amber-600 fill-amber-500 shrink-0" />
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-700/60 mb-0.5">Absolute #1 Favorite</p>
            <h2 className="text-2xl font-black tracking-tight">{TOP_FAV}</h2>
            <p className="text-xs text-amber-700/70 mt-1 font-medium italic">Chainsaw Man lives in my head rent free fr</p>
          </div>
        </div>
      </motion.div>

      {/* ── Full List ─────────────────────────────────────── */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-2xl font-bold">
            The Vault <span className="text-white/30 text-base font-normal">({allTitles.length} titles)</span>
          </h3>
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search anime..."
              className="w-full bg-[#111214] border border-white/8 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-orange-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Genre Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['All', ...genres].map((g) => (
            <button
              key={g}
              onClick={() => { setActiveGenre(g); setPage(1); }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeGenre === g
                  ? 'bg-orange-500 text-white shadow-[0_0_10px_rgba(249,115,22,0.4)]'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {paginated.map((item, idx) => (
            <motion.div
              key={`${item.title}-${idx}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % ITEMS_PER_PAGE) * 0.015 }}
              className="p-3.5 rounded-xl bg-[#111214] hover:bg-[#1a1b1e] border border-white/5 hover:border-orange-500/20 transition-all group"
            >
              <p className="text-sm font-semibold text-white/85 group-hover:text-white leading-snug">{item.title}</p>
              <p className="text-[11px] text-orange-400/70 mt-1">{item.genre}</p>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {paginated.length < filtered.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-8 py-3 rounded-full bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/30 font-semibold text-sm text-white/70 hover:text-white transition-all"
            >
              Load {Math.min(ITEMS_PER_PAGE, filtered.length - paginated.length)} more →
            </button>
          </div>
        )}
      </div>

    </Layout>
  );
}
