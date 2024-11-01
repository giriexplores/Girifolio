import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
// import { FaComputer } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";

function FloatingNavbar({
  heroRef,
  aboutRef,
  skillsRef,
  contactRef,
  navHandler,
}) {
  return (
    <div className="hidden xl:flex fixed top-[25%] left-[5%] flex-col items-center gap-8 text-neutral-300 text-2xl bg-neutral-900 rounded-full p-4 border max-w-12">
      <button
        className="border-none outline-none active:scale-95 hover:text-white"
        onClick={() => navHandler(heroRef.current)}
      >
        <IoHomeOutline />
      </button>
      <button
        className="border-none outline-none active:scale-95 hover:text-white"
        onClick={() => navHandler(aboutRef.current)}
      >
        <FaRegUser />
      </button>
      <button
        className="border-none outline-none active:scale-95 hover:text-white"
        onClick={() => navHandler(skillsRef.current)}
      >
        <FaCode />
      </button>
      {/* <button className='border-none outline-none active:scale-95 hover:text-white'>
        <FaComputer />
      </button> */}
      <button
        className="border-none outline-none active:scale-95 hover:text-white"
        onClick={() => navHandler(contactRef.current)}
      >
        <MdOutlineMessage />
      </button>
    </div>
  );
}

export default FloatingNavbar;
