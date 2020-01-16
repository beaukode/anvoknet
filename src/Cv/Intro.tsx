import React from "react";
import { Typography } from "@material-ui/core";

interface Props {
  titleClass?: string;
}

const Intro: React.FC<Props> = React.memo(({ titleClass }) => {
  return (
    <>
      <Typography
        component="h2"
        className={titleClass}
        color="textPrimary"
        gutterBottom
      >
        Développeur FullStack &amp; DevOps
      </Typography>
      <Typography variant="body2">
        Passionné, j'aime le code propre et fiable, j'évite de réinventé la roue
        et effectue tous mes développement en CI/CD. J'adore automatiser toutes
        tâches répétitives, éviter les régressions et que tout fonctionne comme
        une horloge suisse.
      </Typography>
      <Typography variant="body2">
        Autonome et force de propositions j'ai travaillé sur des projets solo,
        des projets en équipe et de la gestion d'équipe en tant que CTO. Etant
        curieux et pluri disciplinaire j'ai la capacité d'avoir une vision d'un
        projet informatiquedans son ensemble et des interactions entre les
        composants.
      </Typography>
      <Typography variant="body2">
        Après 19ans d'expérience professionnelle salariée, je propose maintenant
        mes services en tant que développeur indépendant, je travail à distance
        ou en mixte.
      </Typography>
    </>
  );
});

export default Intro;
