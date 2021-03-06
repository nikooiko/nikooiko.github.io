import React from "react";
import Typography from "@material-ui/core/Typography";
import {Box, Avatar, Toolbar, AppBar, Button, Grid} from "@material-ui/core";
import "./core";
import Me from "../images/me.jpg";
import {navigate} from "gatsby";
import {isMobile} from "../helpers";

const Header = () => {
  const mobile = isMobile();
  let avatarSize;
  let nameSize;
  if (mobile) {
    avatarSize = "150px";
    nameSize = "h5";
  } else {
    avatarSize = "200px";
    nameSize = "h4";
  }
  return (
    <Box
      bgcolor="primary.light"
      color="primary.contrastText"
      alignItems="center"
      flexDirection="column"
      display="flex"
      pt={1}
    >
      <Avatar
        alt="N"
        src={Me}
        style={{width: avatarSize, height: avatarSize}}
      />
      <Box m={1}>
        <Typography variant={nameSize} component="h1" align="center">
          Nikos Oikonomou
        </Typography>
      </Box>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            color="primary.contrastText"
            justify="center"
            spacing={2}
          >
            <Grid item>
              <Button
                variant="text"
                color="inherit"
                onClick={() => navigate("/")}
              >
                About
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                color="inherit"
                onClick={() => navigate("/portfolio")}
              >
                Portfolio
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
