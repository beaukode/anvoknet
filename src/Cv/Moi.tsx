import React from "react";
import { Avatar, List, ListItem, ListItemText } from "@material-ui/core";
import moi from "../img/moi.jpg";

interface Props {
  className?: string;
}

const Moi: React.FC<Props> = React.memo(({ className }) => {
  return (
    <>
      <Avatar alt="Jérémie COLOMBO" src={moi} className={className} />
      <List dense={true}>
        <ListItem>
          <ListItemText
            primary="Né le 22/12/1983"
            secondary="Nationalité Française"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Résident à Vauconcourt-Nervezain"
            secondary="(70) Haute-Saône"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Permis de conduire catégorie B"
            secondary="et véhicule"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="En union libre"
            secondary="Un enfant (14ans)"
          />
        </ListItem>
      </List>
    </>
  );
});

export default Moi;
