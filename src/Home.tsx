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
  Box,
} from "@material-ui/core";
import { ContactSupport as ContactIcon } from "@material-ui/icons";
import * as Scroll from "react-scroll";
import {
  Html5Icon,
  Css3Icon,
  JsIcon,
  PhpIcon,
  JQueryIcon,
  WordpressIcon,
  AwsIcon,
  DockerIcon,
  ElectronJsIcon,
  FirebaseIcon,
  KubernetesIcon,
  MongoDbIcon,
  MySqlIcon,
  PrestashopIcon,
  ReactIcon,
  GitIcon,
  AmplifyIcon,
  CircleCiIcon,
  GitHubIcon,
} from "./Icons";
import TechIcon from "./TechIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 80,
    },
    paper: {
      padding: theme.spacing(2, 2, 1, 2),
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    title: {
      textTransform: "uppercase",
      color: theme.palette.primary.main,
      fontWeight: "bold",
    },
    techicons: {
      fontSize: 32,
    },
    footer: {
      // position: "absolute",
      // bottom: theme.spacing(1),
      // right: 0,
      // width: "100%",
    },
  })
);

const Home: React.FC = () => {
  const classes = useStyles();

  const ContactButton = (
    <Button
      color="primary"
      endIcon={<ContactIcon />}
      component={Scroll.Link}
      to="contact"
      smooth={true}
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
            <Box flexGrow={1}>
              <Typography variant="body2">
                Assurer la maintenance technique de votre site internet, sa
                sécurité, le modifier et l'améliorer.
              </Typography>
              <Typography variant="body2">
                Pour votre site vitrine ou de vente en ligne : un suivi
                professionnel de vos CMS, boutiques eCommerce, blog, domaines,
                emails, serveurs, bases de données et réseaux.
              </Typography>
            </Box>
            <Box display="flex" className={classes.footer}>
              <Box flexGrow={1} className={classes.techicons}>
                <TechIcon
                  title="HTML 5"
                  href="https://developer.mozilla.org/fr/docs/Web/Guide/HTML/HTML5"
                >
                  <Html5Icon />
                </TechIcon>
                <TechIcon
                  title="CSS 3"
                  href="https://developer.mozilla.org/fr/docs/Web/CSS"
                >
                  <Css3Icon />
                </TechIcon>
                <TechIcon
                  title="Javascript"
                  href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                >
                  <JsIcon />
                </TechIcon>
                <TechIcon title="PHP" href="https://www.php.net">
                  <PhpIcon />
                </TechIcon>
                <TechIcon title="MySQL" href="https://www.mysql.com/">
                  <MySqlIcon />
                </TechIcon>
                <TechIcon title="jQuery" href="https://jquery.com/">
                  <JQueryIcon />
                </TechIcon>
                <TechIcon title="WordPress" href="https://fr.wordpress.org/">
                  <WordpressIcon />
                </TechIcon>
                <TechIcon
                  title="PrestaShop"
                  href="https://www.prestashop.com/fr"
                >
                  <PrestashopIcon />
                </TechIcon>
              </Box>
              <Box>{ContactButton}</Box>
            </Box>
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
            <Box flexGrow={1}>
              <Typography variant="body2">
                Etude, développement et maintenance d'applications web, mobile
                android &amp; iOS, Windows, MacOS, Linux
              </Typography>
              <Typography variant="body2">
                Utilisation des dernières technologies d'applications cloud,
                web, mobile et logiciel afin de réaliser des interfaces
                modernes, agréables et intuitives pour une utilisation interne,
                externe ou publique.
              </Typography>
            </Box>
            <Box display="flex" className={classes.footer}>
              <Box flexGrow={1} className={classes.techicons}>
                <TechIcon
                  title="React &amp; React Native"
                  href="https://reactjs.org/"
                >
                  <ReactIcon />
                </TechIcon>
                <TechIcon title="ElectronJs" href="https://electronjs.org/">
                  <ElectronJsIcon />
                </TechIcon>
                <TechIcon title="MongoDb" href="https://www.mongodb.com/fr">
                  <MongoDbIcon />
                </TechIcon>
                <TechIcon
                  title="Google Firebase"
                  href="https://firebase.google.com/"
                >
                  <FirebaseIcon />
                </TechIcon>
                <TechIcon
                  title="Amazon web services"
                  href="https://aws.amazon.com/fr/"
                >
                  <AwsIcon />
                </TechIcon>
              </Box>
              <Box>{ContactButton}</Box>
            </Box>
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
            <Box flexGrow={1}>
              <Typography variant="body2">
                L'objectif est de vous faire gagner du temps grâce à
                l'automatisation de vos tâches récurrentes telles que la
                modification de fichiers, le traitement de données, la recopie,
                la gestion de documents, etc...
              </Typography>
              <Typography variant="body2">
                Vous manquez de temps mais vous ne savez pas ce qui peut être
                automatisé, une étude d'observation dans vos locaux permet
                d'identifier les tâches chronophages qui peuvent être réduites
                grâce à la modernisation et l'industrialisation de vos
                habitudes.
              </Typography>
            </Box>
            <Box display="flex" className={classes.footer}>
              <Box flexGrow={1} className={classes.techicons}>
                {" "}
              </Box>
              <Box>{ContactButton}</Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} gutterBottom>
              Consulting DevOps
            </Typography>
            <Box flexGrow={1}>
              <Typography variant="body2">
                Vous êtes développeur de logiciels, agence web, faites vous
                accompagner pour moderniser vos processus développements et
                livraisons.
              </Typography>
              <Typography variant="body2">
                Ne manquez pas la révolution DevOps, ces dernières années les
                techniques et outils de developpements ont connus une mutation
                rapide pour répondre aux exigences de vos clients, maîtriser et
                réduire les coûts de production.
              </Typography>
            </Box>
            <Box display="flex" className={classes.footer}>
              <Box flexGrow={1} className={classes.techicons}>
                <TechIcon title="Git" href="https://git-scm.com/">
                  <GitIcon />
                </TechIcon>
                <TechIcon title="GitHub" href="https://github.com/">
                  <GitHubIcon />
                </TechIcon>
                <TechIcon
                  title="AWS Amplify"
                  href="https://aws.amazon.com/fr/amplify/"
                >
                  <AmplifyIcon />
                </TechIcon>
                <TechIcon title="CircleCi" href="https://circleci.com/">
                  <CircleCiIcon />
                </TechIcon>
                <TechIcon title="Docker" href="https://www.docker.com/">
                  <DockerIcon />
                </TechIcon>
                <TechIcon title="Kubernetes" href="https://kubernetes.io/">
                  <KubernetesIcon />
                </TechIcon>
              </Box>
              <Box>{ContactButton}</Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
