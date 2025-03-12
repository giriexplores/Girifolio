import React, { useState } from "react";
import { LuMouse } from "react-icons/lu";
import { BsCodeSlash } from "react-icons/bs";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
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
import { SiSqlite } from "react-icons/si";
// import { SiPostgresql } from "react-icons/si";
// import { SiPython } from "react-icons/si";
// import { FaJava } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

const tags = [
  "All",
  "Frontend",
  "Backend",
  "Databases",
  "Programming Language",
  "Tools",
  "Frameworks & Libraries",
];

const AllSkills = [
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
    tag: ["Frameworks & Libraries"],
  },
  // {
  //   name: "PostgreSQL",
  //   color: "#336791",
  //   icon: <SiPostgresql />,
  //   tag: ["Databases"],
  // },
  {
    name: "SQLite3",
    color: "#0F80CC",
    icon: <SiSqlite />,
    tag: ["Databases"],
  },
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

function Skills({ skillsRef }) {
  const [skills, setSkills] = useState(AllSkills);
  const [filter, setFilter] = useState("All");

  const tagHandler = (e) => {
    setFilter(e.target.innerText);
    if (e.target.innerText === "All") {
      setSkills(AllSkills);
    } else {
      setSkills(
        AllSkills.filter((current) => current.tag.includes(e.target.innerText))
      );
    }
  };

  return (
    <div ref={skillsRef} className="skillSection bg-cover bg-no-repeat">
      <div className="flex flex-col gap-4 items-center w-10/12 mx-auto p-4 py-10 text-white max-w-[1920px] ">
        <div className="flex flex-col gap-8">
          <div className=" relative hidden md:flex justify-center">
            <div className="flex flex-col gap-2 items-center">
              <LuMouse className="text-4xl text-emerald-500" />
              <span className="h-5 border-l-2 border-dotted"></span>
              <span className="h-1 w-1 rounded-full bg-white -mt-1"></span>
            </div>
            <BsCodeSlash className="absolute top-0 -right-32 text-8xl text-emerald-500" />
          </div>
          <div className="md:mt-7 flex flex-col items-center justify-center gap-4">
            <h2 className="text-6xl text-emerald-500 text-center">Skills</h2>
            <div className="flex gap-0 -mt-3 items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="w-36 h-[2px] rounded-full bg-emerald-500"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
            <p className="tracking-wider text-center">
              I am striving to never stop learning and imporoving.
            </p>
          </div>
        </div>
        <div className="flex gap-5 md:gap-20 flex-wrap mt-8 items-center justify-center">
          <div className="hidden md:flex flex-col items-center gap-2 font-light border-s-8 border-blue-600 bg-emerald-100 text-black px-4 py-2 rounded-lg">
            <TbDeviceDesktopCode className="text-3xl" />
            <h3 className="tracking-widest text-2xl text-center text-nowrap">
              Web Development
            </h3>
            <div className="flex gap-3 text-sm">
              <span>React</span>
              <span>Express</span>
              <span>Next.js</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 font-light border-s-8 border-blue-600 bg-emerald-100 text-black px-7 py-2 rounded-lg">
            <LuBrainCircuit className="text-3xl" />
            <h3 className="tracking-widest text-2xl text-center text-nowrap">
              Problem Solving
            </h3>
            <div className="flex gap-3 text-sm">
              <span>C++</span>
              <span>DSA</span>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-4 flex gap-4 flex-wrap justify-center">
          {tags.map((tag, index) => (
            <button
              onClick={tagHandler}
              key={index}
              className={`flex-1 text-nowrap px-2 py-1 md:px-4 md:py-2 rounded-md outline-none border-none hover:outline-gray-400 active:scale-95 ${
                tag === filter ? "bg-emerald-500" : "bg-gray-600"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="flex sm:gap-x-20 gap-x-12 gap-y-8 justify-center flex-wrap">
          {skills.map((s) => (
            <div className="flex flex-col items-center md:gap-1">
              <span className={`md:text-5xl text-3xl text-[${s.color}]`}>
                {s.icon}
              </span>
              <h3
                className={`text-lg text-nowrap md:text-lg font-bold text-[${s.color}]`}
              >
                {s.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
