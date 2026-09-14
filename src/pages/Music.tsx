import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Play, Pause, ExternalLink } from 'lucide-react';
import data from '../../site-data/shows-movies-music.json';

interface TrackItem {
  id: string;
  language: string;
  flag: string;
  top_song: string;
  top_artist: string;
  artist_img: string;
  audio_src: string;
  color: string;
  bg_glow: string;
  artists: string[];
}

export default function Music() {
  const { music } = data;
  const tracks: TrackItem[] = music.tracks;

  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play / Pause handler
  const handleTogglePlay = (track: TrackItem) => {
    if (activeTrackId === track.id && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(track.audio_src);
      audio.volume = 0.5;
      audio.ontimeupdate = () => {
        if (audio.duration) {
          setProgress((audio.currentTime / audio.duration) * 100);
        }
      };
      audio.onended = () => {
        setIsPlaying(false);
        setProgress(0);
      };
      audio.play().then(() => {
        setIsPlaying(true);
        setActiveTrackId(track.id);
      }).catch((err) => {
        console.warn("Audio play error:", err);
      });
      audioRef.current = audio;
    }
  };

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <Layout
      title="Music Vibes"
      subtitle="4 Languages · Audio Player"
      themeColor="from-green-700 to-emerald-950"
      accentColor="#22c55e"
    >
      {/* Introduction note */}
      <div className="mb-8 p-4 rounded-xl bg-green-950/20 border border-green-800/30 flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-sm font-bold text-green-300">
            🎧 Built-in Audio Player
          </p>
          <p className="text-xs text-white/50 mt-0.5">
            Click any vinyl disc or play button to listen directly in browser!
          </p>
        </div>
        {activeTrackId && isPlaying && (
          <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
            <span className="text-xs font-mono text-green-300">Playing Now</span>
          </div>
        )}
      </div>

      {/* 4 Language Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {tracks.map((t) => {
          const isThisPlaying = activeTrackId === t.id && isPlaying;

          return (
            <motion.div
              key={t.id}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden bg-[#101114] border border-white/8 hover:border-white/20 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              {/* Top Language Header */}
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{t.flag}</span>
                    <h3 className="text-base font-black text-white font-mono">
                      {t.language}
                    </h3>
                  </div>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                    style={{ background: `${t.color}22`, color: t.color }}
                  >
                    Top Pick
                  </span>
                </div>

                {/* Spinning Vinyl Disc with Center Glow */}
                <div className="flex flex-col items-center justify-center my-4">
                  <div className="relative cursor-pointer select-none" onClick={() => handleTogglePlay(t)}>
                    <motion.div
                      animate={isThisPlaying ? { rotate: 360 } : { rotate: 0 }}
                      transition={isThisPlaying ? { repeat: Infinity, duration: 4, ease: 'linear' } : { duration: 0.5 }}
                      className="w-28 h-28 rounded-full flex items-center justify-center shadow-2xl relative"
                      style={{
                        background: 'conic-gradient(#111, #2a2a2a, #151515, #333, #111)',
                        border: '4px solid #1f2024',
                        boxShadow: isThisPlaying ? `0 0 25px ${t.color}66` : '0 10px 20px rgba(0,0,0,0.5)',
                      }}
                    >
                      {/* Vinyl Grooves */}
                      <div className="absolute inset-3 rounded-full border border-white/[0.07]" />
                      <div className="absolute inset-6 rounded-full border border-white/[0.07]" />

                      {/* Center Label */}
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-xs"
                        style={{ background: t.color }}
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-black" />
                      </div>
                    </motion.div>

                    {/* Play/Pause Overlay Icon on Vinyl */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                        {isThisPlaying ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
                      </div>
                    </div>
                  </div>

                  {/* Equalizer bars while playing */}
                  {isThisPlaying && (
                    <div className="flex items-end gap-1 h-4 mt-3">
                      {[1, 2, 3, 4, 5].map((b) => (
                        <motion.div
                          key={b}
                          className="w-1 rounded-full"
                          style={{ background: t.color }}
                          animate={{ height: ['4px', '16px', '6px'] }}
                          transition={{
                            duration: 0.4 + b * 0.1,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: b * 0.08,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Track Title */}
                <div className="text-center mb-4">
                  <p className="text-[10px] text-white/35 uppercase tracking-widest font-mono">
                    Featured Track
                  </p>
                  <p className="font-bold text-sm text-white mt-0.5 line-clamp-1">
                    {t.top_song}
                  </p>
                  <p className="text-xs text-white/60 mt-0.5">
                    {t.top_artist}
                  </p>
                </div>

                {/* Top Artist Circular Photo */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-white/10 shadow-md">
                    <img
                      src={t.artist_img}
                      alt={t.top_artist}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-white/40 uppercase font-mono">
                      Favorite Artist
                    </p>
                    <p className="text-xs font-bold text-white truncate">
                      {t.top_artist}
                    </p>
                  </div>
                </div>
              </div>

              {/* Artist Chips */}
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-wider mb-2 font-mono">
                  Rotations
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {t.artists.map((artistName) => (
                    <span
                      key={artistName}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] text-white/70 font-medium hover:border-white/20 transition-colors"
                    >
                      {artistName}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Spotify Profile Banner */}
      <motion.a
        href={music.spotify_profile}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center justify-between gap-4 w-full bg-[#1DB954]/10 border border-[#1DB954]/30 hover:border-[#1DB954]/60 hover:bg-[#1DB954]/20 rounded-2xl p-6 transition-all group"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#1DB954]/20 flex items-center justify-center text-[#1DB954] shrink-0">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-white text-base group-hover:text-[#1DB954] transition-colors">
              Open .sai chetan on Spotify
            </p>
            <p className="text-xs text-white/50 mt-0.5">
              Follow my full playlists and real-time listening activity
            </p>
          </div>
        </div>
        <ExternalLink size={18} className="text-white/40 group-hover:text-white transition-colors" />
      </motion.a>
    </Layout>
  );
}
