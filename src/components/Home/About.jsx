import React from "react";
import { LuMouse } from "react-icons/lu";
import imgUrl from "../../assets/webDevelopment.jpeg";

function About({ aboutRef }) {
  return (
    <div ref={aboutRef} className="bg-custom">
      <div className="mx-auto flex w-10/12 max-w-[1920px] flex-col items-center gap-8 p-4 py-10 text-white">
        <div className="mb-32 hidden flex-col items-center gap-2 md:flex">
          <LuMouse className="text-4xl text-emerald-500" />
          <span className="h-5 border-l-2 border-dotted"></span>
          <span className="-mt-1 h-1 w-1 rounded-full bg-white"></span>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-16 2xl:justify-between">
          <div className="flex max-w-xl flex-col items-center gap-20 md:items-start">
            <h2 className="rounded-ss-[2rem] rounded-ee-[2rem] border-[4px] border-emerald-500 bg-gray-700 px-8 py-2 text-3xl font-semibold md:text-6xl">
              About Me
            </h2>
            <div className="flex flex-col gap-4 rounded-2xl bg-gray-700 px-8 py-4 tracking-wider">
              <h3 className="text-2xl font-semibold text-emerald-500">
                Hello!
              </h3>
              <p>
                I'm Aditya Kumar, a web developer skilled in{" "}
                <span className="font-bold text-emerald-500">JavaScript</span>,{" "}
                <span className="font-bold text-emerald-500">React</span>,{" "}
                <span className="font-bold text-emerald-500">Node.js</span>,{" "}
                <span className="font-bold text-emerald-500">Next.js</span>,{" "}
                <span className="font-bold text-emerald-500">Express</span>,{" "}
                <span className="font-bold text-emerald-500">MongoDB</span>,{" "}
                <span className="font-bold text-emerald-500">TypeScript</span>{" "}
                and{" "}
                <span className="font-bold text-emerald-500">Socket.io</span> I
                build efficient, scalable, and maintainable applications.
              </p>
              <p>
                Beyond coding, I enjoy{" "}
                <span className="font-bold text-emerald-500">music</span>,{" "}
                <span className="font-bold text-emerald-500">reading</span>, and
                exploring{" "}
                <span className="font-bold text-emerald-500">photography</span>.
              </p>
              <p>
                I welcome new perspectives and challenges that expand my
                understanding of the world.
              </p>
            </div>
          </div>
          <div className="max-w-md 2xl:max-w-xl">
            <img src={imgUrl} alt="WebDevelopment" className="object-cover w-lg mix-blend-lighten rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
