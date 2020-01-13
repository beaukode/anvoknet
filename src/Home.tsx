import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Paper,
  Container,
} from "@material-ui/core";
import Web from "./Home/Web";
import Applications from "./Home/Applications";
import Metiers from "./Home/Metiers";
import DevOps from "./Home/DevOps";

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
  })
);

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h1" color="primary">
        Solutions web, mobile et métiers pour les professionnels
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Web />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Applications />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Metiers />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <DevOps />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
