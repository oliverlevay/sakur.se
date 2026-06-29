// An illustrated take on the original Sakur mark: a vintage gold pocket-watch
// — bow, crown, bezel, ticked dial and ornate hands — resting on a pink sakura
// blossom. Flat vector, but closer in spirit/detail to the original render.
const PETAL =
  'M50 56 C 35 50 34 28 43 18 C 46 21 48 22 50 22 C 52 22 54 21 57 18 C 66 28 65 50 50 56 Z';

const PETAL_ANGLES = [0, 72, 144, 216, 288];
const TICK_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
const CARDINALS = new Set([0, 90, 180, 270]);

const SakurLogo = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Sakur logo"
  >
    <defs>
      <linearGradient id="sakurPetal" x1="50" y1="18" x2="50" y2="56" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFC9DB" />
        <stop offset="1" stopColor="#FF98B9" />
      </linearGradient>
      <linearGradient id="sakurGold" x1="36" y1="40" x2="66" y2="74" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#F6DA92" />
        <stop offset="1" stopColor="#C8962C" />
      </linearGradient>
    </defs>

    {/* Sakura petals behind the watch */}
    {PETAL_ANGLES.map((a) => (
      <path
        key={a}
        d={PETAL}
        fill="url(#sakurPetal)"
        stroke="#ED7BA0"
        strokeWidth="0.9"
        strokeLinejoin="round"
        transform={`rotate(${a} 50 56)`}
      />
    ))}

    {/* Bow (top loop) */}
    <circle cx="50" cy="24" r="4.4" fill="none" stroke="url(#sakurGold)" strokeWidth="3" />
    {/* Crown stem + knurled knob */}
    <rect x="48.4" y="33.5" width="3.2" height="5.5" fill="url(#sakurGold)" stroke="#A2761F" strokeWidth="0.5" />
    <rect x="46.4" y="29.6" width="7.2" height="5" rx="1.2" fill="url(#sakurGold)" stroke="#A2761F" strokeWidth="0.6" />
    {[48, 50, 52].map((x) => (
      <line key={x} x1={x} y1="30.4" x2={x} y2="33.8" stroke="#A2761F" strokeWidth="0.5" />
    ))}

    {/* Watch case */}
    <circle cx="50" cy="56" r="17" fill="url(#sakurGold)" stroke="#A2761F" strokeWidth="1.4" />
    <circle cx="50" cy="56" r="14.4" fill="none" stroke="#EBC76E" strokeWidth="1.1" />
    {/* Dial */}
    <circle cx="50" cy="56" r="12.7" fill="#FBF3DD" stroke="#D9B968" strokeWidth="0.6" />
    <circle cx="50" cy="56" r="7.4" fill="none" stroke="#E7D4A0" strokeWidth="0.5" />

    {/* Hour ticks */}
    {TICK_ANGLES.map((a) => {
      const long = CARDINALS.has(a);
      return (
        <line
          key={a}
          x1="50"
          y1="44"
          x2="50"
          y2={long ? 45.8 : 45.2}
          stroke="#4A3A1B"
          strokeWidth={long ? 1.1 : 0.7}
          strokeLinecap="round"
          transform={`rotate(${a} 50 56)`}
        />
      );
    })}

    {/* Hands at a classic 10:10 + center pin */}
    <line x1="50" y1="56" x2="43.5" y2="50" stroke="#33280F" strokeWidth="2.1" strokeLinecap="round" />
    <line x1="50" y1="56" x2="57.5" y2="49.5" stroke="#33280F" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="50" cy="56" r="1.8" fill="#33280F" />
    <circle cx="50" cy="56" r="0.7" fill="#E7C56A" />
  </svg>
);

export default SakurLogo;
