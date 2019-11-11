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
        <Grid item xs={12} md>
          <Paper className={classes.paper}>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              Web &amp; Mobile
            </Typography>
            <Typography variant="body2">
              Vous souhaitez améliorer votre efficacité en ligne ou sur
              terminaux mobile, nous sommes capable de réaliser des applications
              ou d'intervenir sur l'existant.
            </Typography>
            <Typography variant="body2">
              En tant que prestataire technique, nous pouvons assurer la
              maintenance de votre site internet, sa sécurité, le modifier et
              l'améliorer selon vos souhaits.
            </Typography>
            <Typography variant="body2">
              Que ce soit un site vitrine ou de vente en ligne nous maitrisons
              les technologies courantes de CMS, application eCommerce, Blog et
              même les technologies serveurs, bases de données et reseaux.
            </Typography>
            {ContactButton}
          </Paper>
        </Grid>
        <Grid item xs={12} md>
          <Paper className={classes.paper}>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              Applications métiers
            </Typography>
            <Typography variant="body2">
              Pour un nouveau developpement ou l'amélioration d'une application
              existante : Nous maitrisons les dernières technologies
              d'applications cloud, web, mobile et logiciel afin de réaliser des
              interfaces modernes, agréable et intuitives.
            </Typography>
            <Typography variant="body2">
              Vous avez remarqué des tâches récurrentes dans votre activité ?
              Les outils informatiques peuvent automatiser ou assister à la
              réalisation de tâches : Modification de fichiers, traitement de
              données, recopie, gestion de documents papiers.
            </Typography>
            <Typography variant="body2">
              Vous manquez de temps mais vous ne savez pas ce qui peut être
              automatisé et standardisé, nous sommes capable de réaliser un
              étude afin d'identifier les tâches récurente et chronophages.
            </Typography>
            {ContactButton}
          </Paper>
        </Grid>
        <Grid item xs={12} md>
          <Paper className={classes.paper}>
            <Typography className={classes.title} gutterBottom>
              Consulting DevOps
            </Typography>
            <Typography variant="body2">
              Vous êtes développeur de logiciel, agence web, nous vous proposons
              un accompagnement personnalisé pour moderniser vos développements
              et livraisons.
            </Typography>
            <Typography variant="body2">
              La révolution DevOps est arrivée. Ces dernières années les
              techniques et outils de developpements ont connus une mutation
              rapide pour répondre aux exigences : Produire plus, plus vite et
              fiable.
            </Typography>
            <Typography variant="body2">
              Grâce a une expérience acquise en conditions réeles en tant que
              développeur, nous avons la capacité d'étudier sur site votre façon
              de travailler et de l'optimiser par la mise en place de flux de
              travaux et d'outils.
            </Typography>
            {ContactButton}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
