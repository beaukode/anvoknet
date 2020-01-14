import React from "react";
import {
  List,
  ListItem,
  Typography,
} from "@material-ui/core";

interface Props {
  title: string;
  values: string[];
  titleClass?: string;
}

const Skills: React.FC<Props> = React.memo(({ title, values, titleClass }) => {
  return (
    <>
      <Typography
        component="h2"
        className={titleClass}
        color="textPrimary"
        gutterBottom
      >
        {title}
      </Typography>
      <List dense={true}>
        {values.map(v => (
          <ListItem key={v}>{v}</ListItem>
        ))}
      </List>
    </>
  );
});

export default Skills;
