import { Button, Stack } from "@mui/material";
import BliqLogo from "./logos/Bliq";
import RedeyeLogo from "./logos/Redeye";
import RetrivaLogo from "./logos/Retriva";

const Projects = () => {
  return (
    <Stack direction="row" flexWrap="wrap">
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
        href="https://www.redeye.se/"
        target="_blank"
        style={{
          marginBottom: "1rem",
          marginRight: "1rem",
        }}
      >
        <RedeyeLogo />
      </Button>
    </Stack>
  );
};

export default Projects;
