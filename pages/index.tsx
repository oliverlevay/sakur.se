import type { NextPage } from 'next';
import Seo from 'components/Seo';
import Link from 'components/Link';
import Layout from 'components/Layout';
import { Typography, Stack, Box, Button } from '@mui/material';
import OliverAvatar from 'components/OliverAvatar';
import AdamAvatar from 'components/AdamAvatar';
import Projects from 'components/Projects';

const Home: NextPage = () => {
  return (
    <Layout title="Sakur" center>
      <Seo
        title="Sakur | Web & AI Development Studio in Sweden"
        description="Sakur is a Swedish development studio by Oliver Levay and Adam Tovatt. We help clients ship fast, polished web applications, mobile apps, web APIs and AI features, from first idea to launch."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Sakur',
          legalName: 'Sakur AB',
          url: 'https://www.sakur.se',
          logo: 'https://www.sakur.se/images/sakur-logo.png',
          description:
            'Development studio building web applications, web APIs and AI features.',
          founder: [
            { '@type': 'Person', name: 'Oliver Levay' },
            { '@type': 'Person', name: 'Adam Tovatt' },
          ],
        }}
      />

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

        <Stack spacing={1.5} alignItems="center" sx={{ width: '100%', maxWidth: 600 }}>
          <Typography variant="h3">About us</Typography>
          <Typography color="text.secondary">
            Sakur is Oliver and Adam, two developers who have been building
            things together since childhood. We help our clients ship web
            applications, mobile apps, web APIs and AI features, taking projects
            from first idea to launch.
          </Typography>
        </Stack>

        <Stack spacing={2} alignItems="center" sx={{ width: '100%', maxWidth: 620 }}>
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
