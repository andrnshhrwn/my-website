import { FiChevronRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="p-4 h-full flex">
      <div className="w-1/2 max-md:w-full h-full flex flex-col gap-10 justify-center">
        <div className="flex flex-col gap-3">
          <h4 className="text-lg max-md:text-base">Hi all, i am</h4>
          <h2 className="text-white text-4xl max-md:text-2xl">Andriansah Herawan</h2>
          <h3 className="text-2xl max-md:text-xl flex text-indigo-500 items-center">
            <FiChevronRight /> Front-end developer
          </h3>
        </div>
        <div className="flex flex-col gap-3">
          <p className="max-md:text-sm">// find my profile on Github:</p>
          <p className="max-md:text-sm">
            <span className="text-indigo-500">const</span>{" "}
            <span className="text-teal-400">githublink</span> <span>=</span>
            <a
              href="https://github.com/andrnshhrwn"
              className="text-rose-300 hover:text-indigo-500"
            >
              {" "}
              "https://github.com/andrnshhrwn"
            </a>
          </p>
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-center max-md:hidden">
        <div className="w-[350px] min-lg:w-[500px] h-3/4 bg-slate-700/30 rounded-lg overflow-hidden">
          <img
            src="./images/pp.png"
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
