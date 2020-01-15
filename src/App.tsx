import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  Theme,
  createStyles,
  CssBaseline,
  useScrollTrigger,
  Container,
} from "@material-ui/core";
import logo from "./img/header-logo.png";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Helmet from "react-helmet";
import theme from "./theme";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";
import Cv from "./Cv";
import StatsTracking from "./StatsTracking";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      height: "2rem",
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  })
);

interface ElevationProps {
  children: React.ReactElement;
}

const ElevationScroll: React.FC<ElevationProps> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Router>
      <StatsTracking />
      <CssBaseline />
      <Helmet titleTemplate="Anvok | %s">
        <title>Solutions web, mobile et métiers pour les professionnels</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <ElevationScroll>
          <AppBar position="fixed" color="primary">
            <Container>
              <Toolbar component="nav">
                <img src={logo} alt="Logo Anvok" className={classes.logo} />

                <div className={classes.title}>Anvok</div>
                <Button className={classes.button} component={Link} to="/">
                  Accueil
                </Button>
                <Button className={classes.button} component={Link} to="/cv">
                  CV
                </Button>
                <Button
                  className={classes.button}
                  component={Link}
                  to="/contact"
                >
                  Contact
                </Button>
              </Toolbar>
            </Container>
          </AppBar>
        </ElevationScroll>
        <Switch>
          <Route path="/cv">
            <Cv />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
