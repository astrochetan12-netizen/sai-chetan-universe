import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Layout({ children, title, themeColor = 'from-accentIndigo to-accentMaroon' }: { children: React.ReactNode, title: string, themeColor?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen w-full relative bg-darkBase text-white pb-20"
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>
      
      {/* Header */}
      <div className={`w-full h-48 bg-gradient-to-br ${themeColor} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-darkBase to-transparent" />
        
        <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center relative z-10">
          <Link to="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-4 w-fit">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Hub
          </Link>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">{title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 mt-8 relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
