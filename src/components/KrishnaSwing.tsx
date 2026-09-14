import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function KrishnaSwing() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasUserMuted = useRef(false);

  useEffect(() => {
    // User-uploaded real Krishna flute audio
    const audio = new Audio('/assets/audio/krishna_flute.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Attempt autoplay immediately on page load
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Browser autoplay policy blocked unprompted audio.
          // Listen for the very first interaction (click/tap) on the page to start playback seamlessly!
          const handleFirstInteraction = () => {
            if (!hasUserMuted.current && audioRef.current && audioRef.current.paused) {
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

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      hasUserMuted.current = true;
    } else {
      hasUserMuted.current = false;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Audio play blocked:", e);
      });
    }
  };

  return (
    <div className="fixed top-0 right-4 sm:right-12 md:right-20 z-40 pointer-events-none select-none flex flex-col items-center">
      {/* 3D swinging container with enhanced pendulum amplitude */}
      <motion.div
        style={{
          transformOrigin: 'top center',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateZ: [-18, 18, -18],
          rotateY: [-24, 24, -24],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col items-center"
      >
        {/* Long leafy vine ropes from ceiling */}
        <svg
          width="140"
          height="130"
          viewBox="0 0 140 130"
          className="overflow-visible"
        >
          {/* Left Vine Rope */}
          <path
            d="M34,0 Q40,65 42,120"
            stroke="#2d6a3f"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="35" cy="32" rx="6" ry="3.5" fill="#38a159" transform="rotate(-25 35 32)" />
          <ellipse cx="40" cy="75" rx="6" ry="3.5" fill="#48bb78" transform="rotate(25 40 75)" />
          <circle cx="42" cy="120" r="4" fill="#fbbf24" />

          {/* Right Vine Rope */}
          <path
            d="M106,0 Q100,65 98,120"
            stroke="#2d6a3f"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="105" cy="36" rx="6" ry="3.5" fill="#48bb78" transform="rotate(25 105 36)" />
          <ellipse cx="100" cy="80" rx="6" ry="3.5" fill="#38a159" transform="rotate(-25 100 80)" />
          <circle cx="98" cy="120" r="4" fill="#fbbf24" />

          {/* Swing Wooden Plank */}
          <rect
            x="24"
            y="118"
            width="92"
            height="9"
            rx="4.5"
            fill="#854d0e"
            stroke="#451a03"
            strokeWidth="1.5"
          />
        </svg>

        {/* Little Krishna Transparent Sticker Cutout */}
        <div className="relative -mt-10 w-44 sm:w-52 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
          {/* Golden Aura Glow */}
          <div
            className="absolute inset-0 rounded-full bg-amber-400/30 blur-2xl -z-10"
            style={{ transform: 'scale(0.9)' }}
          />

          <img
            src="/assets/stickers/krishna-swing.png"
            alt="Little Krishna on Swing"
            className="w-full h-auto object-contain select-none pointer-events-none"
            style={{
              filter: isPlaying ? 'drop-shadow(0 0 20px rgba(251,191,36,0.75))' : 'none',
              transition: 'filter 0.4s ease',
            }}
          />
        </div>
      </motion.div>

      {/* Flute music toggle button */}
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
