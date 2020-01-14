import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  Hidden,
} from "@material-ui/core";
import { extLink } from "../Common";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    detail: {
      marginBottom: 0,
      marginTop: 0,
    },
    detailTexte: {
      marginBottom: 0,
    },
    detailStack: {
      marginBottom: 0,
    },
    label: {
      fontWeight: "bold",
    },
  })
);

export interface CvItemDetail {
  texte: string;
  stack?: string;
}

interface Props {
  periode?: string;
  label: string;
  structure?: string;
  location?: string;
  url?: string;
  details?: CvItemDetail[];
}

const CvItem: React.FC<Props> = ({
  periode,
  label,
  structure,
  location,
  url,
  details,
}) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={3}>
        <Divider />
        <Typography color="textSecondary">{periode}</Typography>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Hidden xsDown>
          <Divider />
        </Hidden>
        <Typography
          component="h3"
          className={classes.label}
          color="textPrimary"
        >
          {label}
        </Typography>
        <Typography color="textSecondary">
          {structure} - {location} - {url && extLink(url, url)}
        </Typography>
        {details && (
          <List dense={true}>
            {details.map((i, iidx) => (
              <ListItem key={iidx}>
                <ListItemText
                  className={classes.detail}
                  primary={i.texte}
                  primaryTypographyProps={{
                    className: classes.detailTexte,
                  }}
                  secondary={i.stack}
                  secondaryTypographyProps={{
                    className: classes.detailStack,
                  }}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Grid>
    </Grid>
  );
};

export default CvItem;
