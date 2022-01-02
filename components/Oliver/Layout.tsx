import Head from 'next/head';
import Layout from 'components/Layout';
import { Typography, Stack, Tabs, Tab } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Social from './Social';

const OliverLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === '/oliver') {
      setActiveTab(0);
    } else {
      setActiveTab(1);
    }
  }, []);
  useEffect(() => {
    if (activeTab === 0) {
      router.push('/oliver');
    } else if (activeTab === 1) {
      router.push('/oliver/projects');
    }
  }, [activeTab]);

  return (
    <Layout title="Oliver">
      <Head>
        <title>Oliver at Sakur</title>
        <meta property="og:title" content="Oliver at Sakur" />
        <meta property="og:url" content="https://www.sakur.se/oliver" />
        <meta
          property="og:description"
          content="My name is Oliver Levay and I like developing websites. Here you can read more about me."
        />
        <meta
          property="og:image"
          content="https://www.sakur.se/images/oliver-slogan.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Stack spacing={1}>
        <Typography variant="h2">Fullstack Developer</Typography>

        <Social />
        <Link href="mailto:oliver@sakur.se">oliver@sakur.se</Link>
        {/*         <Tabs
          value={activeTab}
          onChange={(event, newValue) => {
            setActiveTab(newValue);
          }}
          aria-label="basic tabs example"
        >
          <Tab label="Me" />
          <Tab label="Projects" />
        </Tabs> */}
        <>{children}</>
      </Stack>
    </Layout>
  );
};

export default OliverLayout;
