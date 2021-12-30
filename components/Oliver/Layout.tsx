import Head from "next/head";
import Layout from "components/Layout";
import { Typography, Stack, Tabs, Tab } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Social from "./Social";

const OliverLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === "/oliver") {
      setActiveTab(0);
    } else {
      setActiveTab(1);
    }
  }, []);
  useEffect(() => {
    if (activeTab === 0) {
      router.push("/oliver");
    } else if (activeTab === 1) {
      router.push("/oliver/projects");
    }
  }, [activeTab]);

  return (
    <Layout title="Oliver">
      <Head>
        <title>Oliver | Sakur</title>
      </Head>
      <Stack spacing={1}>
        <Typography variant="h2">Fullstack Developer</Typography>

        <Social />
        <Link href="mailto:oliver@sakur.se">oliver@sakur.se</Link>
        <Tabs
          value={activeTab}
          onChange={(event, newValue) => {
            setActiveTab(newValue);
          }}
          aria-label="basic tabs example"
        >
          <Tab label="Me" />
          <Tab label="Projects" />
        </Tabs>
        <>{children}</>
      </Stack>
    </Layout>
  );
};

export default OliverLayout;
