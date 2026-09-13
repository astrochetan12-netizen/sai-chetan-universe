import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import manhwaData from '../../site-data/manhwa.json';
import { Search } from 'lucide-react';

export default function Manhwa() {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 30;

  const topFavs = manhwaData.favorites;
  const fullList = manhwaData.full_list;

  const filteredList = fullList.filter(title => 
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const paginatedList = filteredList.slice(0, page * ITEMS_PER_PAGE);

  return (
    <Layout title="Manhwas & Manga" themeColor="from-blue-600 to-indigo-800">
      
      {/* Top 5 Rotating Slider / Grid */}
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
        Top 5 God Tier
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
        {topFavs.map((title, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="aspect-[2/3] relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border border-white/10 group flex items-end p-4"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            <h4 className="relative z-10 text-lg font-bold leading-tight drop-shadow-md">
              {title}
            </h4>
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-blue-500/80 flex items-center justify-center font-black text-sm backdrop-blur-sm">
              #{idx + 1}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full List */}
      <div className="mb-8 bg-[#15161a] p-6 md:p-8 rounded-2xl border border-white/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h3 className="text-2xl font-bold">The Archives ({fullList.length})</h3>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input 
              type="text" 
              placeholder="Search titles..." 
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setPage(1); }}
              className="w-full sm:w-64 bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
          {paginatedList.map((title, idx) => (
            <div key={idx} className="group flex items-center gap-3 py-2 border-b border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
              <span className="text-white/80 group-hover:text-white transition-colors">{title}</span>
            </div>
          ))}
        </div>

        {paginatedList.length < filteredList.length && (
          <div className="mt-10 flex justify-center">
            <button 
              onClick={() => setPage(p => p + 1)}
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 font-medium transition-colors shadow-lg shadow-blue-500/20"
            >
              Load More
            </button>
          </div>
        )}
      </div>

    </Layout>
  );
}
