import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Container,
  Grid,
  IconButton,
  Link,
} from "@material-ui/core";
import {
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "#FFFFFF",
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(10, 1),
    },
    social: {
      fontSize: 80,
    },
    socialBtn: {
      fontSize: "inherit",
    },
    legal: {
      display: "flex",
      alignItems: "center",
    },
  })
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container>
        <Grid container>
          <Grid className={classes.social} item xs={12} md>
            <IconButton
              component={Link}
              href="https://www.facebook.com/AnvokSAS"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialBtn}
            >
              <FacebookIcon htmlColor="#FFFFFF" fontSize="inherit" />
            </IconButton>
            <IconButton
              component={Link}
              href="https://github.com/beaukode"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialBtn}
            >
              <GitHubIcon htmlColor="#FFFFFF" fontSize="inherit" />
            </IconButton>
          </Grid>
          <Grid className={classes.legal} item xs={12} md>
            Copyright 2019 Anvok S.A.S. All rights reserved
            <br />
            Mentions légales
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
