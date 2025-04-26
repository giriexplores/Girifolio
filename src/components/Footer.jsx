import logo from "../assets/Logo.png";
import { SOCIALS } from "../constants";

function Footer() {
  return (
    <div className="mx-auto flex w-full flex-row flex-wrap-reverse items-center justify-center gap-x-16 gap-y-4 border-t-2 border-gray-700 bg-slate-900 py-6 text-white lg:justify-between lg:px-20">
      <div className="flex items-end gap-1 text-emerald-500 hover:cursor-pointer">
        <img src={logo} width={30} alt="Logo" />
        <p className="logo me-4 -mb-1 text-3xl">iri</p>
        &copy; 2024 All rights reserved.
      </div>
      <ul className="text-md flex flex-row flex-wrap items-center gap-4">
        <li className="cursor-pointer select-none active:scale-95">
          Privacy Policy
        </li>
        <li className="cursor-pointer select-none active:scale-95">
          Terms & Conditions
        </li>
      </ul>
      <ul className="flex items-center gap-12">
        {SOCIALS.map((s, index) => (
          <li key={index} className="active:scale-95">
            <a
              href={s.link}
              target={"_blank"}
              className="text-4xl text-emerald-500 hover:text-emerald-400"
            >
              {s.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
