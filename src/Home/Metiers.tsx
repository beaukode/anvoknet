import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Box,
} from "@material-ui/core";
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
        Solutions métiers
      </Typography>
      <Box flexGrow={1}>
        <Typography variant="body2">
          L'objectif est de vous faire gagner du temps grâce à l'automatisation
          de vos tâches récurrentes telles que la modification de fichiers, le
          traitement de données, la recopie, la gestion de documents, etc...
        </Typography>
        <Typography variant="body2">
          Vous manquez de temps mais vous ne savez pas ce qui peut être
          automatisé, une étude d'observation dans vos locaux permet
          d'identifier les tâches chronophages qui peuvent être réduites grâce à
          la modernisation et l'industrialisation de vos habitudes.
        </Typography>
      </Box>
      <Box display="flex">
        <Box flexGrow={1} className={classes.techicons}>
          {" "}
        </Box>
        <Box>
          <ContactButton />
        </Box>
      </Box>
    </>
  );
}
