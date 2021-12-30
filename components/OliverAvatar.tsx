import { Typography, Avatar, Stack, useTheme } from "@mui/material";

const OliverAvatar = () => {
  const theme = useTheme();
  return (
    <Stack alignItems="center" width="fit-content" title="Click me!">
      <Avatar
        sx={{ height: { xs: 120, md: 144 }, width: { xs: 120, md: 144 } }}
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
