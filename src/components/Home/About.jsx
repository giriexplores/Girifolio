import React from "react";
import { LuMouse } from "react-icons/lu";
import imgUrl from "../../assets/webDevelopment.png";

function About({ aboutRef }) {
  return (
    <div ref={aboutRef} className="bg-slate-900">
      <div className="flex flex-col gap-8 items-center w-10/12 mx-auto p-4 py-10 text-white max-w-[1920px] ">
        <div className=" hidden mb-32 md:flex flex-col gap-2 items-center">
          <LuMouse className="text-4xl text-emerald-500" />
          <span className="h-5 border-l-2 border-dotted"></span>
          <span className="h-1 w-1 rounded-full bg-white -mt-1"></span>
        </div>
        <div className="flex items-center flex-wrap justify-center 2xl:justify-between gap-16 w-full">
          <div className="flex flex-col items-center gap-20 md:items-start max-w-xl">
            <h2 className="border-[4px] px-8 py-2 font-semibold rounded-ss-[2rem] rounded-ee-[2rem] bg-gray-700 text-3xl md:text-6xl border-emerald-500">
              About Me
            </h2>
            <div className="flex flex-col gap-4 bg-gray-700 rounded-2xl px-8 py-4 tracking-wider">
              <h3 className="text-2xl font-semibold text-emerald-500">
                Hello!
              </h3>
              <p>
                I'm Aditya Kumar, a web developer skilled in{" "}

                <span className="text-emerald-500 font-bold">JavaScript</span>,{" "}
                <span className="text-emerald-500 font-bold">React</span>,{" "}
                <span className="text-emerald-500 font-bold">Node.js</span>,{" "}
                <span className="text-emerald-500 font-bold">Next.js</span>,{" "}
                <span className="text-emerald-500 font-bold">Express</span>,{" "}
                <span className="text-emerald-500 font-bold">MongoDB</span>,{" "}
                <span className="text-emerald-500 font-bold">TypeScript</span>{" "}
                and{" "}
                <span className="text-emerald-500 font-bold">Socket.io</span> I
                build efficient, scalable, and maintainable applications.
              </p>
              <p>
                Beyond coding, I enjoy{" "}
                <span className="text-emerald-500 font-bold">music</span>,{" "}
                <span className="text-emerald-500 font-bold">reading</span>,{" "}and
                exploring {" "}
                <span className="text-emerald-500 font-bold">photography</span>.
              </p>
              <p>
                I welcome new perspectives and challenges that expand my
                understanding of the world.
              </p>
            </div>
          </div>
          <div className="max-w-md 2xl:max-w-xl">
            <img src={imgUrl} alt="WebDevelopment" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
