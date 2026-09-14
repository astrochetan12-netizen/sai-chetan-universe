import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import data from '../../site-data/shows-movies-music.json';

const Vinyl = ({ color }: { color: string }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
    className="w-20 h-20 rounded-full flex items-center justify-center shrink-0 shadow-xl relative"
    style={{ background: 'conic-gradient(#1a1a1a, #333, #1a1a1a, #444, #1a1a1a)', border: '4px solid #222' }}
  >
    <div className="absolute inset-3 rounded-full border border-white/[0.06]" />
    <div className="absolute inset-5 rounded-full border border-white/[0.06]" />
    <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: color }}>
      <div className="w-2 h-2 rounded-full bg-black/60" />
    </div>
    <div className="absolute inset-0 rounded-full" style={{ boxShadow: `0 0 20px ${color}77` }} />
  </motion.div>
);

const SpotifyEmbed = ({ trackId }: { trackId: string }) => (
  <iframe
    src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
    width="100%" height="80"
    style={{ border: 'none' }}
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy" className="rounded-xl mt-3"
  />
);

const ArtistChip = ({ name, emoji }: { name: string; emoji: string }) => (
  <div className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-3 py-1.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors">
    <span>{emoji}</span><span>{name}</span>
  </div>
);

const ArtistAvatar = ({ src, fallback }: { src: string; fallback: string }) => (
  <div className="flex flex-col items-center gap-1 mb-2">
    <img src={src} alt={fallback} className="w-12 h-12 rounded-full object-cover border-2 border-white/20 shadow-lg" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
    <span className="text-[10px] text-white/40 font-mono">{fallback}</span>
  </div>
);

export default function Music() {
  const { music } = data;
  const c = music.columns;

  return (
    <Layout title="Music Vibes" subtitle="4 languages · one playlist" themeColor="from-green-600 to-emerald-900" accentColor="#22c55e">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">

        {/* English */}
        <div className="relative overflow-hidden bg-[#0e1410] border border-green-900/30 rounded-2xl p-6 flex flex-col gap-5 hover:border-green-500/25 transition-colors">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <span className="text-lg">🇬🇧</span>
            <h3 className="text-lg font-black text-green-400 tracking-tight">English</h3>
          </div>
          <div className="flex items-center gap-4">
            <Vinyl color="#22c55e" />
            <div>
              <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5 font-mono">Top Track</p>
              <p className="font-bold text-white text-sm leading-snug">{c.english.top_song}</p>
            </div>
          </div>
          <SpotifyEmbed trackId="4u4NxuwGtgVNAkymiC9k2u" />
          <div>
            <p className="text-[10px] text-white/30 uppercase tracking-widest mb-2 font-mono">Artists</p>
            <ArtistAvatar src="https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36" fallback="Justin Bieber" />
            <div className="flex flex-col gap-2">
              {([['One Direction','🎸'],['XXXTENTACION','🖤'],['The Weeknd','🌙'],['Justin Bieber','💛'],['Charlie Puth','🎹']] as [string,string][]).map(([n,e]) => <ArtistChip key={n} name={n} emoji={e} />)}
            </div>
          </div>
        </div>

        {/* Telugu */}
        <div className="relative overflow-hidden bg-[#100e14] border border-indigo-900/30 rounded-2xl p-6 flex flex-col gap-5 hover:border-indigo-500/25 transition-colors">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <span className="text-lg">🇮🇳</span>
            <h3 className="text-lg font-black text-indigo-400 tracking-tight">Telugu</h3>
          </div>
          <div className="flex items-center gap-4">
            <Vinyl color="#818cf8" />
            <div>
              <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5 font-mono">Top Tracks</p>
              {c.telugu.top_songs.map((s: string) => <p key={s} className="font-bold text-white text-sm leading-snug">{s}</p>)}
            </div>
          </div>
          <SpotifyEmbed trackId="5nujrmhLynf4yMoMtj36LC" />
          <div>
            <p className="text-[10px] text-white/30 uppercase tracking-widest mb-2 font-mono">Artist</p>
            <ArtistAvatar src="https://i.scdn.co/image/ab6761610000e5ebf7db7c8eded070e452aa6571" fallback="Anirudh" />
            <div className="flex flex-col gap-2">
              <ArtistChip name={c.telugu.favorite_artist} emoji="🎵" />
            </div>
          </div>
        </div>

        {/* Hindi */}
        <div className="relative overflow-hidden bg-[#100a0a] border border-rose-900/30 rounded-2xl p-6 flex flex-col gap-5 hover:border-rose-500/25 transition-colors">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <span className="text-lg">🇮🇳</span>
            <h3 className="text-lg font-black text-rose-400 tracking-tight">Hindi</h3>
          </div>
          <div className="flex items-center gap-4">
            <Vinyl color="#fb7185" />
            <div>
              <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5 font-mono">Top Tracks</p>
              {c.hindi.top_songs.map((s: string) => <p key={s} className="font-bold text-white text-sm leading-snug">{s}</p>)}
            </div>
          </div>
          <SpotifyEmbed trackId="1tD8J13a74q8fCBj3YdZeb" />
          <div>
            <p className="text-[10px] text-white/30 uppercase tracking-widest mb-2 font-mono">Artists</p>
            <ArtistAvatar src="https://i.scdn.co/image/ab6761610000e5eb57a464f5a8018c6c878ec8e3" fallback="Arijit Singh" />
            <div className="flex flex-col gap-2">
              {([['Arijit Singh','❤️'],['Anuv Jain','🌙']] as [string,string][]).map(([n,e]) => <ArtistChip key={n} name={n} emoji={e} />)}
            </div>
          </div>
        </div>

        {/* Japanese */}
        <div className="relative overflow-hidden bg-[#0a0e14] border border-cyan-900/30 rounded-2xl p-6 flex flex-col gap-5 hover:border-cyan-500/25 transition-colors">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <span className="text-lg">🇯🇵</span>
            <h3 className="text-lg font-black text-cyan-400 tracking-tight">Japanese</h3>
          </div>
          <div className="flex items-center gap-4">
            <Vinyl color="#22d3ee" />
            <div>
              <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5 font-mono">Top Track</p>
              <p className="font-bold text-white text-sm leading-snug">Your Lie in April OST</p>
            </div>
          </div>
          <SpotifyEmbed trackId="0GgN4MhR5GKnEApXXalFpU" />
          <div className="flex flex-col gap-1.5">
            {c.japanese.top_songs.slice(1).map((s: string) => <p key={s} className="text-sm text-white/55 border-l-2 border-cyan-800/50 pl-3 leading-snug">{s}</p>)}
          </div>
        </div>

      </div>

      {/* Spotify profile */}
      <motion.a href={music.spotify_profile} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
        className="flex items-center justify-center gap-4 w-full bg-[#1DB954]/10 border border-[#1DB954]/30 hover:border-[#1DB954]/60 hover:bg-[#1DB954]/20 rounded-2xl py-5 transition-all group"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#1DB954]" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        <div className="text-left">
          <p className="font-bold text-white text-base group-hover:text-[#1DB954] transition-colors">Open My Spotify</p>
          <p className="text-xs text-white/35">See what I'm actually listening to rn</p>
        </div>
      </motion.a>
    </Layout>
  );
}
