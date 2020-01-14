import { CvItemDetail } from "./CvItem";

export const skillsDev = [
  "Javascript / Typescript",
  "ReactJS",
  "NodeJS",
  "MongoDb",
  "MongoDb Stitch",
  "Amazon Web Services",
  "PHP",
  "MySQL",
];

export const skillsDevOps = [
  "Git",
  "CircleCI",
  "Docker",
  "Kubernetes",
  "AWS Amplify, CDK",
  "Linux",
];

export const skillsSoft = [
  "Curiosité",
  "Relever des défis",
  "Autonomie",
  "Créativité",
  "Motivation",
];

export const skillsLangues = ["Français: Maternel", "Anglais: Lu"];

export const skillsLoisirs = [
  "Informatique",
  "Jeux vidéos",
  "Musique",
  "Bricolage et Jardinage",
];

export interface CvData {
  periode: string;
  label: string;
  structure: string;
  location: string;
  url?: string;
  details?: CvItemDetail[];
}

export const benevolat: CvData[] = [
  {
    label: "Membre du bureau, référent projet FabLab, valorisation DEEE",
    structure: "Ressourcerie Res'Urgence",
    location: "Scey sur saône (70)",
    periode: "Depuis novembre 2016",
    url: "https://www.res-urgence.org",
  },
];

export const formation: CvData[] = [
  {
    label: "Terminale Scientifique",
    structure: "Lycée Augustin Cournot",
    location: "Gray (70)",
    periode: "1998 - 2001",
  },
  {
    label: "BEPC",
    structure: "Collège Gaston Ramon",
    location: "Dampierre-sur-salon (70)",
    periode: "1994 - 1998",
  },
];

export const experience: CvData[] = [
  {
    label: "Développeur FullStack & DevOps indépendant",
    structure: "Anvok SAS",
    location: "Vauconcourt-Nervezain (70)",
    url: "https://www.anvok.net",
    periode: "Depuis février 2019",
    details: [
      {
        texte:
          "J'alterne entre missions freelance et développement d'une application SaaS afin d'aider les petits et moyens eCommercant a préparer leurs commandes.",
        stack: "React, Typescript, NodeJS, Docker, AWS, MongoDb Stitch",
      },
    ],
  },
  {
    label: "Directeur technique (CTO)",
    structure: "Agence Torop.net",
    location: "Vesoul (70)",
    url: "https://www.torop.net",
    periode: "Mai 2011 - Janvier 2019",
    details: [
      {
        texte:
          "Application eCommerce : Développement CMS propriétaire, mise en production CI/CD, évolution et maintenance.",
        stack:
          "PHP, Zend Framework, MongoDb, jQuery, Git, API paiements & expéditions",
      },
      {
        texte:
          "Site web : Evolution (Notamment responsive/mobile), maintenance des sites web et du CMS.",
        stack: "PHP, MySQL, jQuery, Git, CircleCI",
      },
      {
        texte: "Développement spécifiques métiers",
        stack: "ReactJS, PHP, MySQL, MongoDb",
      },
      {
        texte:
          "Maintenance infrastructure dédié OVH : Serveur mail, Serveurs dédiés d'hébergement web.",
        stack: "Linux, Docker, Kubernetes, Apache, MySQL, MongoDB, Postfix",
      },
      {
        texte:
          "Gestion de projet et management d'une équipe de développeurs : Analyse des besoins, rédactions cahier des charges et devis. Suivi des tâches, du temps passé de la facturation.",
        stack: "Jira, Outils internes",
      },
    ],
  },
  {
    label: "Développeur FullStack PHP",
    structure: "ONLINEFORMAPRO",
    location: "Vesoul (70)",
    url: "https://www.onlineformapro.com/",
    periode: "Juin 2008 - Avril 2011",
    details: [
      {
        texte:
          "Développement et maintenance de l'application LMS eLearning (Formation en ligne)",
        stack: "PHP, Javascript, HTML, CSS, MySQL, MongoDb, SVN",
      },
      {
        texte: "Mise en production et maintenance des serveurs",
        stack: "Linux, VMWare, Apache",
      },
      {
        texte: "Prise en charge, analyse et réalisation des demandes clients",
      },
    ],
  },
  {
    label: "Développeur",
    structure: "TELFI Interactif",
    location: "Ile de France",
    periode: "Juin 2002 - Mai 2008",
    details: [
      {
        texte: "Développement de sites web",
        stack: "PHP, MySQL, Javascript, Flash, HTML, CSS",
      },
      {
        texte:
          "Développement d'applications : Traitement de signal et d'image, Cartographie & GPS (Gestion de flotte), Gestion de société, de commandes et de stocks",
        stack: "Visual Basic 6, C# .NET, SQL Server",
      },
      {
        texte: "Administration des serveurs",
        stack: "Windows NT, Linux",
      },
    ],
  },
  {
    label: "Webmaster / Développeur web",
    structure: "Selopress / Elegantis",
    location: "Issy-les-Moulineaux (92)",
    periode: "Janvier 2001 - Janvier 2002",
    details: [
      {
        texte:
          "Développement et maintenant d'un portail web luxe et art de vivre elegantis.com",
        stack: "Coldfusion, Spectra, HTML, CSS",
      },
      {
        texte: "Applications de commande et facturation",
        stack: "MS Access, VBA",
      },
      {
        texte: "Administration serveurs web, fichiers, routeur/firewall",
        stack: "Windows NT, Linux",
      },
    ],
  },
];
