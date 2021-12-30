import { Typography, Avatar, Stack, useTheme } from "@mui/material";

const AdamAvatar = () => {
  const theme = useTheme();
  return (
    <Stack alignItems="center" width="fit-content" title="Click me!">
      <Avatar
        sx={{ height: 144, width: 144 }}
        src="/images/adam-avatar.jpg"
      ></Avatar>
      <Typography
        color={theme.palette.text.primary}
        style={{ textTransform: "none" }}
      >
        Adam
      </Typography>
    </Stack>
  );
};

export default AdamAvatar;
