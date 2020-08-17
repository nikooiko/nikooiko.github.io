import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright © Nikos Oikonomou&nbsp;
      {new Date().getFullYear()}.
    </Typography>
  );
}
