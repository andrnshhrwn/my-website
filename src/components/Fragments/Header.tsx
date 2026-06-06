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
  {
    id: 1,
    path: "/my",
    title: "_home",
  },
  {
    id: 2,
    path: "/my/about",
    title: "_about-me",
  },
  {
    id: 3,
    path: "/my/projects",
    title: "_projects",
  },
  {
    id: 4,
    path: "/my/contact",
    title: "_contact-me",
  },
];

const Header = (props: InterfaceProps) => {
  const { isOpen, setIsOpen } = props;

  const handleSetOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSetClose = () => {
    setTimeout(() => {
      setIsOpen((prev) => !prev);
    }, 300);
  };

  return (
    <header className={`flex flex-col ${isOpen ? "h-[90%]" : "h-14 max-h-[9%]"}`}>
      <div
        className={`border-b border-slate-700 flex justify-between items-center max-md:h-14`}
      >
        <h2 className="min-md:px-4 max-md:p-4">andriansah-herawan</h2>

        {/* For Desktop */}
        <nav
          className={`h-full min-md:block hidden transition-all overflow-hidden`}
        >
          <ul
            className={`justify-center items-center h-full transition-all flex duration-300`}
          >
            {menus.map((item) => (
              <li key={item.id} className="border-l border-slate-700">
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `inline-block p-4 h-full w-full hover:bg-slate-700/40 transition-all duration-300 ${
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
      </div>

      {/* For Mobile */}
      <nav
        className={`transition-all overflow-hidden ${
          isOpen ? "h-full duration-1000" : "h-0 duration-300"
        }`}
      >
        <ul
          className={`transition-all flex duration-300 flex-col ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <li className="p-4 border-b border-slate-700"># navigate:</li>
          {menus.map((item) => (
            <li
              key={item.id}
              onClick={handleSetClose}
              className="border-b border-slate-700"
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
