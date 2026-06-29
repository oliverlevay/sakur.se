import { Box } from '@mui/material';

// One sakura petal, framed tightly by the viewBox so it fills its box.
const PETAL =
  'M50 52 C 33 46 32 22 42 11 C 45 14 48 15 50 15 C 52 15 55 14 58 11 C 68 22 67 46 50 52 Z';

type Petal = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: number;
  rotate: number;
  color: string;
  opacity: number;
};

// Deliberately placed, low-opacity petals — crisp vector shapes, no blur.
const PETALS: Petal[] = [
  { top: '-3%', right: '5%', size: 360, rotate: 24, color: '#ff7fa6', opacity: 0.1 },
  { top: '26%', right: '-4%', size: 220, rotate: -18, color: '#e8c06a', opacity: 0.08 },
  { bottom: '6%', right: '16%', size: 280, rotate: 142, color: '#ff7fa6', opacity: 0.07 },
  { bottom: '-6%', left: '-3%', size: 260, rotate: 205, color: '#ff7fa6', opacity: 0.07 },
  { top: '58%', left: '3%', size: 130, rotate: 84, color: '#e8c06a', opacity: 0.07 },
];

const Decorations = () => (
  <Box
    aria-hidden
    sx={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
    }}
  >
    {/* A single, very faint brand tint — the only gradient left. */}
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(70rem 45rem at 50% -15%, rgba(255,127,166,0.05), transparent 70%)',
      }}
    />
    {PETALS.map((p, i) => (
      <Box
        key={i}
        component="svg"
        viewBox="30 9 42 46"
        sx={{
          position: 'absolute',
          top: p.top,
          bottom: p.bottom,
          left: p.left,
          right: p.right,
          width: p.size,
          height: p.size,
          opacity: p.opacity,
          transform: `rotate(${p.rotate}deg)`,
        }}
      >
        <path d={PETAL} fill={p.color} />
      </Box>
    ))}
  </Box>
);

export default Decorations;
