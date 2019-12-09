import React from "react";
import {
  IconButton,
  Link,
  Tooltip,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";

interface TechIconProps {
  href: string;
  title: string;
  children: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      fontSize: "inherit",
      padding: 4,
    },
  })
);

const TechIcon: React.FC<TechIconProps> = ({ href, title, children }) => {
  const classes = useStyles();
  const content = React.cloneElement(children, {
    fontSize: "inherit",
  });
  return (
    <Tooltip title={title}>
      <IconButton
        component={Link}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.btn}
      >
        {content}
      </IconButton>
    </Tooltip>
  );
};

export default TechIcon;
