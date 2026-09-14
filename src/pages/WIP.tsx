import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { JoJoMenacingSticker, SaitamaRegimenCard, ScrollDownYuji } from '../components/AnimeStickers';

export default function WIP({ section }: { section: 'writing' | 'gym' }) {
  if (section === 'gym') {
    return (
      <Layout
        title="Gym"
        subtitle="Pushing plates and watching anime"
        themeColor="from-slate-700 to-zinc-950"
        accentColor="#f59e0b"
      >
        <ScrollDownYuji />

        <div className="flex flex-col items-center justify-center min-h-[55vh] gap-8 text-center py-12 max-w-3xl mx-auto">
          {/* Animated emoji */}
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, -6, 6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="text-[80px] md:text-[100px] select-none"
          >
            🏋️
          </motion.div>

          {/* WIP heading */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black tracking-tight mb-2 text-white"
            >
              Gains Loading...
            </motion.h2>
            <p className="text-white/40 text-lg">Pushing plates and watching anime</p>
          </div>

          {/* Warning box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 }}
            className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 shadow-xl"
          >
            <p className="text-sm text-amber-300/90 leading-relaxed font-mono">
              ⚠️ Still figuring out if I even go to the gym or just talk about it.
            </p>
          </motion.div>

          {/* Motivational quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="italic text-white/50 text-base font-medium max-w-sm mx-auto"
          >
            "bro said he goes to the gym" — everyone who knows me 💀
          </motion.p>

          {/* Fav foods callout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 text-white/40 text-sm bg-black/40 border border-white/5 px-6 py-3 rounded-full"
          >
            <span>Fueled by</span>
            <span className="text-xl">🍛</span>
            <span className="font-semibold text-white/70">Biryani</span>
            <span className="text-white/20">+</span>
            <span className="text-xl">🍦</span>
            <span className="font-semibold text-white/70">Ice Cream</span>
            <span>while doing absolutely nothing productive</span>
          </motion.div>

          {/* JoJo Menacing + Saitama 100 Pushups Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6 items-stretch">
            {/* JoJo Menacing Stand Power Card */}
            <div className="p-6 rounded-2xl bg-[#141018] border border-purple-500/30 shadow-xl flex flex-col items-center justify-between text-center">
              <div className="text-xs font-mono text-purple-400 uppercase font-bold mb-2">
                ⚡ Stand Power Awakening
              </div>
              <JoJoMenacingSticker />
              <div className="mt-3">
                <h4 className="text-lg font-black text-white">"Oh? You're approaching the rack?"</h4>
                <p className="text-xs text-white/50 italic mt-1">"I can't hit PR without getting closer."</p>
              </div>
            </div>

            {/* Saitama Regimen Card */}
            <div className="p-2 flex flex-col justify-center">
              <SaitamaRegimenCard />
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
