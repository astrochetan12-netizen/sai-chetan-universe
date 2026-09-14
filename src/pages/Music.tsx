import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Play, Pause, ExternalLink, Music2, Disc, Sparkles } from 'lucide-react';

interface ArtistCard {
  name: string;
  badge: string;
  img: string;
  spotify: string;
  comment: string;
  pinnedEmoji: string;
}

interface LanguageSection {
  id: string;
  language: string;
  flag: string;
  playableSong: string;
  playableArtist: string;
  audioSrc: string;
  color: string;
  bgGlow: string;
  favSongs: string[];
  favArtists: ArtistCard[];
}

const MUSIC_SECTIONS: LanguageSection[] = [
  {
    id: 'english',
    language: 'English',
    flag: '🇬🇧',
    playableSong: 'Hold On',
    playableArtist: 'Justin Bieber',
    audioSrc: '/assets/audio/english_track.mp3',
    color: '#22c55e',
    bgGlow: 'rgba(34, 197, 94, 0.18)',
    favSongs: [
      'Hold On (Justin Bieber)',
      'Night Changes / Story of My Life (One Direction)',
      'Hope / Sad! / Moonlight (XXXTENTACION)',
      'Starboy / Blinding Lights (The Weeknd)',
      'Attention / We Don’t Talk Anymore (Charlie Puth)',
    ],
    favArtists: [
      {
        name: 'One Direction',
        badge: 'Favorite Band 🎸',
        img: 'https://i.scdn.co/image/ab6761610000e5eb6c4293f0b09335ef008e7b17',
        spotify: 'https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq',
        comment: 'My all-time favorite boyband · pure nostalgic comfort and memories',
        pinnedEmoji: '🎸',
      },
      {
        name: 'XXXTENTACION',
        badge: 'Favorite Rapper 🖤',
        img: 'https://i.scdn.co/image/ab6761610000e5eb806a1e94883f3e69bc5e5108',
        spotify: 'https://open.spotify.com/artist/15UsOTVnJzReFVN1VCnxyY',
        comment: 'Legends Never Die 🕊️ · Look at me, Hope, and raw vulnerability · LLJ',
        pinnedEmoji: '🕊️',
      },
      {
        name: 'The Weeknd',
        badge: 'XO Night Owl 🌙',
        img: 'https://i.scdn.co/image/ab6761610000e5eb214f3cf1cbe8e38f633e56d4',
        spotify: 'https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ',
        comment: 'King of midnight synthwave & haunting melancholia',
        pinnedEmoji: '🌙',
      },
      {
        name: 'Justin Bieber',
        badge: 'Pop Royalty 💛',
        img: 'https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36',
        spotify: 'https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s',
        comment: 'Justice era, Ghost, and Hold On acoustic brilliance on repeat',
        pinnedEmoji: '💛',
      },
      {
        name: 'Charlie Puth',
        badge: 'Pitch Perfect 🎹',
        img: 'https://i.scdn.co/image/ab6761610000e5eb5b0bb62b9f3fe2b4ea176918',
        spotify: 'https://open.spotify.com/artist/6VuMaDmys5Jw1kZcuqqJaU',
        comment: 'Absolute earworm production and harmonic genius',
        pinnedEmoji: '🎹',
      },
    ],
  },
  {
    id: 'telugu',
    language: 'Telugu',
    flag: '🇮🇳',
    playableSong: 'Master The Blaster',
    playableArtist: 'Anirudh Ravichander',
    audioSrc: '/assets/audio/telugu_track.mp3',
    color: '#818cf8',
    bgGlow: 'rgba(129, 140, 248, 0.18)',
    favSongs: [
      'Master The Blaster (Master OST)',
      'Gaali Vaaluga (Agnyaathavaasi)',
      'Hukum (Jailer)',
      'Badass (Leo)',
      'Fear Song (Devara)',
    ],
    favArtists: [
      {
        name: 'Anirudh Ravichander',
        badge: 'Rockstar Ani ⚡',
        img: 'https://i.scdn.co/image/ab6761610000e5ebf7db7c8eded070e452aa6571',
        spotify: 'https://open.spotify.com/artist/4zCH9qm4R2DADamUHMCcrQ',
        comment: 'God of adrenaline BGM, viral earworms, and undisputed youth anthem king',
        pinnedEmoji: '⚡',
      },
    ],
  },
  {
    id: 'hindi',
    language: 'Hindi',
    flag: '🇮🇳',
    playableSong: 'Zaalima',
    playableArtist: 'Arijit Singh & Harshdeep Kaur',
    audioSrc: '/assets/audio/hindi_track.mp3',
    color: '#fb7185',
    bgGlow: 'rgba(251, 113, 133, 0.18)',
    favSongs: [
      'Maula Mera (Anwar)',
      'Tum Prem Ho (Radha Krishna)',
      'Zaalima (Raees)',
      'Channa Mereya (Ae Dil Hai Mushkil)',
      'Alag Aasmaan / Mishri (Anuv Jain)',
    ],
    favArtists: [
      {
        name: 'Arijit Singh',
        badge: 'Voice of Romance ❤️',
        img: 'https://i.scdn.co/image/ab6761610000e5eb57a464f5a8018c6c878ec8e3',
        spotify: 'https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw',
        comment: 'Raw, heartbreaking emotion that touches the deepest corners of the soul',
        pinnedEmoji: '❤️',
      },
      {
        name: 'Anuv Jain',
        badge: 'Acoustic Poetry 🌙',
        img: 'https://i.scdn.co/image/ab6761610000e5eb1d2ff287c95e1e1245bdfa95',
        spotify: 'https://open.spotify.com/artist/4obzFoKoKRHIphyHzJ35G3',
        comment: 'Midnight acoustic strings and quiet introspective poetry',
        pinnedEmoji: '🎸',
      },
    ],
  },
  {
    id: 'japanese',
    language: 'Japanese',
    flag: '🇯🇵',
    playableSong: 'Nandemonaiya (なんでもないや)',
    playableArtist: 'RADWIMPS',
    audioSrc: '/assets/audio/japanese_track.mp3',
    color: '#22d3ee',
    bgGlow: 'rgba(34, 211, 238, 0.18)',
    favSongs: [
      'Nandemonaiya — RADWIMPS (Your Name / 君の名は)',
      'Your Lie in April OST (Hikaru Nara & Watashi no Uso)',
      'In the Pool (Rascal Does Not Dream OST)',
      'Fukashigi no Carte (Bunny Girl Senpai ED)',
      'Shinunoga E-Wa (Fujii Kaze)',
    ],
    favArtists: [
      {
        name: 'RADWIMPS',
        badge: 'Your Name Masterminds 🌌',
        img: 'https://i.scdn.co/image/ab6761610000e5ebb7757912d0a0d9dc004a4340',
        spotify: 'https://open.spotify.com/artist/1EowJ1WwkMzkCkRomFjaTe',
        comment: 'Architects of cinematic transcendence, Makoto Shinkai skies, and unforgettable youth',
        pinnedEmoji: '🌌',
      },
      {
        name: 'Fujii Kaze',
        badge: 'Soulful Transcendence 🍃',
        img: 'https://i.scdn.co/image/ab6761610000e5ebc69f69741e40ebad3bb97042',
        spotify: 'https://open.spotify.com/artist/7zpGLOL91A54F101Z0U790',
        comment: 'Shinunoga E-Wa · transcendent soulful jazz-pop with undeniable warmth and swag',
        pinnedEmoji: '🍃',
      },
    ],
  },
];

export default function Music() {
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTogglePlay = (section: LanguageSection) => {
    if (activeTrackId === section.id && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(section.audioSrc);
      audio.volume = 0.6;
      audio.onended = () => {
        setIsPlaying(false);
      };
      audio.play().then(() => {
        setIsPlaying(true);
        setActiveTrackId(section.id);
      }).catch((e) => {
        console.warn("Playback error:", e);
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
      title="Music Sanctuary"
      subtitle="4 Languages · Curated Playlists & Profiles"
      themeColor="from-green-700 to-emerald-950"
      accentColor="#22c55e"
    >
      {/* Introduction Banner */}
      <div className="mb-10 p-5 rounded-2xl bg-[#0f1412] border border-green-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 shrink-0">
            <Disc size={24} className="animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">
              Interactive In-Browser Jukebox
            </h3>
            <p className="text-xs text-white/60 mt-0.5">
              Featuring user-provided tracks, favorite rotations, and artist Spotify profiles with personalized notes.
            </p>
          </div>
        </div>

        {activeTrackId && isPlaying && (
          <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/40 px-3.5 py-1.5 rounded-full shrink-0">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
            <span className="text-xs font-mono font-bold text-green-300">
              Playing Now
            </span>
          </div>
        )}
      </div>

      {/* 4 Language Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
        {MUSIC_SECTIONS.map((sec) => {
          const isThisPlaying = activeTrackId === sec.id && isPlaying;

          return (
            <motion.div
              key={sec.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden bg-[#101115] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-white/20"
            >
              <div>
                {/* Section Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{sec.flag}</span>
                    <div>
                      <h3 className="text-lg font-black text-white font-mono leading-tight">
                        {sec.language}
                      </h3>
                      <p className="text-[11px] text-white/40 font-mono">
                        Rotations & Soundtracks
                      </p>
                    </div>
                  </div>

                  <span
                    className="text-xs font-mono font-bold px-3 py-1 rounded-full border"
                    style={{
                      background: `${sec.color}15`,
                      borderColor: `${sec.color}40`,
                      color: sec.color,
                    }}
                  >
                    Curated
                  </span>
                </div>

                {/* ── Playable Track Showcase with Spinning Vinyl ── */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6 flex flex-col sm:flex-row items-center gap-5">
                  {/* Spinning Vinyl Disc */}
                  <div
                    className="relative cursor-pointer select-none shrink-0"
                    onClick={() => handleTogglePlay(sec)}
                    title={isThisPlaying ? "Pause Track" : "Play Track"}
                  >
                    <motion.div
                      animate={isThisPlaying ? { rotate: 360 } : { rotate: 0 }}
                      transition={isThisPlaying ? { repeat: Infinity, duration: 4, ease: 'linear' } : { duration: 0.5 }}
                      className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl relative"
                      style={{
                        background: 'conic-gradient(#111, #282828, #141414, #333, #111)',
                        border: '3px solid #1f2024',
                        boxShadow: isThisPlaying ? `0 0 25px ${sec.color}66` : '0 8px 16px rgba(0,0,0,0.5)',
                      }}
                    >
                      {/* Grooves */}
                      <div className="absolute inset-2.5 rounded-full border border-white/[0.07]" />
                      <div className="absolute inset-5 rounded-full border border-white/[0.07]" />

                      {/* Center Label */}
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-xs"
                        style={{ background: sec.color }}
                      >
                        <div className="w-2 h-2 rounded-full bg-black" />
                      </div>
                    </motion.div>

                    {/* Play/Pause Overlay Button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white shadow-md">
                        {isThisPlaying ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
                      </div>
                    </div>
                  </div>

                  {/* Track Info */}
                  <div className="text-center sm:text-left min-w-0 flex-1">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-white/50 mb-1">
                      <Music2 size={11} /> Playable Track
                    </div>
                    <h4 className="text-base font-black text-white leading-snug truncate">
                      {sec.playableSong}
                    </h4>
                    <p className="text-xs font-semibold mt-0.5" style={{ color: sec.color }}>
                      {sec.playableArtist}
                    </p>

                    {/* Animated Equalizer while playing */}
                    {isThisPlaying && (
                      <div className="flex items-end justify-center sm:justify-start gap-1 h-3.5 mt-2">
                        {[1, 2, 3, 4, 5, 6].map((b) => (
                          <motion.div
                            key={b}
                            className="w-1 rounded-full"
                            style={{ background: sec.color }}
                            animate={{ height: ['3px', '14px', '5px'] }}
                            transition={{
                              duration: 0.4 + b * 0.08,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: b * 0.06,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* ── Favorite Songs List ── */}
                <div className="mb-6">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-2 font-mono flex items-center gap-1.5">
                    <Sparkles size={12} /> Favorite Track Rotations
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    {sec.favSongs.map((songName, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-white/80"
                      >
                        <span className="text-[10px] font-mono text-white/30 shrink-0">
                          0{i + 1}
                        </span>
                        <span className="truncate">{songName}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Favorite Artists with Spotify Profile Cards ── */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-3 font-mono flex items-center gap-1.5">
                    <Disc size={12} /> Favorite Artists & Spotify Profiles
                  </h4>

                  <div className="flex flex-col gap-3">
                    {sec.favArtists.map((artist) => (
                      <div
                        key={artist.name}
                        className="p-3.5 rounded-xl bg-white/[0.03] border border-white/8 hover:border-white/20 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group"
                      >
                        {/* Avatar & Info */}
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 shrink-0 shadow-md group-hover:scale-105 transition-transform">
                            <img
                              src={artist.img}
                              alt={artist.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h5 className="font-bold text-sm text-white group-hover:text-green-400 transition-colors truncate">
                                {artist.name}
                              </h5>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/70">
                                {artist.badge}
                              </span>
                            </div>
                            <p className="text-xs text-white/50 mt-0.5 italic line-clamp-1">
                              "{artist.comment}"
                            </p>
                          </div>
                        </div>

                        {/* Direct Spotify Button */}
                        <a
                          href={artist.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1DB954]/15 hover:bg-[#1DB954] text-[#1DB954] hover:text-black border border-[#1DB954]/30 hover:border-[#1DB954] text-xs font-bold transition-all shadow-sm"
                        >
                          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                          </svg>
                          <span>Spotify</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Global Spotify Profile Link */}
      <motion.a
        href="https://open.spotify.com/user/7b9xyt1jj2hsdqqb27g3yyeka"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center justify-between gap-4 w-full bg-[#1DB954]/10 border border-[#1DB954]/30 hover:border-[#1DB954]/60 hover:bg-[#1DB954]/20 rounded-2xl p-6 transition-all group shadow-xl"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#1DB954]/20 flex items-center justify-center text-[#1DB954] shrink-0 shadow-md">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-white text-base group-hover:text-[#1DB954] transition-colors">
              Follow .sai chetan on Spotify
            </p>
            <p className="text-xs text-white/50 mt-0.5">
              Explore full public listening history, liked songs & customized blends
            </p>
          </div>
        </div>
        <ExternalLink size={18} className="text-white/40 group-hover:text-white transition-colors" />
      </motion.a>
    </Layout>
  );
}
