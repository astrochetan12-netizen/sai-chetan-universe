import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative w-full">
      {/* ── Discord Profile Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full bg-[#111214] rounded-[24px] overflow-hidden shadow-2xl border border-[#1e1f22]"
      >
        {/* Profile Banner: User's Denji & Reze Night Fence Manga Panel */}
        <div className="relative w-full h-[210px] overflow-hidden bg-[#0c0d10]">
          <img
            src="/assets/stickers/denji_reze_banner.png"
            alt="Denji & Reze Night Panel"
            className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-700"
          />
          {/* Subtle dark gradient overlay towards the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-transparent to-black/20" />
        </div>

        <div className="relative px-6 pb-7">
          {/* Avatar Row */}
          <div className="flex justify-between items-start">
            <div className="relative -mt-[68px]">
              {/* Denji Avatar with crisp clean border */}
              <div className="relative w-[136px] h-[136px] rounded-full border-[6px] border-[#111214] bg-[#2b2d31] overflow-hidden z-20 shadow-xl">
                <img
                  src="/assets/pfp/headshot.png"
                  alt="Denji Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Moon Status Indicator */}
              <div className="absolute bottom-2 right-2 z-30 bg-[#111214] rounded-full p-1 border-[4px] border-[#111214]">
                <div className="w-6 h-6 bg-[#f0b132] rounded-full flex items-center justify-center text-[#111214]">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.3 2a10 10 0 0 0-.19 20 10 10 0 0 0 8.7-5.1 1 1 0 0 0-1-1.45A8 8 0 1 1 8.56 3.2 1 1 0 0 0 7.8 2.2a1 1 0 0 0-.5.06 9.8 9.8 0 0 0 5 0z" />
                  </svg>
                </div>
              </div>

              {/* Status Speech Bubble: "procrastinating 😴" */}
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-2 -right-24 z-30 bg-[#2b2d31] border border-white/10 text-white/90 text-xs px-3 py-1.5 rounded-2xl rounded-bl-none shadow-lg whitespace-nowrap select-none font-medium"
              >
                procrastinating 😴
              </motion.div>
            </div>
          </div>

          {/* Name + Handle */}
          <div className="mt-4">
            <h1 className="text-[28px] font-black text-white font-mono tracking-tight flex items-center gap-2">
              <span>.sai chetan</span>
            </h1>
            <div className="flex items-center flex-wrap gap-2 mt-1">
              <span className="text-white/90 text-sm font-semibold">wintersummon</span>
              <span className="text-white/30">•</span>
              <span className="text-white/50 text-sm font-mono">he/him</span>
              <div className="ml-1 flex items-center gap-1.5 bg-[#1e1f22] px-2.5 py-0.5 rounded-md text-xs text-white/80 border border-white/5 font-mono">
                <span className="text-orange-400">🔥</span>
                <span className="font-semibold">CSM</span>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-white/5 my-4" />

          {/* Bio Section with Polaroid Meme & Beach Waves */}
          <div className="relative pr-24 sm:pr-28">
            <h3 className="text-[11px] uppercase font-bold text-white/40 mb-2 tracking-[0.18em] font-mono">
              ABOUT ME
            </h3>

            <p className="text-[14px] text-white/90 leading-relaxed font-medium">
              18 yr chud just larping my way in to fit in <span className="text-white/50">· aloneholic</span>
            </p>

            <p className="text-[13px] text-white/60 leading-relaxed mt-2.5">
              <span className="text-white/80 font-semibold">Interest?</span> anime, manhwas, music and
              <br />
              <span className="text-white/40 italic">i try to learn stuff by experimenting</span>
            </p>

            {/* Native Location Pin with Animated Beach Waves */}
            <div className="mt-3.5 flex items-center gap-2 text-xs font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-800/30 px-3 py-1.5 rounded-xl w-fit">
              <MapPin size={13} className="text-cyan-400 shrink-0" />
              <span>Native: <strong>Vizag</strong></span>
              <motion.span
                animate={{ rotate: [-4, 4, -4], y: [0, -2, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="text-sm select-none"
              >
                🌊🌴
              </motion.span>
            </div>

            {/* Favorite Foods */}
            <div className="mt-2.5 flex items-center gap-3 text-xs text-white/50 font-mono">
              <span>🍛 Biryani</span>
              <span>•</span>
              <span>🍦 Ice Cream</span>
            </div>

            {/* Polaroid Meme Panel ("HE JUST LIKE ME FR") */}
            <motion.div
              whileHover={{ scale: 1.12, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="absolute right-0 top-1 cursor-pointer select-none"
              title="HE JUST LIKE ME FR!!!!"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-9 h-3 bg-white/40 rounded-sm -rotate-2 z-10 shadow-sm" />
              <div className="w-24 h-24 p-1 rounded-sm bg-white shadow-xl transform rotate-6 border border-white/20">
                <img
                  src="/assets/pfp/meme-panel.png"
                  alt="He just like me fr"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* ── Attached Krishna Celestial Swing Video at Bottom of Profile ── */}
          <div className="mt-6 -mx-6 -mb-7 rounded-b-[24px] overflow-hidden border-t border-emerald-500/20 bg-[#060a08] relative group">
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-bold text-amber-300 border border-amber-400/30 shadow-lg select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Divine Celestial Swing</span>
            </div>
            <video
              src="/assets/krishna-swing.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover max-h-[360px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
