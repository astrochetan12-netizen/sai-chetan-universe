import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import animeData from '../../site-data/anime.json';
import { ChevronLeft, ChevronRight, Star, Search, Flame } from 'lucide-react';

const TOP_FAV = 'Chainsaw Man';

const TOP_PICK_IMAGES: Record<string, string> = {
  'Chainsaw Man': 'https://cdn.myanimelist.net/images/anime/1806/126216.jpg',
  'The Eminence in Shadow': 'https://cdn.myanimelist.net/images/anime/1647/117271.jpg',
  'Naruto': 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
  'Your Lie in April': 'https://cdn.myanimelist.net/images/anime/3/67177.jpg',
  'Darling in the Franxx': 'https://cdn.myanimelist.net/images/anime/1614/90408.jpg',
  'My Dress-Up Darling': 'https://cdn.myanimelist.net/images/anime/1329/120123.jpg',
  'The Dangers in My Heart': 'https://cdn.myanimelist.net/images/anime/1476/134474.jpg',
  'ReLIFE': 'https://cdn.myanimelist.net/images/anime/3/80389.jpg',
  'Vinland Saga': 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg',
  'Haikyu!!': 'https://cdn.myanimelist.net/images/anime/7/76014.jpg',
  'Solo Leveling': 'https://cdn.myanimelist.net/images/anime/1247/138881.jpg',
};

const SLIDE_GRADIENTS = [
  'from-orange-600/50 to-red-900/80',
  'from-violet-600/50 to-indigo-900/80',
  'from-pink-600/50 to-rose-900/80',
  'from-amber-500/50 to-yellow-900/80',
  'from-cyan-600/50 to-blue-900/80',
  'from-emerald-600/50 to-teal-900/80',
  'from-fuchsia-600/50 to-purple-900/80',
  'from-red-600/50 to-pink-900/80',
  'from-sky-600/50 to-indigo-900/80',
  'from-lime-500/50 to-green-900/80',
  'from-orange-500/50 to-amber-900/80',
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

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 3800);
    return () => clearInterval(t);
  }, [paused, next]);

  const allTitles = Object.entries(animeData.genres as Record<string, string[]>).flatMap(
    ([genre, titles]) => titles.map((title) => ({ title, genre }))
  );
  const filtered = allTitles
    .filter((t) => activeGenre === 'All' || t.genre === activeGenre)
    .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()));
  const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);
  const coverImg = TOP_PICK_IMAGES[topPicks[currentSlide]];

  return (
    <Layout title="Anime" subtitle="アニメ · The Vault" themeColor="from-orange-600 to-red-900" accentColor="#f97316">
      {/* diagonal texture */}
      <div style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(249,115,22,0.04) 0px, rgba(249,115,22,0.04) 1px, transparent 1px, transparent 10px)' }} className="fixed inset-0 pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Hero Carousel */}
        <div
          className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden mb-10 shadow-2xl border border-white/5 select-none"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className={`absolute inset-0 bg-gradient-to-br ${SLIDE_GRADIENTS[currentSlide % SLIDE_GRADIENTS.length]}`}
            >
              {coverImg && (
                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${coverImg})` }} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-12">
                <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 font-mono">
                  {currentSlide + 1} / {topPicks.length}
                </span>
                <h2 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-black text-white text-center leading-tight tracking-tighter drop-shadow-2xl">
                  {topPicks[currentSlide]}
                </h2>
                <div className="relative z-10 flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-orange-400 text-orange-400" />)}
                </div>
                {currentSlide === 0 && (
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative z-10 flex items-center gap-1.5 bg-orange-500/80 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm"
                  >
                    <Flame size={12} /> #1 ABSOLUTE FAV
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/90 text-white flex items-center justify-center z-20 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/90 text-white flex items-center justify-center z-20 transition-colors">
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {topPicks.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentSlide(idx)} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-orange-400' : 'w-1.5 bg-white/25'}`} />
            ))}
          </div>
        </div>

        {/* Pinned fav */}
        <motion.div
          initial={{ opacity: 0, rotate: -1 }}
          animate={{ opacity: 1, rotate: -1 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="relative max-w-lg mx-auto mb-10 bg-[#fdf6e3] text-[#3b2e00] rounded-md shadow-[6px_6px_0px_0px_rgba(0,0,0,0.35)] px-8 py-6"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-red-400/60 backdrop-blur-sm border border-red-300/30 -rotate-1 rounded-sm" />
          <div className="flex items-center gap-4">
            <Star className="w-9 h-9 text-amber-600 fill-amber-500 shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-700/60 mb-0.5 font-mono">Absolute #1 Favorite</p>
              <h2 className="text-2xl font-black tracking-tight">{TOP_FAV}</h2>
              <p className="text-xs text-amber-700/70 mt-1 font-medium italic">lives in my head rent free fr 🔥</p>
            </div>
          </div>
        </motion.div>

        {/* Tsundere sticky note */}
        <motion.div
          initial={{ rotate: 3, opacity: 0 }}
          animate={{ rotate: 3, opacity: 1 }}
          whileHover={{ rotate: 0, scale: 1.03 }}
          className="max-w-xs mx-auto mb-10 bg-yellow-100 text-yellow-900 p-4 rounded shadow-[4px_4px_0_rgba(0,0,0,0.2)] text-sm italic font-medium cursor-default"
        >
          <div className="absolute -top-2 left-4 w-8 h-3 bg-blue-300/50 rounded-sm" />
          "i-it's not like i curated this list for you or anything... b-baka 😤"
        </motion.div>

        {/* Full list */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-2xl font-black tracking-tight">
              The Vault <span className="text-white/25 text-base font-normal font-mono">({allTitles.length})</span>
            </h3>
            <div className="relative w-full sm:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} placeholder="Search anime..." className="w-full bg-[#111214] border border-white/8 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-orange-500/50 transition-colors" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {['All', ...genres].map((g) => (
              <button key={g} onClick={() => { setActiveGenre(g); setPage(1); }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${activeGenre === g ? 'bg-orange-500 text-white' : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'}`}
                style={activeGenre === g ? { boxShadow: '0 0 12px rgba(249,115,22,0.5)' } : {}}
              >{g}</button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {paginated.map((item, idx) => (
              <motion.div key={`${item.title}-${idx}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (idx % ITEMS_PER_PAGE) * 0.012 }} whileHover={{ y: -4 }}
                className="p-3.5 rounded-xl bg-[#111214] hover:bg-[#1a1b1e] border border-white/5 hover:border-orange-500/25 transition-all group cursor-default"
              >
                <p className="text-sm font-semibold text-white/85 group-hover:text-white leading-snug">{item.title}</p>
                <p className="text-[11px] text-orange-400/70 mt-1 font-mono">{item.genre}</p>
              </motion.div>
            ))}
          </div>
          {paginated.length < filtered.length && (
            <div className="mt-10 flex justify-center">
              <button onClick={() => setPage((p) => p + 1)} className="px-8 py-3 rounded-full bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/30 font-semibold text-sm text-white/70 hover:text-white transition-all">
                Load {Math.min(ITEMS_PER_PAGE, filtered.length - paginated.length)} more →
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
