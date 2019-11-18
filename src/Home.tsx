import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Paper,
  Button,
  Container,
} from "@material-ui/core";
import { ContactSupport as ContactIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 80,
    },
    paper: {
      position: "relative",
      padding: theme.spacing(2, 2, 6, 2),

      height: "100%",
    },
    title: {
      textTransform: "uppercase",
      color: theme.palette.primary.main,
      fontWeight: "bold",
    },
    button: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(1),
    },
  })
);

const Home: React.FC = () => {
  const classes = useStyles();

  const ContactButton = (
    <Button
      className={classes.button}
      color="primary"
      endIcon={<ContactIcon />}
    >
      Contact
    </Button>
  );

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h1" color="primary">
        Solutions web, mobile et métiers pour les professionnels
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              Web
            </Typography>
            <Typography variant="body2">
              Prestation technique pour assurer la maintenance technique de
              votre site internet, sa sécurité, le modifier et l'améliorer.
            </Typography>
            <Typography variant="body2">
              Pour votre site vitrine ou de vente en ligne : un suivi
              professionnel de vos CMS, boutiques eCommerce, blog, domaines,
              emails, serveurs, bases de données et reseaux.
            </Typography>
            {ContactButton}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              Applications
            </Typography>
            <Typography variant="body2">
              Etude, developpement et maintenance d'applications web, mobile
              android &amp; iOS, Windows, MacOS, Linux
            </Typography>
            <Typography variant="body2">
              Utilisation des dernières technologies d'applications cloud, web,
              mobile et logiciel afin de réaliser des interfaces modernes,
              agréable et intuitives pour une utilisation interne, externe ou
              publique.
            </Typography>
            {ContactButton}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              Solutions métiers
            </Typography>
            <Typography variant="body2">
              L'objectif est de vous faire gagner du temps grâce à
              l'automatisation vos tâches récurrents tel que la modification de
              fichiers, traitement de données, recopie, gestion de documents,
              etc...
            </Typography>
            <Typography variant="body2">
              Vous manquez de temps mais vous ne savez pas ce qui peut être
              automatisé et standardisé, une étude dans vos locaux pour
              identifier les tâches chronophages qui peuvent être réduite grâce
              a la modernisation et l'industrialisation de vos habitudes.
            </Typography>
            {ContactButton}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} gutterBottom>
              Consulting DevOps
            </Typography>
            <Typography variant="body2">
              Vous êtes développeur de logiciels, agence web, faites vous
              accompagner pour moderniser vos processus développements et
              livraisons.
            </Typography>
            <Typography variant="body2">
              Ne manquez pas la révolution DevOps, ces dernières années les
              techniques et outils de developpements ont connus une mutation
              rapide pour répondre aux exigences : Produire plus, plus vite et
              fiable.
            </Typography>
            {ContactButton}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
