import type { NextPageWithLayout } from "pages/_app";
import { Typography, Card, useTheme } from "@mui/material";
import { ReactElement } from "react";
import { styled } from "@mui/system";
import OliverLayout from "components/Oliver/Layout";

const Oliver: NextPageWithLayout = () => {
  const theme = useTheme();
  const cardStyle = {
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgba(255, 255, 255, 0.6)"
        : "rgba(0, 0, 0, 0.6)",
  };
  return (
    <>
      <Typography variant="h3">Projects</Typography>
      <Typography>
        I have participated in a lot of different projects over the years.
        Here's a selection.
      </Typography>
      <Typography>#COMING SOON</Typography>
    </>
  );
};

Oliver.getLayout = (page: ReactElement) => {
  return <OliverLayout>{page}</OliverLayout>;
};

export default Oliver;
