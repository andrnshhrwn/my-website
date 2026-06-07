import { useState } from "react";
import { BiSolidChevronsRight } from "react-icons/bi";
import { RiFolder3Fill, RiPhoneFill, RiMailFill } from "react-icons/ri";

type FolderContent = {
  title: string;
  comment: string;
  code: string[];
};

const folderData: Record<string, FolderContent> = {
  bio: {
    title: "/** About Me **/",
    comment: " * Hello! Saya seorang mahasiswa Teknik Informatika.",
    code: [
      "const name = 'Andriansah Herawan';",
      "const role = 'Frontend Developer / AI Enthusiast';",
      "const location = 'Indonesia';",
    ],
  },
  education: {
    title: "/** Education **/",
    comment: " * Riwayat pendidikan formal saat ini.",
    code: [
      "const university = 'Universitas Kuningan';",
      "const major = 'Teknik Informatika';",
      "const currentSemester = 5;",
    ],
  },
  skills: {
    title: "/** Tech Stack **/",
    comment: " * Bahasa dan framework yang sering digunakan.",
    code: [
      "const languages = ['TypeScript', 'Kotlin', 'Python', 'C#'];",
      "const frameworks = ['React', 'Next.js', 'TailwindCSS'];",
      "const tools = ['Vite', 'Git', 'Unity'];",
    ],
  },
  experience: {
    title: "/** Experience **/",
    comment: " * Proyek dan pengalaman yang pernah dikerjakan.",
    code: [
      "const projects = [",
      "  'Happy Guess (Unity Game)',",
      "  'Pesona Batik Nusantara (Android App)'",
      "];",
    ],
  },
  gaming: {
    title: "/** Hobbies: Gaming **/",
    comment: " * Game strategi dan simulasi favorit.",
    code: [
      "const favoriteGames = [",
      "  'Rise of Kingdoms',",
      "  'Clash Of Clans'",
      "];",
    ],
  },
  investing: {
    title: "/** Hobbies: Investing **/",
    comment: " * Aktivitas di waktu luang.",
    code: [
      "const interest = 'Stock Market & Technical Analysis';",
      "const analysisTools = ['Order Book', 'Broker Summary', 'Fibonacci'];",
    ],
  },
};

const About = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(
    "personal",
  );

  const [selectedFolder, setSelectedFolder] = useState<string | null>("bio");

  const toggleAccordion = (menuName: string) => {
    setActiveAccordion((prev) => (prev === menuName ? null : menuName));
  };

  const currentContent = selectedFolder ? folderData[selectedFolder] : null;

  return (
    <div className="text-slate-200 w-full flex flex-col h-full overflow-y-auto scrollbar-hide">
      <ul className="flex flex-col gap-[1px] border-b border-slate-700">
        <li className="p-4 text-slate-400 select-none">
          <h1 className="text-xl font-semibold text-slate-100 font-mono">
            _about-me
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            // Rincian tentang siapa dan apa yang bisa saya lakukan
          </p>
        </li>

        <li>
          <button
            onClick={() => toggleAccordion("personal")}
            className="w-full p-4 bg-slate-700/20 hover:bg-slate-700/40 border-y border-slate-800 flex items-center gap-2 cursor-pointer transition-colors duration-200 text-left"
          >
            <span
              className={`transition-transform duration-200 ${activeAccordion === "personal" ? "rotate-90" : ""}`}
            >
              <BiSolidChevronsRight className="text-slate-400" />
            </span>
            <span
              className={
                activeAccordion === "personal" ? "text-yellow-400" : ""
              }
            >
              personal info
            </span>
          </button>

          <div
            className={`transition-all duration-300 overflow-hidden bg-slate-900/20 ${activeAccordion === "personal" ? "max-h-40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
          >
            <ul className="p-4 pl-8 flex flex-col gap-2 text-sm text-slate-400">
              <li
                onClick={() => setSelectedFolder("bio")}
                className={`flex items-center gap-2 cursor-pointer ${selectedFolder === "bio" ? "text-slate-100 font-medium" : "hover:text-slate-200"}`}
              >
                <RiFolder3Fill className="text-teal-400" /> bio
              </li>
              <li
                onClick={() => setSelectedFolder("education")}
                className={`flex items-center gap-2 cursor-pointer ${selectedFolder === "education" ? "text-slate-100 font-medium" : "hover:text-slate-200"}`}
              >
                <RiFolder3Fill className="text-indigo-400" /> education
              </li>
            </ul>
          </div>
        </li>

        <li>
          <button
            onClick={() => toggleAccordion("professional")}
            className="w-full p-4 bg-slate-700/20 hover:bg-slate-700/40 border-b border-slate-800 flex items-center gap-2 cursor-pointer transition-colors duration-200 text-left"
          >
            <span
              className={`transition-transform duration-200 ${activeAccordion === "professional" ? "rotate-90" : ""}`}
            >
              <BiSolidChevronsRight className="text-slate-400" />
            </span>
            <span
              className={
                activeAccordion === "professional" ? "text-yellow-400" : ""
              }
            >
              professional info
            </span>
          </button>

          <div
            className={`transition-all duration-300 overflow-hidden bg-slate-900/20 ${activeAccordion === "professional" ? "max-h-40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
          >
            <ul className="p-4 pl-8 flex flex-col gap-2 text-sm text-slate-400">
              <li
                onClick={() => setSelectedFolder("skills")}
                className={`flex items-center gap-2 cursor-pointer ${selectedFolder === "skills" ? "text-slate-100 font-medium" : "hover:text-slate-200"}`}
              >
                <RiFolder3Fill className="text-sky-400" /> skills
              </li>
              <li
                onClick={() => setSelectedFolder("experience")}
                className={`flex items-center gap-2 cursor-pointer ${selectedFolder === "experience" ? "text-slate-100 font-medium" : "hover:text-slate-200"}`}
              >
                <RiFolder3Fill className="text-purple-400" /> experience
              </li>
            </ul>
          </div>
        </li>

        <li>
          <button
            onClick={() => toggleAccordion("hobbies")}
            className="w-full p-4 bg-slate-700/20 hover:bg-slate-700/40 border-b border-slate-800 flex items-center gap-2 cursor-pointer transition-colors duration-200 text-left"
          >
            <span
              className={`transition-transform duration-200 ${activeAccordion === "hobbies" ? "rotate-90" : ""}`}
            >
              <BiSolidChevronsRight className="text-slate-400" />
            </span>
            <span
              className={activeAccordion === "hobbies" ? "text-yellow-400" : ""}
            >
              hobbies
            </span>
          </button>

          <div
            className={`transition-all duration-300 overflow-hidden bg-slate-900/20 ${activeAccordion === "hobbies" ? "max-h-40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
          >
            <ul className="p-4 pl-8 flex flex-col gap-2 text-sm text-slate-400">
              <li
                onClick={() => setSelectedFolder("gaming")}
                className={`flex items-center gap-2 cursor-pointer ${selectedFolder === "gaming" ? "text-slate-100 font-medium" : "hover:text-slate-200"}`}
              >
                <RiFolder3Fill className="text-yellow-400" /> gaming
              </li>
              <li
                onClick={() => setSelectedFolder("investing")}
                className={`flex items-center gap-2 cursor-pointer ${selectedFolder === "investing" ? "text-slate-100 font-medium" : "hover:text-slate-200"}`}
              >
                <RiFolder3Fill className="text-orange-400" /> investing
              </li>
            </ul>
          </div>
        </li>

        <li>
          <button
            onClick={() => toggleAccordion("contact")}
            className="w-full p-4 bg-slate-700/20 hover:bg-slate-700/40 border-b border-slate-800 flex items-center gap-2 cursor-pointer transition-colors duration-200 text-left"
          >
            <span
              className={`transition-transform duration-200 ${activeAccordion === "contact" ? "rotate-90" : ""}`}
            >
              <BiSolidChevronsRight className="text-slate-400" />
            </span>
            <span
              className={activeAccordion === "contact" ? "text-yellow-400" : ""}
            >
              contact
            </span>
          </button>

          <div
            className={`transition-all duration-300 overflow-hidden bg-slate-900/20 ${activeAccordion === "contact" ? "max-h-40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
          >
            <ul className="p-4 pl-8 flex flex-col gap-2 text-sm text-slate-400">
              <li
                onClick={() => setSelectedFolder(null)}
                className="flex items-center gap-2 hover:text-slate-200 cursor-pointer"
              >
                <RiPhoneFill className="text-emerald-400" /> phone
              </li>
              <li
                onClick={() => setSelectedFolder(null)}
                className="flex items-center gap-2 hover:text-slate-200 cursor-pointer"
              >
                <RiMailFill className="text-rose-400" /> email
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <div className="p-4 max-md:p-2 flex-1 font-mono text-sm leading-relaxed overflow-y-auto scrollbar-hide">
        {currentContent ? (
          <div className="border border-slate-800 rounded-lg p-4 max-md:p-2 bg-slate-900/10 backdrop-blur-sm text-left w-full">
            <p className="text-slate-500">{currentContent.title}</p>
            <p className="text-slate-500">{currentContent.comment}</p>
            <p className="text-slate-500 mb-2"> */</p>

            <div className="overflow-x-auto scrollbar-hide w-full flex flex-col custom-scrollbar">
              {currentContent.code.map((line, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-start text-left whitespace-nowrap min-w-max py-[2px]"
                >
                  <span className="text-slate-600 select-none w-6 text-right shrink-0 pr-1">
                    {index + 1}
                  </span>

                  <p className="text-slate-300">
                    {line.startsWith("const") ? (
                      <>
                        <span className="text-purple-400">const</span>{" "}
                        {line.substring(5)}
                      </>
                    ) : (
                      line
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-40 flex items-center justify-center text-slate-500 text-xs italic border border-dashed border-slate-800 rounded-lg">
            // Select a folder to view details...
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
