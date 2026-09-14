import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  themeColor?: string;
  accentColor?: string;
}

export default function Layout({ children, title, subtitle, themeColor = 'from-indigo-600 to-indigo-900', accentColor = '#5865f2' }: LayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen w-full relative bg-[#0b0c10] text-white pb-24"
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none mix-blend-overlay z-0" />

      {/* ── Header Banner ── */}
      <div className={`w-full relative overflow-hidden`} style={{ minHeight: '220px' }}>
        {/* Gradient bg */}
        <div className={`absolute inset-0 bg-gradient-to-br ${themeColor}`} />
        {/* Vignette bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0b0c10] to-transparent z-10" />
        {/* Halftone texture */}
        <div className="absolute inset-0 halftone opacity-10 z-0" />
        {/* Shimmer line */}
        <div className="absolute bottom-0 left-0 w-full h-px z-20" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`, opacity: 0.6 }} />

        <div className="relative z-20 max-w-6xl mx-auto px-6 pt-6 pb-10 flex flex-col gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium w-fit group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Hub
          </Link>

          <div className="flex items-end gap-4 mt-2">
            {/* Accent bar */}
            <div className="w-1.5 h-14 rounded-full" style={{ background: accentColor, boxShadow: `0 0 18px ${accentColor}88` }} />
            <div>
              {subtitle && (
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-1 font-mono">{subtitle}</p>
              )}
              <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none text-white drop-shadow-lg">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ── Page Content ── */}
      <div className="max-w-6xl mx-auto px-6 mt-6 relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
