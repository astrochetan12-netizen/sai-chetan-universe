import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Crown, AlertTriangle } from 'lucide-react';
import data from '../../site-data/shows-movies-music.json';

// ── Animated SVG Spider Web ─────────────────────────────────
function SpiderWeb({ flip = false }: { flip?: boolean }) {
  return (
    <motion.div
      animate={{
        rotate: flip ? [0, 1.5, -1, 0.5, 0] : [0, -1.5, 1, -0.5, 0],
        scale: [1, 1.015, 0.99, 1.01, 1],
      }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: flip ? 'top right' : 'top left' }}
      className={`absolute top-0 ${flip ? 'right-0 scale-x-[-1]' : 'left-0'} w-48 h-48 z-20 pointer-events-none opacity-70`}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Main radial threads from corner */}
        {[0, 15, 30, 45, 60, 75, 90].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 200 * Math.cos(rad);
          const y = 200 * Math.sin(rad);
          return (
            <line key={i} x1="0" y1="0" x2={x} y2={y}
              stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
          );
        })}
        {/* Concentric arc rings */}
        {[30, 60, 90, 120, 155].map((r, i) => (
          <path
            key={i}
            d={`M ${r} 0 Q ${r * 0.707} ${r * 0.707} 0 ${r}`}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="0.7"
            fill="none"
          />
        ))}
        {/* Fine inner rings for density */}
        {[20, 45, 75, 108, 140].map((r, i) => (
          <path
            key={`inner-${i}`}
            d={`M ${r * 0.97} ${r * 0.25} Q ${r * 0.72} ${r * 0.72} ${r * 0.25} ${r * 0.97}`}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.5"
            fill="none"
          />
        ))}
        {/* Dew drops */}
        {[[45, 8], [90, 14], [60, 6], [120, 10]].map(([cx, cy], i) => (
          <circle key={`dew-${i}`} cx={cx} cy={cy} r="1.5"
            fill="rgba(200,230,255,0.6)" />
        ))}
      </svg>
    </motion.div>
  );
}

// ── Tsundere Warning Banner ─────────────────────────────────
function TsundereWarning() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 180 }}
      className="relative w-full bg-[#1a0000] border-2 border-red-500/60 rounded-2xl overflow-hidden mb-10"
      style={{ boxShadow: '0 0 30px rgba(239,68,68,0.2)' }}
    >
      {/* Comic panel stripe top */}
      <div className="w-full h-1.5 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500" />

      <div className="flex items-center gap-4 p-5">
        {/* Tsundere chibi */}
        <motion.div
          animate={{ rotate: [-3, 3, -3], y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="shrink-0 w-20 h-20 bg-[url('/assets/stickers/tsundere.jpg')] bg-contain bg-no-repeat bg-center"
        />

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle size={16} className="text-red-400 shrink-0" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-red-400">ACCESS DENIED</span>
            <span className="text-xl">😡💢</span>
          </div>
          <p className="font-black text-lg text-white leading-tight mb-1">
            ⚠️ Hmph! Not enough affection level!
          </p>
          <p className="text-sm text-white/60 italic leading-relaxed">
            "I-it's not like I'll just tell you my movie taste to anyone who wanders in here...
            Raise your affection first, b-baka! 😤"
          </p>
          <p className="text-xs text-white/30 mt-2 font-mono">
            REQUIRED: Affection Lv. 99 | CURRENT: too low 💔
          </p>
        </div>

        {/* Angry emojis cluster */}
        <div className="shrink-0 text-2xl flex flex-col items-center gap-1 opacity-80">
          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>😤</motion.span>
          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}>💢</motion.span>
          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}>🙅</motion.span>
        </div>
      </div>

      <div className="w-full h-1.5 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500" />
    </motion.div>
  );
}

export default function Movies() {
  const { movies } = data;

  return (
    <Layout
      title="Movies"
      subtitle="Jersey > everything"
      themeColor="from-yellow-500 to-amber-900"
      accentColor="#f59e0b"
    >
      {/* Corner webs */}
      <div className="relative">
        {/* These are positioned relative to the whole page via fixed */}
        <div className="fixed top-0 left-0 pointer-events-none z-30"><SpiderWeb /></div>
        <div className="fixed top-0 right-0 pointer-events-none z-30"><SpiderWeb flip /></div>

        {/* ── Spider-Verse Hero ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full aspect-video md:aspect-[21/9] bg-[#0a0a0a] border-4 border-black rounded-xl overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group mb-8"
        >
          {/* Halftone dot pattern */}
          <div className="absolute inset-0 halftone opacity-15 z-10 pointer-events-none mix-blend-overlay" />

          {/* Comic panel yellow burst background */}
          <div className="absolute inset-0 z-0"
            style={{
              background: 'radial-gradient(ellipse at 60% 50%, #f59e0b44, #000 70%)',
            }}
          />

          {/* Comic scan lines */}
          <div className="absolute inset-0 z-0 opacity-5"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)',
            }}
          />

          {/* Crown floating above */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-30 text-yellow-400 drop-shadow-[3px_3px_0px_#000]"
          >
            <Crown size={64} className="fill-yellow-400 stroke-black stroke-2" />
          </motion.div>

          {/* Glitch title */}
          <motion.div
            animate={{ x: [-2, 2, -1, 3, 0] }}
            transition={{ repeat: Infinity, duration: 0.15, repeatType: 'mirror', repeatDelay: 4 }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <div className="relative select-none">
              {/* Shadow layers for glitch */}
              <h2 className="absolute text-7xl md:text-9xl font-retro font-black uppercase tracking-tighter text-cyan-400 opacity-60 mix-blend-screen" style={{ top: '3px', left: '-3px' }}>
                {movies.featured_favorite.title}
              </h2>
              <h2 className="absolute text-7xl md:text-9xl font-retro font-black uppercase tracking-tighter text-red-500 opacity-60 mix-blend-screen" style={{ top: '-3px', left: '3px' }}>
                {movies.featured_favorite.title}
              </h2>
              <h2 className="relative text-7xl md:text-9xl font-retro font-black uppercase tracking-tighter text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)]">
                {movies.featured_favorite.title}
              </h2>
            </div>
          </motion.div>

          {/* Comic stamp bottom-left */}
          <div className="absolute bottom-4 left-4 z-30 bg-black text-yellow-400 border-2 border-yellow-400 px-3 py-1 font-retro text-xs uppercase transform -rotate-1 shadow-[2px_2px_0px_0px_rgba(245,158,11,1)]">
            {movies.featured_favorite.note}
          </div>

          {/* "PEAK CINEMA" stamp */}
          <motion.div
            animate={{ rotate: [12, 14, 12] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-4 right-4 z-30 border-4 border-red-500 rounded-full w-20 h-20 flex items-center justify-center text-center"
          >
            <span className="text-red-500 font-retro font-black text-[9px] uppercase leading-tight">PEAK<br/>CINEMA</span>
          </motion.div>
        </motion.div>

        {/* ── Tsundere Warning ─── */}
        <TsundereWarning />

        {/* ── Secondary Signals ─── */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/25 mb-4 font-mono">Other detected signals (confidence: low)</h4>
          <div className="flex gap-3 flex-wrap">
            {movies.other_streaming_signals.map((title) => (
              <div key={title} className="px-4 py-2 bg-white/[0.04] border border-white/8 rounded-lg text-white/40 font-mono text-sm hover:text-white/60 transition-colors">
                {title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
