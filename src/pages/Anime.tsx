import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import animeData from '../../site-data/anime.json';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TOP_FAV = "Chainsaw Man";

export default function Anime() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeGenre, setActiveGenre] = useState<string>('All');
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 20;

  const topPicks = animeData.top_picks;
  const genres = Object.keys(animeData.genres);
  
  // Auto-rotate hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % topPicks.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [topPicks.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % topPicks.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + topPicks.length) % topPicks.length);

  // Flatten and filter list
  const allTitles = Object.entries(animeData.genres).flatMap(([genre, titles]) => 
    titles.map(title => ({ title, genre }))
  );
  
  const filteredTitles = activeGenre === 'All' 
    ? allTitles 
    : allTitles.filter(t => t.genre === activeGenre);
    
  const paginatedTitles = filteredTitles.slice(0, page * ITEMS_PER_PAGE);

  return (
    <Layout title="Anime" themeColor="from-orange-500 to-red-600">
      
      {/* Hero Carousel */}
      <div className="relative w-full h-64 md:h-96 bg-[#1a1b1e] rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-orange-500/20 to-transparent"
          >
            {/* Placeholder for actual image if added later */}
            <h2 className="text-4xl md:text-6xl font-black text-white/90 tracking-tighter text-center px-8">
              {topPicks[currentSlide]}
            </h2>
          </motion.div>
        </AnimatePresence>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors">
          <ChevronLeft />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors">
          <ChevronRight />
        </button>
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {topPicks.map((_, idx) => (
            <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-orange-500 w-6' : 'bg-white/30'}`} />
          ))}
        </div>
      </div>

      {/* Pinned Top Favorite */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative bg-amber-50 text-amber-900 p-6 md:p-8 rounded-lg rotate-1 shadow-xl max-w-2xl mx-auto mb-16"
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-red-500/50 -rotate-2 opacity-80" style={{ clipPath: 'polygon(0% 0%, 100% 5%, 95% 100%, 5% 95%)' }} />
        <div className="flex items-center gap-4">
          <Star className="w-8 h-8 text-amber-600 fill-amber-500" />
          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-amber-600/70 mb-1">Absolute Favorite</h3>
            <h2 className="text-3xl font-black tracking-tight">{TOP_FAV}</h2>
          </div>
        </div>
      </motion.div>

      {/* Full List with Filters */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6">The Vault ({allTitles.length})</h3>
        
        {/* Genre Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button 
            onClick={() => { setActiveGenre('All'); setPage(1); }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeGenre === 'All' ? 'bg-orange-500 text-white' : 'bg-white/10 hover:bg-white/20'}`}
          >
            All
          </button>
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => { setActiveGenre(genre); setPage(1); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeGenre === genre ? 'bg-orange-500 text-white' : 'bg-white/10 hover:bg-white/20'}`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {paginatedTitles.map((item, idx) => (
            <div key={`${item.title}-${idx}`} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors">
              <h4 className="font-medium text-white/90">{item.title}</h4>
              <p className="text-xs text-orange-400 mt-1">{item.genre}</p>
            </div>
          ))}
        </div>

        {/* Load More */}
        {paginatedTitles.length < filteredTitles.length && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setPage(p => p + 1)}
              className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 font-medium transition-colors border border-white/10"
            >
              Load More
            </button>
          </div>
        )}
      </div>

    </Layout>
  );
}
