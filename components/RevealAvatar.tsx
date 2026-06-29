import { useRef, useState, type TouchEvent } from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';

type Props = {
  name: string;
  /** The real photo, shattered into tiles on top. */
  real: string;
  /** The stylised portrait revealed underneath, tile by tile. */
  ghibli: string;
  /** Optional fine-tune to align the portrait with the photo. */
  ghibliTransform?: string;
};

const GRID = 10;
const TILES = Array.from({ length: GRID * GRID }, (_, i) => i);

// A broken tile detaches and falls out of the frame.
const fall = keyframes({
  '0%': { transform: 'translateY(0) rotate(0) scale(1)', opacity: 1 },
  '100%': {
    transform: 'translateY(180px) rotate(42deg) scale(0.4)',
    opacity: 0,
  },
});

// Geometry for tile `i`: position within the grid + the matching slice of the
// background image (background-size GRID×, positioned by tile index).
const tileGeometry = (i: number, image: string) => {
  const c = i % GRID;
  const r = Math.floor(i / GRID);
  return {
    position: 'absolute' as const,
    left: `${(c * 100) / GRID}%`,
    top: `${(r * 100) / GRID}%`,
    // +1px overlap hides seams between tiles at rest.
    width: `calc(${100 / GRID}% + 1px)`,
    height: `calc(${100 / GRID}% + 1px)`,
    backgroundImage: `url(${image})`,
    backgroundSize: `${GRID * 100}% ${GRID * 100}%`,
    backgroundPosition: `${(c / (GRID - 1)) * 100}% ${(r / (GRID - 1)) * 100}%`,
  };
};

// A circular avatar. The real photo is a grid of tiles over a stylised
// portrait. Touching a tile detaches it: a copy falls out of the frame while
// the portrait shows through the gap. On desktop you hover; on touch you scrub
// a finger across it. Pieces never return (until a reload).
const RevealAvatar = ({ name, real, ghibli, ghibliTransform }: Props) => {
  const theme = useTheme();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [broken, setBroken] = useState<Set<number>>(new Set());
  const [debris, setDebris] = useState<number[]>([]);

  const breakTile = (i: number) => {
    setBroken((prev) => {
      if (prev.has(i)) return prev;
      const next = new Set(prev);
      next.add(i);
      return next;
    });
    setDebris((prev) => (prev.includes(i) ? prev : [...prev, i]));
  };

  // Map a screen point to a tile index and break it (used for touch scrubbing).
  const breakAtPoint = (clientX: number, clientY: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
    const c = Math.min(GRID - 1, Math.floor((x / rect.width) * GRID));
    const r = Math.min(GRID - 1, Math.floor((y / rect.height) * GRID));
    breakTile(r * GRID + c);
  };

  const onTouch = (e: TouchEvent) => {
    const t = e.touches[0];
    if (t) breakAtPoint(t.clientX, t.clientY);
  };

  return (
    <Stack alignItems="center" width="fit-content" title="Hover or scrub me!">
      <Box
        ref={wrapRef}
        onTouchStart={onTouch}
        onTouchMove={onTouch}
        sx={{
          position: 'relative',
          width: { xs: 120, md: 144 },
          height: { xs: 120, md: 144 },
          // Let debris fall outside the circle; allow finger scrubbing.
          overflow: 'visible',
          touchAction: 'none',
        }}
      >
        {/* Clipped circle: stylised portrait + intact photo tiles */}
        <Box sx={{ position: 'absolute', inset: 0, borderRadius: '50%', overflow: 'hidden' }}>
          <Box
            component="img"
            src={ghibli}
            alt=""
            aria-hidden
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: ghibliTransform,
              zIndex: 1,
            }}
          />
          {TILES.map((i) => (
            <div
              key={i}
              onMouseEnter={() => breakTile(i)}
              style={{
                ...tileGeometry(i, real),
                zIndex: 2,
                opacity: broken.has(i) ? 0 : 1,
                pointerEvents: broken.has(i) ? 'none' : 'auto',
              }}
            />
          ))}
        </Box>

        {/* Debris layer: detached pieces falling out of the frame */}
        {debris.map((i) => (
          <Box
            key={i}
            aria-hidden
            onAnimationEnd={() => setDebris((prev) => prev.filter((x) => x !== i))}
            style={tileGeometry(i, real)}
            sx={{
              zIndex: 3,
              pointerEvents: 'none',
              transformOrigin: 'center',
              animation: `${fall} 0.7s cubic-bezier(0.4, 0.05, 0.85, 0.35) forwards`,
            }}
          />
        ))}
      </Box>
      <Typography
        color={theme.palette.text.primary}
        style={{ textTransform: 'none' }}
        sx={{ mt: 1 }}
      >
        {name}
      </Typography>
    </Stack>
  );
};

export default RevealAvatar;
