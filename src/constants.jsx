import { SiDocker, SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
// import { SiMongoose } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiDrizzle } from "react-icons/si";
import { SiGnubash } from "react-icons/si";
import { SiUbuntu } from "react-icons/si";
import { LiaAws } from "react-icons/lia";

// social imports
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

// project images
import ChatItImage from "./assets/Chat-it.png";
import EMSImage from "./assets/EMS.png";
import ShopItImage from "./assets/Shop-it.png";
import GirifolioImage from "./assets/Girifolio.png";

// skills tags
export const SKILL_TAGS = [
  "All",
  "Backend",
  "DB",
  "DevOps & Tooling",
  "Languages",
  "Frontend",
];

// all skills
export const SKILLS = [
  // Core Backend
  {
    name: "Node.js",
    color: "#3C873A",
    icon: <SiNodedotjs />,
    tag: ["Backend"],
    link: "https://nodejs.org/en",
  },
  {
    name: "TypeScript",
    color: "#007acc",
    icon: <SiTypescript />,
    tag: ["Backend", "Languages"],
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Express",
    color: "white",
    icon: <SiExpress />,
    tag: ["Backend"],
    link: "https://expressjs.com/",
  },

  // Cloud, OS & Tooling
  {
    name: "Docker",
    color: "#1D63ED",
    icon: <SiDocker />,
    tag: ["Backend", "DevOps & Tooling"],
    link: "https://www.docker.com/",
  },
  {
    name: "AWS",
    color: "#ff9900",
    icon: <LiaAws />,
    info: "EC2, Lambda, S3, SQS, IAM",
    tag: ["Backend", "DevOps & Tooling"],
    link: "https://aws.amazon.com/",
  },
  {
    name: "Bash/Tmux",
    color: "#4EAA25",
    icon: <SiGnubash />,
    tag: ["DevOps & Tooling"],
    link: "https://www.gnu.org/software/bash/",
  },
  {
    name: "Linux",
    color: "#E95420",
    icon: <SiUbuntu />,
    info: "Ubuntu",
    tag: ["DevOps & Tooling"],
    link: "https://ubuntu.com/",
  },
  // {
  //   name: "Tmux",
  //   color: "#4EAA25",
  //   icon: <VscTerminalTmux />,
  //   tag: ["DevOps & Tooling"],
  //   link: "https://github.com/tmux/tmux",
  // },

  // DB & Data Layer
  {
    name: "PostgreSQL",
    color: "#336791",
    icon: <SiPostgresql />,
    tag: ["DB"],
    link: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    color: "#00ED64",
    icon: <SiMongodb />,
    tag: ["DB"],
    link: "https://www.mongodb.com/",
  },
  {
    name: "SQLite",
    color: "#0F80CC",
    icon: <SiSqlite />,
    tag: ["DB"],
    link: "https://www.sqlite.org/index.html",
  },
  {
    name: "Drizzle ORM",
    color: "#c5f74f",
    icon: <SiDrizzle />,
    tag: ["Backend"],
    link: "https://orm.drizzle.team/",
  },

  // Backend Frameworks / Realtime
  {
    name: "Next.js",
    color: "white",
    icon: <SiNextdotjs />,
    info: "API routes, SSR",
    tag: ["Backend"],
    link: "https://nextjs.org/",
  },
  {
    name: "Socket.IO",
    color: "white",
    icon: <SiSocketdotio />,
    info: "familiar",
    tag: ["Backend"],
    link: "https://socket.io/",
  },

  // Version Control
  {
    name: "Git",
    color: "#F1502F",
    icon: <SiGit />,
    tag: ["DevOps & Tooling"],
    link: "https://git-scm.com/",
  },

  // Languages (Non-Primary)
  {
    name: "JavaScript",
    color: "#f7df1e",
    icon: <SiJavascript />,
    tag: ["Languages"],
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "C++",
    color: "#5E97D0",
    icon: <SiCplusplus />,
    tag: ["Languages"],
    link: "https://isocpp.org/",
  },

  // Frontend (Secondary)
  {
    name: "React",
    color: "#61DBFB",
    icon: <SiReact />,
    tag: ["Frontend"],
    link: "https://react.dev/",
  },
  {
    name: "Redux Toolkit",
    color: "#764abc",
    icon: <SiRedux />,
    tag: ["Frontend"],
    link: "https://redux-toolkit.js.org/",
  },
  {
    name: "HTML",
    color: "#e44d26",
    icon: <SiHtml5 />,
    tag: ["Frontend"],
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    color: "#264de4",
    icon: <SiCss3 />,
    tag: ["Frontend"],
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Tailwind CSS",
    color: "#00bcff",
    icon: <SiTailwindcss />,
    tag: ["Frontend"],
    link: "https://tailwindcss.com/",
  },
];


// socials

export const SOCIALS = [
  {
    name: "whatsapp",
    icon: <FaWhatsapp />,
    link: "https://wa.me/+919817889068?text=Hey,%20let's%20discuss%20about%20my%20project%20idea",
  },
  {
    name: "linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/giriexplores",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://www.github.com/giriexplores",
  },
];

// projects

export const PROJECTS = [
  {
    title: "Chat-it",
    description:
      "Real-time messaging application featuring an intuitive UI, instant message delivery, and seamless user interactions.",
    image: ChatItImage,
    github: [
      "https://github.com/giriexplores/Chat-It-Frontend",
      "https://github.com/giriexplores/Chat-It-Backend",
    ],
    apiDocs: "https://documenter.getpostman.com/view/38948170/2sB2j1gBn1",
    tech: [
      "Socket.IO",
      "React",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "express",
      "JWT",
      "MongoDB",
      "Typescript",
      "Zod",
    ],
  },
  {
    title: "EMS",
    description:
      "Comprehensive Employee Management System with robust APIs for user authentication, department organization, employee records, task tracking capabilities and feedback collections from the employees.",
    image: EMSImage,
    github: ["https://github.com/giriexplores/EmployeeManagementBackend"],
    apiDocs: "https://documenter.getpostman.com/view/38948170/2sB2izFEHe",
    tech: ["Node.js", "Express", "mongoose", "JWT", "MongoDB"],
  },
  {
    title: "Shop-it",
    description:
      "A full-featured e-commerce platform with product catalog, advanced search functionality, filtering options, and seamless cart management experience.",
    image: ShopItImage,
    github: ["https://github.com/giriexplores/shop-it-frontend"],
    liveDemo: "https://giriexplores-shop-it.netlify.app/",
    tech: ["React", "Redux", "Tailwind CSS", "Framer-motion"],
  },
  {
    title: "Girifolio",
    description:
      "Personal portfolio website showcasing skills and projects with responsive design and modern aesthetics.",
    image: GirifolioImage,
    github: ["https://github.com/giriexplores/girifolio"],
    liveDemo: "https://giriexplores.netlify.app/",
    tech: ["React", "Tailwind CSS"],
  },
];
