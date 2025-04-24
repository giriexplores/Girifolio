import React from "react";
import { FaChevronUp } from "react-icons/fa";

function BackToTop() {
  const topHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className="bg-emerald-500 rounded-full p-1 border-none outline-none active:scale-95 opacity-70 transition-opacity hover:opacity-100"
      onClick={topHandler}
    >
      <FaChevronUp className="text-4xl text-white" />
    </button>
  );
}

export default BackToTop;
