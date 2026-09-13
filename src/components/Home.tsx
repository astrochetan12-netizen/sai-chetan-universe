import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Leaf particle component
const Leaf = ({ delay, startX, duration }: { delay: number, startX: number, duration: number }) => {
  return (
    <motion.div
      initial={{ y: -50, x: startX, opacity: 0, rotate: 0 }}
      animate={{ 
        y: '120vh', 
        x: startX + (Math.random() * 200 - 100),
        opacity: [0, 1, 1, 0],
        rotate: 360 
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        delay: delay, 
        ease: 'linear' 
      }}
      className="absolute z-0 pointer-events-none w-6 h-6 bg-[url('/assets/stickers/leaf.png')] bg-contain bg-no-repeat"
    />
  );
};

export default function Home() {
  const [leaves, setLeaves] = useState<Array<{id: number, delay: number, startX: number, duration: number}>>([]);

  useEffect(() => {
    // Generate random leaves
    const newLeaves = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 10,
      startX: Math.random() * window.innerWidth,
      duration: 10 + Math.random() * 10
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Leaves Particles */}
      {leaves.map(leaf => (
        <Leaf key={leaf.id} delay={leaf.delay} startX={leaf.startX} duration={leaf.duration} />
      ))}

      {/* Hanging Vines Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none z-10 bg-[url('/assets/stickers/vines-top.png')] bg-repeat-x opacity-80 mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-64 h-full pointer-events-none z-10 bg-[url('/assets/stickers/vines-side.png')] bg-repeat-y opacity-80 mix-blend-screen" />

      {/* Main Identity Card (Discord 'All Nighter' Style) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 max-w-xl w-full mx-4"
      >
        {/* Border glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accentIndigo via-accentMaroon to-accentIndigo rounded-2xl blur-sm opacity-50"></div>
        
        <div className="relative bg-[#111214] rounded-2xl p-8 border border-white/10 shadow-2xl overflow-visible">
          
          {/* Swinging Krishna Sticker */}
          <motion.div
            animate={{ rotate: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{ originY: 0 }} // Swing from the top
            className="absolute -top-16 -left-12 w-32 h-40 z-30"
          >
            <div className="w-full h-full bg-[url('/assets/stickers/krishna-swing.png')] bg-contain bg-no-repeat bg-center drop-shadow-xl" />
          </motion.div>

          {/* Profile Header */}
          <div className="flex items-start gap-6 mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-[#111214] overflow-hidden bg-gray-800 shadow-inner z-10 relative">
                <img src="/assets/pfp/headshot.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
              {/* Online indicator */}
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-[#111214] z-20"></div>
            </div>
            
            <div className="pt-2">
              <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                .sai chetan
              </h1>
              <div className="inline-block mt-1 px-2 py-0.5 bg-black/40 rounded text-sm text-gray-300 border border-white/5 font-mono">
                wintersummon
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-white/10 my-6" />

          {/* Bio Section */}
          <div className="relative">
            {/* Meme Sticker taped on */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="absolute -right-6 -top-12 w-28 h-28 bg-[url('/assets/pfp/meme-panel.png')] bg-contain bg-no-repeat rotate-6 shadow-lg z-30 cursor-pointer"
            />
            
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed max-w-[85%]">
              <p className="italic text-gray-400">
                "i'm an 18 yr chud just larping my way in to fit in aloneholic"
              </p>
              
              <div>
                <span className="font-bold text-white uppercase text-xs tracking-wider">Interests</span>
                <p className="mt-1">anime, manhwas, music</p>
              </div>
              
              <p className="italic text-gray-400">
                "i try to learn stuff by experimenting"
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
