import logo from "../assets/Logo.png";
import { SOCIALS } from "../constants";

// import { useState } from "react";

function NavBar({
  heroRef,
  aboutRef,
  skillsRef,
  projectRef,
  contactRef,
  navHandler,
}) {
  // const [links, setLinks] = useState(false);
  return (
    <div className="group sticky top-0 z-10 mx-auto flex min-h-[5rem] w-full flex-col items-center justify-end gap-4 bg-black/50 p-2 text-white backdrop-blur-lg md:flex-row md:justify-end md:gap-x-20 md:px-20 md:py-4">
      <div
        className="absolute top-4 left-4 flex items-end gap-1 self-start text-emerald-500 hover:cursor-pointer"
        onClick={() => navHandler(heroRef.current)}
      >
        <img src={logo} width={50} alt="Logo" />
        <p className="logo text-5xl">iri</p>
      </div>
      <div className="absolute top-full -right-full flex flex-col items-center justify-center gap-8 rounded-3xl rounded-se-none rounded-es-none bg-black/50 p-4 shadow-xl backdrop-blur-lg transition-all group-focus-within:right-0 md:static md:flex md:flex-row md:gap-10 md:rounded-none md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
        <ul className="text-md flex flex-col gap-4 md:flex-row">
          <li
            className="cursor-pointer text-center select-none active:scale-95"
            onClick={() => navHandler(heroRef.current)}
          >
            HOME
          </li>
          <li
            className="cursor-pointer text-center select-none active:scale-95"
            onClick={() => navHandler(aboutRef.current)}
          >
            ABOUT
          </li>
          <li
            className="cursor-pointer text-center select-none active:scale-95"
            onClick={() => navHandler(skillsRef.current)}
          >
            SKILLS
          </li>
          <li
            className="cursor-pointer text-center select-none active:scale-95"
            onClick={() => navHandler(projectRef.current)}
          >
            PROJECTS
          </li>
          <li
            className="cursor-pointer text-center select-none active:scale-95"
            onClick={() => navHandler(contactRef.current)}
          >
            CONTACT
          </li>
        </ul>
        <ul className="flex items-center justify-center gap-4">
          {SOCIALS.map((s, index) => (
            <li key={index} className="active:scale-95">
              <a
                href={s.link}
                target={"_blank"}
                className="text-4xl text-emerald-500 hover:text-emerald-400"
              >
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button className="absolute top-7 right-4 flex flex-col gap-2 border-none outline-none active:scale-95 md:hidden">
        <span className="h-[4px] w-8 rounded-t-full bg-white"></span>
        <span className="h-[2px] w-8 bg-white"></span>
        <span className="h-[4px] w-8 rounded-b-full bg-white"></span>
      </button>
    </div>
  );
}

export default NavBar;
