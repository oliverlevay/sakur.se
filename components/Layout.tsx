import { Stack, Typography, Button, IconButton, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "components/Link";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useColorMode } from "pages/_app";

const Layout = ({
  children,
  title,
}: {
  children: JSX.Element | JSX.Element[];
  title: string;
}) => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <canvas
        id="canvas3d"
        style={{ position: "fixed", bottom: 0, right: 0 }}
      />
      <Stack
        component="main"
        sx={{
          padding: { xs: "1rem 2rem", md: "5rem 10rem" },
          position: "absolute",
          h1: {
            fontSize: "5rem",
            fontWeight: "700",
          },
          h2: {
            fontSize: "2rem",
          },
          a: {
            textDecoration: "none",
          },
        }}
      >
        <Stack direction="row" alignItems="center">
          <Typography style={{ marginRight: "1rem" }} variant="h1">
            {title}
          </Typography>
          <Link href="/">
            <Button>
              <Image src="/images/sakur-logo.png" width={64} height={64} />
            </Button>
          </Link>
          <IconButton onClick={toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </Stack>
        {children}
      </Stack>
    </>
  );
};

export default Layout;
