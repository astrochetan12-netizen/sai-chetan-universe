import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import { Camera, X, Maximize2 } from 'lucide-react';

const PHOTOS = [
  { id: 0, src: '/assets/photos/sunset.png', title: 'Golden Hour Reflections', description: 'Sunrays through the clouds over a silhouetted lake.', date: '2025', location: 'India' },
];

export default function Photography() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Layout title="Photography" subtitle="Captured moments" themeColor="from-cyan-600 to-blue-900" accentColor="#06b6d4">
      {/* Hero quote */}
      <p className="text-3xl md:text-4xl font-black italic text-white/70 mb-12 leading-tight max-w-2xl">
        "Capturing the moments<br />nobody else notices."
      </p>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {PHOTOS.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden bg-[#111214] border border-white/5 shadow-xl cursor-pointer aspect-[4/5]"
            onClick={() => setSelected(i)}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-cover"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="flex items-center justify-between mb-2">
                <Maximize2 size={18} className="text-cyan-400" />
                <span className="text-xs text-cyan-400 font-mono">{photo.location}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{photo.title}</h3>
              <p className="text-sm text-white/60 line-clamp-2">{photo.description}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-cyan-400 font-mono">
                <span>{photo.date}</span>
                <span>.sai chetan</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Placeholders */}
        {[1, 2, 3].map((n) => (
          <motion.div
            key={`ph-${n}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + n * 0.1 }}
            className="aspect-[4/5] rounded-2xl border-2 border-dashed border-white/8 flex flex-col items-center justify-center gap-3 text-white/20 hover:border-cyan-500/30 hover:text-cyan-500/40 transition-colors"
          >
            <Camera size={40} className="opacity-40" />
            <p className="text-sm font-medium">Coming Soon</p>
            <p className="text-xs opacity-60">📷 developing...</p>
          </motion.div>
        ))}
      </div>

      {/* Film strip */}
      <div className="flex gap-1.5 overflow-hidden mt-6">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 w-8 h-12 rounded-sm border border-white/10 bg-white/5"
            style={{ opacity: 0.08 + (i % 5) * 0.12 }}
          />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={PHOTOS[selected].src}
                alt={PHOTOS[selected].title}
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <h3 className="text-xl font-bold text-white">{PHOTOS[selected].title}</h3>
                <p className="text-sm text-white/60 mt-1">{PHOTOS[selected].description}</p>
                <p className="text-xs text-cyan-400 font-mono mt-2">{PHOTOS[selected].date} · .sai chetan</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
