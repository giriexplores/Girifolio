import React from "react";
import { BsEnvelopePlus } from "react-icons/bs";
import Intro from "./Intro";
import Typewriter from "typewriter-effect";

function Hero({ heroRef }) {
  return (
    <div ref={heroRef} className="bg-slate-900 bg-cover bg-no-repeat">
      <div className="mx-auto flex w-10/12 max-w-[1920px] items-start gap-8 p-4 pb-16 text-white">
        <div className="flex w-full flex-col items-center gap-16">
          <h1 className="text-5xl text-emerald-500 md:text-8xl">Developer</h1>
          <div className="flex w-full flex-wrap items-center justify-between gap-16">
            <Intro className="order-1" />
            <div className="flex w-auto flex-auto flex-wrap items-center justify-between gap-16">
              <div className="mx-auto flex max-w-xl flex-col gap-6">
                <div className="flex flex-col text-3xl lg:text-6xl">
                  <p className="mb-2">Hey</p>
                  <p>
                    I'm <span className="text-emerald-500">Aditya Kumar</span>
                    ,{" "}
                  </p>
                  <Typewriter
                    options={{
                      strings: ["Web Developer", "FullStack Developer"],
                      autoStart: true,
                      delay: 50,
                      deleteSpeed: 15,
                      pauseFor: 1000,
                      loop: true,
                    }}
                  />
                </div>
                <div>
                  <p className="text-wrap">
                    I create highly interactive and well optimized solution for
                    personal and business usage. Feel free to contact me
                    directly
                  </p>
                </div>
                <div className="flex items-center gap-4 text-emerald-500">
                  <h2 className="text-2xl font-semibold lg:text-4xl">
                    Let's Talk
                  </h2>
                  <a
                    href="mailto:aditkumar0715@gmail.com"
                    className="rounded-full border-none bg-gray-600 p-2 outline-none hover:bg-gray-700 active:scale-95"
                  >
                    {" "}
                    <BsEnvelopePlus className="text-3xl" />{" "}
                  </a>
                </div>
              </div>
              <div className="mx-auto flex max-w-48 flex-col justify-center gap-12 rounded-3xl bg-[#010f0a] p-8 text-white">
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
                  <span> Development Tools</span>
                </h2>
                <h2 className="flex items-center gap-3">
                  <span className="text-4xl font-semibold text-emerald-500">
                    1+
                  </span>
                  <span>Years of experience</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
