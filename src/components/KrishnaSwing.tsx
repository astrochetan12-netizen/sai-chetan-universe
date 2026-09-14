import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const FLUTE_SESSION_KEY = 'krishna_flute_has_played_session';
const FLUTE_MUTED_KEY = 'krishna_flute_is_muted_permanently';

export default function KrishnaSwing() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEyesOpen, setIsEyesOpen] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Divine eye-blink sequence:
  // Starts with open eyes (from user's given sticker), transitions to serene closed eyes after 1.8s,
  // then performs gentle rhythmic blinks every 4-5 seconds.
  useEffect(() => {
    // Initial transition from open eyes to serene closed eyes
    const initialBlink = setTimeout(() => {
      setIsEyesOpen(false);
    }, 1800);

    // Periodic gentle blinking cycle
    const interval = setInterval(() => {
      setIsEyesOpen(true);
      setTimeout(() => setIsEyesOpen(false), 350);
    }, 4500);

    return () => {
      clearTimeout(initialBlink);
      clearInterval(interval);
    };
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
          .then(() => setIsPlaying(true))
          .catch(() => {
            const handleFirstInteraction = () => {
              if (localStorage.getItem(FLUTE_MUTED_KEY) !== 'true' && audioRef.current?.paused) {
                audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
              }
              window.removeEventListener('click', handleFirstInteraction);
              window.removeEventListener('touchstart', handleFirstInteraction);
            };
            window.addEventListener('click', handleFirstInteraction);
            window.addEventListener('touchstart', handleFirstInteraction);
          });
      }
    } else if (!isMuted && hasPlayedThisSession) {
      if (!audio.paused) setIsPlaying(true);
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
      audioRef.current.play().then(() => setIsPlaying(true)).catch((e) => {
        console.warn('Audio play blocked:', e);
      });
    }
  };

  return (
    <div className="fixed top-0 left-2 sm:left-6 z-40 pointer-events-none select-none flex flex-col items-center">
      {/* 3D swinging container anchored at top ceiling */}
      <motion.div
        style={{
          transformOrigin: 'top center',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateZ: [-12, 12, -12],
          rotateY: [-16, 16, -16],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col items-center w-24 sm:w-28"
      >
        {/* Leafy vine ropes extending from ceiling */}
        <svg
          width="100"
          height="95"
          viewBox="0 0 100 95"
          className="overflow-visible"
        >
          {/* Left Vine */}
          <path d="M28,0 Q32,45 34,88" stroke="#166534" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <ellipse cx="29" cy="24" rx="4.5" ry="3" fill="#22c55e" transform="rotate(-25 29 24)" />
          <ellipse cx="32" cy="55" rx="4.5" ry="3" fill="#4ade80" transform="rotate(25 32 55)" />

          {/* Right Vine */}
          <path d="M72,0 Q68,45 66,88" stroke="#166534" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <ellipse cx="71" cy="28" rx="4.5" ry="3" fill="#4ade80" transform="rotate(25 71 28)" />
          <ellipse cx="68" cy="58" rx="4.5" ry="3" fill="#22c55e" transform="rotate(-25 68 58)" />

          {/* Wooden Swing Plank */}
          <rect x="18" y="86" width="64" height="6.5" rx="3" fill="#78350f" stroke="#451a03" strokeWidth="1" />
        </svg>

        {/* Little Krishna Sticker with Divine Halo & Smooth Eye-Blink State */}
        <div className="relative -mt-6 w-24 sm:w-28 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] flex justify-center">
          {/* Divine Golden Halo Glow */}
          <motion.div
            className="absolute inset-0 rounded-full -z-10"
            animate={{
              scale: [0.85, 1.1, 0.85],
              opacity: isPlaying ? [0.6, 0.95, 0.6] : [0.35, 0.6, 0.35],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background: 'radial-gradient(circle, rgba(251,191,36,0.55) 0%, rgba(245,158,11,0.15) 55%, transparent 75%)',
            }}
          />

          {/* Eye State Switching: User's uploaded Open-Eyes Krishna vs Serene Closed-Eyes Krishna */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Open Eyes State (User's uploaded sticker) */}
            <motion.img
              src="/assets/stickers/krishna_sitting_flute_clean.png"
              alt="Little Krishna Open Eyes"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
              animate={{ opacity: isEyesOpen ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              style={{
                filter: isPlaying ? 'drop-shadow(0 0 16px rgba(251,191,36,0.9))' : 'none',
              }}
            />

            {/* Closed Eyes Serene State */}
            <motion.img
              src="/assets/stickers/krishna-swing.png"
              alt="Little Krishna Closed Eyes"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
              animate={{ opacity: isEyesOpen ? 0 : 1 }}
              transition={{ duration: 0.25 }}
              style={{
                filter: isPlaying ? 'drop-shadow(0 0 16px rgba(251,191,36,0.9))' : 'none',
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Flute music toggle button */}
      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="pointer-events-auto mt-2 px-3 py-1 rounded-full bg-black/90 hover:bg-black border border-amber-400/50 hover:border-amber-400 text-amber-300 text-[10px] font-bold flex items-center gap-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.7)] backdrop-blur-md cursor-pointer transition-all"
        title={isPlaying ? "Mute Krishna's Flute" : "Play Krishna's Flute"}
      >
        {isPlaying ? <Volume2 size={12} className="text-amber-400 animate-pulse" /> : <VolumeX size={12} className="opacity-70" />}
        <span>{isPlaying ? 'Flute' : 'Muted'}</span>
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-2.5">
            {[1, 2, 3].map((bar) => (
              <motion.div
                key={bar}
                className="w-0.5 bg-amber-400 rounded-full"
                animate={{ height: ['2px', '10px', '3px'] }}
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
