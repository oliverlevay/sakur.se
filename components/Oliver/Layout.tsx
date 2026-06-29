import Seo from 'components/Seo';
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
    <Layout location="Oliver" title="Oliver" maxWidth={1180}>
      <Seo
        title="Oliver Levay | Full-Stack Product Engineer"
        description="Oliver Levay is a full-stack product engineer and builder at Sakur. He ships web apps, AI features and computer-vision systems, from startups to heavy industry."
        path="/oliver"
        image="/images/oliver-slogan.png"
        type="profile"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Oliver Levay',
          jobTitle: 'Full-stack Product Engineer',
          url: 'https://www.sakur.se/oliver',
          worksFor: { '@type': 'Organization', name: 'Sakur AB' },
          sameAs: [
            'https://github.com/oliverlevay',
            'https://twitter.com/oliverlevays',
            'https://www.linkedin.com/in/oliver-levay',
          ],
        }}
      />
      <Stack spacing={1}>
        <Typography variant="h2" color="text.secondary">
          Full-stack Product Engineer &amp; Builder
        </Typography>

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
