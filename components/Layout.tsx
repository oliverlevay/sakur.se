import { Stack, Box, Typography, Divider, Breadcrumbs } from '@mui/material';
import Link from 'components/Link';
import SakurLogo from 'components/SakurLogo';

const Layout = ({
  children,
  title,
  location,
  maxWidth = 820,
  center = false,
}: {
  children: JSX.Element | JSX.Element[];
  title: string;
  location?: string;
  maxWidth?: number;
  center?: boolean;
}) => {
  return (
    <Stack
      component="main"
      role="main"
      spacing={3}
      sx={{
        zIndex: 1,
        position: 'relative',
        padding: { xs: '1.5rem 1.25rem', md: '3rem 3.5rem' },
        width: '100%',
        maxWidth,
        marginX: 'auto',
        // Hard guard: never allow sideways scrolling on narrow screens.
        overflowX: 'clip',
        alignItems: center ? 'center' : 'stretch',
        h1: {
          fontSize: { xs: '2.75rem', md: 'clamp(3rem, 5vw, 4.25rem)' },
          fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
          fontWeight: 700,
          letterSpacing: '-0.01em',
        },
        h2: {
          fontSize: { xs: '1.6rem', md: '2rem' },
        },
        h3: {
          fontSize: { xs: '1.3rem', md: '1.45rem' },
        },
        a: {
          textDecoration: 'none',
        },
      }}
    >
      <Stack alignItems={center ? 'center' : undefined}>
        {location && (
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">{location}</Typography>
          </Breadcrumbs>
        )}
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            sx={{
              width: { xs: 48, md: 64 },
              height: { xs: 48, md: 64 },
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SakurLogo />
          </Box>
          <Typography variant="h1">{title}</Typography>
        </Stack>
      </Stack>
      {children}
      <Stack sx={{ width: '100%' }}>
        <Divider sx={{ margin: '1rem 0' }} />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: 'center' }}
        >
          Copyright © {new Date().getFullYear()} Sakur AB.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Layout;
