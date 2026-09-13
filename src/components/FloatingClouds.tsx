import { motion } from 'framer-motion';

// 4 clouds at different speeds, sizes, and vertical positions
const CLOUDS = [
  { id: 0, delay: 0,   duration: 35, top: '12%', scale: 0.6, opacity: 0.18 },
  { id: 1, delay: 12,  duration: 50, top: '28%', scale: 0.9, opacity: 0.12 },
  { id: 2, delay: 22,  duration: 40, top: '55%', scale: 0.5, opacity: 0.14 },
  { id: 3, delay: 7,   duration: 60, top: '70%', scale: 1.1, opacity: 0.10 },
];

export default function FloatingClouds() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {CLOUDS.map((c) => (
        <motion.div
          key={c.id}
          className="absolute w-20 h-12"
          style={{ top: c.top, left: 0, opacity: 0 }}
          animate={{
            x: ['−80px', '110vw'],
            opacity: [0, c.opacity, c.opacity, 0],
          }}
          transition={{
            duration: c.duration,
            delay: c.delay,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.05, 0.95, 1],
          }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('/assets/stickers/cloud.jpg')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              transform: `scale(${c.scale})`,
              transformOrigin: 'left center',
              mixBlendMode: 'screen',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
