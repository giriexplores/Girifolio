import React from "react";
import { LuMouse } from "react-icons/lu";
import { BsCodeSlash } from "react-icons/bs";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import { LiaHtml5 } from "react-icons/lia";
import { FaCss3Alt } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";


function Skills({ skillsRef }) {
  return (
    <div ref={skillsRef} className="skillSection bg-cover bg-no-repeat">
      <div className="flex flex-col gap-8 items-center w-10/12 mx-auto p-4 py-20 text-white max-w-[1920px] ">
        <div className="flex flex-col gap-16">
          <div className=" relative mt-10 hidden md:flex justify-center">
            <div className="flex flex-col gap-2 items-center">
              <LuMouse className="text-4xl text-emerald-500" />
              <span className="h-5 border-l-2 border-dotted"></span>
              <span className="h-1 w-1 rounded-full bg-white -mt-1"></span>
            </div>
            <BsCodeSlash className="absolute top-0 -right-32 text-8xl text-emerald-500" />
          </div>
          <div className="md:mt-10 flex flex-col items-center justify-center gap-4">
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
          <div className="flex flex-col items-center gap-2 font-light border-s-8 border-blue-600 bg-emerald-100 text-black px-4 py-2 rounded-lg">
            <TbDeviceDesktopCode className="text-3xl" />
            <h3 className="tracking-widest text-2xl text-center">
              Web Development
            </h3>
            <div className="flex gap-3 text-sm">
              <span>React.js</span>
              <span>express.js</span>
              <span>JS</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 font-light border-s-8 border-blue-600 bg-emerald-100 text-black px-7 py-2 rounded-lg">
            <LuBrainCircuit className="text-3xl" />
            <h3 className="tracking-widest text-2xl text-center">
              Problem Solving
            </h3>
            <div className="flex gap-3 text-sm">
              <span>C</span>
              <span>C++</span>
            </div>
          </div>
        </div>
        <div className="flex mt-14 sm:gap-x-20 gap-x-12 gap-y-8 justify-center flex-wrap">
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full md:p-8 p-6 bg-[#e44d26]">
              <LiaHtml5 className="md:text-7xl text-5xl text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#e44d26]">
              HTML
            </h3>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full md:p-8 p-6 bg-[#264de4]">
              <FaCss3Alt className="md:text-7xl text-5xl text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#264de4]">
              CSS
            </h3>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full md:p-8 p-6 bg-[#850000]">
              <SiMongoose className="md:text-7xl text-5xl text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#850000]">
              mongoose
            </h3>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full md:p-8 p-6 bg-[#00684A]">
              <BiLogoMongodb className="md:text-7xl text-5xl text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#00684A]">
              MongoDB
            </h3>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full md:p-8 p-6 bg-neutral-600">
              <SiExpress className="md:text-7xl text-5xl text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-neutral-600">
              express
            </h3>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full md:p-8 p-6 bg-[#61dafb]">
              <FaReact className="md:text-7xl text-5xl text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#61dafb]">
              Reactjs
            </h3>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full md:p-8 p-6 bg-[#5FA04E]">
              <FaNodeJs className="md:text-7xl text-5xl text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#5FA04E]">
              Nodejs
            </h3>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full md:p-8 p-6 bg-[#659AD2]">
              <TbBrandCpp className="md:text-7xl text-5xl text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#659AD2]">
              C++
            </h3>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full md:p-8 p-6 bg-[#f03c2e]">
              <FaGitAlt className="md:text-7xl text-5xl text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#f03c2e]">
              Git
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
