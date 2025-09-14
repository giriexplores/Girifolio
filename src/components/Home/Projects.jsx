import React from "react";
import { LuMouse } from "react-icons/lu";
import { PROJECTS } from "../../constants";

function Projects({ projectRef }) {
  return (
    <div ref={projectRef} className="bg-custom">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center gap-4 p-4 py-10 text-white md:w-10/12">
        <div className="flex flex-col gap-8">
          <div className="relative hidden justify-center md:flex">
            <div className="flex flex-col items-center gap-2">
              <LuMouse className="text-4xl text-emerald-500" />
              <span className="h-5 border-l-2 border-dotted"></span>
              <span className="-mt-1 h-1 w-1 rounded-full bg-white"></span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:mt-7">
            <h2 className="text-center text-6xl text-emerald-500">Projects</h2>
            <div className="flex items-center gap-0">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="h-[2px] w-56 rounded-full bg-emerald-500"></span>
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start overflow-hidden rounded-lg border-2 border-gray-700 bg-slate-900"
            >
              <img
                src={project.image}
                alt={project.title}
                className="max-h-72 w-full border-b-2 border-gray-700 object-contain"
              />

              <div className="flex w-full h-full flex-col justify-between p-4">
                <h2 className="text-xl font-bold text-white">
                  {project.title}
                </h2>
                <p className="mb-4 text-gray-400">{project.description}</p>
                <div>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="mr-2 mb-2 inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      className="flex-1 rounded bg-emerald-500 px-4 py-2 text-center text-nowrap text-white transition hover:bg-emerald-600"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.apiDocs && (
                    <a
                      href={project.apiDocs}
                      target="_blank"
                      className="flex-1 rounded bg-emerald-500 px-4 py-2 text-center text-nowrap text-white transition hover:bg-emerald-600"
                    >
                      API Docs
                    </a>
                  )}

                  {project.github.length === 1 ? (
                    <a
                      href={project.github[0]}
                      target="_blank"
                      className="flex-1 rounded bg-gray-700 px-4 py-2 text-center text-nowrap text-white transition hover:bg-gray-600"
                    >
                      GitHub
                    </a>
                  ) : (
                    <>
                      <a
                        href={project.github[0]}
                        target="_blank"
                        className="flex-1 rounded bg-gray-700 px-4 py-2 text-center text-nowrap text-white transition hover:bg-gray-600"
                      >
                        GitHub Frontend
                      </a>
                      <a
                        href={project.github[1]}
                        target="_blank"
                        className="flex-1 rounded bg-gray-700 px-4 py-2 text-center text-nowrap text-white transition hover:bg-gray-600"
                      >
                        GitHub Backend
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
