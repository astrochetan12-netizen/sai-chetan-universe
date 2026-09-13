import { motion } from 'framer-motion';
import { useState } from 'react';
import { Home as HomeIcon, MessageSquare, MoreHorizontal, Plus, Moon } from 'lucide-react';

// Leaf particle component
const Leaf = ({ delay, startX, duration }: { delay: number, startX: number, duration: number }) => {
  return (
    <motion.div
      initial={{ y: -50, x: startX, opacity: 0, rotate: 0 }}
      animate={{ 
        y: '120vh', 
        x: startX + (Math.random() * 200 - 100),
        opacity: [0, 0.8, 0.8, 0],
        rotate: 360 
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        delay: delay, 
        ease: 'linear' 
      }}
      className="absolute z-40 pointer-events-none w-10 h-10 bg-[url('/assets/stickers/leaf.jpg')] bg-contain bg-no-repeat mix-blend-screen"
    />
  );
};

export default function Home() {
  const [leaves] = useState(() => 
    Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 5,
      startX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      duration: 10 + Math.random() * 10
    }))
  );

  return (
    <div className="relative w-full">
      {/* Leaves overlay */}
      {leaves.map((leaf) => (
        <Leaf key={leaf.id} delay={leaf.delay} startX={leaf.startX} duration={leaf.duration} />
      ))}

      {/* Main Identity Card (Discord 'All Nighter' Style) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full bg-[#111214] rounded-[24px] overflow-hidden shadow-2xl border border-[#1e1f22]"
      >
        {/* Bottom left hanging vines overlay */}
        <motion.div
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ originY: 1, originX: 0 }}
            className="absolute -bottom-4 -left-4 w-[60%] h-[40%] bg-[url('/assets/stickers/vines.jpg')] bg-contain bg-bottom bg-no-repeat mix-blend-screen opacity-50 pointer-events-none z-10 rotate-180"
        />
        {/* Profile Banner */}
        <div className="relative w-full h-[220px] overflow-hidden bg-[#1a1b1e]">
          {/* Base banner image */}
          <motion.div 
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[url('/assets/stickers/banner.jpg')] bg-cover bg-center"
          />
          
          {/* Animated Swaying Vines overlay */}
          <motion.div
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="absolute -top-4 -left-4 w-[110%] h-[110%] bg-[url('/assets/stickers/vines.jpg')] bg-contain mix-blend-screen opacity-70 pointer-events-none"
          />

          {/* Swinging Krishna Sticker */}
          <motion.div
            animate={{ rotate: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="absolute top-4 left-4 w-32 h-32 z-30 mix-blend-screen pointer-events-none drop-shadow-[0_0_15px_rgba(100,200,255,0.8)]"
          >
            <div className="w-full h-full bg-[url('/assets/stickers/krishna-swing.jpg')] bg-contain bg-no-repeat bg-center" />
          </motion.div>
        </div>

        <div className="relative px-6 pb-6">
          {/* Avatar & Status Row */}
          <div className="flex justify-between items-start">
            
            {/* Avatar Container */}
            <div className="relative -mt-[68px]">
              <div className="relative w-[136px] h-[136px] rounded-full border-[6px] border-[#111214] bg-[#2b2d31] overflow-hidden z-20">
                <img src="/assets/pfp/headshot.png" alt="Profile" className="w-full h-full object-cover" />
                {/* Fallback image if missing */}
                <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/8f/c9/cf/8fc9cf7349195b05a6104bc1ec9a15ab.jpg')] bg-cover -z-10" />
              </div>
              
              {/* Profile decoration (vines ring) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 z-30 pointer-events-none rounded-full border-2 border-dashed border-green-500/30 opacity-50"
              />

              {/* Status Indicator (Moon) */}
              <div className="absolute bottom-2 right-2 z-30 bg-[#111214] rounded-full p-1 border-[4px] border-[#111214]">
                <div className="w-6 h-6 bg-[#f0b132] rounded-full flex items-center justify-center text-[#111214]">
                  <Moon size={16} className="fill-current" />
                </div>
              </div>

              {/* Loser bubble */}
              <motion.div 
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 -right-12 z-30 bg-[#2b2d31] border border-white/5 text-white/70 text-xs px-3 py-1.5 rounded-2xl rounded-bl-none shadow-lg"
              >
                loser
              </motion.div>
            </div>
          </div>

          {/* Name & Title */}
          <div className="mt-4">
            <h1 className="text-[28px] font-black text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] font-mono tracking-tight">
              sai chetan
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-white/90 text-sm font-medium">wintersummon</span>
              <span className="text-white/30">•</span>
              <span className="text-white/50 text-sm hover:underline cursor-pointer">Add pronouns</span>
              <div className="ml-2 flex items-center gap-1.5 bg-[#1e1f22] px-2 py-0.5 rounded text-sm text-white/80 border border-white/5 cursor-pointer hover:bg-[#2b2d31]">
                🔥 <span className="font-semibold text-xs">CSM v</span>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex items-center gap-1.5 mt-4">
            <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.5)]"><span className="text-[10px]">🦄</span></div>
            <div className="w-6 h-6 bg-pink-500 rounded flex items-center justify-center shadow-[0_0_10px_rgba(236,72,153,0.5)]"><span className="text-[10px]">💎</span></div>
            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.5)]"><span className="text-[10px]">🌿</span></div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-5">
            <button className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded flex items-center justify-center gap-2 transition-colors">
              <MessageSquare size={18} />
              Message
            </button>
            <button className="w-10 h-10 bg-[#2b2d31] hover:bg-[#383a40] rounded flex items-center justify-center text-white/80 transition-colors">
              <HomeIcon size={18} />
            </button>
            <button className="w-10 h-10 bg-[#2b2d31] hover:bg-[#383a40] rounded flex items-center justify-center text-white/80 transition-colors">
              <MoreHorizontal size={18} />
            </button>
          </div>

          <div className="w-full h-px bg-white/5 my-5" />

          {/* Bio Section */}
          <div className="relative">
            <h3 className="text-[11px] uppercase font-bold text-white/40 mb-2">Bio</h3>
            <div className="text-[15px] text-white/90 leading-relaxed pr-24 space-y-3">
              <p>Since you're here what do you need from me ?</p>
              <p>I know it's not me tho</p>
              <p className="mt-4 opacity-80">i'm an 18 yr chud just larping my way in to fit in aloneholic</p>
              <p className="opacity-80">Interest? anime, manhwas, music and<br/>i try to learn stuff by experimenting</p>
            </div>
            
            {/* Meme Panel Sticker */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="absolute right-0 top-0 w-24 h-24 bg-[url('/assets/pfp/meme-panel.png')] bg-cover bg-center rounded bg-white shadow-xl rotate-[12deg] border-4 border-white/90 z-20 cursor-pointer"
            >
              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-3 bg-white/40 backdrop-blur-sm -rotate-3 border border-white/20" />
            </motion.div>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <h3 className="text-[11px] uppercase font-bold text-white/40 mb-1">Member Since</h3>
              <p className="text-[14px] text-white/80">May 11, 2022</p>
            </div>
            
            <div>
              <h3 className="text-[11px] uppercase font-bold text-white/40 mb-2">Connections</h3>
              <button className="text-[14px] text-white/60 hover:text-white flex items-center gap-1.5 transition-colors">
                <Plus size={14} /> Add Connection
              </button>
            </div>
            
            <div>
              <h3 className="text-[11px] uppercase font-bold text-white/40 mb-1">Note (only visible to you)</h3>
              <p className="text-[13px] text-white/30 italic">Click to add a note</p>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
