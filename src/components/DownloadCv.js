import React from "react";
import resumeUrl from "../assets/AdityaKumar_webDeveloper.pdf";
import { FaDownload } from "react-icons/fa6";

function DownloadCv({ fixed }) {
  return (
    <a
      href={resumeUrl}
      download="AdityaKumar_webDeveloper.pdf"
      className={`${fixed ? "scale-90" : "self-start sm:self-center"}`}
    >
      <button
        className={`flex items-center gap-4 border-none outline-none active:scale-95 hover:text-emerald-500 hover:bg-gray-700 transition-colors text-black font-semibold rounded-xl bg-gray-200 ${
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
