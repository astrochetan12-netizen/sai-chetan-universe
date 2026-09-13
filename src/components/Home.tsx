import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Home as HomeIcon, MessageSquare, MoreHorizontal, Plus, Moon, Music2, VolumeX, Volume2 } from 'lucide-react';

// ── 2 wind leaves, slow diagonal drift, no glow ─────────────
const LEAF_CONFIG = [
  { id: 0, startDelay: 3,  driftDuration: 30 },
  { id: 1, startDelay: 16, driftDuration: 38 },
];
const WindLeaf = ({ startDelay, driftDuration }: { startDelay: number; driftDuration: number }) => (
  <motion.div
    className="fixed top-0 left-0 z-50 pointer-events-none w-9 h-9"
    style={{ backgroundImage: "url('/assets/stickers/leaf.jpg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
    animate={{ x: ['0vw', '100vw'], y: ['0vh', '100vh'], rotate: [0, -40, 20, -25, 0], opacity: [0, 0.5, 0.5, 0.5, 0] }}
    transition={{ duration: driftDuration, delay: startDelay, repeat: Infinity, ease: 'easeInOut', times: [0, 0.08, 0.5, 0.92, 1] }}
  />
);

// ── SVG Vine Arch that hangs from the top ───────────────────
function VineArch() {
  return (
    <div className="absolute top-0 left-0 w-full pointer-events-none z-30 overflow-hidden" style={{ height: '280px' }}>
      {/* Left vine cluster */}
      <motion.div
        animate={{ rotate: [-1.5, 1.5, -1.5], y: [0, 3, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: 'top left' }}
        className="absolute top-0 -left-4 w-[55%] h-[280px] bg-[url('/assets/stickers/vines.jpg')] bg-contain bg-top bg-no-repeat mix-blend-multiply opacity-90"
      />
      {/* Right vine cluster mirrored */}
      <motion.div
        animate={{ rotate: [1.5, -1.5, 1.5], y: [0, 4, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: 'top right' }}
        className="absolute top-0 -right-4 w-[55%] h-[280px] bg-[url('/assets/stickers/vines.jpg')] bg-contain bg-top bg-no-repeat mix-blend-multiply opacity-90 scale-x-[-1]"
      />
      {/* Top center join — flowers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-2 text-2xl z-10 mt-1">
        {['🌸','🌺','🌼','🌸','🌺'].map((f, i) => (
          <motion.span key={i} animate={{ y: [0, -4, 0], rotate: [-5, 5, -5] }} transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}>
            {f}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

// ── Krishna on Vine Swing (top right, outside card) ─────────
function KrishnaVineSwing({ onAudioToggle, audioPlaying }: { onAudioToggle: () => void; audioPlaying: boolean }) {
  return (
    <div className="absolute -top-2 right-4 z-40 pointer-events-none select-none" style={{ width: '170px' }}>
      {/* Vine ropes */}
      <svg width="170" height="80" viewBox="0 0 170 80" className="absolute top-0 left-0 z-30" style={{ overflow: 'visible' }}>
        {/* Left rope */}
        <motion.path
          d="M 50,0 C 50,20 45,50 48,75"
          stroke="#4a7c59" strokeWidth="3" fill="none" strokeLinecap="round"
          animate={{ d: ["M 50,0 C 50,20 45,50 48,75", "M 50,0 C 55,20 58,50 55,75", "M 50,0 C 50,20 45,50 48,75"] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Right rope */}
        <motion.path
          d="M 120,0 C 120,20 125,50 122,75"
          stroke="#4a7c59" strokeWidth="3" fill="none" strokeLinecap="round"
          animate={{ d: ["M 120,0 C 120,20 125,50 122,75", "M 120,0 C 115,20 112,50 115,75", "M 120,0 C 120,20 125,50 122,75"] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Vine leaves on ropes */}
        {[20, 40, 60].map((y, i) => (
          <g key={i}>
            <ellipse cx={47 + (i % 2 === 0 ? -6 : 6)} cy={y} rx="5" ry="3" fill="#3a6b47" opacity="0.8" transform={`rotate(${i * 30 - 15} ${47 + (i % 2 === 0 ? -6 : 6)} ${y})`} />
            <ellipse cx={123 + (i % 2 === 0 ? 6 : -6)} cy={y} rx="5" ry="3" fill="#3a6b47" opacity="0.8" transform={`rotate(${-(i * 30 - 15)} ${123 + (i % 2 === 0 ? 6 : -6)} ${y})`} />
          </g>
        ))}
        {/* Swing plank */}
        <motion.rect
          x="42" y="72" width="86" height="8" rx="4" fill="#6b4c2a"
          animate={{ x: [42, 38, 42], y: [72, 73, 72] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {/* Krishna image — swings from the plank pivot */}
      <motion.div
        style={{ originX: '50%', originY: '0%', marginTop: '60px' }}
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-full"
      >
        <img
          src="/assets/stickers/krishna-vine-swing.jpg"
          alt="Little Krishna on swing"
          className="w-full object-contain mix-blend-multiply"
          style={{ imageRendering: 'crisp-edges' }}
        />
        {/* Golden glow behind Krishna */}
        <div className="absolute inset-0 rounded-full bg-amber-300/20 blur-2xl -z-10" />
      </motion.div>

      {/* Flute music toggle — pointer-events on this div only */}
      <motion.button
        onClick={onAudioToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ pointerEvents: 'all' }}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm border border-amber-400/30 text-amber-300 text-[10px] font-bold rounded-full px-3 py-1.5 cursor-pointer hover:bg-black/90 transition-all"
        title={audioPlaying ? 'Mute flute music' : 'Play Krishna flute music'}
      >
        {audioPlaying ? <Volume2 size={11} /> : <VolumeX size={11} />}
        <span>Flute</span>
        {audioPlaying && (
          <motion.div
            className="flex items-end gap-px h-3"
            animate={{}}
          >
            {[1, 2, 3].map((b) => (
              <motion.div
                key={b}
                className="w-0.5 bg-amber-400 rounded-sm"
                animate={{ height: ['4px', '10px', '4px'] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: b * 0.15 }}
              />
            ))}
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}

export default function Home() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Krishna flute music — public domain track from Internet Archive
    audioRef.current = new Audio('https://ia800407.us.archive.org/21/items/KrishnaFlute/KrishnaFlute.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.35;
    return () => { audioRef.current?.pause(); };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (audioPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setAudioPlaying(!audioPlaying);
  };

  return (
    <div className="relative w-full">
      {/* Wind leaves */}
      {LEAF_CONFIG.map((l) => <WindLeaf key={l.id} startDelay={l.startDelay} driftDuration={l.driftDuration} />)}

      {/* Vine arch across the top */}
      <VineArch />

      {/* Krishna on vine swing — top right */}
      <KrishnaVineSwing onAudioToggle={toggleAudio} audioPlaying={audioPlaying} />

      {/* ── Profile Card ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-full bg-[#111214] rounded-[24px] overflow-hidden shadow-2xl border border-[#1e1f22] mt-16"
      >
        {/* Profile Banner */}
        <div className="relative w-full h-[220px] overflow-hidden bg-[#1a1b1e]">
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[url('/assets/stickers/banner.jpg')] bg-cover bg-center"
          />
          {/* Swaying vines in banner */}
          <motion.div
            animate={{ rotate: [-2, 2, -2], scale: [1, 1.02, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top center' }}
            className="absolute -top-2 -left-4 w-[110%] h-[110%] bg-[url('/assets/stickers/vines.jpg')] bg-contain mix-blend-multiply opacity-80 pointer-events-none"
          />
          {/* String lights effect */}
          <div className="absolute top-3 left-0 w-full z-10 flex justify-around">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5 + (i % 3) * 0.5, repeat: Infinity, delay: i * 0.2 }}
                className="w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_6px_3px_rgba(251,191,36,0.5)]"
              />
            ))}
          </div>
        </div>

        <div className="relative px-6 pb-6">
          {/* Avatar Row */}
          <div className="flex justify-between items-start">
            <div className="relative -mt-[68px]">
              <div className="relative w-[136px] h-[136px] rounded-full border-[6px] border-[#111214] bg-[#2b2d31] overflow-hidden z-20 shadow-xl">
                <img src="/assets/pfp/headshot.png" alt="sai chetan" className="w-full h-full object-cover" />
              </div>
              {/* Moon status */}
              <div className="absolute bottom-2 right-2 z-30 bg-[#111214] rounded-full p-1 border-[4px] border-[#111214]">
                <div className="w-6 h-6 bg-[#f0b132] rounded-full flex items-center justify-center text-[#111214]">
                  <Moon size={15} className="fill-current" />
                </div>
              </div>
              {/* "loser" bubble */}
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-2 -right-16 z-30 bg-[#2b2d31] border border-white/8 text-white/70 text-xs px-3 py-1.5 rounded-2xl rounded-bl-none shadow-lg whitespace-nowrap"
              >
                loser 🖤
              </motion.div>
            </div>
          </div>

          {/* Name + handle */}
          <div className="mt-4">
            <h1 className="text-[28px] font-black text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] font-mono tracking-tight">
              sai chetan
            </h1>
            <div className="flex items-center flex-wrap gap-2 mt-1">
              <span className="text-white/90 text-sm font-medium">wintersummon</span>
              <span className="text-white/25">•</span>
              <span className="text-white/40 text-sm">he/him</span>
              <div className="ml-1 flex items-center gap-1 bg-[#1e1f22] px-2 py-0.5 rounded text-xs text-white/80 border border-white/5">
                🔥 <span className="font-semibold">CSM</span>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex items-center gap-1.5 mt-4">
            {['🦄','💎','🌿','⚡','🎸'].map((b, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-7 h-7 bg-white/5 border border-white/10 rounded flex items-center justify-center text-sm hover:bg-white/10 transition-colors cursor-pointer"
              >
                {b}
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-5">
            <a
              href="https://discord.com/users/wintersummon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2.5 rounded-md flex items-center justify-center gap-2 transition-colors text-[15px]"
            >
              <MessageSquare size={17} /> Message
            </a>
            <button className="w-10 h-10 bg-[#2b2d31] hover:bg-[#383a40] rounded-md flex items-center justify-center text-white/60 hover:text-white transition-colors">
              <HomeIcon size={17} />
            </button>
            <button className="w-10 h-10 bg-[#2b2d31] hover:bg-[#383a40] rounded-md flex items-center justify-center text-white/60 hover:text-white transition-colors">
              <MoreHorizontal size={17} />
            </button>
          </div>

          <div className="w-full h-px bg-white/5 my-5" />

          {/* Bio */}
          <div className="relative pr-28">
            <h3 className="text-[11px] uppercase font-bold text-white/35 mb-2 tracking-[0.15em]">About Me</h3>
            <p className="text-[14px] text-white/85 leading-relaxed">
              Since you're here what do you need from me?<br />
              I know it's not me tho 😐
            </p>
            <p className="text-[13px] text-white/55 leading-relaxed mt-3">
              18 yr chud just larping my way in to fit in<br />
              <span className="text-white/40">aloneholic · kinesthetic learner</span>
            </p>
            <p className="text-[13px] text-white/55 leading-relaxed mt-1">
              interest: anime, manhwas, music and<br />
              <span className="text-white/35 italic">i try to learn stuff by experimenting</span>
            </p>

            {/* Meme Polaroid */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="absolute right-0 top-0 cursor-pointer"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-white/35 rounded-sm -rotate-1 z-10" />
              <div
                className="w-24 h-24 rounded-sm border-4 border-white/90 bg-[url('/assets/pfp/meme-panel.png')] bg-cover bg-center shadow-xl"
                style={{ transform: 'rotate(12deg)' }}
              />
            </motion.div>
          </div>

          {/* Footer info */}
          <div className="mt-5 space-y-3">
            <div>
              <h3 className="text-[11px] uppercase font-bold text-white/35 mb-0.5 tracking-[0.15em]">Member Since</h3>
              <p className="text-[14px] text-white/75">May 11, 2022</p>
            </div>
            <div>
              <h3 className="text-[11px] uppercase font-bold text-white/35 mb-1 tracking-[0.15em]">Connections</h3>
              <button className="text-[13px] text-white/40 hover:text-white flex items-center gap-1 transition-colors">
                <Plus size={13} /> Add Connection
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
