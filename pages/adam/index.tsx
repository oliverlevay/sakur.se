import type { NextPageWithLayout } from "pages/_app";
import { Typography, Card, Box } from "@mui/material";
import { ReactElement } from "react";
import { styled } from "@mui/system";
import OliverLayout from "components/Oliver/Layout";
import AdamLayout from "components/Adam/Layout";

const Adam: NextPageWithLayout = () => {
  return (
    <>
      <Typography>#COMING SOON</Typography>
    </>
  );
};

Adam.getLayout = (page: ReactElement) => {
  return <AdamLayout>{page}</AdamLayout>;
};

export default Adam;
