import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import manhwaData from '../../site-data/manhwa.json';
import { Search, ChevronLeft, ChevronRight, Crown, Sparkles, BookOpen } from 'lucide-react';

interface ManhwaDetail {
  title: string;
  shortTitle: string;
  img: string;
  author: string;
  genre: string;
  status: string;
  desc: string;
}

// Exactly ordered according to user's favorites from site-data/manhwa.json
const TOP_MANHWAS: ManhwaDetail[] = [
  {
    title: 'The Beginning After The End (TBATE)',
    shortTitle: 'TBATE',
    img: 'https://media.kitsu.app/manga/54597/poster_image/large-d5f120451631e8e2334a7629f994dd03.jpeg',
    author: 'TurtleMe & Fuyuki23',
    genre: 'Isekai · Magic · Continental War · Adventure',
    status: '#1 All-Time Favorite',
    desc: 'King Grey was a solitary ruler who died mysteriously. Reborn as Arthur Leywin in the magical world of Dicathen, he vows to protect his family and kingdom from ancient Asuran warfare. Peak worldbuilding.'
  },
  {
    title: 'SSS-Class Revival Hunter',
    shortTitle: 'SSS Revival Hunter',
    img: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx128067-wnLBg6Cy1ncs.jpg',
    author: 'Shin Noah & Bill K',
    genre: 'Tower Climber · Psychological · Returner',
    status: '#2 God Tier',
    desc: 'Kim Gong-ja obtains the S-rank skill to copy an ability from whoever kills him, combined with an automatic 24-hour regression upon death. One of the most emotionally profound tower stories ever written.'
  },
  {
    title: 'Omniscient Reader’s Viewpoint (ORV)',
    shortTitle: 'ORV',
    img: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx119257-Pi21aq3ey9GG.jpg',
    author: 'sing N song & Sleepy-C (REDICE)',
    genre: 'Apocalyptic Fantasy · Constellations · Meta',
    status: '#3 God Tier',
    desc: 'Kim Dokja was the sole reader who completed all 3,149 chapters of "Ways of Survival." When the world ends and follows the novel’s script, only Dokja knows how to reach the final epilogue.'
  },
  {
    title: 'The Greatest Estate Developer',
    shortTitle: 'Estate Developer',
    img: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx140407-fJQr0fmqq1IO.png',
    author: 'BK_Moon & Kim Hyunsoo',
    genre: 'Comedy · Civil Engineering · Fantasy',
    status: '#4 Absolute Peak Comedy',
    desc: 'Civil engineering student Suho Kim wakes up as Lloyd Frontera, the useless noble scoundrel of a debt-ridden barony. Using modern construction, shovels, and demonic face expressions to build an empire.'
  },
  {
    title: 'Chainsaw Man Manga',
    shortTitle: 'Chainsaw Man',
    img: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105778-euxXZEIfDY2u.png',
    author: 'Tatsuki Fujimoto',
    genre: 'Dark Fantasy · Psychological · Gore',
    status: '#5 Masterpiece Manga',
    desc: 'Tatsuki Fujimoto’s unhinged, cinematic manga masterpiece. Denji, Pochita, Makima, and the brutal reality of human desires. Unmatched panel composition and raw storytelling.'
  },
  {
    title: 'Solo Leveling',
    shortTitle: 'Solo Leveling',
    img: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105398-b673Vt5ZSuz3.jpg',
    author: 'Chugong & DUBU',
    genre: 'Action · Fantasy · Shadow Monarch',
    status: 'Hall of Fame',
    desc: 'Sung Jin-woo rises from the weakest E-rank hunter to the immortal Shadow Monarch commanding an army of darkness. "Arise."'
  },
];

export default function Manhwa() {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const ITEMS_PER_PAGE = 30;

  const fullList: string[] = manhwaData.full_list;

  const next = useCallback(() => setSlide((p) => (p + 1) % TOP_MANHWAS.length), []);
  const prev = useCallback(() => setSlide((p) => (p - 1 + TOP_MANHWAS.length) % TOP_MANHWAS.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [paused, next]);

  const currentManhwa = TOP_MANHWAS[slide];
  const filtered = fullList.filter((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
  const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);

  return (
    <Layout
      title="Manhwas & Webtoons"
      subtitle="웹툰 · Verified Reading Shelf"
      themeColor="from-indigo-800 to-blue-950"
      accentColor="#6366f1"
    >
      {/* ── Top Featured Slider with Real Cover Poster ── */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-indigo-400" />
            <h2 className="text-lg font-black text-white font-mono uppercase tracking-wider">
              Top Favorites (Exact Order)
            </h2>
          </div>
          <span className="text-xs text-white/40 font-mono">
            {slide + 1} of {TOP_MANHWAS.length}
          </span>
        </div>

        <div
          className="relative w-full min-h-[390px] md:min-h-[450px] rounded-2xl overflow-hidden border border-indigo-500/20 bg-[#101115] shadow-2xl select-none"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentManhwa.title}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="absolute inset-0 flex flex-col md:flex-row items-center overflow-hidden"
            >
              {/* Left Info */}
              <div className="relative z-20 w-full md:w-3/5 p-6 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-bold text-xs font-mono">
                    {slide === 0 ? <Crown size={14} className="text-amber-300" /> : null}
                    <span>RANK #{slide + 1}</span>
                  </div>
                  <span className="text-xs text-indigo-400 font-mono font-semibold">
                    {currentManhwa.status}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-1 drop-shadow-lg">
                  {currentManhwa.title}
                </h1>

                <p className="text-xs sm:text-sm text-indigo-300/80 mb-3 font-mono">
                  {currentManhwa.author} • {currentManhwa.genre}
                </p>

                <p className="text-sm text-white/75 leading-relaxed max-w-lg mb-6">
                  {currentManhwa.desc}
                </p>
              </div>

              {/* Right Manhwa HD Poster */}
              <div className="relative z-10 w-full md:w-2/5 h-64 md:h-full flex items-center justify-center p-6">
                <div className="relative w-48 sm:w-56 aspect-[2/3] rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.85)] border border-white/10 group">
                  <img
                    src={currentManhwa.img}
                    alt={currentManhwa.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Blurred Background Art */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25 filter blur-xl scale-110 pointer-events-none -z-10"
                style={{ backgroundImage: `url(${currentManhwa.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#101115] via-[#101115]/80 to-transparent -z-10" />
            </motion.div>
          </AnimatePresence>

          {/* Slider controls */}
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
        </div>
      </div>

      {/* ── Clickable Rank Cards with Real Cover Posters in Exact Order ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5 mb-14">
        {TOP_MANHWAS.map((item, idx) => (
          <motion.button
            key={item.title}
            onClick={() => setSlide(idx)}
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`relative aspect-[2/3] rounded-xl overflow-hidden border-2 transition-all duration-300 text-left cursor-pointer group shadow-lg ${
              slide === idx
                ? 'border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.5)]'
                : 'border-white/10 hover:border-white/30'
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Rank Badge */}
            <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold text-white font-mono flex items-center gap-1 border border-white/10">
              {idx === 0 ? <Crown size={11} className="text-amber-300" /> : null}
              <span>#{idx + 1}</span>
            </div>

            {/* Short Title at bottom */}
            <div className="absolute bottom-2 left-2 right-2">
              <p className="text-xs font-bold text-white leading-tight line-clamp-1">
                {item.shortTitle}
              </p>
              <p className="text-[10px] text-indigo-300 font-mono mt-0.5 truncate">
                {item.status.split(' ')[0]}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* ── Searchable Manhwa Archive (290+ titles) ── */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#101115] border border-white/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-black text-white font-mono uppercase tracking-tight flex items-center gap-2">
              <BookOpen size={20} className="text-indigo-400" />
              <span>The Manhwa Archives</span>
            </h2>
            <p className="text-xs text-white/40 mt-0.5 font-mono">
              Complete reading shelf · {fullList.length} total titles
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Search 290+ manhwas..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setPage(1); }}
              className="w-full bg-[#16171c] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/60 transition-colors font-mono"
            />
          </div>
        </div>

        {/* List items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1">
          {paginated.map((title, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-2.5 py-2 border-b border-white/[0.03] hover:border-indigo-500/30 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 transition-colors shrink-0" />
              <span className="text-sm text-white/70 group-hover:text-white transition-colors truncate">
                {title}
              </span>
            </div>
          ))}
        </div>

        {/* Load more */}
        {paginated.length < filtered.length && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-8 py-3 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 font-bold text-sm transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] font-mono"
            >
              Load More ({filtered.length - paginated.length} remaining) →
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
