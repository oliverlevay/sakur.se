import {
  Stack,
  Typography,
  Button,
  IconButton,
  useTheme,
  Divider,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useColorMode } from 'pages/_app';

const Layout = ({
  children,
  title,
}: {
  children: JSX.Element | JSX.Element[];
  title: string;
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
      <Stack direction="row" alignItems="center">
        <Typography style={{ marginRight: '1rem' }} variant="h1">
          {title}
        </Typography>
        <Link href="/">
          <Button>
            <Image src="/images/sakur-logo.png" width={64} height={64} />
          </Button>
        </Link>
        <IconButton onClick={toggleColorMode}>
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
