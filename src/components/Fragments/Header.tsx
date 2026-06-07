import { IoMdClose, IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

interface InterfaceMenus {
  id: number;
  path: string;
  title: string;
}

interface InterfaceProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const menus: InterfaceMenus[] = [
  { id: 1, path: "/my", title: "_home" },
  { id: 2, path: "/my/about", title: "_about-me" },
  { id: 3, path: "/my/projects", title: "_projects" },
  { id: 4, path: "/my/contact", title: "_contact-me" },
];

const Header = (props: InterfaceProps) => {
  const { isOpen, setIsOpen } = props;

  const handleSetOpen = () => {
    setIsOpen((prev) => !prev);
  };

  // Diperbaiki agar tidak merusak state melompat
  const handleSetClose = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <header className="h-14 min-h-[56px] border-b border-slate-700 flex justify-between items-center relative z-40 bg-[#0f172a]">
      <h2 className="min-md:px-4 max-md:p-4">andriansah-herawan</h2>

      {/* For Desktop */}
      <nav className="h-full min-md:block hidden">
        <ul className="justify-center items-center h-full flex">
          {menus.map((item) => (
            <li
              key={item.id}
              className="border-l border-slate-700 h-full flex items-center"
            >
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex items-center px-4 h-full w-full hover:bg-slate-700/40 transition-all duration-300 ${
                    isActive ? "bg-slate-700/40" : "bg-slate-700/0"
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="max-md:block min-md:hidden min-md:px-4 max-md:p-4 text-2xl"
        onClick={handleSetOpen}
      >
        {isOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>

      {/* For Mobile overlay menu */}
      <nav
        className={`absolute top-14 left-0 w-full bg-[#0f172a] border-b border-slate-700 transition-all duration-300 overflow-hidden min-md:hidden ${
          isOpen ? "h-screen opacity-100" : "h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col w-full">
          <li className="p-4 border-b border-slate-700 text-slate-500">
            # navigate:
          </li>
          {menus.map((item) => (
            <li
              key={item.id}
              onClick={handleSetClose}
              className="border-b border-slate-700 w-full"
            >
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `inline-block p-4 w-full hover:bg-slate-700/40 transition-all duration-300 ${
                    isActive ? "bg-slate-700/40" : "bg-slate-700/0"
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
