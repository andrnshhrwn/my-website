import React from "react";

interface StartLayoutProps {
  children: React.ReactNode;
}

const StartLayout: React.FC<StartLayoutProps> = ({ children }) => {
  return (
    <div className="relative text-slate-400 bg-[#020618] h-screen w-full flex justify-center items-center">
      <div className="relative h-[200px] w-[200px] bg-teal-400 rounded-full blur-2xl">
        <div className="absolute h-[150px] w-[150px] bg-indigo-400 rounded-full -bottom-30 -right-30"></div>
        <div className="absolute h-[150px] w-[150px] bg-sky-400 rounded-full -bottom-30 -left-30"></div>
        <div className="absolute h-[150px] w-[150px] bg-purple-400 rounded-full -top-30 -right-30"></div>
        <div className="absolute h-[150px] w-[150px] bg-yellow-400 rounded-full -top-30 -left-30"></div>
      </div>

      <div className="absolute min-md:inset-2 min-lg:inset-3 max-md:inset-1 rounded-lg bg-[rgba(15,23,43,0.5)] border backdrop-blur-2xl overflow-hidden border-slate-700">
        <div className="h-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default StartLayout;
