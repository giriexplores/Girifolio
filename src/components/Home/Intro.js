import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import imageUrl from "../../assets/profilePic.png";
import DownloadCv from "../DownloadCv";

function Intro() {
  return (
    <div className=" flex flex-col mx-auto gap-7 items-center justify-center outline  rounded-ss-[10rem] rounded-ee-[10rem] px-4 py-14 max-w-sm border-emerald-500 border-s-4 border-t-4">
      <div>
        <img
          src={imageUrl}
          alt="ProfilePic"
          width={150}
          className="rounded-full border-2 border-emerald-500 m-4"
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
          <span className="px-2 py-1 bg-emerald-500  rounded-md">
            JavaScript
          </span>
          <span className="px-2 py-1 bg-emerald-500  rounded-md">React.js</span>
          <span className="px-2 py-1 bg-emerald-500  rounded-md">Node.js</span>
          <span className="px-2 py-1 bg-emerald-500  rounded-md">MongoDb</span>
          <span className="px-2 py-1 bg-emerald-500  rounded-md">
            Express.js
          </span>
          <span className="px-2 py-1 bg-emerald-500  rounded-md">Git</span>
          <span className="px-2 py-1 bg-emerald-500  rounded-md">C++</span>
        </div>
      </div>
      <DownloadCv fixed={false} />
    </div>
  );
}

export default Intro;
