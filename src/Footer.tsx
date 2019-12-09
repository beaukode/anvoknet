import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Container,
  Grid,
  IconButton,
  Link,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import {
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@material-ui/icons";
import Legal from "./Legal";

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
  })
);

const Footer: React.FC = () => {
  const [legal, setLegal] = React.useState(false);
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
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/jeremie-colombo-093a679b/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialBtn}
            >
              <LinkedInIcon htmlColor="#FFFFFF" fontSize="inherit" />
            </IconButton>
          </Grid>
          <Grid item xs={12} md>
            <div>Copyright 2019 Anvok S.A.S. Tous droits réservés</div>
            <div>
              <Link
                color="inherit"
                href="#"
                onClick={(event: React.SyntheticEvent) => {
                  event.preventDefault();
                  setLegal(true);
                }}
              >
                Mentions légales
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Dialog
        open={legal}
        onClose={() => setLegal(false)}
        onClick={() => setLegal(false)}
        fullWidth
        maxWidth="lg"
        scroll="body"
      >
        <DialogContent>
          <Legal />
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
