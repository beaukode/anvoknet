import React from "react";
import { ContactSupport as ContactIcon } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import * as Scroll from "react-scroll";

export default function ContactButton() {
  return (
    <Button
      color="primary"
      endIcon={<ContactIcon />}
      component={Scroll.Link}
      to="contact"
      smooth={true}
    >
      Contact
    </Button>
  );
}
