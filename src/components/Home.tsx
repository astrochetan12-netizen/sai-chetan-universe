import { motion } from 'framer-motion';
import { MessageSquare, MoreHorizontal, ExternalLink, MapPin } from 'lucide-react';

// Authentic Anime & Specialty Badges instead of random emojis
const ANIME_BADGES = [
  { id: 'csm', label: 'Chainsaw Man Fiend', icon: '🪚', color: 'from-orange-500/20 to-red-600/20', border: 'border-orange-500/40' },
  { id: 'solo', label: 'Shadow Monarch', icon: '👑', color: 'from-indigo-500/20 to-purple-600/20', border: 'border-indigo-500/40' },
  { id: 'music', label: 'Vinyl Audiophile', icon: '🎧', color: 'from-green-500/20 to-emerald-600/20', border: 'border-green-500/40' },
  { id: 'nocturnal', label: 'Night Owl Dev', icon: '🌙', color: 'from-blue-500/20 to-cyan-600/20', border: 'border-cyan-500/40' },
];

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
        {/* Profile Banner (Clean, no vines covering it) */}
        <div className="relative w-full h-[210px] overflow-hidden bg-[#1a1b1e]">
          <img
            src="/assets/stickers/banner.jpg"
            alt="Profile Banner"
            className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
          />
          {/* Subtle dark gradient overlay towards the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-transparent to-black/20" />
        </div>

        <div className="relative px-6 pb-7">
          {/* Avatar Row */}
          <div className="flex justify-between items-start">
            <div className="relative -mt-[68px]">
              {/* Denji Avatar with clean border (No heavy glowing halo) */}
              <div className="relative w-[136px] h-[136px] rounded-full border-[6px] border-[#111214] bg-[#2b2d31] overflow-hidden z-20 shadow-xl">
                <img
                  src="/assets/pfp/headshot.png"
                  alt="Denji Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Moon Status (Idle / Watching) */}
              <div className="absolute bottom-2 right-2 z-30 bg-[#111214] rounded-full p-1 border-[4px] border-[#111214]">
                <div className="w-6 h-6 bg-[#f0b132] rounded-full flex items-center justify-center text-[#111214]">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.3 2a10 10 0 0 0-.19 20 10 10 0 0 0 8.7-5.1 1 1 0 0 0-1-1.45A8 8 0 1 1 8.56 3.2 1 1 0 0 0 7.8 2.2a1 1 0 0 0-.5.06 9.8 9.8 0 0 0 5 0z" />
                  </svg>
                </div>
              </div>

              {/* "loser 🖤" speech bubble */}
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-2 -right-16 z-30 bg-[#2b2d31] border border-white/10 text-white/80 text-xs px-3 py-1.5 rounded-2xl rounded-bl-none shadow-lg whitespace-nowrap select-none"
              >
                loser 🖤
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

          {/* Custom Anime Badges (Instead of random emojis) */}
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            {ANIME_BADGES.map((b) => (
              <motion.div
                key={b.id}
                whileHover={{ scale: 1.08, y: -2 }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gradient-to-r ${b.color} border ${b.border} text-xs font-semibold text-white/90 cursor-default shadow-sm`}
                title={b.label}
              >
                <span>{b.icon}</span>
                <span className="text-[11px] font-mono">{b.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-5">
            <a
              href="https://discord.com/users/wintersummon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all text-sm shadow-md hover:shadow-indigo-500/20"
            >
              <MessageSquare size={16} /> Add on Discord
            </a>
            <a
              href="https://github.com/astrochetan12-netizen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#2b2d31] hover:bg-[#383a40] rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <ExternalLink size={16} />
            </a>
            <button
              className="w-10 h-10 bg-[#2b2d31] hover:bg-[#383a40] rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-colors"
              title="More"
            >
              <MoreHorizontal size={16} />
            </button>
          </div>

          <div className="w-full h-px bg-white/5 my-5" />

          {/* Bio Section with Polaroid Meme & Beach Waves */}
          <div className="relative pr-24 sm:pr-28">
            <h3 className="text-[11px] uppercase font-bold text-white/40 mb-2 tracking-[0.18em] font-mono">
              ABOUT ME
            </h3>

            {/* True user bio */}
            <p className="text-[14px] text-white/90 leading-relaxed font-medium">
              18 yr chud just larping my way in to fit in <span className="text-white/50">· aloneholic</span>
            </p>

            <p className="text-[13px] text-white/60 leading-relaxed mt-2.5">
              <span className="text-white/80 font-semibold">Interest?</span> anime, manhwas, music and
              <br />
              <span className="text-white/40 italic">i try to learn stuff by experimenting</span>
            </p>

            {/* Location Pin with Beach Waves */}
            <div className="mt-3.5 flex items-center gap-2 text-xs font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-800/30 px-3 py-1.5 rounded-xl w-fit">
              <MapPin size={13} className="text-cyan-400 shrink-0" />
              <span>Native: <strong>Vizag</strong></span>
              {/* Animated Beach Waves Sticker */}
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
              {/* Tape at top */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-9 h-3 bg-white/40 rounded-sm -rotate-2 z-10 shadow-sm" />
              <div
                className="w-24 h-24 p-1 rounded-sm bg-white shadow-xl transform rotate-6 border border-white/20"
              >
                <img
                  src="/assets/pfp/meme-panel.png"
                  alt="He just like me fr"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
