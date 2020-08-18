import React from "react";
import Layout from "../components/Layout";
import {Box} from "@material-ui/core";

export default function Index() {
  return (
    <Layout title="About">
      <Box display="flex" flexGrow={1} justifyContent="center">
        About
      </Box>
    </Layout>
  );
}
