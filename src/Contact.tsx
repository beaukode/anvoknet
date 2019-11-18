import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Container,
  TextField,
  Button,
} from "@material-ui/core";
import { Send as SendIcon } from "@material-ui/icons";
import * as Scroll from "react-scroll";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(8),
    },
    button: {
      margin: theme.spacing(2),
    },
  })
);

const Contact: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="sm" component="section">
      <Scroll.Element name="contact">
        <Typography variant="h2" color="primary">
          Contact
        </Typography>
        <TextField label="Nom &amp; prénom" required fullWidth />
        <TextField label="Email" required fullWidth />
        <TextField label="Société" fullWidth />
        <TextField
          label="Message"
          rows={4}
          rowsMax={20}
          required
          multiline
          fullWidth
        />
        <Typography align="right">
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            endIcon={<SendIcon />}
          >
            Envoyer
          </Button>
        </Typography>
      </Scroll.Element>
    </Container>
  );
};

export default Contact;
