import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="h-14 max-h-[9%] border-t border-slate-700 flex justify-between">
      <div className="max-md:text-[12px] border-r border-slate-700 flex items-center">
        <h3 className="h-full flex items-center min-md:px-6 px-3">find me in:</h3>
        <div className="border-l border-slate-700 h-full flex items-center min-md:px-6 px-5"><FiInstagram /></div>
        <div className="border-l border-slate-700 h-full flex items-center min-md:px-6 px-5"><FaLinkedinIn /></div>
      </div>
      <div className="max-md:text-[12px] border-l border-slate-700 h-full flex items-center min-md:px-6 px-3 gap-2">
        <span>@andrnshhrwn</span>
        <div><SiGithub /></div>
      </div>
    </footer>
  );
};

export default Footer;
