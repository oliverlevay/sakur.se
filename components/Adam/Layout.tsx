import Head from 'next/head';
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
      <Head>
        <title>Adam | Sakur</title>
      </Head>
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
