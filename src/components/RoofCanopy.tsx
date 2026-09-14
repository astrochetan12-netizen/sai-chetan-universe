import { motion } from 'framer-motion';

function LeftCornerVines() {
  return (
    <div className="absolute top-0 left-0 pointer-events-none select-none" style={{ width: 260, height: 160, zIndex: 30 }}>
      <svg width="260" height="160" viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
        <defs>
          <linearGradient id="trunkL" x1="0" y1="0" x2="130" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#08170c" />
            <stop offset="50%" stopColor="#14331c" />
            <stop offset="100%" stopColor="#0d2414" />
          </linearGradient>
          <linearGradient id="leafGL" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#48bb78" />
            <stop offset="100%" stopColor="#1c4527" />
          </linearGradient>
        </defs>

        {/* Main thick gnarled branch going right from top-left */}
        <path d="M-10,10 C30,8 70,20 120,30 C160,38 200,28 240,20" stroke="url(#trunkL)" strokeWidth="22" strokeLinecap="round" fill="none" />
        <path d="M-10,10 C30,8 70,20 120,30 C160,38 200,28 240,20" stroke="#1a4a24" strokeWidth="18" strokeLinecap="round" fill="none" />
        {/* Bark texture line */}
        <path d="M10,14 C50,12 90,22 130,32" stroke="#2d6a3f" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4" />

        {/* Branch going down-left */}
        <path d="M60,22 C55,55 40,90 30,130" stroke="url(#trunkL)" strokeWidth="14" strokeLinecap="round" fill="none" />
        <path d="M60,22 C55,55 40,90 30,130" stroke="#1a4a24" strokeWidth="10" strokeLinecap="round" fill="none" />

        {/* Secondary thinner hanging vine */}
        <path d="M140,28 Q135,65 125,110" stroke="#1b4727" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M200,22 Q195,55 185,90" stroke="#1b4727" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* Thick foliage clusters */}
        {/* Cluster 1 - top left */}
        <ellipse cx="20" cy="8" rx="28" ry="18" fill="#14532d" opacity="0.95" />
        <ellipse cx="45" cy="5" rx="22" ry="14" fill="#166534" opacity="0.9" />
        <ellipse cx="10" cy="15" rx="18" ry="12" fill="#15803d" opacity="0.85" />

        {/* Cluster 2 - mid left */}
        <ellipse cx="80" cy="18" rx="24" ry="15" fill="#166534" opacity="0.9" />
        <ellipse cx="100" cy="12" rx="18" ry="12" fill="#15803d" opacity="0.85" />
        <ellipse cx="70" cy="25" rx="16" ry="10" fill="#14532d" opacity="0.8" />

        {/* Cluster 3 - far right */}
        <ellipse cx="200" cy="16" rx="28" ry="16" fill="#14532d" opacity="0.9" />
        <ellipse cx="225" cy="10" rx="22" ry="13" fill="#166534" opacity="0.85" />
        <ellipse cx="240" cy="20" rx="16" ry="10" fill="#15803d" opacity="0.8" />

        {/* Individual leaves hanging down */}
        <ellipse cx="125" cy="50" rx="8" ry="5" fill="#22c55e" transform="rotate(-30 125 50)" opacity="0.8" />
        <ellipse cx="138" cy="68" rx="7" ry="4.5" fill="#16a34a" transform="rotate(20 138 68)" opacity="0.75" />
        <ellipse cx="128" cy="88" rx="6" ry="4" fill="#15803d" transform="rotate(-15 128 88)" opacity="0.7" />

        <ellipse cx="185" cy="55" rx="7" ry="4.5" fill="#22c55e" transform="rotate(25 185 55)" opacity="0.75" />
        <ellipse cx="188" cy="75" rx="6" ry="4" fill="#16a34a" transform="rotate(-20 188 75)" opacity="0.7" />

        {/* Wisteria flower clusters */}
        <ellipse cx="110" cy="100" rx="4" ry="6" fill="#c084fc" opacity="0.8" />
        <ellipse cx="118" cy="106" rx="3.5" ry="5.5" fill="#a855f7" opacity="0.75" />
        <ellipse cx="103" cy="108" rx="3" ry="5" fill="#d8b4fe" opacity="0.7" />

        <ellipse cx="175" cy="82" rx="3.5" ry="5.5" fill="#c084fc" opacity="0.75" />
        <ellipse cx="183" cy="88" rx="3" ry="5" fill="#a855f7" opacity="0.7" />

        {/* Down the left branch - leaves */}
        <ellipse cx="48" cy="60" rx="9" ry="5.5" fill="#22c55e" transform="rotate(-40 48 60)" opacity="0.8" />
        <ellipse cx="42" cy="85" rx="8" ry="5" fill="#16a34a" transform="rotate(30 42 85)" opacity="0.75" />
        <ellipse cx="35" cy="110" rx="7" ry="4.5" fill="#15803d" transform="rotate(-25 35 110)" opacity="0.7" />
      </svg>
    </div>
  );
}

function RightCornerVines() {
  return (
    <div className="absolute top-0 right-0 pointer-events-none select-none" style={{ width: 200, height: 160, zIndex: 30 }}>
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible" style={{ transform: 'scaleX(-1)' }}>
        <defs>
          <linearGradient id="trunkR" x1="0" y1="0" x2="130" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#08170c" />
            <stop offset="50%" stopColor="#14331c" />
            <stop offset="100%" stopColor="#0d2414" />
          </linearGradient>
        </defs>

        {/* Main thick right branch */}
        <path d="M-10,8 C30,6 70,18 110,28 C140,36 170,26 200,18" stroke="url(#trunkR)" strokeWidth="20" strokeLinecap="round" fill="none" />
        <path d="M-10,8 C30,6 70,18 110,28 C140,36 170,26 200,18" stroke="#1a4a24" strokeWidth="16" strokeLinecap="round" fill="none" />

        {/* Branch going down */}
        <path d="M55,20 C52,52 38,88 28,128" stroke="url(#trunkR)" strokeWidth="12" strokeLinecap="round" fill="none" />
        <path d="M55,20 C52,52 38,88 28,128" stroke="#1a4a24" strokeWidth="8" strokeLinecap="round" fill="none" />

        {/* Foliage clusters */}
        <ellipse cx="15" cy="7" rx="26" ry="16" fill="#14532d" opacity="0.95" />
        <ellipse cx="40" cy="4" rx="20" ry="13" fill="#166534" opacity="0.9" />
        <ellipse cx="80" cy="16" rx="22" ry="14" fill="#14532d" opacity="0.9" />
        <ellipse cx="100" cy="10" rx="18" ry="11" fill="#15803d" opacity="0.85" />
        <ellipse cx="160" cy="14" rx="26" ry="15" fill="#166534" opacity="0.9" />
        <ellipse cx="185" cy="8" rx="18" ry="12" fill="#14532d" opacity="0.85" />

        {/* Hanging leaves */}
        <ellipse cx="48" cy="55" rx="8" ry="5" fill="#22c55e" transform="rotate(-35 48 55)" opacity="0.8" />
        <ellipse cx="40" cy="80" rx="7" ry="4.5" fill="#16a34a" transform="rotate(25 40 80)" opacity="0.75" />
        <ellipse cx="32" cy="105" rx="6.5" ry="4" fill="#15803d" transform="rotate(-20 32 105)" opacity="0.7" />

        {/* Wisteria */}
        <ellipse cx="100" cy="88" rx="3.5" ry="5.5" fill="#c084fc" opacity="0.8" />
        <ellipse cx="108" cy="94" rx="3" ry="5" fill="#a855f7" opacity="0.75" />
      </svg>
    </div>
  );
}

// Glowing fireflies
function Firefly({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-yellow-300"
      style={{
        left: x,
        top: y,
        width: 4,
        height: 4,
        boxShadow: '0 0 8px 3px rgba(253,224,71,0.8)',
        zIndex: 31,
      }}
      animate={{
        opacity: [0, 1, 0],
        x: [0, 12, -8, 0],
        y: [0, -10, 5, 0],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}

const FIREFLY_POSITIONS = [
  { x: 180, y: 25, delay: 0 },
  { x: 240, y: 40, delay: 0.8 },
  { x: 130, y: 55, delay: 1.5 },
  { x: 310, y: 30, delay: 2.2 },
  { x: 380, y: 50, delay: 0.4 },
];

export default function RoofCanopy() {
  return (
    <div className="fixed top-0 left-0 w-full pointer-events-none select-none" style={{ zIndex: 30, height: 170 }}>
      {/* Ambient forest top gradient vignette - subtle */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#040e07]/80 via-[#091f11]/30 to-transparent" />

      {/* Left corner vine cluster */}
      <LeftCornerVines />

      {/* Right corner vine cluster */}
      <RightCornerVines />

      {/* Glowing fireflies */}
      {FIREFLY_POSITIONS.map((f, i) => (
        <Firefly key={i} x={f.x} y={f.y} delay={f.delay} />
      ))}
    </div>
  );
}
