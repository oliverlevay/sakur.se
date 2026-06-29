import Seo from 'components/Seo';
import Layout from 'components/Layout';
import { Typography, Stack } from '@mui/material';
import Link from 'next/link';
import Social from './Social';

const AdamLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <Layout title="Adam" location="Adam">
      <Seo
        title="Adam Tovatt | Backend Developer at Sakur"
        description="Adam Tovatt is a backend developer at Sakur in Stockholm. He builds robust, large-scale systems and cares deeply about clean, well-crafted code."
        path="/adam"
        type="profile"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Adam Tovatt',
          jobTitle: 'Backend Developer',
          url: 'https://www.sakur.se/adam',
          worksFor: { '@type': 'Organization', name: 'Sakur AB' },
          sameAs: [
            'https://github.com/AdamTovatt',
            'https://www.linkedin.com/in/adam-tovatt-a766491b1/',
          ],
        }}
      />
      <Stack spacing={1.5} sx={{ maxWidth: '70ch' }}>
        <Typography variant="h2" color="text.secondary">
          Backend Developer
        </Typography>

        <Social />
        <Link href="mailto:adam@sakur.se">adam@sakur.se</Link>
        <>{children}</>
      </Stack>
    </Layout>
  );
};

export default AdamLayout;
