import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Paper,
  Container,
  Button,
  Box,
} from "@material-ui/core";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Face as CvIcon,
  Work as ReaIcon,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Applications from "./Home/Applications";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 80,
      marginBottom: theme.spacing(14),
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
    subtitle: {
      textAlign: "center",
      fontWeight: "bold",
    },
    techicons: {
      fontSize: 32,
    },
  })
);

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h1" color="primary">
        Solutions web, mobile et métiers pour les professionnels
        <br />
        <small>Développeur d'applications indépendant en freelance</small>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={12}>
              <Button
                component={Link}
                to="/cv"
                variant="contained"
                color="secondary"
                startIcon={<CvIcon />}
                size="large"
                fullWidth
              >
                CV
              </Button>
            </Grid>
            {/* <Grid item xs={6} md={12}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<ReaIcon />}
                size="large"
                fullWidth
              >
                Réalisations
              </Button>
            </Grid> */}
            <Grid item xs={6} md={12}>
              <Button
                href="https://www.linkedin.com/in/jeremie-colombo-093a679b/"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="secondary"
                startIcon={<LinkedInIcon />}
                size="large"
                fullWidth
              >
                LinkedIn
              </Button>
            </Grid>
            <Grid item xs={6} md={12}>
              <Button
                href="https://github.com/beaukode"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="secondary"
                startIcon={<GitHubIcon />}
                size="large"
                fullWidth
              >
                GitHub
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>
            <Applications />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
