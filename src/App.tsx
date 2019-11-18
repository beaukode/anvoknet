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
import * as Scroll from "react-scroll";
import theme from "./theme";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
    },
    logo: {
      height: "2rem",
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      // maxWidth: 260,
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
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ElevationScroll>
          <AppBar position="fixed" color="primary">
            <Container>
              <Toolbar component="nav">
                <img src={logo} alt="Logo Anvok" className={classes.logo} />
                <div className={classes.title}>Anvok</div>
                <Button
                  className={classes.button}
                  onClick={() => {
                    Scroll.animateScroll.scrollToTop();
                  }}
                >
                  Accueil
                </Button>
                {/* <Button className={classes.button}>Web &amp; Mobile</Button>
                <Button className={classes.button}>Applications métiers</Button>
                <Button className={classes.button}>Consulting DevOps</Button> */}
                <Button
                  className={classes.button}
                  component={Scroll.Link}
                  to="contact"
                  smooth={true}
                >
                  Contact
                </Button>
              </Toolbar>
            </Container>
          </AppBar>
        </ElevationScroll>
        <Home />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
