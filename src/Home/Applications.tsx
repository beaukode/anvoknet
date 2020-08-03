import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Box,
} from "@material-ui/core";
import TechIcon from "../TechIcon";

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

export default function () {
  const classes = useStyles();

  return (
    <>
      <Typography
        component="h2"
        className={classes.title}
        color="textPrimary"
        gutterBottom
      >
        Etude, développement et maintenance d'applications
      </Typography>
      <Box flexGrow={1}>
        <Typography variant="body2">
          Web, mobile android &amp; iOS, Windows, MacOS, Linux
        </Typography>
        <Typography variant="body2">
          Utilisation des dernières technologies d'applications cloud, web,
          mobile et logiciel afin de réaliser des interfaces modernes, agréables
          et intuitives pour une utilisation interne, externe ou publique.
        </Typography>
        <Typography variant="body2">
          Tous mes développements sont réalisés dans un cycle d'intégration et
          livraison continue CI/CD avec la mise en place d'une chaine de
          processus automatisé : Dépôt de code, Tests, Construction, Livraison.
        </Typography>
        <Typography variant="body2">
          À chaque modification du code une version privée est mise en ligne et
          permet au client de suivre l’avancement des travaux n’importe quand et
          n’importe où.
        </Typography>
      </Box>
      <Box className={classes.techicons}>
        <TechIcon variant="nodejs" />
        <TechIcon variant="php" />
        <TechIcon variant="reactjs" />
        <TechIcon variant="electronjs" />
        <TechIcon variant="mongodb" />
        <TechIcon variant="mysql" />
        <TechIcon variant="aws" />
        <TechIcon variant="git" />
        <TechIcon variant="amplify" />
        <TechIcon variant="circleci" />
        <TechIcon variant="docker" />
      </Box>
    </>
  );
}
