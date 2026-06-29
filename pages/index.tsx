import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'components/Link';
import Layout from 'components/Layout';
import { Typography, Stack, Box, Button } from '@mui/material';
import OliverAvatar from 'components/OliverAvatar';
import AdamAvatar from 'components/AdamAvatar';
import Projects from 'components/Projects';

const Home: NextPage = () => {
  return (
    <Layout title="Sakur" center>
      <Head>
        <title>Sakur</title>
        <meta property="og:title" content="Sakur" />
        <meta property="og:url" content="https://www.sakur.se/" />
        <meta
          property="og:description"
          content="Bringing ideas to life. We help our
            clients with all their application needs."
        />
        <meta
          property="og:image"
          content="https://www.sakur.se/images/sakur-slogan.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Stack spacing={6} alignItems="center" sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontWeight: 800 }}>
          Bringing ideas to{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>
            life.
          </Box>
        </Typography>

        <Stack direction="row" spacing={5} justifyContent="center">
          <Link href="/oliver">
            <Button sx={{ borderRadius: 4, p: 1 }}>
              <OliverAvatar />
            </Button>
          </Link>
          <Link href="/adam">
            <Button sx={{ borderRadius: 4, p: 1 }}>
              <AdamAvatar />
            </Button>
          </Link>
        </Stack>

        <Stack spacing={1.5} alignItems="center" sx={{ maxWidth: 600 }}>
          <Typography variant="h3">About us</Typography>
          <Typography color="text.secondary">
            Sakur is Oliver and Adam, two developers who have been building
            things together since childhood. We help clients ship web
            applications, web APIs and AI features, and we take our own products
            from idea to launch.
          </Typography>
        </Stack>

        <Stack spacing={2} alignItems="center" sx={{ maxWidth: 620 }}>
          <Typography variant="h3">Projects</Typography>
          <Typography color="text.secondary">
            Here are some of the projects we have worked on.
          </Typography>
          <Projects />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Home;
