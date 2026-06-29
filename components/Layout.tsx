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
        padding: { xs: '1.5rem 1.25rem', md: '3rem 3.5rem' },
        width: '100%',
        maxWidth,
        marginX: 'auto',
        left: 0,
        right: 0,
        position: 'absolute',
        alignItems: center ? 'center' : 'stretch',
        h1: {
          fontSize: { xs: '2.75rem', md: 'clamp(3rem, 5vw, 4.25rem)' },
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
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            sx={{
              width: { xs: 52, md: 64 },
              height: { xs: 52, md: 64 },
              flexShrink: 0,
              borderRadius: 2.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0.75,
              border: '1px solid rgba(255,255,255,0.10)',
              backgroundColor: 'rgba(255,255,255,0.04)',
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
        <Typography variant="body2" color="text.secondary">
          Copyright © {new Date().getFullYear()} Sakur AB.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Layout;
