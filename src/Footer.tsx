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
  Box,
  colors,
} from "@material-ui/core";
import {
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Build as TechIcon,
} from "@material-ui/icons";
import Legal from "./Legal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
    prefooter: {
      backgroundColor: "#FFFFFF",
      color: colors.grey[600],
      padding: theme.spacing(1),
      textAlign: "center",
    },
    prefooterIcon: {
      verticalAlign: "middle",
    },
    footer: {
      color: "#FFFFFF",
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

function extLink(url: string, name: string): React.ReactNode {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      {name}
    </Link>
  );
}

const Footer: React.FC = () => {
  const [legal, setLegal] = React.useState(false);
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Box className={classes.prefooter}>
        <TechIcon className={classes.prefooterIcon} />
        &nbsp;&nbsp;Ce site est réalisé en javascript&nbsp;
        {extLink("https://reactjs.org/", "ReactJS")}&nbsp;avec&nbsp;
        {extLink("https://material-ui.com/", "MaterialUI")}, il est hébergé
        sur&nbsp;
        {extLink("https://aws.amazon.com/", "Amazon Web Services")}&nbsp;et
        déployé en CI/CD avec&nbsp;
        {extLink("https://aws.amazon.com/amplify/", "AWS Amplify")}, Les
        messages du formulaire de contact me sont transmis par&nbsp;
        {extLink("https://aws.amazon.com/sns/", "AWS SNS")}.
      </Box>
      <Container className={classes.footer}>
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
