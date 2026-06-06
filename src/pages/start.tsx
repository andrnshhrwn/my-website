import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = 10;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            navigate("/my");
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-full text-white w-full transition-opacity duration-500 ease-in-out">
      <h1 className="min-md:text-4xl max-md:text-2xl font-semibold mb-4 text-slate-100">
        Welcome to my website
      </h1>
      <h2 className="text-sm font-semibold mb-4 animate-pulse">
        Loading... {progress}%
      </h2>
      <div className="w-80 bg-slate-700/40 rounded-full h-1 overflow-hidden shadow-inner">
        <div
          className="bg-yellow-400 h-full rounded-full transition-all duration-100 ease-linear transform"
          style={{
            width: `${progress}%`,
            scale: `${1 + progress * 0.002}`, // sedikit scaling saat progress bertambah
          }}
        />
      </div>
    </div>
  );
};

export default Start;
