import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function KrishnaSwing() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Local verified flute audio
    const audio = new Audio('/assets/audio/krishna_flute.mp3');
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Audio play blocked:", e);
      });
    }
  };

  return (
    <div className="fixed top-0 right-4 sm:right-12 md:right-20 z-40 pointer-events-none select-none flex flex-col items-center">
      {/* 3D swinging container anchored at ceiling */}
      <motion.div
        style={{
          transformOrigin: 'top center',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateZ: [-10, 10, -10],
          rotateY: [-14, 14, -14],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col items-center"
      >
        {/* Long vine ropes from roof */}
        <svg
          width="130"
          height="120"
          viewBox="0 0 130 120"
          className="overflow-visible"
        >
          {/* Left Vine Rope */}
          <path
            d="M32,0 Q36,60 40,115"
            stroke="#2d6a3f"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Leaves on left rope */}
          <ellipse cx="33" cy="30" rx="6" ry="3.5" fill="#38a159" transform="rotate(-25 33 30)" />
          <ellipse cx="38" cy="70" rx="6" ry="3.5" fill="#48bb78" transform="rotate(25 38 70)" />
          <circle cx="40" cy="115" r="4" fill="#fbbf24" />

          {/* Right Vine Rope */}
          <path
            d="M98,0 Q94,60 90,115"
            stroke="#2d6a3f"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Leaves on right rope */}
          <ellipse cx="97" cy="35" rx="6" ry="3.5" fill="#48bb78" transform="rotate(25 97 35)" />
          <ellipse cx="92" cy="75" rx="6" ry="3.5" fill="#38a159" transform="rotate(-25 92 75)" />
          <circle cx="90" cy="115" r="4" fill="#fbbf24" />

          {/* Wooden / Vine Swing Seat */}
          <rect
            x="24"
            y="112"
            width="82"
            height="9"
            rx="4.5"
            fill="#854d0e"
            stroke="#451a03"
            strokeWidth="1.5"
          />
        </svg>

        {/* Little Krishna Sticker Cutout (Transparent PNG, NO white box) */}
        <div className="relative -mt-10 w-44 sm:w-52 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
          {/* Golden Divine Aura Glow behind Krishna */}
          <div
            className="absolute inset-0 rounded-full bg-amber-400/25 blur-2xl -z-10"
            style={{ transform: 'scale(0.85)' }}
          />

          <img
            src="/assets/stickers/krishna-swing.png"
            alt="Little Krishna on Swing"
            className="w-full h-auto object-contain select-none pointer-events-none"
            style={{
              filter: isPlaying ? 'drop-shadow(0 0 16px rgba(251,191,36,0.6))' : 'none',
              transition: 'filter 0.4s ease',
            }}
          />
        </div>
      </motion.div>

      {/* Flute music toggle button (Clickable) */}
      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="pointer-events-auto mt-2 px-3.5 py-1.5 rounded-full bg-black/80 hover:bg-black border border-amber-400/40 hover:border-amber-400 text-amber-300 text-xs font-bold flex items-center gap-2 shadow-[0_4px_14px_rgba(0,0,0,0.6)] backdrop-blur-md cursor-pointer transition-all"
        title={isPlaying ? "Mute Krishna's Flute" : "Play Krishna's Flute"}
      >
        {isPlaying ? <Volume2 size={14} className="text-amber-400 animate-pulse" /> : <VolumeX size={14} className="opacity-70" />}
        <span>Flute</span>
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-3">
            {[1, 2, 3, 4].map((bar) => (
              <motion.div
                key={bar}
                className="w-0.5 bg-amber-400 rounded-full"
                animate={{ height: ['3px', '12px', '4px'] }}
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
