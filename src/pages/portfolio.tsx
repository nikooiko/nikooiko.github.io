import React from "react";
import Layout from "../components/Layout";
import {Box} from "@material-ui/core";

export default function Portfolio() {
  return (
    <Layout title="Portfolio">
      <Box display="flex" flexGrow={1} justifyContent="center">
        Portfolio
      </Box>
    </Layout>
  );
}
