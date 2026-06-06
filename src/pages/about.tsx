import { BiSolidChevronsRight } from "react-icons/bi";

const About = () => {
  return (
    <div className="text-slate-200">
      <ul className="flex flex-col gap-1">
        <li className="p-4">_about-me</li>

        {/* personal info */}
        <li className="p-4 bg-slate-700/40">
          <div className="flex items-center gap-2">
            <span>
              <BiSolidChevronsRight />
            </span>
            <span>personal info</span>
          </div>
          <ul>
            <li></li>
          </ul>
        </li>

        {/* profesional info */}
        <li className="p-4 bg-slate-700/40">
          <div className="flex items-center gap-2">
            <span>
              <BiSolidChevronsRight />
            </span>
            <span>profesional info</span>
          </div>
          <ul>
            <li></li>
          </ul>
        </li>

        {/* hobbies */}
        <li className="p-4 bg-slate-700/40">
          <div className="flex items-center gap-2">
            <span>
              <BiSolidChevronsRight />
            </span>
            <span>hobbies</span>
          </div>
          <ul>
            <li></li>
          </ul>
        </li>

        {/* contact */}
        <li className="p-4 bg-slate-700/40">
          <div className="flex items-center gap-2">
            <span>
              <BiSolidChevronsRight />
            </span>
            <span>contact</span>
          </div>
          <ul>
            <li></li>
          </ul>
        </li>
      </ul>
      <div className="p-4">
        <p className="h-[500px]"></p>
      </div>
    </div>
  );
};

export default About;
