import React from "react";
import { Typography } from "@material-ui/core";
import { CvData } from "./Data";
import CvItem from "./CvItem";

interface Props {
  title: string;
  values: CvData[];
  titleClass?: string;
}

const CvPart: React.FC<Props> = React.memo(({ title, values, titleClass }) => {
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
      {values.map((i, idx) => (
        <CvItem key={idx} {...i} />
      ))}
    </>
  );
});

export default CvPart;
