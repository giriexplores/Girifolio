import logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex items-center lg:px-20 mx-auto py-6 text-white flex-row gap-x-16 gap-y-4  justify-center lg:justify-between w-full bg-slate-900 flex-wrap-reverse border-t-2 border-gray-500">
      <div className="flex items-end gap-1 text-emerald-500 hover:cursor-pointer">
        <img src={logo} width={30} alt="Logo" />
        <p className="text-3xl logo -mb-1 me-4">iri</p>
        &copy; 2024 All rights reserved.
      </div>
      <ul className="flex gap-4 text-md flex-wrap items-center flex-row">
        <li className="active:scale-95 cursor-pointer select-none">
          Privacy Policy
        </li>
        <li className="active:scale-95 cursor-pointer select-none">
          Terms & Conditions
        </li>
      </ul>
      <ul className="flex gap-12 items-center">
        <li className="border-none outline-none active:scale-95">
          <a
            aria-label="Chat on WhatsApp"
            href="https://wa.me/+919817889068?text=Hey,%20let's%20discuss%20about%20my%20project%20idea"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaWhatsapp className="text-4xl text-emerald-500 hover:text-emerald-400" />
          </a>
        </li>
        <li className="border-none outline-none active:scale-95">
          <a
            href="https://www.linkedin.com/in/aditkumar0715"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedin className="text-4xl text-emerald-500 hover:text-emerald-400" />
          </a>
        </li>
        <li className="border-none outline-none active:scale-95">
          <a
            href="https://www.github.com/aditkumar0715"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGithub className="text-4xl text-emerald-500 hover:text-emerald-400" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
