import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Container,
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from "@material-ui/core";
import moi from "./img/moi.jpg";
import CvItem from "./Cv/CvItem";
import { experience, formation, benevolat } from "./Cv/Data";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 80,
      marginBottom: theme.spacing(8),
    },
    paper: {
      padding: theme.spacing(2, 2, 1, 2),
      marginBottom: theme.spacing(2),
    },
    title: {
      textTransform: "uppercase",
      color: theme.palette.primary.main,
      fontWeight: "bold",
    },
    moi: {
      width: theme.spacing(14),
      height: theme.spacing(14),
      margin: "auto",
    },
  })
);

const Cv: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h1" color="primary">
        Curriculum vitæ
        <br />
        <small>Jérémie Colombo</small>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper elevation={1} className={classes.paper}>
            <Avatar alt="Jérémie COLOMBO" src={moi} className={classes.moi} />
            <List dense={true}>
              <ListItem>
                <ListItemText
                  primary="Né le 22/12/1983"
                  secondary="Nationalité Française"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Résident à Vauconcourt-Nervezain"
                  secondary="(70) Haute-Saône"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Permis de conduire catégorie B"
                  secondary="et véhicule"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="En union libre"
                  secondary="Un enfant (14ans)"
                />
              </ListItem>
            </List>
          </Paper>
          <Hidden mdUp>
            <Paper elevation={1} className={classes.paper}>
              <Typography
                component="h2"
                className={classes.title}
                color="textPrimary"
                gutterBottom
              >
                Développeur FullStack &amp; DevOps
              </Typography>
              <Typography variant="body2">
                Après 18ans d'expérience professionnelle salariée, je propose
                maintenant mes services en tant que développeur indépendant, je
                travail à distance ou en mixte.
                <br />
                <br />
                Passionné, j'aime le code propre et fiable, j'évite de réinventé
                la roue et effectue tous mes développement en CI/CD. J'adore
                automatiser toutes tâches répétitives, éviter les régressions et
                que tout fonctionne comme une horloge suisse.
                <br />
                <br />
                Autonome et force de propositions j'ai travaillé sur des projets
                solo, des projets en équipe et de la gestion d'équipe en tant
                que CTO.
                <br />
                <br />
                Etant curieux et polymathe j'ai la capacité d'avoir une vision
                d'un projet informatique dans son ensemble et des interractions
                entre les composants.
              </Typography>
            </Paper>
          </Hidden>
          <Paper elevation={1} className={classes.paper}>
            <Typography
              component="h2"
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              Développement
            </Typography>
            <List dense={true}>
              <ListItem>Javascript / Typescript</ListItem>
              <ListItem>ReactJS</ListItem>
              <ListItem>NodeJS</ListItem>
              <ListItem>MongoDb</ListItem>
              <ListItem>MongoDb Stitch</ListItem>
              <ListItem>Amazon Web Services</ListItem>
              <ListItem>PHP</ListItem>
              <ListItem>MySQL</ListItem>
            </List>
          </Paper>
          <Paper elevation={1} className={classes.paper}>
            <Typography
              component="h2"
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              DevOps
            </Typography>
            <List dense={true}>
              <ListItem>Git</ListItem>
              <ListItem>CircleCI</ListItem>
              <ListItem>Docker</ListItem>
              <ListItem>Kubernetes</ListItem>
              <ListItem>AWS Amplify, CDK</ListItem>
              <ListItem>Linux</ListItem>
            </List>
          </Paper>
          <Paper elevation={1} className={classes.paper}>
            <Typography
              component="h2"
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              Soft-Skills
            </Typography>
            <List dense={true}>
              <ListItem>Curiosité</ListItem>
              <ListItem>Relever des défis</ListItem>
              <ListItem>Autonomie</ListItem>
              <ListItem>Créativité</ListItem>
              <ListItem>Motivation</ListItem>
            </List>
          </Paper>
          <Paper elevation={1} className={classes.paper}>
            <Typography
              component="h2"
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              Langues
            </Typography>
            <List dense={true}>
              <ListItem>Français: Maternel</ListItem>
              <ListItem>Anglais: Lu</ListItem>
            </List>
          </Paper>
          <Paper elevation={1} className={classes.paper}>
            <Typography
              component="h2"
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              Loisirs
            </Typography>
            <List dense={true}>
              <ListItem>Informatique</ListItem>
              <ListItem>Jeux vidéos</ListItem>
              <ListItem>Musique</ListItem>
              <ListItem>Bricolage et Jardinage</ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Hidden mdDown>
            <Paper elevation={1} className={classes.paper}>
              <Typography
                component="h2"
                className={classes.title}
                color="textPrimary"
                gutterBottom
              >
                Développeur FullStack &amp; DevOps
              </Typography>
              <Typography variant="body2">
                Après 18ans d'expérience professionnelle salariée, je propose
                maintenant mes services en tant que développeur indépendant, je
                travail à distance ou en mixte.
                <br />
                <br />
                Passionné, j'aime le code propre et fiable, j'évite de réinventé
                la roue et effectue tous mes développement en CI/CD. J'adore
                automatiser toutes tâches répétitives, éviter les régressions et
                que tout fonctionne comme une horloge suisse.
                <br />
                Autonome et force de propositions j'ai travaillé sur des projets
                solo, des projets en équipe et de la gestion d'équipe en tant
                que CTO.
              </Typography>
            </Paper>
          </Hidden>
          <Paper elevation={1} className={classes.paper}>
            <Typography
              component="h2"
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              Expérience
            </Typography>
            {experience.map((i, idx) => (
              <CvItem key={idx} {...i} />
            ))}
          </Paper>
          <Paper elevation={1} className={classes.paper}>
            <Typography
              component="h2"
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              Bénévolat
            </Typography>
            {benevolat.map((i, idx) => (
              <CvItem key={idx} {...i} />
            ))}
          </Paper>
          <Paper elevation={1} className={classes.paper}>
            <Typography
              component="h2"
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              Formation
            </Typography>
            {formation.map((i, idx) => (
              <CvItem key={idx} {...i} />
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cv;
