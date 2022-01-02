import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button, IconButton, Stack } from '@mui/material';

const Social = () => {
  return (
    <Stack direction="row" style={{ marginLeft: '-0.5rem' }}>
      <IconButton
        href="https://github.com/oliverlevay"
        target="_blank"
        color="primary"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        color="primary"
        href="https://twitter.com/oliverlevays"
        target="_blank"
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        color="primary"
        href="https://www.linkedin.com/in/oliver-levay"
        target="_blank"
      >
        <LinkedInIcon />
      </IconButton>
    </Stack>
  );
};

export default Social;
