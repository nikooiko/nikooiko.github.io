import React from "react";
import Layout from "../components/Layout";
import {Typography, Box, useMediaQuery, Theme} from "@material-ui/core";
import {isMobile} from "../helpers";

export default function Portfolio() {
  const mobile = isMobile();
  let messageSize;
  let descriptionSize;
  if (mobile) {
    messageSize = "h6";
    descriptionSize = "subtitle2";
  } else {
    messageSize = "h4";
    descriptionSize = "h6";
  }
  return (
    <Layout title="Page not found">
      <Box
        flexGrow={1}
        flexDirection="column"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant={messageSize} gutterBottom>
          404 Page not found!
        </Typography>
        <Typography variant={descriptionSize}>
          Sorry the page you requested does not exist.
        </Typography>
      </Box>
    </Layout>
  );
}
