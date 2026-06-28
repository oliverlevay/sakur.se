import type { NextPageWithLayout } from 'pages/_app';
import { Typography, Card, Box, useTheme } from '@mui/material';
import { startAnimating, stopAnimating } from 'src/3d/oliver3d';
import { ReactElement, useEffect } from 'react';
import { styled } from '@mui/system';
import OliverLayout from 'components/Oliver/Layout';

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

const Oliver: NextPageWithLayout = () => {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.bottom = '0';
    canvas.style.right = '0';
    document.body.appendChild(canvas);
    startAnimating(canvas);
    return function cleanup() {
      canvas.remove();
      stopAnimating();
    };
  }, []);
  const theme = useTheme();
  return (
    <>
      <MyCard>
        <Typography variant="h3">About me</Typography>
        <Typography>Hi! I'm glad you found me.</Typography>
        <Typography>
          My name is Oliver Levay, a full-stack developer and builder. I've
          been writing code since I was 11, when a childhood friend and I started
          making games. I never really stopped.
        </Typography>
        <Typography>
          Since then I've built everything from games and web apps to AI and
          computer-vision systems for heavy industry.
        </Typography>
      </MyCard>
      <MyCard>
        <Typography variant="h3">What I do</Typography>
        <Typography>
          I'm most at home shipping products end to end, from a blank page to
          something real people use. That means polished front-ends in{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nextjs.org/"
          >
            Next.js
          </a>{' '}
          and React, solid back-ends in Node, .NET and Python, and increasingly
          AI features built on top of LLMs and computer vision.
        </Typography>
        <Typography>
          I learn fast and go deep, whether that's a new stack, a new domain, or
          a new language (I picked up Japanese to JLPT N3 along the way).
        </Typography>
      </MyCard>
      <Separator />
      <MyCard>
        <Typography variant="h3">A builder at heart</Typography>
        <Typography>
          I run my own company,{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.sakur.se/"
          >
            Sakur AB
          </a>
          , and I've co-founded a handful of products and communities along the
          way.
        </Typography>
        <Typography>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://studyplan.se/"
          >
            Studyplan
          </a>{' '}
          grew to 2,534 sign-ups with zero marketing, purely word of mouth. With{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://swedenbuilders.com/"
          >
            Sweden Builders
          </a>{' '}
          I help bring together people who want to build, and our AI web-agency
          experiment One Click even earned us a Y Combinator interview.
        </Typography>
      </MyCard>
      <MyCard>
        <Typography variant="h3">Dare to be uncomfortable</Typography>
        <Typography>
          I'd rather take on the awkward, hard problem than coast in a
          comfortable one. That's how I ended up building software for American
          steel mills.
        </Typography>
        <Typography>
          At{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.foresightdatamachines.com/"
          >
            Foresight Data Machines
          </a>{' '}
          I co-invented ScrapEye, a computer-vision system that watches cranes
          sort scrap steel and tells mills what they're actually getting. After
          that I joined an AI startup in Stockholm as a founding engineer.
        </Typography>
      </MyCard>
      <Separator />
      <MyCard>
        <Typography variant="h3">Engineering background</Typography>
        <Typography>
          I hold a Master of Science in Computer Engineering (Civilingenjör) from
          LTH, Lund University.
        </Typography>
        <Typography>
          For my thesis I built ScrapAwear, an AR safety system on the Meta
          Quest 3, backed by ultra-wideband positioning, that guides workers'
          attention to moving hazards in heavy industry. A user study (n=16)
          showed it helped people spot dangers outside their field of view about
          893&nbsp;ms faster than a minimap.
        </Typography>
      </MyCard>
      <MyCard>
        <Typography variant="h3">What I care about</Typography>
        <Typography>
          Building things that actually get used. Working with people I like and
          trust. Sweating the details until an experience feels effortless.
        </Typography>
        <Typography>
          If you're building something ambitious and want a hand making it real,{' '}
          <a href="mailto:oliver@sakur.se">let's talk</a>.
        </Typography>
      </MyCard>
    </>
  );
};

Oliver.getLayout = (page: ReactElement) => {
  return <OliverLayout>{page}</OliverLayout>;
};

export default Oliver;
