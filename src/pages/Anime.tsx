import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import animeData from '../../site-data/anime.json';
import { ChevronLeft, ChevronRight, Star, Search, Flame, Play, Sparkles } from 'lucide-react';

const TOP_FAV = 'Chainsaw Man';

// Verified, high-resolution anime posters
const TOP_PICK_DETAILS: Record<string, { img: string; genre: string; desc: string }> = {
  'Chainsaw Man': {
    img: 'https://cdn.myanimelist.net/images/anime/1806/126216.jpg',
    genre: 'Action · Supernatural · Dark Fantasy',
    desc: 'Denji’s chaotic, raw struggle for a normal life. Absolute #1 favorite, lives rent-free in my head forever.'
  },
  'The Eminence in Shadow': {
    img: 'https://cdn.myanimelist.net/images/anime/1647/117271.jpg',
    genre: 'Action · Comedy · Fantasy / Isekai',
    desc: 'Cid Kagenou roleplaying as a mastermind while accidentally saving the world. Pure unadulterated peak comedy.'
  },
  'Naruto': {
    img: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
    genre: 'Shounen · Martial Arts · Adventure',
    desc: 'The classic foundation. Unforgettable villain arcs, emotion, and philosophical clashes.'
  },
  'Your Lie in April': {
    img: 'https://cdn.myanimelist.net/images/anime/3/67177.jpg',
    genre: 'Drama · Music · Romance',
    desc: 'A heartbreaking masterpiece about grief, music, and finding the color in life again.'
  },
  'Darling in the Franxx': {
    img: 'https://cdn.myanimelist.net/images/anime/1614/90408.jpg',
    genre: 'Mecha · Romance · Sci-Fi',
    desc: 'Zero Two & Hiro. Unforgettable emotional attachment and mech designs.'
  },
  'My Dress-Up Darling': {
    img: 'https://cdn.myanimelist.net/images/anime/1329/120123.jpg',
    genre: 'Romance · Slice of Life · Cosplay',
    desc: 'Marin Kitagawa’s energetic passion for cosplay bringing Wakana Gojo out of his shell.'
  },
  'The Dangers in My Heart': {
    img: 'https://cdn.myanimelist.net/images/anime/1476/134474.jpg',
    genre: 'Rom-Com · School · Youth',
    desc: 'Top-tier wholesome character development. One of the best romance anime ever made.'
  },
  'ReLIFE': {
    img: 'https://cdn.myanimelist.net/images/anime/3/80389.jpg',
    genre: 'Drama · Romance · Second Chances',
    desc: 'Reliving high school as an adult to fix your life. Deeply relatable and cathartic.'
  },
  'Vinland Saga': {
    img: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg',
    genre: 'Historical · Action · Philosophical',
    desc: 'From revenge to redemption. Thorfinn’s journey of true strength having no enemies.'
  },
  'Haikyu!!': {
    img: 'https://cdn.myanimelist.net/images/anime/7/76014.jpg',
    genre: 'Sports · Volleyball · Adrenaline',
    desc: 'Hype incarnate. Every spike, block, and rally gets the heart pumping.'
  },
  'Solo Leveling': {
    img: 'https://cdn.myanimelist.net/images/anime/1247/138881.jpg',
    genre: 'Action · Fantasy · Leveling',
    desc: 'Sung Jin-woo awakening from the weakest hunter into the god-tier Shadow Monarch.'
  },
};

const topPicksList = Object.keys(TOP_PICK_DETAILS);

export default function Anime() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeGenre, setActiveGenre] = useState<string>('All');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [paused, setPaused] = useState(false);
  const ITEMS_PER_PAGE = 24;

  const genres = Object.keys(animeData.genres as Record<string, string[]>);

  const next = useCallback(() => setCurrentSlide((p) => (p + 1) % topPicksList.length), []);
  const prev = useCallback(() => setCurrentSlide((p) => (p - 1 + topPicksList.length) % topPicksList.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4200);
    return () => clearInterval(timer);
  }, [paused, next]);

  const currentAnime = topPicksList[currentSlide];
  const currentDetail = TOP_PICK_DETAILS[currentAnime];

  const allTitles = Object.entries(animeData.genres as Record<string, string[]>).flatMap(
    ([genre, titles]) => titles.map((title) => ({ title, genre }))
  );

  const filtered = allTitles
    .filter((t) => activeGenre === 'All' || t.genre === activeGenre)
    .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()));
  const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);

  return (
    <Layout
      title="Anime Catalog"
      subtitle="The Vault · 470+ Titles"
      themeColor="from-orange-700 to-amber-950"
      accentColor="#f97316"
    >
      {/* ── Featured Favorites Rotating 3D Hero Carousel ── */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-orange-400" />
            <h2 className="text-lg font-black text-white font-mono uppercase tracking-wider">
              Hall of Fame · Top Rotations
            </h2>
          </div>
          <span className="text-xs text-white/40 font-mono">
            {currentSlide + 1} of {topPicksList.length}
          </span>
        </div>

        <div
          className="relative w-full min-h-[380px] md:min-h-[440px] rounded-2xl overflow-hidden border border-orange-500/20 bg-[#121316] shadow-2xl select-none"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentAnime}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
              className="absolute inset-0 flex flex-col md:flex-row items-center overflow-hidden"
            >
              {/* Left Details */}
              <div className="relative z-20 w-full md:w-3/5 p-6 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-orange-500/20 border border-orange-500/40 text-orange-400 font-bold text-xs font-mono">
                    RANK #{currentSlide + 1}
                  </span>
                  {currentAnime === TOP_FAV && (
                    <span className="flex items-center gap-1 bg-red-600/30 border border-red-500/50 text-red-400 text-xs px-2.5 py-0.5 rounded font-bold font-mono">
                      <Flame size={12} /> #1 ALL-TIME
                    </span>
                  )}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-2 drop-shadow-md">
                  {currentAnime}
                </h1>

                <p className="text-xs sm:text-sm font-semibold text-orange-400/90 mb-3 font-mono">
                  {currentDetail.genre}
                </p>

                <p className="text-sm text-white/70 leading-relaxed max-w-lg mb-6">
                  {currentDetail.desc}
                </p>

                <div className="flex items-center gap-1 text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                  <span className="text-xs text-white/40 ml-2 font-mono">Masterpiece Rating</span>
                </div>
              </div>

              {/* Right Anime Poster Image */}
              <div className="relative z-10 w-full md:w-2/5 h-64 md:h-full overflow-hidden flex items-center justify-center p-6">
                <div className="relative w-48 sm:w-56 aspect-[2/3] rounded-xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.8)] border border-white/10 group">
                  <img
                    src={currentDetail.img}
                    alt={currentAnime}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Blurred Background Artwork */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 filter blur-xl scale-110 pointer-events-none -z-10"
                style={{ backgroundImage: `url(${currentDetail.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/80 to-transparent -z-10" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center z-30 transition-all cursor-pointer backdrop-blur-sm border border-white/10"
            title="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center z-30 transition-all cursor-pointer backdrop-blur-sm border border-white/10"
            title="Next"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30">
            {topPicksList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-6 bg-orange-400' : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Chainsaw Man Pinned Note ── */}
      <motion.div
        whileHover={{ scale: 1.015 }}
        className="relative max-w-xl mx-auto mb-14 p-6 rounded-2xl bg-[#1c130d] border border-orange-500/30 shadow-xl"
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-orange-500/40 rounded-sm -rotate-2 backdrop-blur-md border border-orange-400/40 shadow-sm" />
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-2xl shrink-0">
            🪚
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-orange-400 font-bold font-mono">
              PERMANENT PINNED FAVORITE
            </p>
            <h3 className="text-xl font-black text-white mt-0.5">
              Chainsaw Man (チェンソーマン)
            </h3>
            <p className="text-xs text-white/60 mt-1 italic">
              "If I can have a dream, it’s to eat jam on bread, hug Pochita, and live a peaceful life."
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── Full 470+ Vault Section ── */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-black text-white font-mono uppercase tracking-tight">
              The Anime Vault
            </h2>
            <p className="text-xs text-white/40 mt-0.5 font-mono">
              Showing {filtered.length} of {allTitles.length} logged titles
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search 470+ anime..."
              className="w-full bg-[#121316] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-orange-500/60 transition-colors"
            />
          </div>
        </div>

        {/* Genre filter chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['All', ...genres].map((g) => (
            <button
              key={g}
              onClick={() => { setActiveGenre(g); setPage(1); }}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all font-mono ${
                activeGenre === g
                  ? 'bg-orange-500 text-white shadow-[0_0_12px_rgba(249,115,22,0.5)]'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Anime Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {paginated.map((item, idx) => (
            <motion.div
              key={`${item.title}-${idx}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % ITEMS_PER_PAGE) * 0.01 }}
              whileHover={{ y: -3 }}
              className="p-3.5 rounded-xl bg-[#121316] hover:bg-[#191b1f] border border-white/5 hover:border-orange-500/30 transition-all group flex flex-col justify-between"
            >
              <p className="text-sm font-bold text-white/85 group-hover:text-white leading-snug line-clamp-2">
                {item.title}
              </p>
              <p className="text-[10px] text-orange-400/80 mt-2 font-mono uppercase tracking-wider">
                {item.genre}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pagination Button */}
        {paginated.length < filtered.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-8 py-3 rounded-xl bg-orange-600/20 hover:bg-orange-600/30 border border-orange-500/30 text-orange-300 font-bold text-sm transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] font-mono"
            >
              Load More ({filtered.length - paginated.length} remaining) →
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
