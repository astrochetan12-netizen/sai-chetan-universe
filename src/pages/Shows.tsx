import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Play, Info, Sparkles, Film } from 'lucide-react';
import data from '../../site-data/shows-movies-music.json';
import { ScrollDownYuji } from '../components/AnimeStickers';

export default function Shows() {
  const { shows } = data;
  const hero = shows.top_favorite;
  const seriesList = shows.k_dramas_and_series;

  return (
    <Layout
      title="Shows & K-Dramas"
      subtitle="Netflix & K-Drama Watchlist"
      themeColor="from-red-800 to-zinc-950"
      accentColor="#ef4444"
    >
      <ScrollDownYuji />
      {/* ── Netflix Cinematic Hero Banner: Weak Hero Class 1 ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full rounded-2xl overflow-hidden mb-12 border border-red-900/30 bg-[#0c0c0f] shadow-2xl"
      >
        {/* Backdrop Poster with Gradient Vignette */}
        <div className="relative w-full min-h-[380px] md:min-h-[460px] flex flex-col justify-end p-6 md:p-12 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 md:opacity-50"
            style={{
              backgroundImage: `url(${hero.image})`,
              filter: 'brightness(0.85) contrast(1.1)',
            }}
          />

          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f] via-[#0c0c0f]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0f] via-[#0c0c0f]/80 to-transparent" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-2xl">
            {/* Netflix Series Tag */}
            <div className="inline-flex items-center gap-2 mb-3 bg-red-600/20 border border-red-600/40 px-3 py-1 rounded-full text-xs font-bold text-red-400 font-mono">
              <span className="w-4 h-5 bg-red-600 rounded-sm text-white flex items-center justify-center font-black text-[10px]">
                N
              </span>
              <span>SERIES · #1 ALL-TIME FAVORITE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-2 drop-shadow-md">
              {hero.title}
            </h1>

            <p className="text-sm md:text-base font-semibold text-red-400 mb-3 font-mono">
              {hero.season_note} • {hero.genre}
            </p>

            <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6 max-w-xl">
              {hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button className="px-6 py-2.5 rounded-lg bg-white text-black font-bold flex items-center gap-2 hover:bg-white/90 transition-all shadow-lg text-sm">
                <Play size={16} className="fill-current" /> Watch Peak
              </button>
              <div className="px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white/80 font-semibold flex items-center gap-2 text-sm backdrop-blur-sm">
                <Info size={16} /> Park Ji-hoon
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── All Watched K-Dramas & Netflix Series Grid ── */}
      <div>
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <Film size={18} className="text-red-500" />
            <h2 className="text-xl font-black text-white font-mono uppercase tracking-wider">
              Watched Series & K-Dramas
            </h2>
          </div>
          <span className="text-xs text-white/40 font-mono">
            {seriesList.length} shows watched
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {seriesList.map((show, idx) => (
            <motion.div
              key={show.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-xl overflow-hidden bg-[#121316] border border-white/5 hover:border-red-500/30 transition-all duration-300 shadow-lg flex flex-col"
            >
              {/* Show Poster Image */}
              <div className="relative aspect-[2/3] w-full overflow-hidden bg-black/60">
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback poster background if image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-black/20" />

                {/* Top Badge */}
                <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-sm border border-red-500/30 px-2 py-0.5 rounded text-[10px] font-bold text-red-400 font-mono">
                  {show.tag}
                </div>
              </div>

              {/* Show Info */}
              <div className="p-3.5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-bold text-sm text-white group-hover:text-red-400 transition-colors line-clamp-1 leading-snug">
                    {show.title}
                  </h3>
                  <p className="text-[11px] text-white/40 mt-1 line-clamp-2 leading-relaxed font-mono">
                    {show.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
