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
      className="rounded-full border-none bg-emerald-500 p-1 opacity-70 transition-opacity outline-none hover:opacity-100 active:scale-95"
      onClick={topHandler}
    >
      <FaChevronUp className="text-4xl text-white" />
    </button>
  );
}

export default BackToTop;
