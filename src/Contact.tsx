import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Container,
  TextField,
  Button,
  CircularProgress,
  IconButton,
  Snackbar,
} from "@material-ui/core";
import { Send as SendIcon, Close as CloseIcon } from "@material-ui/icons";
import AWS from "aws-sdk/global";
import SNS from "aws-sdk/clients/sns";

AWS.config.region = "eu-central-1"; // Région
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "eu-central-1:ce885d0a-73fb-4075-aa67-408691e25aed",
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(8),
    },
    field: {
      marginTop: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(2),
    },
    wrapper: {
      position: "relative",
      display: "inline-flex",
    },
    buttonProgress: {
      color: "#39C16C",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
    success: {
      backgroundColor: "#39C16C",
    },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
  })
);

const Contact: React.FC = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [confirm, setConfirm] = React.useState("");
  const [confirmClass, setConfirmClass] = React.useState(classes.success);
  const [nom, setNom] = React.useState("");
  const [nomError, setNomError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [societe, setSociete] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [messageError, setMessageError] = React.useState("");

  const send = () => {
    let error = false;
    setLoading(true);
    if (nom.trim().length < 2) {
      setNomError("Veuillez saisir un nom & prénom");
      error = true;
    } else {
      setNomError("");
    }
    if (email.trim().length < 5) {
      setEmailError("Veuillez saisir votre email");
      error = true;
    } else {
      setEmailError("");
    }
    if (message.trim().length < 5) {
      setMessageError("Veuillez saisir un message");
      error = true;
    } else {
      setMessageError("");
    }

    if (error) {
      setLoading(false);
      return;
    }

    var params: SNS.Types.PublishInput = {
      Message: `Nom: ${nom}
Email: ${email}
Société: ${societe}
${message}`,
      Subject: "Anvok: Formulaire de contact",
      TopicArn: "arn:aws:sns:eu-central-1:216634561923:AnvokNet_Contact",
    };

    const sns = new SNS();
    sns
      .publish(params)
      .promise()
      .then(() => {
        setNom("");
        setEmail("");
        setSociete("");
        setMessage("");
        setConfirm("Votre message a bien été envoyé !");
        setConfirmClass(classes.success);
      })
      .catch(() => {
        setConfirm(
          "Une erreur s'est produite, vous pouvez nous contacter directement par mail à contact@anvok.net"
        );
        setConfirmClass(classes.error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClose = function() {
    setConfirm("");
  };

  return (
    <Container className={classes.root} maxWidth="sm" component="section">
      <Typography variant="h2" color="primary">
        Contact
      </Typography>
      <TextField
        label="Nom &amp; prénom"
        value={nom}
        onChange={e => {
          const value = e.target.value;
          setNom(value);
        }}
        helperText={nomError}
        error={Boolean(nomError)}
        required
        fullWidth
      />
      <TextField
        label="Email"
        className={classes.field}
        value={email}
        onChange={e => {
          const value = e.target.value;
          setEmail(value);
        }}
        helperText={emailError}
        error={Boolean(emailError)}
        required
        fullWidth
      />
      <TextField
        label="Société"
        className={classes.field}
        value={societe}
        onChange={e => {
          const value = e.target.value;
          setSociete(value);
        }}
        fullWidth
      />
      <TextField
        label="Message"
        className={classes.field}
        value={message}
        onChange={e => {
          const value = e.target.value;
          setMessage(value);
        }}
        helperText={messageError}
        error={Boolean(messageError)}
        rows={4}
        rowsMax={20}
        required
        multiline
        fullWidth
      />
      <Typography align="right" component="div">
        <div className={classes.wrapper}>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            endIcon={<SendIcon />}
            onClick={send}
            disabled={loading}
          >
            Envoyer
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </Typography>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={Boolean(confirm)}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
          className: confirmClass,
        }}
        message={<span id="message-id">{confirm}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Container>
  );
};

export default Contact;
