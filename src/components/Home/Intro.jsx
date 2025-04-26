import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import imageUrl from "../../assets/profilePic.png";
import DownloadCv from "../DownloadCv";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "git",
  "TypeScript",
  "Next.js",
  "C++",
];

function Intro() {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center justify-center gap-7 rounded-ss-[10rem] rounded-ee-[10rem] border-s-4 border-t-4 border-emerald-500 px-4 py-14 outline">
      <div>
        <img
          src={imageUrl}
          alt="ProfilePic"
          width={150}
          className="m-4 rounded-full border-2 border-emerald-500"
        />
        <h2 className="text-2xl font-semibold">Aditya Kumar</h2>
        <p className="">Full-stack developer</p>
      </div>
      <div className="flex flex-col gap-3">
        <a href="mailto:aditkumar0715@gmail.com" className="flex gap-3">
          <MdAlternateEmail className="text-xl text-emerald-500" />
          aditkumar0715@gmail.com
        </a>
        <a href="tel:+919817889068" className="flex gap-3">
          <IoCallOutline className="text-xl text-emerald-500" />
          +91 9817889068
        </a>
        <div className="flex gap-3">
          <SlLocationPin className="text-xl text-emerald-500" />
          Sonipat, Haryana 131101
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="rounded-md bg-emerald-500 px-2 py-1">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <DownloadCv fixed={false} />
    </div>
  );
}

export default Intro;
