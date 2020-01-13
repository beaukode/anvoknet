import React from "react";
import {
  IconButton,
  Link,
  Tooltip,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import {
  Html5Icon,
  Css3Icon,
  JsIcon,
  PhpIcon,
  JQueryIcon,
  WordpressIcon,
  AwsIcon,
  DockerIcon,
  ElectronJsIcon,
  FirebaseIcon,
  KubernetesIcon,
  MongoDbIcon,
  MySqlIcon,
  PrestashopIcon,
  ReactIcon,
  GitIcon,
  AmplifyIcon,
  CircleCiIcon,
  GitHubIcon,
  NodeJsIcon,
} from "./Icons";

const variants = {
  hmtl5: {
    title: "HTML 5",
    href: "https://developer.mozilla.org/fr/docs/Web/Guide/HTML/HTML5",
    icon: <Html5Icon />,
  },
  css3: {
    title: "CSS 3",
    href: "https://developer.mozilla.org/fr/docs/Web/CSS",
    icon: <Css3Icon />,
  },
  javascript: {
    title: "Javascript",
    href: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    icon: <JsIcon />,
  },
  php: {
    title: "PHP",
    href: "https://www.php.net",
    icon: <PhpIcon />,
  },
  mysql: {
    title: "MySQL",
    href: "https://www.mysql.com/",
    icon: <MySqlIcon />,
  },
  jquery: {
    title: "jQuery",
    href: "https://jquery.com/",
    icon: <JQueryIcon />,
  },
  wordpress: {
    title: "WordPress",
    href: "https://fr.wordpress.org/",
    icon: <WordpressIcon />,
  },
  prestashop: {
    title: "PrestaShop",
    href: "https://www.prestashop.com/fr",
    icon: <PrestashopIcon />,
  },
  nodejs: {
    title: "NodeJs",
    href: "https://nodejs.org/",
    icon: <NodeJsIcon />,
  },
  reactjs: {
    title: "React &amp; React Native",
    href: "https://reactjs.org/",
    icon: <ReactIcon />,
  },
  electronjs: {
    title: "ElectronJs",
    href: "https://electronjs.org/",
    icon: <ElectronJsIcon />,
  },
  mongodb: {
    title: "MongoDb",
    href: "https://www.mongodb.com/fr",
    icon: <MongoDbIcon />,
  },
  firebase: {
    title: "Google Firebase",
    href: "https://firebase.google.com/",
    icon: <FirebaseIcon />,
  },
  aws: {
    title: "Amazon web services",
    href: "https://aws.amazon.com/fr/",
    icon: <AwsIcon />,
  },
  git: {
    title: "Git",
    href: "https://git-scm.com/",
    icon: <GitIcon />,
  },
  github: {
    title: "GitHub",
    href: "https://github.com/",
    icon: <GitHubIcon />,
  },
  amplify: {
    title: "AWS Amplify",
    href: "https://aws.amazon.com/fr/amplify/",
    icon: <AmplifyIcon />,
  },
  circleci: {
    title: "CircleCi",
    href: "https://circleci.com/",
    icon: <CircleCiIcon />,
  },
  docker: {
    title: "Docker",
    href: "https://www.docker.com/",
    icon: <DockerIcon />,
  },
  kubernetes: {
    title: "Kubernetes",
    href: "https://kubernetes.io/",
    icon: <KubernetesIcon />,
  },
};

interface TechIconProps {
  variant: keyof typeof variants;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      fontSize: "inherit",
      padding: 4,
    },
  })
);

const TechIcon: React.FC<TechIconProps> = ({ variant }) => {
  const classes = useStyles();
  const { title, href, icon } = variants[variant];
  const content = React.cloneElement(icon, {
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
