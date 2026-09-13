import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Camera } from 'lucide-react';

const PHOTOS = [
  {
    id: 1,
    src: '/assets/photos/sunset.png',
    title: 'Golden Hour Reflections',
    description: 'Sunrays through the clouds over a silhouetted lake.',
    date: '2025',
  },
  // Structure allows for easy addition of more photos later
];

export default function Photography() {
  return (
    <Layout title="Photography" themeColor="from-cyan-500 to-blue-700">
      
      <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-6">
        <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
          <Camera size={32} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">My Shots</h2>
          <p className="text-white/50 text-sm">Capturing the aesthetic and the quiet moments.</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PHOTOS.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden bg-[#111214] border border-white/5 shadow-xl cursor-pointer"
          >
            {/* Image Container */}
            <div className="aspect-[4/5] overflow-hidden bg-black/50">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={photo.src} 
                alt={photo.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-lg font-bold text-white mb-1">{photo.title}</h3>
              <p className="text-sm text-white/70 line-clamp-2">{photo.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-cyan-400 font-mono">
                <span>{photo.date}</span>
                <span>.sai chetan</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Placeholder for future photos */}
        <div className="aspect-[4/5] rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-white/30 hover:border-cyan-500/30 hover:text-cyan-500/50 transition-colors">
          <Camera size={48} className="mb-4 opacity-50" />
          <p className="font-medium text-sm">More coming soon</p>
        </div>
      </div>

    </Layout>
  );
}
