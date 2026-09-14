import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import manhwaData from '../../site-data/manhwa.json';
import { Search, ChevronLeft, ChevronRight, Crown, Sparkles, BookOpen } from 'lucide-react';

interface ManhwaDetail {
  title: string;
  img: string;
  author: string;
  genre: string;
  status: string;
  desc: string;
}

const TOP_MANHWAS: ManhwaDetail[] = [
  {
    title: 'Solo Leveling',
    img: 'https://cdn.myanimelist.net/images/manga/3/222295.jpg',
    author: 'Chugong & DUBU (REDICE Studio)',
    genre: 'Action · Fantasy · Dungeons',
    status: 'Completed (God Tier)',
    desc: 'Sung Jin-woo begins as the world’s weakest E-rank hunter. After surviving a double dungeon, he receives a mysterious quest log that turns him into the unstoppable Shadow Monarch. "Arise."'
  },
  {
    title: 'Omniscient Reader’s Viewpoint',
    img: 'https://cdn.myanimelist.net/images/manga/1/234617.jpg',
    author: 'sing N song & Sleepy-C',
    genre: 'Apocalypse · Psychological · Meta-Fiction',
    status: 'Ongoing Masterpiece',
    desc: 'Kim Dokja was the sole reader of a web novel with 3,149 chapters. When the fictional world becomes real, Dokja uses his knowledge to guide humanity through the terrifying scenarios.'
  },
  {
    title: 'The Beginning After The End',
    img: 'https://cdn.myanimelist.net/images/manga/2/205579.jpg',
    author: 'TurtleMe & Fuyuki23',
    genre: 'Reincarnation · Magic · Adventure',
    status: 'Ongoing Peak',
    desc: 'King Grey is reincarnated into the magical world of Dicathen as Arthur Leywin. Armed with the memories of his past life, he strives to protect his loved ones from looming continental war.'
  },
  {
    title: 'Tower of God',
    img: 'https://cdn.myanimelist.net/images/manga/2/177591.jpg',
    author: 'SIU',
    genre: 'High Fantasy · Mystery · Epic Scale',
    status: 'Ongoing Legend',
    desc: 'Twenty-Fifth Baam enters the unfathomable Tower to chase after Rachel, his only friend. Vast lore, intricate test games, and high-stakes irregular politics.'
  },
  {
    title: 'Lookism',
    img: 'https://cdn.myanimelist.net/images/manga/1/215881.jpg',
    author: 'Park Tae-joon (PTJ Comics)',
    genre: 'School Gangs · Drama · Action',
    status: 'Ongoing Cult Classic',
    desc: 'Daniel Park awakens with the ability to switch between two bodies: his original overweight body and a tall, charismatic, peak-physical athlete. Deep dive into underground crews and street fights.'
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
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [paused, next]);

  const currentManhwa = TOP_MANHWAS[slide];
  const filtered = fullList.filter((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
  const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);

  return (
    <Layout
      title="Manhwas & Webtoons"
      subtitle="웹툰 · God Tier Shelf"
      themeColor="from-indigo-800 to-blue-950"
      accentColor="#6366f1"
    >
      {/* ── Top Featured Slider with Cover Poster ── */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-indigo-400" />
            <h2 className="text-lg font-black text-white font-mono uppercase tracking-wider">
              Top 5 God-Tier Picks
            </h2>
          </div>
          <span className="text-xs text-white/40 font-mono">
            {slide + 1} of {TOP_MANHWAS.length}
          </span>
        </div>

        <div
          className="relative w-full min-h-[380px] md:min-h-[440px] rounded-2xl overflow-hidden border border-indigo-500/20 bg-[#101115] shadow-2xl select-none"
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
                  <span className="text-xs text-indigo-400/80 font-mono">
                    {currentManhwa.status}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-1 drop-shadow-lg">
                  {currentManhwa.title}
                </h1>

                <p className="text-xs text-white/50 mb-3 font-mono">
                  {currentManhwa.author} • {currentManhwa.genre}
                </p>

                <p className="text-sm text-white/70 leading-relaxed max-w-lg mb-6">
                  {currentManhwa.desc}
                </p>
              </div>

              {/* Right Manhwa Poster */}
              <div className="relative z-10 w-full md:w-2/5 h-64 md:h-full flex items-center justify-center p-6">
                <div className="relative w-48 sm:w-56 aspect-[2/3] rounded-xl overflow-hidden shadow-[0_20px_35px_rgba(0,0,0,0.8)] border border-white/10 group">
                  <img
                    src={currentManhwa.img}
                    alt={currentManhwa.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Background Art Backdrop */}
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

      {/* ── 5 Clickable Rank Cards with Cover Posters ── */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 mb-14">
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

            {/* Title at bottom */}
            <div className="absolute bottom-2 left-2 right-2">
              <p className="text-xs font-bold text-white leading-tight line-clamp-1">
                {item.title}
              </p>
              <p className="text-[10px] text-indigo-300 font-mono mt-0.5 truncate">
                {item.genre.split('·')[0]}
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
