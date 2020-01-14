import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Container,
  Grid,
  Paper,
  Hidden,
} from "@material-ui/core";
import {
  experience,
  formation,
  benevolat,
  skillsDev,
  skillsLoisirs,
  skillsLangues,
  skillsSoft,
  skillsDevOps,
} from "./Cv/Data";
import Moi from "./Cv/Moi";
import Skills from "./Cv/Skills";
import Intro from "./Cv/Intro";
import CvPart from "./Cv/CvPart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 80,
      marginBottom: theme.spacing(8),
    },
    paper: {
      padding: theme.spacing(2, 2, 1, 2),
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
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={12}>
              <Paper elevation={1} className={classes.paper}>
                <Moi className={classes.moi} />
              </Paper>
            </Grid>
            <Hidden mdUp>
              <Grid item xs={12} sm={8} md={12}>
                <Paper
                  elevation={1}
                  className={classes.paper}
                  style={{ height: "100%" }}
                >
                  <Intro titleClass={classes.title} />
                </Paper>
              </Grid>
            </Hidden>
            <Grid item xs={6} sm={6} md={12}>
              <Paper
                elevation={1}
                className={classes.paper}
                style={{ height: "100%" }}
              >
                <Skills
                  title="Développement"
                  values={skillsDev}
                  titleClass={classes.title}
                />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={6} md={12}>
              <Paper
                elevation={1}
                className={classes.paper}
                style={{ height: "100%" }}
              >
                <Skills
                  title="DevOps"
                  values={skillsDevOps}
                  titleClass={classes.title}
                />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={6} md={12}>
              <Paper
                elevation={1}
                className={classes.paper}
                style={{ height: "100%" }}
              >
                <Skills
                  title="Soft-Skills"
                  values={skillsSoft}
                  titleClass={classes.title}
                />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={6} md={12}>
              <Paper
                elevation={1}
                className={classes.paper}
                style={{ marginBottom: 16 }}
              >
                <Skills
                  title="Langues"
                  values={skillsLangues}
                  titleClass={classes.title}
                />
              </Paper>
              <Paper elevation={1} className={classes.paper}>
                <Skills
                  title="Loisirs"
                  values={skillsLoisirs}
                  titleClass={classes.title}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Hidden smDown>
                <Paper elevation={1} className={classes.paper}>
                  <Intro titleClass={classes.title} />
                </Paper>
              </Hidden>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={1} className={classes.paper}>
                <CvPart
                  title="Expérience"
                  values={experience}
                  titleClass={classes.title}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={1} className={classes.paper}>
                <CvPart
                  title="Bénévolat"
                  values={benevolat}
                  titleClass={classes.title}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={1} className={classes.paper}>
                <CvPart
                  title="Formation"
                  values={formation}
                  titleClass={classes.title}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cv;
