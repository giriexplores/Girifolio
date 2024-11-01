import { useState } from "react";
import logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function NavBar({ heroRef, aboutRef, skillsRef, contactRef, navHandler }) {
  const [links, setLinks] = useState(true);

  return (
    <div className={`sticky top-0 flex justify-end items-center mx-auto p-2 md:py-4 text-white flex-col gap-4 md:flex-row  md:justify-end md:gap-x-20 w-full md:px-20 shadow-md bg-neutral-900/30 backdrop-blur-md min-h-[5rem] z-10 transition-all duration-300 md:h-auto ${links?"h-56":"h-[5rem]"}`}>
      <div
        className="absolute top-4 left-4 flex items-end gap-1 text-emerald-500 hover:cursor-pointer self-start"
        onClick={() => navHandler(heroRef.current)}
      >
        <img src={logo} width={50} alt="Logo" />
        <p className="text-5xl logo">iri</p>
      </div>
      <ul
        className={`flex flex-col md:flex-row gap-4 text-md${
          links ? "opacity-100 visible" :" opacity-0 hidden"
        }`}
      >
        <li
          className="active:scale-95 cursor-pointer select-none"
          onClick={() => navHandler(heroRef.current)}
        >
          HOME
        </li>
        <li
          className="active:scale-95 cursor-pointer select-none"
          onClick={() => navHandler(aboutRef.current)}
        >
          ABOUT
        </li>
        <li
          className="active:scale-95 cursor-pointer select-none"
          onClick={() => navHandler(skillsRef.current)}
        >
          SKILLS
        </li>
        <li
          className="active:scale-95 cursor-pointer select-none"
          onClick={() => navHandler(contactRef.current)}
        >
          CONTACT
        </li>
      </ul>
      <ul className={`flex gap-4 items-center ${links ? "opacity-100 visible" : "opacity-0 hidden"}`}>
        <li className="active:scale-95">
          <a
            aria-label="Chat on WhatsApp"
            href="https://wa.me/+919817889068?text=Hey,%20let's%20discuss%20about%20my%20project%20idea"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaWhatsapp className="text-4xl text-emerald-500 hover:text-emerald-400" />
          </a>
        </li>
        <li className="active:scale-95">
          <a
            href="https://www.linkedin.com/in/aditkumar0715"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedin className="text-4xl text-emerald-500 hover:text-emerald-400" />
          </a>
        </li>
        <li className="active:scale-95">
          <a
            href="https://www.github.com/aditkumar0715"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGithub className="text-4xl text-emerald-500 hover:text-emerald-400" />
          </a>
        </li>
      </ul>
      <button
        className="absolute top-7 right-4 flex-col gap-2 border-none outline-none flex md:hidden active:scale-95"
        onClick={() => {
          setLinks(!links);
        }}
      >
        <span className="h-[4px] w-8 bg-white rounded-t-full"></span>
        <span className="h-[2px] w-8 bg-white"></span>
        <span className="h-[4px] w-8 bg-white rounded-b-full"></span>
      </button>
    </div>
  );
}

export default NavBar;
