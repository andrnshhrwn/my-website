import { useState } from "react";
import { RiGithubFill, RiExternalLinkLine } from "react-icons/ri";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  category: "Game" | "Android" | "Web";
  githubUrl?: string;
  demoUrl?: string;
};

const projectsData: Project[] = [
  {
    title: "Happy Guess",
    description:
      "Sebuah game tebak-tebakan interaktif yang dibangun menggunakan Unity, menampilkan sistem seleksi karakter dan instansiasi scene yang dinamis.",
    techStack: ["Unity", "C#"],
    category: "Game",
    githubUrl: "https://github.com",
  },
  {
    title: "Pesona Batik Nusantara",
    description:
      "Aplikasi Android berbasis kebudayaan yang berfokus pada pengenalan dan edukasi ragam motif batik di Indonesia.",
    techStack: ["Kotlin", "Android Studio", "XML"],
    category: "Android",
    githubUrl: "https://github.com",
  },
  {
    title: "Client Management Dashboard",
    description:
      "Dashboard manajemen data klien yang responsif dan interaktif dengan desain antarmuka yang bersih.",
    techStack: ["React", "Bootstrap", "Bootstrap Icons"],
    category: "Web",
    demoUrl: "https://demo.com",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category.toLowerCase() === filter);

  return (
    <div className="text-slate-200 w-full flex flex-col h-full overflow-y-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4 select-none">
        <div>
          <h1 className="text-xl font-semibold text-slate-100 font-mono">
            _projects
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            // Proyek yang pernah saya kerjakan
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {["all", "web", "android", "game"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded border border-slate-800 transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? "bg-slate-800 text-yellow-400 border-slate-700"
                  : "bg-slate-900/40 text-slate-400 hover:text-slate-200"
              }`}
            >
              *{cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="border border-slate-800 rounded-lg p-4 bg-slate-900/10 backdrop-blur-sm flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-slate-100 group-hover:text-yellow-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50">
                  {project.category}
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            <div className="mt-4">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/60 text-teal-400 border border-teal-900/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 text-sm font-mono pt-2 border-t border-slate-800/60">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-slate-400 hover:text-slate-100 transition-colors"
                  >
                    <RiGithubFill className="text-lg" /> code
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-slate-400 hover:text-slate-100 transition-colors"
                  >
                    <RiExternalLinkLine className="text-base" /> demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
