import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Stack } from "@mui/material";

const Social = () => {
  return (
    <Stack direction="row">
      <Button href="https://github.com/oliverlevay" target="_blank">
        <GitHubIcon />
      </Button>
      <Button href="https://twitter.com/oliverlevays" target="_blank">
        <TwitterIcon />
      </Button>
      <Button
        href="https://www.linkedin.com/in/oliver-l-215043114"
        target="_blank"
      >
        <LinkedInIcon />
      </Button>
    </Stack>
  );
};

export default Social;
