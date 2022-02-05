import { Button, Stack } from "@mui/material";
import BliqLogo from "./logos/Bliq";
import RedeyeLogo from "./logos/Redeye";
import RetrivaLogo from "./logos/Retriva";
import SRO from "./logos/SRO";

const Projects = () => {
  return (
    <Stack direction="row" flexWrap="wrap">
      <Button
        href="https://www.redeye.se/"
        target="_blank"
        style={{
          marginBottom: "1rem",
          marginRight: "1rem",
        }}
      >
        <RedeyeLogo />
      </Button>
      <Button
        href="https://bliq.tech/"
        target="_blank"
        style={{
          marginBottom: "1rem",
          marginRight: "1rem",
        }}
      >
        <BliqLogo />
      </Button>
      <Button
        href="https://retriva.se/"
        target="_blank"
        style={{
          marginBottom: "1rem",
          marginRight: "1rem",
        }}
      >
        <RetrivaLogo />
      </Button>
      <Button
        href="https://www.stalmarck.com/"
        target="_blank"
        style={{
          marginBottom: "1rem",
          marginRight: "1rem",
        }}
      >
        <SRO />
        <span style={{ color: "#11ffbd", marginLeft: "0.5rem" }}>
          Matematik för människan
        </span>
      </Button>
    </Stack>
  );
};

export default Projects;
