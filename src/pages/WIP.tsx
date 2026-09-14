import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Dumbbell, PenTool, Sparkles, Flame } from 'lucide-react';
import { JoJoMenacingSticker, SaitamaRegimenCard, ScrollDownYuji } from '../components/AnimeStickers';

export default function WIP({ section }: { section: 'writing' | 'gym' }) {
  const [repCount, setRepCount] = useState(0);

  if (section === 'gym') {
    return (
      <Layout
        title="The Iron Sanctuary"
        subtitle="Discipline · Anime Gym Grind"
        themeColor="from-zinc-800 to-stone-950"
        accentColor="#f59e0b"
      >
        <ScrollDownYuji />

        {/* Floating Saitama side sticker */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="fixed left-4 bottom-24 z-30 pointer-events-none select-none hidden lg:block"
        >
          <div className="bg-black/80 border-2 border-yellow-500/50 rounded-2xl p-3 text-center shadow-xl">
            <div className="text-3xl">👊</div>
            <div className="text-[10px] font-black text-yellow-300 font-mono mt-1">100 PUSHUPS</div>
            <div className="text-[10px] font-mono text-yellow-200">100 SITUPS</div>
            <div className="text-[10px] font-mono text-yellow-200">10KM RUN</div>
            <div className="text-[9px] text-white/50 mt-1 italic">every. single. day.</div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto py-8">
          {/* Hero Motivation Banner */}
          <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden bg-gradient-to-br from-[#121316] via-[#1a1b20] to-[#0c0d10] border border-white/10 shadow-2xl mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 px-3 py-1 rounded-full text-xs font-black text-amber-300 font-mono mb-4">
              <Dumbbell size={14} /> HEAVYWEIGHT CHAD ZONE
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-4">
              "Gains loading... or just talking about it 💀"
            </h1>

            <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto leading-relaxed mb-8">
              Pushing plates, progressive overload, and watching hype anime training montages to convince myself to hit leg day tomorrow.
            </p>

            {/* Interactive Rep Counter */}
            <div className="inline-flex flex-col items-center p-5 rounded-2xl bg-black/60 border border-white/10 shadow-lg">
              <p className="text-xs text-white/50 uppercase font-mono tracking-wider mb-1">
                Virtual Dumbbell Curls
              </p>
              <div className="text-4xl font-black text-amber-400 font-mono my-1">
                {repCount} REPS
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setRepCount((r) => r + 1)}
                className="mt-2 px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
              >
                <Flame size={14} /> Hit One More Rep!
              </motion.button>
            </div>
          </div>

          {/* ── JoJo Menacing & Saitama Memes Section ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            {/* JoJo's Bizarre Adventure Menacing Card */}
            <div className="p-6 rounded-2xl bg-[#141018] border border-purple-500/30 shadow-xl text-center flex flex-col items-center">
              <div className="text-xs font-mono text-purple-400 uppercase font-bold mb-3 flex items-center gap-1.5">
                <Sparkles size={13} /> Stand Power Awakening
              </div>
              <JoJoMenacingSticker />
              <h3 className="text-xl font-black text-white mt-4">
                "Oh? You're approaching the squat rack?"
              </h3>
              <p className="text-xs text-white/60 mt-1.5 leading-relaxed italic">
                "I can't hit PR without getting closer." — Jotaro gym motivation energy.
              </p>
            </div>

            {/* Saitama Secret Regimen Card */}
            <div className="flex flex-col justify-center">
              <SaitamaRegimenCard />

              <div className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <p className="text-xs text-white/60">
                  Fueled by <strong>🍛 Biryani</strong> & <strong>🍦 Ice Cream</strong> while contemplating life choices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Writing Section
  return (
    <Layout
      title="The Writer's Quill"
      subtitle="Reflections, Quotes & Stories"
      themeColor="from-purple-800 to-indigo-950"
      accentColor="#a855f7"
    >
      <div className="max-w-3xl mx-auto py-12 text-center">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-6xl mb-6 select-none"
        >
          ✍️
        </motion.div>

        <h2 className="text-4xl font-black text-white tracking-tight mb-3">
          Stories Are Brewing...
        </h2>
        <p className="text-white/50 text-base leading-relaxed max-w-md mx-auto mb-8">
          A collection of unfiltered musings, character arcs, and late-night philosophy from someone who consumes way too much fiction.
        </p>

        <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 shadow-xl max-w-lg mx-auto text-left relative">
          <div className="absolute top-3 right-4 text-xs font-mono text-purple-400">
            DRAFT #01
          </div>
          <p className="text-sm text-white/80 leading-relaxed italic font-serif">
            "Words are the only things that truly last forever. Everything else rusts, erodes, or fades into quiet memory."
          </p>
          <div className="mt-4 flex items-center justify-between text-xs text-white/40 font-mono">
            <span>— .sai chetan</span>
            <span>Midnight Scribbles</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
