import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Crown, AlertTriangle, Film, Sparkles } from 'lucide-react';
import data from '../../site-data/shows-movies-music.json';

// ── Continuous Wiggling Spider-Verse Corner Web ─────────────────
function CornerSpiderWeb({ position = 'top-left' }: { position?: 'top-left' | 'top-right' }) {
  const isRight = position === 'top-right';

  return (
    <motion.div
      className={`fixed top-0 ${isRight ? 'right-0 scale-x-[-1]' : 'left-0'} w-56 h-56 md:w-72 md:h-72 pointer-events-none z-30 opacity-80`}
      animate={{
        rotate: isRight ? [0, 2, -2, 1, 0] : [0, -2, 2, -1, 0],
        skewX: [0, 1.5, -1.5, 0],
        scale: [1, 1.02, 0.99, 1.01, 1],
      }}
      transition={{
        duration: 5.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ transformOrigin: isRight ? 'top right' : 'top left' }}
    >
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
      >
        {/* Radial spokes from corner */}
        {[0, 15, 30, 45, 60, 75, 90].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x2 = Math.cos(rad) * 240;
          const y2 = Math.sin(rad) * 240;
          return (
            <line
              key={deg}
              x1="0"
              y1="0"
              x2={x2}
              y2={y2}
              stroke="rgba(255, 255, 255, 0.45)"
              strokeWidth="1.2"
            />
          );
        })}

        {/* Concentric curved web strands with natural sag */}
        {[35, 70, 110, 155, 205].map((r, i) => (
          <path
            key={i}
            d={`M0,${r} Q${r * 0.72},${r * 0.72} ${r},0`}
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1"
            fill="none"
          />
        ))}

        {/* Secondary inner rings for intricate texture */}
        {[20, 50, 90, 130, 180].map((r, i) => (
          <path
            key={`inner-${i}`}
            d={`M0,${r} Q${r * 0.75},${r * 0.75} ${r},0`}
            stroke="rgba(255, 255, 255, 0.22)"
            strokeWidth="0.6"
            fill="none"
          />
        ))}

        {/* Dew drops caught in web */}
        {[
          [35, 12], [70, 24], [110, 45], [155, 60], [80, 80], [45, 110]
        ].map(([cx, cy], idx) => (
          <circle key={idx} cx={cx} cy={cy} r="2" fill="rgba(200, 230, 255, 0.85)" />
        ))}
      </svg>
    </motion.div>
  );
}

// ── Tsundere Anime Sticker & Warning Banner ───────────────────
function TsundereAlert() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="relative w-full rounded-2xl overflow-hidden bg-[#18080a] border-2 border-red-500/50 p-5 md:p-6 mb-10 shadow-[0_0_35px_rgba(239,68,68,0.2)]"
    >
      {/* Comic alert stripe */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600" />

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        {/* Tsundere Sticker Cutout (Transparent PNG, NO white box) */}
        <div className="relative shrink-0 select-none">
          <motion.div
            animate={{
              rotate: [-4, 4, -4],
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-28 h-28 sm:w-32 sm:h-32 relative"
          >
            <img
              src="/assets/stickers/tsundere.png"
              alt="Tsundere Sticker"
              className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)]"
            />

            {/* Animated Tsundere Anger Marks / Blush */}
            <motion.span
              className="absolute -top-1 -right-1 text-xl select-none"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              💢
            </motion.span>
          </motion.div>
        </div>

        {/* Warning text & Affection Check */}
        <div className="flex-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 mb-2 bg-red-500/20 border border-red-500/40 px-3 py-0.5 rounded-full text-xs font-bold text-red-400 font-mono">
            <AlertTriangle size={13} />
            <span>ACCESS RESTRICTED · AFFECTI0N TOO LOW</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Hmph! Not sufficient affection for you to know! 😤
          </h3>

          <p className="text-sm text-white/75 mt-1.5 leading-relaxed italic">
            "I-it's not like I'm hiding my movie taste because I care what you think...
            Raise your affection level first, b-baka! 💔"
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 bg-black/50 border border-white/10 px-3 py-1.5 rounded-lg text-red-300">
              <span>Required:</span>
              <strong className="text-white">Affection Lv. 99</strong>
            </div>
            <div className="flex items-center gap-2 bg-black/50 border border-white/10 px-3 py-1.5 rounded-lg text-white/50">
              <span>Your Level:</span>
              <strong className="text-red-400">Lv. 0 (Stranger)</strong>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Movies() {
  const { movies } = data;
  const jersey = movies.featured_favorite;

  return (
    <Layout
      title="Movie Lounge"
      subtitle="Jersey & Spider-Verse Vibe"
      themeColor="from-yellow-600 to-amber-950"
      accentColor="#f59e0b"
    >
      {/* ── Continuous Wiggling Spider-Verse Webs in Corners ── */}
      <CornerSpiderWeb position="top-left" />
      <CornerSpiderWeb position="top-right" />

      {/* ── Spider-Verse Stylized Hero Card for Jersey ── */}
      <div className="relative mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-2xl overflow-hidden bg-[#0c0a07] border-4 border-yellow-500/30 p-6 md:p-10 shadow-2xl"
        >
          {/* Halftone Comic Texture */}
          <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />

          {/* Floating Crown above Title */}
          <div className="flex justify-center mb-2">
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-4, 4, -4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="p-3 rounded-full bg-yellow-500/20 border border-yellow-400/50 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.5)]"
            >
              <Crown size={32} className="fill-current" />
            </motion.div>
          </div>

          {/* Spider-Verse Glitch Title */}
          <div className="text-center my-4">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-yellow-400/80 mb-1">
              THE GREATEST SPORTS DRAMA OF ALL TIME
            </p>

            <div className="relative inline-block select-none">
              {/* Cyan shadow */}
              <h1 className="absolute -left-1 -top-0.5 text-6xl sm:text-7xl md:text-8xl font-black font-mono tracking-tighter text-cyan-400 opacity-60 mix-blend-screen">
                {jersey.title}
              </h1>
              {/* Red shadow */}
              <h1 className="absolute left-1 top-0.5 text-6xl sm:text-7xl md:text-8xl font-black font-mono tracking-tighter text-red-500 opacity-60 mix-blend-screen">
                {jersey.title}
              </h1>
              {/* Main crisp title */}
              <h1 className="relative text-6xl sm:text-7xl md:text-8xl font-black font-mono tracking-tighter text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                {jersey.title}
              </h1>
            </div>

            <p className="text-base sm:text-lg font-bold text-yellow-400 mt-2 font-mono">
              {jersey.year} · Starring {jersey.actor}
            </p>

            <p className="text-sm text-white/70 italic mt-1 max-w-md mx-auto">
              "{jersey.quote}"
            </p>
          </div>

          {/* Jersey Poster & Details Card */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8 max-w-2xl mx-auto">
            <div className="w-44 sm:w-52 aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-500/40 shrink-0">
              <img
                src={jersey.image}
                alt="Jersey Telugu Movie Poster"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <span className="text-xs font-mono text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-2.5 py-1 rounded-full">
                Telugu Cinema Peak
              </span>
              <h3 className="text-xl font-bold text-white mt-3">
                Arjun’s Unfinished Business
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed mt-2">
                A 36-year-old former cricketer returns to the pitch despite severe medical risk to buy his son an Indian cricket jersey. Pure emotional devastation and triumph.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Tsundere Affection Level Warning Banner ── */}
      <TsundereAlert />
    </Layout>
  );
}
