import React, { useState } from "react";
import { LuMouse } from "react-icons/lu";
import { BsCodeSlash } from "react-icons/bs";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import { SKILLS, SKILL_TAGS } from "../../constants";

function Skills({ skillsRef }) {
  const [skills, setSkills] = useState(SKILLS);
  const [filter, setFilter] = useState("All");

  const tagHandler = (e) => {
    setFilter(e.target.innerText);
    if (e.target.innerText === "All") {
      setSkills(SKILLS);
    } else {
      setSkills(
        SKILLS.filter((current) => current.tag.includes(e.target.innerText)),
      );
    }
  };

  return (
    <div ref={skillsRef} className="bg-slate-900 bg-cover bg-no-repeat">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center gap-4 p-4 py-10 text-white md:w-10/12">
        <div className="flex flex-col gap-8">
          <div className="relative hidden justify-center md:flex">
            <div className="flex flex-col items-center gap-2">
              <LuMouse className="text-4xl text-emerald-500" />
              <span className="h-5 border-l-2 border-dotted"></span>
              <span className="-mt-1 h-1 w-1 rounded-full bg-white"></span>
            </div>
            <BsCodeSlash className="absolute top-0 -right-32 text-8xl text-emerald-500" />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:mt-7">
            <h2 className="text-center text-6xl text-emerald-500">Skills</h2>
            <div className="-mt-3 flex items-center gap-0">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="h-[2px] w-36 rounded-full bg-emerald-500"></span>
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            </div>
            <p className="text-center tracking-wider">
              I am striving to never stop learning and imporoving.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 md:gap-20">
          <div className="hidden flex-col items-center gap-2 rounded-lg border-s-8 border-blue-600 bg-emerald-100 px-4 py-2 font-light text-black md:flex">
            <TbDeviceDesktopCode className="text-3xl" />
            <h3 className="text-center text-2xl tracking-widest text-nowrap">
              Web Development
            </h3>
            <div className="flex gap-3 text-sm">
              <span>React</span>
              <span>Express</span>
              <span>Next.js</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border-s-8 border-blue-600 bg-emerald-100 px-7 py-2 font-light text-black">
            <LuBrainCircuit className="text-3xl" />
            <h3 className="text-center text-2xl tracking-widest text-nowrap">
              Problem Solving
            </h3>
            <div className="flex gap-3 text-sm">
              <span>C++</span>
              <span>DSA</span>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-4 w-screen gap-2 overflow-x-auto bg-gray-800 px-4 py-2 md:gap-4 xl:w-full xl:bg-transparent">
          <div
            className="flex gap-2 overflow-x-auto md:gap-4"
            style={{
              scrollbarWidth: "none",
              WebKitScrollbar: { display: "none" },
            }}
          >
            {SKILL_TAGS.map((tag, index) => (
              <button
                onClick={tagHandler}
                key={index}
                className={`flex-1 cursor-pointer rounded-md border-none px-2 py-1 text-nowrap outline-none hover:outline-gray-400 active:scale-95 md:px-4 md:py-2 ${
                  tag === filter ? "bg-emerald-500" : "bg-gray-600"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {skills.map((s, index) => (
            <div
              key={index}
              className="relative flex w-24 flex-col items-center justify-between rounded-md border-1 bg-gray-950 px-2 py-1 md:gap-1 md:px-4 md:py-2"
              style={{ borderColor: s.color }}
            >
              <span
                className={`text-3xl md:text-5xl`}
                style={{ color: s.color }}
              >
                {s.icon}
              </span>
              <p
                className={`text-xs font-semibold text-nowrap md:text-sm`}
                style={{ color: s.color }}
              >
                {s.name}
              </p>
              {s.info && (
                <p className="text-xs" style={{ color: s.color }}>
                  ({s.info})
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
