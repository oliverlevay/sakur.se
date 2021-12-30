import type { NextPage } from "next";
import Head from "next/head";
import Layout from "components/Layout";
import { Typography, Stack, Card, Box, useTheme } from "@mui/material";
import Run3DSpace from "src/3d/oliver3d";
import { useEffect } from "react";
import Social from "components/Oliver/Social";
import Link from "next/link";
import { styled } from "@mui/system";

const MyCard = styled(Card)`
  max-width: 30rem;
  padding: 2rem;
  p {
    margin: 1rem 0;
  }
`;

const Separator = styled(Box)`
  min-height: 100vh;
`;

const Oliver: NextPage = () => {
  useEffect(() => {
    Run3DSpace();
  });
  const theme = useTheme();
  const cardStyle = {
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgba(255, 255, 255, 0.6)"
        : "rgba(0, 0, 0, 0.6)",
  };
  return (
    <Layout title="Oliver">
      <Head>
        <title>Oliver | Sakur</title>
      </Head>
      <Stack spacing={1}>
        <Typography variant="h2">Web Developer</Typography>

        <Social />
        <Link href="mailto:oliver@sakur.se">oliver@sakur.se</Link>
        <MyCard style={cardStyle}>
          <Typography variant="h3">About me</Typography>
          <Typography>Hi! I'm glad you found me.</Typography>
          <Typography>
            My name is Oliver Levay and I like developing websites.
          </Typography>
          <Typography>
            I especially enjoy creating cool and intuitive user experiences.
          </Typography>
        </MyCard>
        <MyCard style={cardStyle}>
          <Typography variant="h3">Jamstack</Typography>
          <Typography>
            With "cool" user experiences, good performance is a given. That's
            why I'm a big fan of modern web frameworks such as{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nextjs.org/"
            >
              Next.js
            </a>{" "}
            and the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://jamstack.org/"
            >
              Jamstack
            </a>{" "}
            architecture.
          </Typography>
        </MyCard>
        <Separator />
        <MyCard style={cardStyle}>
          <Typography variant="h3">More me</Typography>
          <Typography>This is me in my natural habitat.</Typography>
          <Typography>
            I can often stay up a little too long coding away.
          </Typography>
          <Typography>
            With good attention to detail and a tenacious perfectionist, I have
            a hard time letting go of unresolved issues.
          </Typography>
        </MyCard>
        <MyCard style={cardStyle}>
          <Typography variant="h3">What user experience?</Typography>
          <Typography>I love giving users a "wow"-experience</Typography>
          <Typography>
            When I say "wow"-experience, it doesn't necessarily include
            3D-graphics.
          </Typography>
        </MyCard>
        <Separator />
        <MyCard style={cardStyle}>
          <Typography variant="h3">Modern Websites</Typography>
          <Typography>
            The world wide web has a lot of websites that are old, slow and
            dull.
          </Typography>
          <Typography>
            I look very much forward to being a part of developing the modern
            web.
          </Typography>
        </MyCard>
        <MyCard style={cardStyle}>
          <Typography>
            <Typography variant="h3">Wow, what?</Typography>I want to create
            "wow"-experiences where people think "Wow, that was convenient!" or
            "Wow, this website is so fast!"
          </Typography>
        </MyCard>
      </Stack>
    </Layout>
  );
};

export default Oliver;
