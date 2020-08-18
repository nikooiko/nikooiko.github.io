import React from "react";
import PropTypes from "prop-types";
import {Box, Divider} from "@material-ui/core";
import Copyright from "./Copyright";
import Header from "./Header";
import SEO from "./SEO";
import "./core";
import "./layout.css";

const Layout = ({children, title}) => (
  <Box display="flex" flexDirection="column" flex={1} id="layout-container">
    <SEO title={title} />
    <Header />
    <Box flex={1} flexGrow={1} display="flex" flexDirection="column">
      <Box
        flexGrow={1}
        display="flex"
        alignItems="center"
        flexDirection="column"
        p={2}
      >
        {children}
      </Box>
      <Divider variant="middle" />
      <Box p={1}>
        <Copyright />
      </Box>
    </Box>
  </Box>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
