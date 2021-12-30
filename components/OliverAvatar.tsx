import { Typography, Avatar, Stack, useTheme } from "@mui/material";

const OliverAvatar = () => {
  const theme = useTheme();
  return (
    <Stack alignItems="center" width="fit-content" title="Click me!">
      <Avatar
        sx={{ height: 144, width: 144 }}
        src="/images/oliver-avatar.jpg"
      ></Avatar>
      <Typography
        color={theme.palette.text.primary}
        style={{ textTransform: "none" }}
      >
        Oliver
      </Typography>
    </Stack>
  );
};

export default OliverAvatar;
