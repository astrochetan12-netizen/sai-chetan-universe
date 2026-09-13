import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';

// Glass shard fragment – pure CSS polygon clip paths
const SHARDS = [
  'polygon(0 0, 40% 0, 30% 45%, 0 30%)',
  'polygon(40% 0, 100% 0, 100% 35%, 60% 50%, 30% 45%)',
  'polygon(0 30%, 30% 45%, 20% 70%, 0 60%)',
  'polygon(30% 45%, 60% 50%, 55% 80%, 20% 70%)',
  'polygon(60% 50%, 100% 35%, 100% 70%, 70% 85%)',
  'polygon(20% 70%, 55% 80%, 45% 100%, 0 100%, 0 60%)',
  'polygon(55% 80%, 70% 85%, 100% 100%, 45% 100%)',
  'polygon(70% 85%, 100% 70%, 100% 100%)',
];

interface Props {
  children: ReactNode;
  isVisible: boolean;
}

export function ShatterOverlay({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 z-[999] pointer-events-none overflow-hidden">
      {SHARDS.map((clip, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 bg-white/10 backdrop-blur-sm"
          style={{ clipPath: clip }}
          initial={{ opacity: 0.8, scale: 1, x: 0, y: 0 }}
          animate={{
            opacity: 0,
            scale: [1, 1.04, 0.9],
            x: (i % 2 === 0 ? -1 : 1) * (20 + i * 8),
            y: (i % 3 === 0 ? -1 : 1) * (15 + i * 5),
          }}
          transition={{ duration: 0.55, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  );
}

export function useShatter() {
  const [shattering, setShattering] = useState(false);
  const triggerShatter = () => {
    setShattering(true);
    setTimeout(() => setShattering(false), 700);
  };
  return { shattering, triggerShatter };
}
