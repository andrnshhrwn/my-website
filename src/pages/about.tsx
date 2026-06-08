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

const menuStructure = [
  {
    id: "personal",
    label: "personal info",
    items: [
      { id: "bio", label: "bio", color: "text-teal-400" },
      { id: "education", label: "education", color: "text-indigo-400" },
    ],
  },
  {
    id: "professional",
    label: "professional info",
    items: [
      { id: "skills", label: "skills", color: "text-sky-400" },
      { id: "experience", label: "experience", color: "text-purple-400" },
    ],
  },
  {
    id: "hobbies",
    label: "hobbies",
    items: [
      { id: "gaming", label: "gaming", color: "text-yellow-400" },
      { id: "investing", label: "investing", color: "text-orange-400" },
    ],
  },
];

const About = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(
    "personal",
  );
  const [selectedFolder, setSelectedFolder] = useState<string | null>("bio");

  const toggleAccordion = (menuName: string) => {
    setActiveAccordion((prev) => (prev === menuName ? null : menuName));
  };

  const currentContent = selectedFolder ? folderData[selectedFolder] : null;

  const renderCodeLine = (line: string) => {
    const constRegex = /^(\s*)(const\s+)(.*)$/;
    const match = line.match(constRegex);

    if (match) {
      const [_, spaces, constKeyword, restOfLine] = match;
      return (
        <>
          <span className="whitespace-pre">{spaces}</span>
          <span className="text-purple-400">{constKeyword}</span>
          {restOfLine}
        </>
      );
    }
    return <span className="whitespace-pre">{line}</span>;
  };

  return (
    // PERBAIKAN: Menggunakan h-full & overflow-hidden agar ukuran dikunci oleh MainLayout
    <div className="text-slate-200 w-full flex flex-col h-full will-change-transform">
      {/* Header Title */}
      <div className="p-4 text-slate-400 select-none shrink-0 border-b border-slate-800">
        <h1 className="text-xl font-semibold text-slate-100 font-mono">
          _about-me
        </h1>
        <p className="text-xs text-slate-500 mt-1">// Rincian tentang saya</p>
      </div>

      {/* Kontainer Utama Penggulung Menu & Konten (Hanya area di dalam ini yang boleh scroll jika menyempit) */}
      <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
        {/* Menu List dengan mapping dinamis */}
        <div className="flex flex-col gap-[1px] shrink-0">
          {menuStructure.map((menu) => (
            <div key={menu.id} className="border-b border-slate-900/60">
              <button
                onClick={() => toggleAccordion(menu.id)}
                className="w-full p-4 bg-slate-800/5 hover:bg-slate-700/10 flex items-center gap-2 cursor-pointer transition-colors duration-200 text-left"
              >
                <span
                  className={`transition-transform duration-200 ${activeAccordion === menu.id ? "rotate-90" : ""}`}
                >
                  <BiSolidChevronsRight className="text-slate-400" />
                </span>
                <span
                  className={
                    activeAccordion === menu.id
                      ? "text-yellow-400 font-medium"
                      : ""
                  }
                >
                  {menu.label}
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden bg-slate-900/10 ${
                  activeAccordion === menu.id
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <ul className="p-4 pl-8 flex flex-col gap-2 text-sm text-slate-400">
                  {menu.items.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => setSelectedFolder(item.id)}
                      className={`flex items-center gap-2 cursor-pointer transition-colors duration-150 ${
                        selectedFolder === item.id
                          ? "text-slate-100 font-semibold"
                          : "hover:text-slate-200"
                      }`}
                    >
                      <RiFolder3Fill className={item.color} /> {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Menu Contact */}
          <div className="border-b border-slate-900/60">
            <button
              onClick={() => toggleAccordion("contact")}
              className="w-full p-4 bg-slate-800/5 hover:bg-slate-700/10 flex items-center gap-2 cursor-pointer transition-colors duration-200 text-left"
            >
              <span
                className={`transition-transform duration-200 ${activeAccordion === "contact" ? "rotate-90" : ""}`}
              >
                <BiSolidChevronsRight className="text-slate-400" />
              </span>
              <span
                className={
                  activeAccordion === "contact"
                    ? "text-yellow-400 font-medium"
                    : ""
                }
              >
                contact
              </span>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden bg-slate-900/10 ${
                activeAccordion === "contact"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
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
          </div>
        </div>

        <div className="p-4 max-md:p-2 flex-1 min-h-[180px] font-mono text-sm leading-relaxed overflow-y-visible">
          {currentContent ? (
            <div className="border border-slate-900 rounded-lg p-4 max-md:p-2 bg-slate-900/20 backdrop-blur-sm text-left w-full h-auto">
              <p className="text-slate-500 select-none">
                {currentContent.title}
              </p>
              <p className="text-slate-500 select-none">
                {currentContent.comment}
              </p>
              <p className="text-slate-500 select-none mb-2"> */</p>

              <div className="overflow-x-auto w-full flex flex-col">
                {currentContent.code.map((line, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-start text-left whitespace-nowrap min-w-max py-[2px]"
                  >
                    <span className="text-slate-600 select-none w-6 text-right shrink-0 pr-1">
                      {index + 1}
                    </span>
                    <p className="text-slate-300">{renderCodeLine(line)}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-32 flex items-center justify-center text-slate-500 text-xs italic border border-dashed border-slate-900 rounded-lg bg-slate-950/10">
              // Select a folder to view details...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
