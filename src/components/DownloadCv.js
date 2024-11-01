import React from "react";
import resumeUrl from "../assets/AdityaKumar.pdf";
import { FaDownload } from "react-icons/fa6";

function DownloadCv({ fixed }) {
  return (
    <a
      href={resumeUrl}
      download="AdityaKumarResume.pdf"
      className={`${fixed ? "fixed right-[5%] bottom-[8%] scale-90" : ""}`}
    >
      <button
        className={` flex items-center gap-4 border-none outline-none active:scale-95 hover:text-emerald-500 hover:bg-gray-700 transition-colors text-black font-semibold rounded-xl bg-gray-200 ${
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
