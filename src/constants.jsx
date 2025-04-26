import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
// import { SiSqlite } from "react-icons/si";
// import { SiPostgresql } from "react-icons/si";
// import { SiPython } from "react-icons/si";
// import { FaJava } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

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
  "Frontend",
  "Backend",
  "Databases",
  "Programming Language",
  "Tools",
  "Frameworks & Libraries",
];

// all skills
export const SKILLS = [
  {
    name: "HTML",
    color: "#e44d26",
    icon: <SiHtml5 />,
    tag: ["Frontend"],
  },
  {
    name: "CSS",
    color: "#264de4",
    icon: <SiCss3 />,
    tag: ["Frontend"],
  },
  {
    name: "JavaScript",
    color: "#f7df1e",
    icon: <SiJavascript />,
    tag: ["Frontend", "Programming Language"],
  },

  {
    name: "React",
    color: "#61DBFB",
    icon: <SiReact />,
    tag: ["Frontend", "Frameworks & Libraries"],
  },
  {
    name: "Redux",
    color: "#764abc",
    icon: <SiRedux />,
    tag: ["Frontend", "Frameworks & Libraries"],
  },
  {
    name: "Node.js",
    color: "#3C873A",
    icon: <SiNodedotjs />,
    tag: ["Backend"],
  },
  {
    name: "tailwindcss",
    color: "#00bcff",
    icon: <SiTailwindcss />,
    tag: ["Frontend"],
  },
  {
    name: "Express",
    color: "white",
    icon: <SiExpress />,
    tag: ["Backend", "Frameworks & Libraries"],
  },

  {
    name: "mongoose",
    color: "#850000",
    icon: <SiMongoose />,
    tag: ["Backend", "Frameworks & Libraries"],
  },

  {
    name: "Next.js",
    color: "white",
    icon: <SiNextdotjs />,
    info: "familiar",
    tag: ["Frontend", "Backend", "Frameworks & Libraries"],
  },

  {
    name: "C++",
    color: "#5E97D0",
    icon: <SiCplusplus />,
    tag: ["Programming Language"],
  },
  // {
  //   name: "Python",
  //   color: "#ffde57",
  //   icon: <SiPython />,
  //   tag: ["Programming Language"],
  // },
  // {
  //   name: "java",
  //   color: "#f89820",
  //   icon: <FaJava />,
  //   tag: ["Programming Language"],
  // },
  {
    name: "Socket.IO",
    color: "white",
    icon: <SiSocketdotio />,
    info: "familiar",
    tag: ["Frameworks & Libraries"],
  },
  // {
  //   name: "PostgreSQL",
  //   color: "#336791",
  //   icon: <SiPostgresql />,
  //   tag: ["Databases"],
  // },
  // {
  //   name: "SQLite3",
  //   color: "#0F80CC",
  //   icon: <SiSqlite />,
  //   info: "familiar",
  //   tag: ["Databases"],
  // },
  {
    name: "MongoDB",
    color: "#00ED64",
    icon: <SiMongodb />,
    tag: ["Databases"],
  },
  {
    name: "TypeScript",
    color: "#007acc",
    icon: <SiTypescript />,
    info: "familiar",
    tag: ["Tools"],
  },
  {
    name: "git",
    color: "#F1502F",
    icon: <SiGit />,
    tag: ["Tools"],
  },
  {
    name: "VS Code",
    color: "#0078d7",
    icon: <VscVscode />,
    tag: ["Tools"],
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
    title: "Shop-it",
    description:
      "A full-featured e-commerce platform with product catalog, advanced search functionality, filtering options, and seamless cart management experience.",
    image: ShopItImage,
    github: ["https://github.com/giriexplores/shop-it-frontend"],
    liveDemo: "https://girifolio-shop-it.netlify.app/",
    tech: ["React", "Redux", "Tailwind CSS", "Framer-motion"],
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
    title: "Chat-it",
    description:
      "Real-time messaging application featuring an intuitive UI, instant message delivery, and seamless user interactions.",
    image: ChatItImage,
    github: [
      "https://github.com/giriexplores/Chat-It-Backend",
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
    title: "Girifolio",
    description:
      "Personal portfolio website showcasing skills and projects with responsive design and modern aesthetics.",
    image: GirifolioImage,
    github: ["https://github.com/giriexplores/girifolio"],
    liveDemo: "https://girifolio.netlify.app/",
    tech: ["React", "Tailwind CSS"],
  },
];
