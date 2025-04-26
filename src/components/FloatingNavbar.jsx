import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";

function FloatingNavbar({
  heroRef,
  aboutRef,
  skillsRef,
  projectRef,
  contactRef,
  navHandler,
}) {
  return (
    <div className="fixed top-[25%] left-[5%] hidden max-w-12 flex-col items-center gap-8 rounded-full border bg-[#010f0a] p-4 text-2xl text-neutral-300 xl:flex">
      <button
        className="border-none outline-none hover:text-white active:scale-95"
        onClick={() => navHandler(heroRef.current)}
      >
        <IoHomeOutline />
      </button>
      <button
        className="border-none outline-none hover:text-white active:scale-95"
        onClick={() => navHandler(aboutRef.current)}
      >
        <FaRegUser />
      </button>
      <button
        className="border-none outline-none hover:text-white active:scale-95"
        onClick={() => navHandler(skillsRef.current)}
      >
        <FaCode />
      </button>
      <button
        className="border-none outline-none hover:text-white active:scale-95"
        onClick={() => navHandler(projectRef.current)}
      >
        <FaComputer />
      </button>
      <button
        className="border-none outline-none hover:text-white active:scale-95"
        onClick={() => navHandler(contactRef.current)}
      >
        <MdOutlineMessage />
      </button>
    </div>
  );
}

export default FloatingNavbar;
