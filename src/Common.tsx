import React from "react";
import { Link } from "@material-ui/core";

export function extLink(url: string, name: string): React.ReactNode {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">{name}</Link>
  );
}
