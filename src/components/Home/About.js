import React from "react";
import { LuMouse } from "react-icons/lu";
import imgUrl from "../../assets/webDevelopment.png";

function About({ aboutRef }) {
  return (
    <div ref={aboutRef} className="bg-slate-900">
      <div className="flex flex-col gap-8 items-center w-10/12 mx-auto p-4 py-20 text-white max-w-[1920px] ">
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
              <span className="text-emerald-200 text-base">&lt;p&gt;</span>
              <h3 className="text-2xl font-semibold text-emerald-500">
                Hello!
              </h3>
              <p>
                I'm Aditya Kumar and I specialize in web developement
                that utilizes{" "}
                <span className="text-emerald-500 font-bold">HTML</span>,{" "}
                <span className="text-emerald-500 font-bold">CSS</span>,{" "}
                <span className="text-emerald-500 font-bold">JavaScript</span>,{" "}
                <span className="text-emerald-500 font-bold">React.js</span>,{" "}
                <span className="text-emerald-500 font-bold">Node.js</span>{" "}
                <span className="text-emerald-500 font-bold">express.js</span>{" "}
                <span className="text-emerald-500 font-bold">MongoDB</span>,{" "}
                and more.
              </p>
              <p>
                I am a highly motivated individual and eternal optimist
                dedicated to writing clear, concise and robust code.
              </p>
              <p>
                When I'm not coding, You'll find me listening{" "}
                <span className="text-emerald-500 font-bold">music</span>,
                reading books, or Trying out{" "}
                <span className="text-emerald-500 font-bold">photography</span>.
              </p>
              <p>
                I like to have my perspective and belief systems challenged so
                that I see the world through new eyes.
              </p>
              <span className="text-emerald-200 text-base">&lt;/p&gt;</span>
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
