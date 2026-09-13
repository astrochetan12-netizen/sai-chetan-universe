import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Play, Info } from 'lucide-react';
import data from '../../site-data/shows-movies-music.json';

export default function Shows() {
  const { shows } = data;

  return (
    <Layout title="Shows" themeColor="from-red-600 to-rose-900">
      
      {/* Netflix Hero */}
      <div className="relative w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden mb-12 border border-white/10 group bg-[#141414]">
        {/* Placeholder image background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay z-0" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col justify-end h-full">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter drop-shadow-lg text-white">
              {shows.top_favorite.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 font-medium">
              {shows.top_favorite.season_note}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-white text-black rounded font-bold flex items-center gap-2 hover:bg-white/80 transition-colors">
                <Play className="w-5 h-5 fill-current" /> Play
              </button>
              <button className="px-8 py-3 bg-gray-500/50 text-white rounded font-bold flex items-center gap-2 hover:bg-gray-500/70 transition-colors backdrop-blur-sm">
                <Info className="w-5 h-5" /> More Info
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rows */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold px-2">Watch It Again</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 px-2">
          {shows.watched_full_list.slice(0, 15).map((title, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="aspect-video bg-[#181818] rounded-md overflow-hidden border border-white/5 relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-black to-transparent">
                <p className="text-sm font-medium text-white/90 truncate">{title}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="p-4 mt-8 bg-[#181818] rounded-md border border-white/5">
          <p className="text-sm text-gray-400 italic">
            {shows.watched_full_list[shows.watched_full_list.length - 1]}
          </p>
        </div>
      </div>

    </Layout>
  );
}
