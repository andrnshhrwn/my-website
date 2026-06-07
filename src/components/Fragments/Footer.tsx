import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="h-14 border-t border-slate-700 flex justify-between">
      <div className="max-md:text-[12px] border-r border-slate-700 flex items-center">
        <h3 className="h-full flex items-center min-md:px-6 px-3">
          find me in:
        </h3>

        <a
          href="https://www.instagram.com/andrnshhrwn._"
          className="border-l border-slate-700 h-full flex items-center min-md:px-6 px-5 hover:text-rose-300"
        >
          <FiInstagram />
        </a>

        <a
          href="https://github.com/andrnshhrwn"
          className="border-l border-slate-700 h-full flex items-center min-md:px-6 px-5 hover:text-indigo-500"
        >
          <FaLinkedinIn />
        </a>
      </div>

      <a
        href="https://github.com/andrnshhrwn"
        className="max-md:text-[12px] border-l border-slate-700 h-full flex items-center min-md:px-6 px-3 gap-2 hover:text-rose-300"
      >
        <span>@andrnshhrwn</span>
        <div>
          <SiGithub />
        </div>
      </a>
    </footer>
  );
};

export default Footer;
