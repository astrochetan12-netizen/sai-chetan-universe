import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Disc, PlayCircle, Headphones } from 'lucide-react';
import data from '../../site-data/shows-movies-music.json';

const VinylRecord = ({ isPlaying = true }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
    className={`w-16 h-16 rounded-full bg-[#111] border-4 border-[#222] flex items-center justify-center shadow-lg relative ${!isPlaying ? 'animation-paused' : ''}`}
  >
    {/* Grooves */}
    <div className="absolute inset-2 rounded-full border border-white/5" />
    <div className="absolute inset-3 rounded-full border border-white/5" />
    {/* Center Label */}
    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
      <div className="w-1.5 h-1.5 bg-black rounded-full" />
    </div>
  </motion.div>
);

export default function Music() {
  const { music } = data;
  const cols = music.columns;

  const SpotifyEmbed = ({ trackId }: { trackId: string }) => (
    <iframe 
      style={{ borderRadius: '12px', marginTop: '16px' }} 
      src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`} 
      width="100%" 
      height="80" 
      frameBorder="0" 
      allowFullScreen={true} 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"
    />
  );

  return (
    <Layout title="Music Vibes" themeColor="from-green-500 to-emerald-800">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        
        {/* English */}
        <div className="bg-[#181818] rounded-2xl p-6 border border-white/5 hover:border-green-500/30 transition-colors group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Headphones size={64} />
          </div>
          <h3 className="text-xl font-bold mb-6 text-green-400 border-b border-white/10 pb-2">English</h3>
          
          <div className="flex items-center gap-4 mb-2">
            <VinylRecord />
            <div>
              <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Top Track</p>
              <p className="font-bold leading-tight">{cols.english.top_song}</p>
            </div>
          </div>
          
          <SpotifyEmbed trackId="4u4NxuwGtgVNAkymiC9k2u" /> {/* Hold On - Justin Bieber */}
          
          <div className="space-y-4 mt-6">
            <div>
              <p className="text-xs text-white/50 uppercase">Fav Band</p>
              <p className="font-medium text-white/90">{cols.english.favorite_band}</p>
            </div>
            <div>
              <p className="text-xs text-white/50 uppercase">Fav Artists</p>
              <ul className="mt-1 space-y-1">
                {cols.english.favorite_artists.map(a => (
                  <li key={a} className="text-sm text-white/80">{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Telugu */}
        <div className="bg-[#181818] rounded-2xl p-6 border border-white/5 hover:border-green-500/30 transition-colors group relative overflow-hidden">
          <h3 className="text-xl font-bold mb-6 text-green-400 border-b border-white/10 pb-2">Telugu</h3>
          
          <div className="flex items-center gap-4 mb-2">
            <VinylRecord />
            <div>
              <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Top Tracks</p>
              {cols.telugu.top_songs.map((s, i) => (
                <p key={i} className="font-bold leading-tight mb-1 text-sm">{s}</p>
              ))}
            </div>
          </div>
          
          <SpotifyEmbed trackId="0GttF5W9YI3zHq2mY3B9V6" /> {/* Master The Blaster */}

          <div className="mt-6">
            <p className="text-xs text-white/50 uppercase">Fav Artist</p>
            <p className="font-medium text-white/90">{cols.telugu.favorite_artist}</p>
          </div>
        </div>

        {/* Hindi */}
        <div className="bg-[#181818] rounded-2xl p-6 border border-white/5 hover:border-green-500/30 transition-colors group relative overflow-hidden">
          <h3 className="text-xl font-bold mb-6 text-green-400 border-b border-white/10 pb-2">Hindi</h3>
          
          <div className="flex items-center gap-4 mb-2">
            <VinylRecord />
            <div>
              <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Top Tracks</p>
              {cols.hindi.top_songs.map((s, i) => (
                <p key={i} className="font-bold leading-tight mb-1 text-sm">{s}</p>
              ))}
            </div>
          </div>
          
          <SpotifyEmbed trackId="1tD8J13a74q8fCBj3YdZeb" /> {/* Zaalima */}

          <div className="mt-6">
            <p className="text-xs text-white/50 uppercase">Fav Artists</p>
            <ul className="mt-1 space-y-1">
              {cols.hindi.favorite_artists.map(a => (
                <li key={a} className="text-sm text-white/80">{a}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Japanese */}
        <div className="bg-[#181818] rounded-2xl p-6 border border-white/5 hover:border-green-500/30 transition-colors group relative overflow-hidden">
          <h3 className="text-xl font-bold mb-6 text-green-400 border-b border-white/10 pb-2">Japanese</h3>
          
          <div className="flex items-center gap-4 mb-2">
            <VinylRecord />
            <div>
              <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Top Tracks</p>
              <p className="font-bold leading-tight text-sm">Your Lie in April OST</p>
            </div>
          </div>
          
          <SpotifyEmbed trackId="0GgN4MhR5GKnEApXXalFpU" /> {/* Hikaru Nara */}

          <div className="space-y-3 mt-6">
            {cols.japanese.top_songs.map((s, i) => (
              i > 0 && <p key={i} className="text-sm text-white/80 border-l-2 border-white/10 pl-3">{s}</p>
            ))}
          </div>
        </div>

      </div>

      {/* Spotify Footer Embed style */}
      <a 
        href={music.spotify_profile} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block max-w-xl mx-auto"
      >
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-[#1ed760] text-black p-4 rounded-full flex items-center justify-center gap-3 font-bold text-lg shadow-[0_0_20px_rgba(30,215,96,0.4)]"
        >
          <Disc className="animate-spin-slow" /> 
          Follow my Spotify Profile
        </motion.div>
      </a>

    </Layout>
  );
}
