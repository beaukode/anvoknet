import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Box,
} from "@material-ui/core";
import TechIcon from "../TechIcon";
import ContactButton from "./ContactButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textTransform: "uppercase",
      color: theme.palette.primary.main,
      fontWeight: "bold",
    },
    techicons: {
      fontSize: 32,
    },
  })
);

export default function() {
  const classes = useStyles();

  return (
    <>
      <Typography
        component="h2"
        className={classes.title}
        color="textPrimary"
        gutterBottom
      >
        Applications
      </Typography>
      <Box flexGrow={1}>
        <Typography variant="body2">
          Etude, développement et maintenance d'applications web, mobile android
          &amp; iOS, Windows, MacOS, Linux
        </Typography>
        <Typography variant="body2">
          Utilisation des dernières technologies d'applications cloud, web,
          mobile et logiciel afin de réaliser des interfaces modernes, agréables
          et intuitives pour une utilisation interne, externe ou publique.
        </Typography>
      </Box>
      <Box display="flex">
        <Box flexGrow={1} className={classes.techicons}>
          <TechIcon variant="nodejs" />
          <TechIcon variant="reactjs" />
          <TechIcon variant="electronjs" />
          <TechIcon variant="mongodb" />
          <TechIcon variant="firebase" />
          <TechIcon variant="aws" />
        </Box>
        <Box>
          <ContactButton />
        </Box>
      </Box>
    </>
  );
}
