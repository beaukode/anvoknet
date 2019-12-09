import React from "react";
import { Typography } from "@material-ui/core";

const Legal: React.FC = () => {
  return (
    <>
      <Typography variant="h1" color="primary">
        Mentions légales
      </Typography>
      <Typography variant="h2" color="primary">
        Créateur, éditeur et propriétaire
      </Typography>
      <Typography variant="body1">
        ANVOK, SASU au capital de 1500€ inscrit au R.C.S. Vesoul
      </Typography>
      <Typography variant="body1">SIREN : 878195965</Typography>
      <Typography variant="body1">
        Siège social : 6B RUE DE LA POSTE, 70120 VAUCONCOURT-NERVEZAIN
      </Typography>
      <Typography variant="body1">
        Téléphone : 03 39 28 00 59 / Mail : contact@anvok.net
      </Typography>
      <Typography variant="body1">
        Directeur de la publication : Jérémie COLOMBO
      </Typography>
      <Typography variant="h2" color="primary">
        Droits d'auteurs et crédits
      </Typography>
      <Typography variant="body1">
        <p>
          Ce site et son contenu intégral est la propriété de ANVOK SAS. Toute
          copie, reproduction totale ou partielle est interdite sans
          l'autorisation écrite de ANVOK SAS
        </p>
        <p>
          Les logos, visuels et marques présents sur ce site sont la propriété
          de leur détenteur respectif.
        </p>
      </Typography>
      <Typography variant="h2" color="primary">
        Hébergement
      </Typography>
      <Typography variant="body1">
        Ce site est hébergé exclusivement sur des datacenters en Europe (Irlande
        et Allemagne) de la société Amazon Web Services (AWS):
        <br /> Amazon Web Services EMEA SARL (AWS Europe), 5 RUE PLAETIS,
        LUXEMBOURG https://aws.amazon.com
      </Typography>
      <Typography variant="h2" color="primary">
        Limite de responsabilité
      </Typography>
      <Typography variant="body1">
        Ce site peut proposer des liens hypertextes à destination de ressources
        présentes sur d'autres sites internet, ANVOK SAS ne peut être tenu
        responsable des ces contenus externes car il n'en est pas l'éditeur.
      </Typography>
      <Typography variant="h2" color="primary">
        Droit applicable et juridiction compétente
      </Typography>
      <Typography variant="body1">
        Tous litiges concernant le contenu et l'utilisation de ce site est
        soumis au droit français. Tout litige susceptible de s’élever à propos
        du présent site sera la compétence exclusive du tribunal de commerce de
        VESOUL (70)
      </Typography>
      <Typography variant="h2" color="primary">
        Données personnelles
      </Typography>
      <Typography variant="body1">
        Conformément à la directive européenne 2009/136/CE, vous disposez des
        droits d'accès, de modification et de suppression des données
        personnelles vous concernant sur simple en contactant ANVOK SAS.
      </Typography>
      <Typography variant="body1">
        Ce site collecte les données de visite comprenant votre adresse IP et
        les informations techniques de votre navigateur ainsi que l'adresse des
        pages consultées sur ce site. Elles sont uniquement accessible par ANVOK
        SAS et l'équipe technique de l'hébergeur.
      </Typography>
      <Typography variant="body1">
        Ce site utilise Google Analytics à des fins d'analyse statistiques, ces
        données sont conservées 26 mois. Pour en savoir plus consultez le site
        officiel :{" "}
        <a
          href="https://support.google.com/analytics/answer/6004245"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://support.google.com/analytics/answer/6004245
        </a>
      </Typography>
      <Typography variant="body1">
        Les données saisies et envoyées par le formulaire de contact sont
        transmises à ANVOK SAS, elles peuvent être utilisées par ANVOK SAS pour
        répondre a votre demande et pour construire un fichier de prospects a
        usage interne.
      </Typography>
    </>
  );
};

export default Legal;
