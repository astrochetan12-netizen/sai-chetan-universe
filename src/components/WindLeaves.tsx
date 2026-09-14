import { motion } from 'framer-motion';

// 8 leaves with diverse natural wind trajectories, staggered timings, and varying scales
const LEAVES = [
  { id: 1, duration: 25, delay: 0,  scale: 0.95, startX: '-4vw',  startY: '-6vh',  endX: '106vw', endY: '104vh' },
  { id: 2, duration: 32, delay: 4,  scale: 0.75, startX: '15vw',  startY: '-8vh',  endX: '112vw', endY: '108vh' },
  { id: 3, duration: 28, delay: 8,  scale: 1.1,  startX: '-8vw',  startY: '12vh',  endX: '104vw', endY: '114vh' },
  { id: 4, duration: 36, delay: 13, scale: 0.85, startX: '8vw',   startY: '-10vh', endX: '115vw', endY: '105vh' },
  { id: 5, duration: 29, delay: 17, scale: 1.0,  startX: '-5vw',  startY: '25vh',  endX: '108vw', endY: '110vh' },
  { id: 6, duration: 34, delay: 21, scale: 0.7,  startX: '22vw',  startY: '-6vh',  endX: '116vw', endY: '106vh' },
  { id: 7, duration: 27, delay: 25, scale: 0.9,  startX: '-6vw',  startY: '40vh',  endX: '105vw', endY: '116vh' },
  { id: 8, duration: 38, delay: 30, scale: 0.8,  startX: '30vw',  startY: '-8vh',  endX: '118vw', endY: '108vh' },
];

export default function WindLeaves() {
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {LEAVES.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{
            transformStyle: 'preserve-3d',
            filter: 'drop-shadow(0 0 6px rgba(74, 222, 128, 0.4))',
          }}
          initial={{
            x: leaf.startX,
            y: leaf.startY,
            opacity: 0,
            scale: leaf.scale,
          }}
          animate={{
            x: [leaf.startX, '24vw', '52vw', '78vw', leaf.endX],
            y: [leaf.startY, '26vh', '54vh', '80vh', leaf.endY],
            opacity: [0, 0.75, 0.85, 0.75, 0],
            rotateZ: [0, 100, 200, 290, 360],
            rotateX: [0, 180, 360, 180, 0],
            rotateY: [0, 90, 240, 120, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          {/* Detailed Organic Leaf Shape (Zero square artifacts) */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            {/* Leaf Body */}
            <path
              d="M5,35 Q15,10 35,5 Q30,25 5,35 Z"
              fill="url(#leafGradientMore)"
              stroke="#86efac"
              strokeWidth="0.8"
            />
            {/* Center Leaf Vein */}
            <path
              d="M5,35 Q20,20 35,5"
              stroke="#bbf7d0"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
            {/* Side Veins */}
            <path d="M14,26 Q18,23 23,26" stroke="#bbf7d0" strokeWidth="0.5" strokeLinecap="round" opacity="0.85" />
            <path d="M20,20 Q24,17 29,20" stroke="#bbf7d0" strokeWidth="0.5" strokeLinecap="round" opacity="0.85" />
            <path d="M26,14 Q30,11 34,14" stroke="#bbf7d0" strokeWidth="0.5" strokeLinecap="round" opacity="0.85" />

            <defs>
              <linearGradient id="leafGradientMore" x1="5" y1="35" x2="35" y2="5" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#15803d" />
                <stop offset="50%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#a3e635" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
