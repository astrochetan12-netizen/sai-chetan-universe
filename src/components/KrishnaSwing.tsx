import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const FLUTE_SESSION_KEY = 'krishna_flute_has_played_session';
const FLUTE_MUTED_KEY = 'krishna_flute_is_muted_permanently';

export default function KrishnaSwing() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [glowing, setGlowing] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Pulse glow on entrance
  useEffect(() => {
    const t = setTimeout(() => setGlowing(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const isMuted = localStorage.getItem(FLUTE_MUTED_KEY) === 'true';
    const hasPlayedThisSession = sessionStorage.getItem(FLUTE_SESSION_KEY) === 'true';

    const audio = new Audio('/assets/audio/krishna_flute.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

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
      // Was playing before navigating - restore state indicator only
      if (!audio.paused) setIsPlaying(true);
    }

    return () => { audio.pause(); };
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
    <div className="fixed top-0 left-0 z-40 pointer-events-none select-none flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative w-24 sm:w-28 flex flex-col items-center"
      >
        {/* Divine Golden Halo Glow */}
        <motion.div
          className="absolute inset-0 rounded-full -z-10"
          animate={glowing ? {
            boxShadow: ['0 0 20px rgba(251,191,36,0.4)', '0 0 40px rgba(251,191,36,0.7)', '0 0 20px rgba(251,191,36,0.4)'],
          } : {}}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.25) 0%, transparent 70%)' }}
        />

        {/* Animated Krishna Video (Gemini-generated webm) */}
        <video
          src="/assets/krishna-swing.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
          style={{
            filter: isPlaying
              ? 'drop-shadow(0 0 18px rgba(251,191,36,0.9))'
              : 'drop-shadow(0 10px 25px rgba(0,0,0,0.8))',
            transition: 'filter 0.4s ease',
          }}
        >
          {/* Fallback for browsers not supporting webm */}
          <img
            src="/assets/stickers/krishna-vine-swing.jpg"
            alt="Little Krishna on Swing"
            className="w-full h-auto object-contain"
          />
        </video>
      </motion.div>

      {/* Flute Toggle Button */}
      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="pointer-events-auto mt-1 px-3 py-1 rounded-full bg-black/85 hover:bg-black border border-amber-400/50 hover:border-amber-400 text-amber-300 text-[10px] font-bold flex items-center gap-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.7)] backdrop-blur-md cursor-pointer transition-all"
        title={isPlaying ? "Mute Krishna's Flute" : "Play Krishna's Flute"}
      >
        {isPlaying ? <Volume2 size={12} className="text-amber-400 animate-pulse" /> : <VolumeX size={12} className="opacity-70" />}
        <span>{isPlaying ? '🎵' : '🔇'}</span>
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
