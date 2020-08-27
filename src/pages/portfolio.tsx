import React from "react";
import Layout from "../components/Layout";
import {
  Box,
  Card,
  Grid,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
  Divider,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

import CentaurPlatform from "../images/centaur-iot.png";
import {centaurColorLight, centaurColorDark} from "../helpers";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  card: {},
  cardMedia: {
    margin: 20,
    paddingTop: "58%",
  },
  centaurLightText: {
    color: centaurColorLight,
  },
  centaurDarkText: {
    color: centaurColorDark,
  },
});

export default function Portfolio() {
  const classes = useStyles();
  return (
    <Layout title="Portfolio">
      <Box
        display="flex"
        flexGrow={1}
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        className={classes.root}
      >
        <Grid container spacing={2} direction="row" justify="center">
          <Grid item xs={12} md={5} lg={5}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={CentaurPlatform}
                title="Centaur"
              />
              <CardContent className={classes.centaurDarkText}>
                <Typography gutterBottom variant="h5" component="h2">
                  Centaur
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Industrial IoT Infrastructure for real-time monitoring and
                  data analysis.
                </Typography>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  href="https://centaur.ag"
                  size="small"
                  target="_blank"
                  className={classes.centaurLightText}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
