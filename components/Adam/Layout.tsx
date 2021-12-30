import Head from "next/head";
import Layout from "components/Layout";
import { Typography, Stack } from "@mui/material";
import Link from "next/link";
import Social from "./Social";

const AdamLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <Layout title="Adam">
      <Head>
        <title>Adam | Sakur</title>
      </Head>
      <Stack spacing={1}>
        <Typography variant="h2">Backend Developer</Typography>

        <Social />
        <Link href="mailto:adam@sakur.se">adam@sakur.se</Link>
        <>{children}</>
      </Stack>
    </Layout>
  );
};

export default AdamLayout;
