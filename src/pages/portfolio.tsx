import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {Box} from "@material-ui/core";

export default function Portfolio() {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Box display="flex" flexGrow={1} justifyContent="center">
        Portfolio
      </Box>
    </Layout>
  );
}
