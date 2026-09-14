import { motion } from 'framer-motion';

export default function RoofCanopy() {
  return (
    <div className="fixed top-0 left-0 w-full pointer-events-none z-30 overflow-visible select-none">
      {/* ── Deep Forest Ambient Canopy Vignette ── */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#040e07] via-[#091f11]/60 to-transparent" />

      {/* ── Realistic Thick Vine Canopy SVG ── */}
      <svg
        className="w-full h-36 sm:h-44 md:h-52 overflow-visible"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Ancient gnarled wood gradient */}
          <linearGradient id="mainBranchGrad" x1="0" y1="0" x2="1440" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#08170c" />
            <stop offset="25%" stopColor="#14331c" />
            <stop offset="50%" stopColor="#0d2414" />
            <stop offset="75%" stopColor="#183d22" />
            <stop offset="100%" stopColor="#091b0f" />
          </linearGradient>

          {/* Secondary lush vine gradient */}
          <linearGradient id="vineSecondaryGrad" x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1b4727" />
            <stop offset="50%" stopColor="#245e33" />
            <stop offset="100%" stopColor="#2e7d44" />
          </linearGradient>

          {/* Leaf gradient with sunlight highlight */}
          <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#48bb78" />
            <stop offset="50%" stopColor="#2f855a" />
            <stop offset="100%" stopColor="#1c4527" />
          </linearGradient>

          {/* Wisteria flower gradient */}
          <linearGradient id="wisteriaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>

        {/* ── Main Ancient Thick Trunk Canopy ── */}
        <motion.path
          d="M0,-10 C160,35 320,15 500,42 C680,68 860,20 1060,48 C1240,75 1380,25 1440,30 L1440,-20 L0,-20 Z"
          fill="url(#mainBranchGrad)"
          opacity="0.95"
          animate={{
            d: [
              "M0,-10 C160,35 320,15 500,42 C680,68 860,20 1060,48 C1240,75 1380,25 1440,30 L1440,-20 L0,-20 Z",
              "M0,-10 C160,25 320,28 500,32 C680,55 860,32 1060,38 C1240,60 1380,35 1440,22 L1440,-20 L0,-20 Z",
              "M0,-10 C160,35 320,15 500,42 C680,68 860,20 1060,48 C1240,75 1380,25 1440,30 L1440,-20 L0,-20 Z",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Intertwining Thick Vines ── */}
        <motion.path
          d="M0,5 Q220,70 440,35 T880,65 T1320,40 T1440,25"
          stroke="url(#vineSecondaryGrad)"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.path
          d="M0,0 Q180,85 360,50 T760,80 T1180,55 T1440,35"
          stroke="#194023"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />

        <motion.path
          d="M0,15 Q260,95 560,60 T1040,85 T1440,45"
          stroke="#276738"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />

        {/* ── Dangling Realistic Vine Tendrils with Leaves & Wisteria Blossoms ── */}
        {[
          { x: 80,   h: 110, swing: 16, d: 5.8, delay: 0.1 },
          { x: 190,  h: 145, swing: 18, d: 6.6, delay: 0.9 },
          { x: 310,  h: 95,  swing: 14, d: 5.2, delay: 1.4 },
          { x: 440,  h: 160, swing: 22, d: 7.4, delay: 0.3 },
          { x: 570,  h: 120, swing: 15, d: 6.1, delay: 1.7 },
          { x: 700,  h: 175, swing: 24, d: 7.8, delay: 0.5 },
          { x: 830,  h: 115, swing: 16, d: 5.9, delay: 1.1 },
          { x: 960,  h: 150, swing: 20, d: 7.0, delay: 0.8 },
          { x: 1090, h: 105, swing: 15, d: 5.5, delay: 1.3 },
          { x: 1220, h: 140, swing: 19, d: 6.7, delay: 0.4 },
          { x: 1350, h: 115, swing: 16, d: 6.2, delay: 1.0 },
        ].map((v, i) => (
          <g key={i}>
            {/* Swaying Tendril Path */}
            <motion.path
              d={`M${v.x},20 Q${v.x + 8},${v.h * 0.55} ${v.x},${v.h}`}
              stroke="#245e33"
              strokeWidth="3.2"
              strokeLinecap="round"
              fill="none"
              animate={{
                d: [
                  `M${v.x},20 Q${v.x + v.swing},${v.h * 0.55} ${v.x + (v.swing * 0.6)},${v.h}`,
                  `M${v.x},20 Q${v.x - v.swing},${v.h * 0.55} ${v.x - (v.swing * 0.6)},${v.h}`,
                  `M${v.x},20 Q${v.x + v.swing},${v.h * 0.55} ${v.x + (v.swing * 0.6)},${v.h}`,
                ]
              }}
              transition={{ duration: v.d, repeat: Infinity, ease: "easeInOut", delay: v.delay }}
            />

            {/* Lush Leaf Clusters along the tendril */}
            <ellipse cx={v.x - 9} cy={v.h * 0.35} rx="8" ry="4.5" fill="url(#leafGrad)" transform={`rotate(-35 ${v.x - 9} ${v.h * 0.35})`} />
            <ellipse cx={v.x + 9} cy={v.h * 0.55} rx="9" ry="5"   fill="url(#leafGrad)" transform={`rotate(30 ${v.x + 9} ${v.h * 0.55})`} />
            <ellipse cx={v.x - 8} cy={v.h * 0.75} rx="7.5" ry="4" fill="url(#leafGrad)" transform={`rotate(-25 ${v.x - 8} ${v.h * 0.75})`} />

            {/* Hanging Wisteria / Lotus Bellflower cluster at tip */}
            <g transform={`translate(${v.x}, ${v.h - 5})`}>
              <ellipse cx="0" cy="0" rx="5.5" ry="5.5" fill="url(#wisteriaGrad)" />
              <ellipse cx="-4" cy="5" rx="4.5" ry="6" fill="#c084fc" opacity="0.9" />
              <ellipse cx="4"  cy="5" rx="4.5" ry="6" fill="#f472b6" opacity="0.9" />
              <ellipse cx="0"  cy="10" rx="4" ry="5.5" fill="#e879f9" opacity="0.95" />
              <ellipse cx="0"  cy="15" rx="2.5" ry="4" fill="#fae8ff" />
              <circle  cx="0"  cy="2"  r="2" fill="#fef08a" />
            </g>
          </g>
        ))}
      </svg>

      {/* ── Glowing Luminous Fireflies / Fairy Lights in the Canopy ── */}
      <div className="absolute top-2 left-0 w-full flex justify-between px-6 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{
              background: i % 3 === 0 ? '#fef08a' : i % 3 === 1 ? '#86efac' : '#fbcfe8',
              boxShadow: i % 3 === 0
                ? '0 0 12px 3px rgba(254, 240, 138, 0.75)'
                : i % 3 === 1
                ? '0 0 12px 3px rgba(134, 239, 172, 0.75)'
                : '0 0 12px 3px rgba(251, 207, 232, 0.75)',
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.3, 0.8],
              y: [0, (i % 2 === 0 ? 6 : -6), 0],
            }}
            transition={{
              duration: 2.5 + (i % 5) * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.25,
            }}
          />
        ))}
      </div>
    </div>
  );
}
