import { createMuiTheme } from "@material-ui/core";

const primary = "#009688";
const text = "#2A313A";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    text: {
      primary: text,
    },
  },
  props: {
    MuiButtonBase: {
      // disableRipple: true,
    },
  },
  overrides: {
    MuiButton: {
      text: {
        textTransform: "none",
        fontSize: 16,
        "&:hover": {
          color: primary,
        },
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#FFFFFF",
        color: primary,
        fontWeight: "bold",
        fontSize: "1.25rem",
      },
    },
    MuiTypography: {
      h1: {
        marginBottom: 10,
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
        lineHeight: 1.3,
        padding: "30px 0",
      },
      h2: {
        marginTop: 50,
        marginBottom: 10,
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        textTransform: "uppercase",
        lineHeight: 1.3,
        padding: "30px 0",
      },
      body2: {
        marginBottom: 10,
        textAlign: "justify",
      },
    },
  },
});

export default theme;
