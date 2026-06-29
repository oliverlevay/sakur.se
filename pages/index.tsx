import type { NextPage } from 'next';
import Link from 'components/Link';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import { Typography, Stack, Box, Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import OliverAvatar from 'components/OliverAvatar';
import AdamAvatar from 'components/AdamAvatar';
import Projects from 'components/Projects';

const Home: NextPage = () => {
  return (
    <Layout title="Sakur" maxWidth={1040}>
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

      <Stack spacing={{ xs: 7, md: 12 }} sx={{ width: '100%', mt: { xs: 2, md: 4 } }}>
        {/* Hero: left-aligned message paired with the two of us on the right */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 5, md: 6 }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            spacing={2.5}
            sx={{
              width: '100%',
              maxWidth: { xs: '100%', md: 480 },
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: 800, lineHeight: 1.15 }}>
              Bringing ideas to{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                life.
              </Box>
            </Typography>
            <Typography color="text.secondary">
              Sakur is Oliver and Adam, two developers who have been building
              things together since childhood. We help our clients ship web
              applications, mobile apps, web APIs and AI features, taking
              projects from first idea to launch.
            </Typography>
            <Box>
              <Button
                component={Link}
                href="mailto:oliver@sakur.se"
                variant="outlined"
                startIcon={<MailOutlineIcon />}
                sx={{
                  mt: 1,
                  borderColor: 'rgba(255,255,255,0.2)',
                  color: 'text.primary',
                  '&:hover': { borderColor: 'primary.main' },
                }}
              >
                Get in touch
              </Button>
            </Box>
          </Stack>

          <Stack
            direction="row"
            spacing={{ xs: 3, md: 4 }}
            justifyContent="center"
            sx={{ flexShrink: 0 }}
          >
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
        </Stack>

        {/* Work band */}
        <Stack spacing={3} alignItems="center" sx={{ width: '100%' }}>
          <Typography variant="h3">Selected work</Typography>
          <Projects />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Home;
