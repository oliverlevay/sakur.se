import type { NextPage } from "next";
import Head from "next/head";
import Link from "components/Link";
import Layout from "components/Layout";
import { Typography, Stack, Card, Button } from "@mui/material";
import { styled } from "@mui/system";
import OliverAvatar from "components/OliverAvatar";
import AdamAvatar from "components/AdamAvatar";
import Projects from "components/Projects";

const MyCard = styled(Card)`
  padding: 2rem;
  p {
    margin: 1rem 0;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Sakur">
        <Head>
          <title>Sakur</title>
        </Head>
        <Stack spacing={1}>
          <Typography variant="h2">Bringing ideas to life.</Typography>
          <Typography variant="h3" style={{ marginTop: "1rem" }}>
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

          <MyCard>
            <Typography variant="h3">About us</Typography>
            <Typography>
              Sakur consists of a passionate and talented team. We help our
              clients with all their application needs.
            </Typography>
            <Typography>
              We are especially comfortable in creating Web Applications and Web
              APIs.
            </Typography>
          </MyCard>
          <MyCard>
            <Typography variant="h3">Projects</Typography>
            <Typography>
              Here are some of the projects we have worked on.
            </Typography>
            <Projects />
          </MyCard>
        </Stack>
      </Layout>
    </>
  );
};

export default Home;
