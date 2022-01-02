import {
  Stack,
  Typography,
  Button,
  IconButton,
  useTheme,
  Divider,
  Breadcrumbs,
} from '@mui/material';
import Link from 'components/Link';
import Image from 'next/image';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useColorMode } from 'pages/_app';

const Layout = ({
  children,
  title,
  location,
}: {
  children: JSX.Element | JSX.Element[];
  title: string;
  location?: string;
}) => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();
  return (
    <Stack
      component="main"
      role="main"
      sx={{
        zIndex: 1,
        padding: { xs: '1rem 2rem', md: '2rem 10rem' },
        width: '100%',
        position: 'absolute',
        h1: {
          fontSize: '4.5rem',
          fontWeight: '700',
        },
        h2: {
          fontSize: '2rem',
        },
        h3: {
          fontSize: '2rem',
        },
        a: {
          textDecoration: 'none',
        },
      }}
    >
      <Stack direction="row" width="100%" justifyContent="space-between">
        <Stack>
          {location && (
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Typography color="text.primary">{location}</Typography>
            </Breadcrumbs>
          )}
          <Stack direction="row" alignItems="center" spacing={1}>
            <Image src="/images/sakur-logo.png" width={64} height={64} />
            <Typography variant="h1">{title}</Typography>
          </Stack>
        </Stack>

        <IconButton onClick={toggleColorMode} sx={{ height: 'fit-content' }}>
          {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Stack>
      {children}
      <Stack>
        <Divider sx={{ margin: '1rem 0' }} />
        <Typography variant="body2" color="text.secondary">
          Copyright © {new Date().getFullYear()} Sakur AB.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Layout;
