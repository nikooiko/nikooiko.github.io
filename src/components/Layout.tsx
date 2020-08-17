import React from "react";
import PropTypes from "prop-types";
import {Box} from "@material-ui/core";
import Copyright from "./Copyright";
import Header from "./Header";
import "./core";
import "./layout.css";

const Layout = ({children}) => (
  <Box display="flex" flexDirection="column">
    <Header />
    <main>{children}</main>
    <Copyright />
  </Box>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
