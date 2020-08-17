import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {Box} from "@material-ui/core";

export default function Index() {
  return (
    <Layout>
      <SEO title="About" />
      <Box display="flex" flexGrow={1} justifyContent="center">
        About
      </Box>
    </Layout>
  );
}
