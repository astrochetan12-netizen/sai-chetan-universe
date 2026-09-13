import { motion } from 'framer-motion';
import { useState } from 'react';
import { Home as HomeIcon, MessageSquare, MoreHorizontal, Plus, Moon } from 'lucide-react';

// ── 1. Only 2 leaves, no glow, slow diagonal wind drift ──────────────────────
const LEAF_CONFIG = [
  { id: 0, startDelay: 2,  driftDuration: 28 },
  { id: 1, startDelay: 14, driftDuration: 34 },
];

const WindLeaf = ({ startDelay, driftDuration }: { startDelay: number; driftDuration: number }) => (
  <motion.div
    className="fixed top-0 left-0 z-50 pointer-events-none w-9 h-9 opacity-0"
    style={{
      backgroundImage: "url('/assets/stickers/leaf.jpg')",
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      // NO mix-blend-screen so no glow
    }}
    animate={{
      // top-left → bottom-right diagonal like a breeze
      x: ['0vw', '100vw'],
      y: ['0vh', '100vh'],
      rotate: [0, -45, 20, -30, 0],
      opacity: [0, 0.55, 0.55, 0.55, 0],
    }}
    transition={{
      duration: driftDuration,
      delay: startDelay,
      repeat: Infinity,
      ease: 'easeInOut',
      times: [0, 0.1, 0.5, 0.9, 1],
    }}
  />
);

export default function Home() {
  return (
    <div className="relative w-full">

      {/* ── 2 wind-blown leaves (no glow) ── */}
      {LEAF_CONFIG.map((l) => (
        <WindLeaf key={l.id} startDelay={l.startDelay} driftDuration={l.driftDuration} />
      ))}

      {/* ── 3. Krishna on top-right corner of the OUTER wrapper (outside the card) ── */}
      {/* The pivot is the rope at the very top so it swings like a real swing */}
      <div className="absolute -top-24 right-6 z-50 pointer-events-none select-none">
        {/* Rope (visual only) */}
        <svg width="4" height="64" className="mx-auto block opacity-40">
          <line x1="2" y1="0" x2="2" y2="64" stroke="#c8a96e" strokeWidth="2" strokeDasharray="4 3" />
        </svg>
        {/* Krishna sticker swings around the TOP of this div (the rope anchor) */}
        <motion.div
          style={{ originX: '50%', originY: '0%' }}
          animate={{ rotate: [-12, 12, -12] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          className="w-28 h-28 bg-[url('/assets/stickers/krishna-swing.jpg')] bg-contain bg-no-repeat bg-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
        />
      </div>

      {/* ── Profile Card ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-full bg-[#111214] rounded-[24px] overflow-hidden shadow-2xl border border-[#1e1f22] mt-10"
      >
        {/* Bottom-left hanging vines (swaying) */}
        <motion.div
          animate={{ rotate: [-1, 1, -1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originY: 1, originX: 0 }}
          className="absolute -bottom-4 -left-4 w-[60%] h-[40%] bg-[url('/assets/stickers/vines.jpg')] bg-contain bg-bottom bg-no-repeat mix-blend-screen opacity-50 pointer-events-none z-10 rotate-180"
        />

        {/* Profile Banner */}
        <div className="relative w-full h-[220px] overflow-hidden bg-[#1a1b1e]">
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[url('/assets/stickers/banner.jpg')] bg-cover bg-center"
          />
          {/* Swaying vines in banner */}
          <motion.div
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ originY: 0 }}
            className="absolute -top-4 -left-4 w-[110%] h-[110%] bg-[url('/assets/stickers/vines.jpg')] bg-contain mix-blend-screen opacity-70 pointer-events-none"
          />
        </div>

        <div className="relative px-6 pb-6">
          {/* Avatar & Status Row */}
          <div className="flex justify-between items-start">
            <div className="relative -mt-[68px]">
              <div className="relative w-[136px] h-[136px] rounded-full border-[6px] border-[#111214] bg-[#2b2d31] overflow-hidden z-20">
                <img src="/assets/pfp/headshot.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
              {/* Status dot */}
              <div className="absolute bottom-2 right-2 z-30 bg-[#111214] rounded-full p-1 border-[4px] border-[#111214]">
                <div className="w-6 h-6 bg-[#f0b132] rounded-full flex items-center justify-center text-[#111214]">
                  <Moon size={16} className="fill-current" />
                </div>
              </div>
              {/* "loser" floating label */}
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 -right-14 z-30 bg-[#2b2d31] border border-white/5 text-white/70 text-xs px-3 py-1.5 rounded-2xl rounded-bl-none shadow-lg whitespace-nowrap"
              >
                loser
              </motion.div>
            </div>
          </div>

          {/* Name */}
          <div className="mt-4">
            <h1 className="text-[28px] font-black text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] font-mono tracking-tight">
              sai chetan
            </h1>
            <div className="flex items-center flex-wrap gap-2 mt-1">
              <span className="text-white/90 text-sm font-medium">wintersummon</span>
              <span className="text-white/30">•</span>
              <span className="text-white/50 text-sm cursor-pointer hover:underline">Add pronouns</span>
              <div className="ml-1 flex items-center gap-1 bg-[#1e1f22] px-2 py-0.5 rounded text-xs text-white/80 border border-white/5 cursor-pointer hover:bg-[#2b2d31]">
                🔥 <span className="font-semibold">CSM</span>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex items-center gap-1.5 mt-4">
            {['🦄','💎','🌿','⚡'].map((b, i) => (
              <div key={i} className="w-7 h-7 bg-white/5 border border-white/10 rounded flex items-center justify-center text-sm hover:bg-white/10 transition-colors cursor-pointer">
                {b}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-5">
            <button className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded flex items-center justify-center gap-2 transition-colors text-[15px]">
              <MessageSquare size={17} /> Message
            </button>
            <button className="w-10 h-10 bg-[#2b2d31] hover:bg-[#383a40] rounded flex items-center justify-center text-white/70 hover:text-white transition-colors">
              <HomeIcon size={17} />
            </button>
            <button className="w-10 h-10 bg-[#2b2d31] hover:bg-[#383a40] rounded flex items-center justify-center text-white/70 hover:text-white transition-colors">
              <MoreHorizontal size={17} />
            </button>
          </div>

          <div className="w-full h-px bg-white/5 my-5" />

          {/* Bio */}
          <div className="relative pr-28">
            <h3 className="text-[11px] uppercase font-bold text-white/40 mb-2 tracking-wider">Bio</h3>
            <p className="text-[14px] text-white/85 leading-relaxed">
              Since you're here what do you need from me?<br />
              I know it's not me tho
            </p>
            <p className="text-[13px] text-white/60 leading-relaxed mt-3">
              i'm an 18 yr chud just larping my way in to fit in aloneholic
            </p>
            <p className="text-[13px] text-white/60 leading-relaxed">
              interest? anime, manhwas, music and<br />i try to learn stuff by experimenting
            </p>

            {/* Meme Polaroid — taped, tilted */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 14 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="absolute right-0 top-0 w-24 cursor-pointer"
            >
              {/* Tape */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-9 h-2.5 bg-white/35 backdrop-blur-sm border border-white/20 -rotate-2 z-10" />
              <div
                className="w-24 h-24 rounded-sm border-4 border-white/90 bg-[url('/assets/pfp/meme-panel.png')] bg-cover bg-center shadow-xl"
                style={{ transform: 'rotate(12deg)' }}
              />
            </motion.div>
          </div>

          {/* Footer info */}
          <div className="mt-5 space-y-3">
            <div>
              <h3 className="text-[11px] uppercase font-bold text-white/40 mb-0.5 tracking-wider">Member Since</h3>
              <p className="text-[14px] text-white/80">May 11, 2022</p>
            </div>
            <div>
              <h3 className="text-[11px] uppercase font-bold text-white/40 mb-1 tracking-wider">Connections</h3>
              <button className="text-[13px] text-white/50 hover:text-white flex items-center gap-1 transition-colors">
                <Plus size={13} /> Add Connection
              </button>
            </div>
            <div>
              <h3 className="text-[11px] uppercase font-bold text-white/40 mb-0.5 tracking-wider">Note (only visible to you)</h3>
              <p className="text-[12px] text-white/30 italic">Click to add a note</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
