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
        Web
      </Typography>
      <Box flexGrow={1}>
        <Typography variant="body2">
          Assurer la maintenance technique de votre site internet, sa sécurité,
          le modifier et l'améliorer.
        </Typography>
        <Typography variant="body2">
          Pour votre site vitrine ou de vente en ligne : un suivi professionnel
          de vos CMS, boutiques eCommerce, blog, domaines, emails, serveurs,
          bases de données et réseaux.
        </Typography>
      </Box>
      <Box className={classes.techicons}>
        <TechIcon variant="hmtl5" />
        <TechIcon variant="css3" />
        <TechIcon variant="javascript" />
        <TechIcon variant="php" />
        <TechIcon variant="mysql" />
        <TechIcon variant="jquery" />
        <TechIcon variant="wordpress" />
        <TechIcon variant="prestashop" />
      </Box>
    </>
  );
}
