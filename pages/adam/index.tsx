import type { NextPageWithLayout } from "pages/_app";
import { Typography, Card, Box } from "@mui/material";
import { ReactElement } from "react";
import { styled } from "@mui/system";
import OliverLayout from "components/Oliver/Layout";
import AdamLayout from "components/Adam/Layout";

const Adam: NextPageWithLayout = () => {
  return (
    <>
      <Typography>
        Hi, my name is Adam Tovatt and I live in Stockholm, Sweden. I have a
        passion for writing the best possible code and I firmly believe that
        information and knowledge should be shared openly. After all,
        information is created to be shared.
      </Typography>
      <Typography>
        I embrace the notion that every goal is attainable; it's merely a matter
        of discovering the right path. I find immense satisfaction in uncovering
        and refining these pathways. I love witnessing the harmonious
        synchronization of intricate components in large-scale systems, akin to
        gears in a finely-crafted timepiece. Doing this while simultaneously
        making a positive impact on the world, leaving it a better place than it
        was when I first found it, gives me a sense of purpose.
      </Typography>
      <Typography>
        When I was six years old, my dad showed me that if you save a text file
        with the file extension ".html", you can open it in a web browser and it
        will render as a web page. I was amazed, and that amazement still
        persists. There is no limit to how much you can learn, and my curiosity
        seems to have no bounds. I am a self-taught developer, and prior to
        attending the Royal Institute of Technology, I worked as a developer for
        three years and co-founded the company Sakur AB alongside Oliver Levay.
      </Typography>
      <Typography>
        I find interest in all things creative, and I am always looking for new
        ways to express myself. I enjoy programming, but I also have a passion
        for photography, playing the guitar, creating 3D graphics, and taking
        care of my plants in the best way possible. I am driven to innovate and
        create new things. I love designing both back-end architecture and
        front-end user experiences, as well as hardware systems. I sometimes
        like think of my self not as a developer, but rather as an artist, and
        the world is my canvas. But don't tell anyone, I'm still worried it
        sounds a bit stupid.
      </Typography>
      <Typography>
        I don't like to put labels on things and I also don't like the term
        "full stack developer" as it is often overused as a buzzword. But if you
        must, I suppose I can't deny that I possess the skills and knowledge
        typically associated with a full stack developer.
      </Typography>
    </>
  );
};

Adam.getLayout = (page: ReactElement) => {
  return <AdamLayout>{page}</AdamLayout>;
};

export default Adam;
