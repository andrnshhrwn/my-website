import { FiChevronRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="p-4 h-full flex">
      <div className="w-1/2 max-md:w-full h-full flex flex-col gap-10 justify-center">
        <div className="flex flex-col gap-3">
          <h4 className="text-lg">Hi all, i am</h4>
          <h2 className="text-white text-4xl">Andriansah Herawan</h2>
          <h3 className="text-2xl flex text-indigo-500 items-center">
            <FiChevronRight /> Front-end developer
          </h3>
        </div>
        <div className="flex flex-col gap-3">
          <p>// find my profile on Github:</p>
          <p className="">
            <span className="text-indigo-500">const</span>{" "}
            <span className="text-teal-400">githublink</span> <span>=</span>
            <a href="https://github.com/andrnshhrwn" className="text-rose-300">
              {" "}
              "https://github.com/andrnshhrwn"
            </a>
          </p>
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-center max-md:hidden">
        <div className="w-[350px] min-lg:w-[500px] h-3/4 bg-slate-700/30 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Home;
