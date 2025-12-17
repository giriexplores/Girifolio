import React from "react";
import resumeUrl from "../assets/AdityaKumar_fullStack_Developer.pdf";
import { FaDownload } from "react-icons/fa6";

function DownloadCv({ fixed }) {
  return (
    <a
      href={resumeUrl}
      download="AdityaKumar_fullStack_Developer.pdf"
      className={`${fixed ? "scale-90" : "self-start sm:self-center"}`}
    >
      <button
        className={`flex items-center gap-4 rounded-xl border-none bg-gray-200 font-semibold text-black transition-colors outline-none hover:bg-gray-700 hover:text-emerald-500 active:scale-95 ${
          fixed ? "p-2" : "px-6 py-3"
        }`}
      >
        {fixed ? "" : "Download CV"}
        <FaDownload className="text-3xl" />
      </button>
    </a>
  );
}

export default DownloadCv;
