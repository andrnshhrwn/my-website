import React from "react";
import StartLayout from "../components/Layouts/StartLayout";

interface StartProps {
  progress: number;
  isLoaded: boolean;
}

const Start: React.FC<StartProps> = ({ progress, isLoaded }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-700 ease-in-out ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <StartLayout>
        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="min-md:text-4xl max-md:text-2xl font-semibold mb-4 text-slate-100">
            Welcome to my website
          </h1>

          <h2 className="text-sm font-semibold mb-4 animate-pulse text-slate-400">
            Loading... {progress}%
          </h2>

          <div className="w-80 bg-slate-700/40 rounded-full h-1 overflow-hidden shadow-inner">
            <div
              className="bg-yellow-400 h-full rounded-full origin-left"
              style={{
                width: `${progress}%`,
                transform: `scaleX(${1 + progress * 0.002})`,
              }}
            />
          </div>
        </div>
      </StartLayout>
    </div>
  );
};

export default Start;
