// The Sakur mark: a polished gold pocket-watch (reading 16:20) resting on a
// pink sakura blossom. Flat illustrated SVG that scales to fill its container.
const PETAL =
  'M50 56 C 35 50 34 28 43 18 C 46 21 48 22 50 22 C 52 22 54 21 57 18 C 66 28 65 50 50 56 Z';

const PETAL_ANGLES = [0, 72, 144, 216, 288];

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
      <radialGradient id="skPetal" cx="50%" cy="32%" r="80%">
        <stop offset="0%" stopColor="#FFD3E1" />
        <stop offset="55%" stopColor="#FF9FBD" />
        <stop offset="100%" stopColor="#F06E97" />
      </radialGradient>
      <linearGradient id="skGold" x1="30" y1="33" x2="70" y2="78" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF4CE" />
        <stop offset="22%" stopColor="#F7DB8E" />
        <stop offset="50%" stopColor="#D9A845" />
        <stop offset="78%" stopColor="#B07D24" />
        <stop offset="100%" stopColor="#8A5E16" />
      </linearGradient>
      <linearGradient id="skBezel" x1="34" y1="36" x2="66" y2="75" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFBE6" />
        <stop offset="35%" stopColor="#EFC871" />
        <stop offset="70%" stopColor="#B8852A" />
        <stop offset="100%" stopColor="#7C5212" />
      </linearGradient>
      <radialGradient id="skDial" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#FFFBF0" />
        <stop offset="100%" stopColor="#F4E8CA" />
      </radialGradient>
      <linearGradient id="skGlass" x1="40" y1="40" x2="56" y2="62" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="skCrown" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FBE7A6" />
        <stop offset="100%" stopColor="#A2761F" />
      </linearGradient>
    </defs>

    {/* Sakura petals */}
    <g stroke="#E06088" strokeWidth="1.2" strokeLinejoin="round">
      {PETAL_ANGLES.map((a) => (
        <path key={a} d={PETAL} fill="url(#skPetal)" transform={`rotate(${a} 50 55)`} />
      ))}
    </g>

    {/* Winding crown (no bow) */}
    <rect x="47.3" y="29.8" width="5.4" height="4.6" rx="1.2" fill="url(#skCrown)" stroke="#6E4A11" strokeWidth="0.6" />
    <g stroke="#7C5212" strokeWidth="0.45" opacity="0.7">
      <line x1="48.4" y1="30.2" x2="48.4" y2="34" />
      <line x1="49.5" y1="30.2" x2="49.5" y2="34" />
      <line x1="50.6" y1="30.2" x2="50.6" y2="34" />
      <line x1="51.7" y1="30.2" x2="51.7" y2="34" />
    </g>

    {/* Case + beveled bezel */}
    <circle cx="50" cy="55" r="21.5" fill="url(#skGold)" />
    <circle cx="50" cy="55" r="20" fill="none" stroke="url(#skBezel)" strokeWidth="3" />
    <path d="M34.5 44 A20 20 0 0 1 60 36.2" fill="none" stroke="#FFF6D8" strokeWidth="1.1" strokeLinecap="round" opacity="0.9" />
    <path d="M66 44 A20 20 0 0 1 41 73.6" fill="none" stroke="#5E3F0E" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />

    {/* Dial */}
    <circle cx="50" cy="55" r="17.6" fill="#7C5212" />
    <circle cx="50" cy="55" r="16.4" fill="url(#skDial)" />
    <circle cx="50" cy="55" r="16.4" fill="none" stroke="#E9C877" strokeWidth="0.7" />

    {/* Cardinal hour markers (12 / 3 / 6 / 9) */}
    <g stroke="#33280F" strokeLinecap="round" strokeWidth="1.4">
      <line x1="50" y1="40.5" x2="50" y2="43.4" />
      <line x1="50" y1="69.5" x2="50" y2="66.6" />
      <line x1="35.5" y1="55" x2="38.4" y2="55" />
      <line x1="64.5" y1="55" x2="61.6" y2="55" />
    </g>

    {/* Hands at 16:20 (hour + minute toward 4) */}
    <path d="M50 55.5 L48.9 54 L49.4 47 L50 45.5 L50.6 47 L51.1 54 Z" fill="#241B08" transform="rotate(130 50 55)" />
    <path d="M50 55.5 L49.2 54 L49.6 43.5 L50 42 L50.4 43.5 L50.8 54 Z" fill="#3A2C12" transform="rotate(120 50 55)" />
    <circle cx="50" cy="55" r="2.1" fill="#241B08" />
    <circle cx="50" cy="55" r="0.8" fill="#C8962C" />

    {/* Crystal sheen */}
    <path d="M40 41 C 47 43 55 47 60 60 C 50 51 44 49 38 50 C 37 46 38 43 40 41 Z" fill="url(#skGlass)" opacity="0.55" />
  </svg>
);

export default SakurLogo;
