import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Stack } from "@mui/material";

const Social = () => {
  return (
    <Stack direction="row">
      <Button href="https://github.com/AdamTovatt" target="_blank">
        <GitHubIcon />
      </Button>
      <Button
        href="https://www.linkedin.com/in/adam-tovatt-a766491b1/"
        target="_blank"
      >
        <LinkedInIcon />
      </Button>
    </Stack>
  );
};

export default Social;
