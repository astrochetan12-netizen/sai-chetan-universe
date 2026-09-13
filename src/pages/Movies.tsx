import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Crown, AlertTriangle } from 'lucide-react';
import data from '../../site-data/shows-movies-music.json';

export default function Movies() {
  const { movies } = data;

  return (
    <Layout title="Movies" themeColor="from-yellow-400 to-amber-600">
      
      {/* Spider-Verse Aesthetic Hero */}
      <div className="relative w-full aspect-video md:aspect-[21/9] bg-yellow-400 border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group mb-12">
        {/* Halftone dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#000_1px,_transparent_1.5px)] bg-[length:6px_6px] opacity-10 pointer-events-none mix-blend-overlay z-10" />
        
        {/* Glitch text elements */}
        <motion.div 
          animate={{ x: [-2, 2, -1, 3, 0] }}
          transition={{ repeat: Infinity, duration: 0.2, repeatType: 'mirror', repeatDelay: 3 }}
          className="absolute inset-0 flex items-center justify-center bg-[#1a1b1e]"
        >
          {/* Crown */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute -top-12 z-20 text-yellow-400 drop-shadow-[2px_2px_0px_#000]"
          >
            <Crown size={80} />
          </motion.div>
          
          <h2 className="text-7xl md:text-9xl font-retro text-white drop-shadow-[4px_4px_0px_#ea580c] z-10 relative uppercase tracking-tighter">
            {movies.featured_favorite.title}
            <span className="absolute -left-1 -top-1 text-cyan-400 opacity-70 mix-blend-screen -z-10">{movies.featured_favorite.title}</span>
            <span className="absolute left-1 top-1 text-red-500 opacity-70 mix-blend-screen -z-10">{movies.featured_favorite.title}</span>
          </h2>
        </motion.div>

        {/* Comic Panel Borders */}
        <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 font-retro text-xs border-2 border-white transform -rotate-2 z-20 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
          {movies.featured_favorite.note}
        </div>
      </div>

      {/* Warning Banner */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full bg-red-500/20 border-2 border-red-500 text-red-200 p-6 rounded-xl flex items-start gap-4 mb-16 shadow-[0_0_15px_rgba(239,68,68,0.3)]"
      >
        <AlertTriangle className="w-8 h-8 flex-shrink-0 text-red-500 animate-pulse" />
        <div>
          <h3 className="text-xl font-bold font-retro mb-2 flex items-center gap-2">
            WARNING <span className="text-2xl">😡💢</span>
          </h3>
          <p className="font-mono text-sm tracking-wider">
            affection too low to know about chetan's movie interests.
          </p>
        </div>
      </motion.div>

      {/* Secondary Signals */}
      <div>
        <h4 className="text-sm uppercase tracking-widest text-white/40 mb-4 font-mono">Other detected signals</h4>
        <div className="flex gap-4">
          {movies.other_streaming_signals.map(title => (
            <div key={title} className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white/60 font-mono text-sm">
              {title}
            </div>
          ))}
        </div>
      </div>

    </Layout>
  );
}
