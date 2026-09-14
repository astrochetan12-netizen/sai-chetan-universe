import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const FLUTE_SESSION_KEY = 'krishna_flute_has_played_session';
const FLUTE_MUTED_KEY = 'krishna_flute_is_muted_permanently';

export default function KrishnaSwing() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Eye blinking animation cycle (blinks softly every 3.5 - 5 seconds)
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 220);
    }, 4000);

    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const isMuted = localStorage.getItem(FLUTE_MUTED_KEY) === 'true';
    const hasPlayedThisSession = sessionStorage.getItem(FLUTE_SESSION_KEY) === 'true';

    const audio = new Audio('/assets/audio/krishna_flute.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Only attempt auto-play ONCE per session upon initial site entry, and ONLY if not muted!
    if (!isMuted && !hasPlayedThisSession) {
      sessionStorage.setItem(FLUTE_SESSION_KEY, 'true');

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // First interaction fallback for browser autoplay policy
            const handleFirstInteraction = () => {
              if (localStorage.getItem(FLUTE_MUTED_KEY) !== 'true' && audioRef.current?.paused) {
                audioRef.current.play().then(() => {
                  setIsPlaying(true);
                }).catch(() => {});
              }
              window.removeEventListener('click', handleFirstInteraction);
              window.removeEventListener('touchstart', handleFirstInteraction);
            };

            window.addEventListener('click', handleFirstInteraction);
            window.addEventListener('touchstart', handleFirstInteraction);
          });
      }
    }

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      localStorage.setItem(FLUTE_MUTED_KEY, 'true');
    } else {
      localStorage.setItem(FLUTE_MUTED_KEY, 'false');
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Audio play blocked:", e);
      });
    }
  };

  return (
    /* Moved from top-right to TOP-LEFT */
    <div className="fixed top-0 left-4 sm:left-10 md:left-14 z-40 pointer-events-none select-none flex flex-col items-center">
      {/* 3D swinging container anchored at ceiling */}
      <motion.div
        style={{
          transformOrigin: 'top center',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateZ: [-19, 19, -19],
          rotateY: [-24, 24, -24],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col items-center"
      >
        {/* Leafy vine ropes extending from the top roof canopy */}
        <svg
          width="140"
          height="135"
          viewBox="0 0 140 135"
          className="overflow-visible"
        >
          {/* Left Vine Rope */}
          <path
            d="M36,0 Q42,68 44,124"
            stroke="#1b4727"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="37" cy="34" rx="6.5" ry="4" fill="#38a159" transform="rotate(-25 37 34)" />
          <ellipse cx="42" cy="78" rx="6.5" ry="4" fill="#48bb78" transform="rotate(25 42 78)" />
          <circle cx="44" cy="124" r="4.5" fill="#fbbf24" />

          {/* Right Vine Rope */}
          <path
            d="M104,0 Q98,68 96,124"
            stroke="#1b4727"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="103" cy="38" rx="6.5" ry="4" fill="#48bb78" transform="rotate(25 103 38)" />
          <ellipse cx="98"  cy="82" rx="6.5" ry="4" fill="#38a159" transform="rotate(-25 98 82)" />
          <circle cx="96" cy="124" r="4.5" fill="#fbbf24" />

          {/* Wooden Swing Seat */}
          <rect
            x="24"
            y="122"
            width="92"
            height="9"
            rx="4.5"
            fill="#78350f"
            stroke="#451a03"
            strokeWidth="1.5"
          />
        </svg>

        {/* Little Krishna Transparent Sticker Cutout */}
        <div className="relative -mt-10 w-44 sm:w-52 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]">
          {/* Pulsing Divine Halo */}
          <motion.div
            className="absolute inset-0 rounded-full bg-amber-400/30 blur-2xl -z-10"
            animate={{ scale: [0.85, 1.05, 0.85], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Krishna Base Image */}
          <div className="relative">
            <img
              src="/assets/stickers/krishna-swing.png"
              alt="Little Krishna on Swing"
              className="w-full h-auto object-contain select-none pointer-events-none"
              style={{
                filter: isPlaying ? 'drop-shadow(0 0 22px rgba(251,191,36,0.85))' : 'none',
                transition: 'filter 0.4s ease',
              }}
            />

            {/* Subtle Divine Eye-Blinking Animated Overlay */}
            {isBlinking && (
              <div
                className="absolute pointer-events-none bg-[#74a9d8] rounded-full opacity-90 transition-opacity duration-150"
                style={{
                  top: '36.5%',
                  left: '46.5%',
                  width: '9%',
                  height: '2.5%',
                  boxShadow: '0 0 4px #2b6cb0',
                }}
              />
            )}
          </div>
        </div>
      </motion.div>

      {/* Flute music toggle button (Clickable) */}
      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="pointer-events-auto mt-2 px-3.5 py-1.5 rounded-full bg-black/85 hover:bg-black border border-amber-400/50 hover:border-amber-400 text-amber-300 text-xs font-bold flex items-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.7)] backdrop-blur-md cursor-pointer transition-all"
        title={isPlaying ? "Mute Krishna's Flute" : "Play Krishna's Flute"}
      >
        {isPlaying ? <Volume2 size={14} className="text-amber-400 animate-pulse" /> : <VolumeX size={14} className="opacity-70" />}
        <span>{isPlaying ? 'Flute Playing' : 'Play Flute'}</span>
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-3">
            {[1, 2, 3, 4].map((bar) => (
              <motion.div
                key={bar}
                className="w-0.5 bg-amber-400 rounded-full"
                animate={{ height: ['3px', '13px', '4px'] }}
                transition={{
                  duration: 0.5 + bar * 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: bar * 0.1,
                }}
              />
            ))}
          </div>
        )}
      </motion.button>
    </div>
  );
}
