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
      <Typography component="h2" className={classes.title} gutterBottom>
        DevOps
      </Typography>
      <Box flexGrow={1}>
        <Typography variant="body2">
          Vous êtes développeur de logiciels, agence web, faites vous
          accompagner pour moderniser vos processus développements et
          livraisons.
        </Typography>
        <Typography variant="body2">
          Ne manquez pas la révolution DevOps, ces dernières années les
          techniques et outils de developpements ont connus une mutation rapide
          pour répondre aux exigences de vos clients, maîtriser et réduire les
          coûts de production.
        </Typography>
      </Box>
      <Box display="flex">
        <Box flexGrow={1} className={classes.techicons}>
          <TechIcon variant="git" />
          <TechIcon variant="github" />
          <TechIcon variant="amplify" />
          <TechIcon variant="circleci" />
          <TechIcon variant="docker" />
          <TechIcon variant="kubernetes" />
        </Box>
        <Box>{ContactButton}</Box>
      </Box>
    </>
  );
}
