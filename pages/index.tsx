import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'components/Link';
import Layout from 'components/Layout';
import { Typography, Stack, Card, Button } from '@mui/material';
import { styled } from '@mui/system';
import OliverAvatar from 'components/OliverAvatar';
import AdamAvatar from 'components/AdamAvatar';
import Projects from 'components/Projects';
import SoftwareEngineer from 'components/illustrations/SoftwareEngineer';

const MyStack = styled(Stack)`
  && {
    margin: 1rem 0;
  }
`;

const Home: NextPage = () => {
  return (
    <Layout title="Sakur">
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
      <Typography variant="h2">Bringing ideas to life.</Typography>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} width="100%">
          <Typography variant="h3" style={{ marginTop: '1rem' }}>
            Lead developers
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="/oliver">
              <Button>
                <OliverAvatar />
              </Button>
            </Link>
            <Link href="/adam">
              <Button>
                <AdamAvatar />
              </Button>
            </Link>
          </Stack>
          <MyStack spacing={2}>
            <Typography variant="h3">About us</Typography>
            <Typography>
              Sakur consists of a passionate and talented team. We help our
              clients with all their application needs.
            </Typography>
            <Typography>
              We are especially comfortable in creating Web Applications and Web
              APIs.
            </Typography>
          </MyStack>
          <MyStack spacing={2}>
            <Typography variant="h3">Projects</Typography>
            <Typography>
              Here are some of the projects we have worked on.
            </Typography>
            <Projects />
          </MyStack>
        </Stack>
        <Stack width={{ xs: 0, md: '75%' }}>
          <SoftwareEngineer />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Home;
