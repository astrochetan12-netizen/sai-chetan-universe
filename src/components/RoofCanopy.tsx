import { motion } from 'framer-motion';

export default function RoofCanopy() {
  return (
    <div className="fixed top-0 left-0 w-full pointer-events-none z-30 overflow-visible">
      {/* Top vine ceiling border */}
      <div className="relative w-full h-24 md:h-32">
        {/* Deep forest canopy gradient at the very top */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black via-emerald-950/40 to-transparent pointer-events-none" />

        {/* Hanging vine SVG paths with natural sway */}
        <svg
          className="w-full h-32 md:h-40 overflow-visible"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main lush vine branches */}
          <motion.path
            d="M0,0 Q180,45 360,20 T720,40 T1080,25 T1440,35 L1440,0 L0,0 Z"
            fill="#0f2918"
            opacity="0.85"
            animate={{ d: [
              "M0,0 Q180,45 360,20 T720,40 T1080,25 T1440,35 L1440,0 L0,0 Z",
              "M0,0 Q180,30 360,35 T720,25 T1080,45 T1440,25 L1440,0 L0,0 Z",
              "M0,0 Q180,45 360,20 T720,40 T1080,25 T1440,35 L1440,0 L0,0 Z"
            ]}}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.path
            d="M0,0 Q120,60 280,35 T600,65 T950,40 T1300,60 T1440,20"
            stroke="#1d4d2b"
            strokeWidth="5"
            strokeLinecap="round"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.path
            d="M0,0 Q240,75 480,45 T960,70 T1440,40"
            stroke="#2b7a42"
            strokeWidth="3.5"
            strokeLinecap="round"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Dangling vine tendrils across the screen */}
          {[
            { x: 90,  h: 90, d: 5.5, delay: 0 },
            { x: 210, h: 120, d: 6.2, delay: 0.8 },
            { x: 350, h: 80, d: 5.0, delay: 1.2 },
            { x: 490, h: 130, d: 7.0, delay: 0.4 },
            { x: 620, h: 95, d: 6.5, delay: 1.6 },
            { x: 770, h: 140, d: 7.2, delay: 0.2 },
            { x: 910, h: 85, d: 5.8, delay: 1.4 },
            { x: 1040, h: 125, d: 6.8, delay: 0.9 },
            { x: 1190, h: 90, d: 5.4, delay: 1.1 },
            { x: 1330, h: 115, d: 6.0, delay: 0.5 },
          ].map((v, i) => (
            <g key={i}>
              <motion.path
                d={`M${v.x},0 Q${v.x + (i % 2 === 0 ? 12 : -12)},${v.h / 2} ${v.x},${v.h}`}
                stroke="#2d6a3f"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                animate={{
                  d: [
                    `M${v.x},0 Q${v.x + 15},${v.h / 2} ${v.x + 8},${v.h}`,
                    `M${v.x},0 Q${v.x - 15},${v.h / 2} ${v.x - 8},${v.h}`,
                    `M${v.x},0 Q${v.x + 15},${v.h / 2} ${v.x + 8},${v.h}`,
                  ]
                }}
                transition={{ duration: v.d, repeat: Infinity, ease: "easeInOut", delay: v.delay }}
              />
              {/* Leaves on each tendril */}
              <circle cx={v.x - 6} cy={v.h * 0.4} r="4" fill="#38a159" opacity="0.9" />
              <circle cx={v.x + 6} cy={v.h * 0.7} r="4.5" fill="#48bb78" opacity="0.9" />
              {/* Blooming flower at tip */}
              <circle cx={v.x} cy={v.h} r="5" fill={i % 3 === 0 ? "#f472b6" : i % 3 === 1 ? "#c084fc" : "#fbbf24"} />
              <circle cx={v.x} cy={v.h} r="2" fill="#fff" />
            </g>
          ))}
        </svg>

        {/* Glowing fairy lights along the roof */}
        <div className="absolute top-2 left-0 w-full flex justify-around px-8 pointer-events-none">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-amber-300"
              style={{
                boxShadow: "0 0 10px 3px rgba(251, 191, 36, 0.7)",
              }}
              animate={{ opacity: [0.35, 1, 0.35], scale: [0.9, 1.2, 0.9] }}
              transition={{
                duration: 2 + (i % 4) * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
