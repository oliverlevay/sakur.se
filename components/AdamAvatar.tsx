import { Typography, Avatar, Stack, useTheme } from "@mui/material";

const AdamAvatar = () => {
  const theme = useTheme();
  return (
    <Stack alignItems="center" width="fit-content" title="Click me!">
      <Avatar
        sx={{ height: { xs: 132, md: 144 }, width: { xs: 132, md: 144 } }}
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
