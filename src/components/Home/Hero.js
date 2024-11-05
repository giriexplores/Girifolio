import React from "react";
// import FloatingNavbar from "../FloatingNavbar";
import { BsEnvelopePlus } from "react-icons/bs";
import Intro from "./Intro";
import Typewriter from "typewriter-effect";

function Hero({ heroRef }) {
  return (
    <div
      ref={heroRef}
      className="flex gap-8 items-start w-10/12 mx-auto p-4 pb-16 text-white max-w-[1920px]"
    >
      {/* <FloatingNavbar /> */}
      <div className="flex items-center flex-col gap-16 w-full">
        <h1 className="text-5xl md:text-8xl text-emerald-500">
          Developer
        </h1>
        <div className="flex flex-wrap justify-between w-full items-center gap-16">
          <Intro />
          <div className="flex items-center justify-between flex-wrap w-auto flex-auto gap-16">
            <div className="flex flex-col gap-6 max-w-xl mx-auto">
              <div className="flex flex-col text-3xl lg:text-6xl">
                <span className=" -ms-8 text-sm text-emerald-500">
                  &lt;h1&gt;
                </span>
                <p>Hey</p>
                <p>
                  I'm <span className="text-emerald-500">Aditya Kumar</span>,{" "}
                </p>
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "FullStack Developer",
                      "BackEnd Developer",
                      "FrontEnd Developer",
                    ],
                    autoStart: true,
                    cursor: "|",
                    loop: true,
                  }}
                />
                <span className="-ms-8 mt-4 text-sm text-emerald-500">
                  &lt;/h1&gt;
                </span>{" "}
              </div>
              <div>
                <span className=" -ms-8 text-sm text-emerald-500">
                  &lt;p&gt;
                </span>
                <p className="text-wrap">
                  I create highly interactive and well optimized solution for
                  personal and business usage. Feel free to contact me directly
                </p>
                <span className=" -ms-8 text-sm text-emerald-500">
                  &lt;/p&gt;
                </span>
              </div>
              <div className="flex gap-4 items-center text-emerald-500">
                <h2 className="text-2xl lg:text-4xl font-semibold">
                  Let's Talk
                </h2>
                <a
                  href="mailto:aditkumar0715@gmail.com"
                  className="border-none rounded-full p-2 bg-gray-600 hover:bg-gray-700 outline-none active:scale-95"
                >
                  {" "}
                  <BsEnvelopePlus className="text-3xl" />{" "}
                </a>
              </div>
            </div>
            <div className="mx-auto bg-[#010f0a] text-white flex flex-col gap-12 p-8 justify-center rounded-3xl max-w-48">
              <h2 className="flex items-center gap-3">
                <span className="text-4xl font-semibold text-emerald-500">
                  3
                </span>
                <span>Programming Languages</span>
              </h2>
              <h2 className="flex items-center gap-3">
                <span className="text-4xl font-semibold text-emerald-500">
                  5
                </span>
                <span> Development Tools </span>
              </h2>
              <h2 className="flex items-center gap-3">
                <span className="text-4xl font-semibold text-emerald-500">
                  8
                </span>
                <span>Months of Experience</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
