import { motion } from 'framer-motion';

// Tiny clouds drifting across the bottom-most area with organic speeds and paths
const CLOUD_PARTICLES = [
  { id: 1, duration: 24, delay: 0, scale: 0.65, bottom: '8px', startX: '-15vw', endX: '115vw', opacity: 0.35 },
  { id: 2, duration: 32, delay: 5, scale: 0.5, bottom: '28px', startX: '-12vw', endX: '112vw', opacity: 0.25 },
  { id: 3, duration: 28, delay: 11, scale: 0.8, bottom: '4px', startX: '-20vw', endX: '118vw', opacity: 0.4 },
  { id: 4, duration: 36, delay: 16, scale: 0.55, bottom: '34px', startX: '-10vw', endX: '110vw', opacity: 0.28 },
  { id: 5, duration: 30, delay: 22, scale: 0.7, bottom: '16px', startX: '-16vw', endX: '114vw', opacity: 0.38 },
  { id: 6, duration: 26, delay: 9, scale: 0.6, bottom: '2px', startX: '-14vw', endX: '116vw', opacity: 0.32 },
  { id: 7, duration: 34, delay: 18, scale: 0.75, bottom: '22px', startX: '-18vw', endX: '115vw', opacity: 0.3 },
];

export default function BottomMotionClouds() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 pointer-events-none z-30 overflow-hidden select-none">
      {/* Subtle bottom mist baseline glow */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-emerald-950/20 via-cyan-950/10 to-transparent pointer-events-none" />

      {CLOUD_PARTICLES.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute pointer-events-none"
          style={{
            bottom: cloud.bottom,
            scale: cloud.scale,
            filter: 'blur(0.5px) drop-shadow(0 2px 8px rgba(180, 220, 240, 0.15))',
          }}
          initial={{
            x: cloud.startX,
            opacity: 0,
          }}
          animate={{
            x: [cloud.startX, cloud.endX],
            y: [0, -4, 2, -3, 0],
            opacity: [0, cloud.opacity, cloud.opacity * 1.1, cloud.opacity, 0],
          }}
          transition={{
            duration: cloud.duration,
            delay: cloud.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Detailed Tiny Anime-Aesthetic Cloud SVG */}
          <svg
            width="90"
            height="36"
            viewBox="0 0 90 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            <path
              d="M12 30C8 30 4 27 4 22C4 17.5 7.5 15 11 15C11.5 10 16 5 23 5C30 5 34 9 35 12C38 8 45 7 51 10C57 13 58 17 58 19C61 17 67 17 71 20C75 23 75 27 72 30H12Z"
              fill="url(#cloudGrad)"
              opacity="0.9"
            />
            {/* Soft inner highlight puff */}
            <path
              d="M18 28C15 28 12 26 12 23C12 19 15 17 18 17C18.5 13 22 9 28 9C34 9 37 12 38 15C41 12 47 11 52 14C56 16 57 20 56 22C59 21 64 21 67 24C69 26 69 28 66 28H18Z"
              fill="url(#cloudHighlight)"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="cloudGrad" x1="0" y1="5" x2="0" y2="30" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#d1fae5" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="cloudHighlight" x1="12" y1="9" x2="12" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
