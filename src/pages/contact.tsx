import { useState } from "react";
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiSendPlaneFill,
} from "react-icons/ri";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const currentDate = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Pesan dari ${formData.name} berhasil dikirim! (Simulasi)`);
  };

  return (
    <div className="text-slate-200 w-full flex flex-col h-full overflow-y-auto p-4">
      <div className="mb-6 border-b border-slate-800 pb-4 select-none">
        <h1 className="text-xl font-semibold text-slate-100 font-mono">
          _contact-me
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          // Hubungi saya untuk kolaborasi atau proyek
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 p-3 rounded-lg border border-slate-800 bg-slate-900/10">
              <RiMailLine className="text-rose-400 text-base" />
              <span className="truncate">andriansahherawan@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg border border-slate-800 bg-slate-900/10">
              <RiPhoneLine className="text-emerald-400 text-base" />
              <span>+62 823-1688-7462</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg border border-slate-800 bg-slate-900/10">
              <RiMapPinLine className="text-sky-400 text-base" />
              <span>Kuningan, Indonesia</span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-slate-800 rounded-lg p-5 bg-slate-900/10 backdrop-blur-sm flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-xs font-mono text-slate-400"
              >
                _name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Andriansah Herawan"
                className="w-full bg-slate-900/50 border border-slate-800 rounded p-2.5 text-sm text-slate-200 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 transition-all font-mono"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-mono text-slate-400"
              >
                _email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full bg-slate-900/50 border border-slate-800 rounded p-2.5 text-sm text-slate-200 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 transition-all font-mono"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs font-mono text-slate-400"
              >
                _message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Halo, saya tertarik untuk..."
                className="w-full bg-slate-900/50 border border-slate-800 rounded p-2.5 text-sm text-slate-200 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 transition-all font-mono resize-none leading-relaxed"
              />
            </div>

            <button
              type="submit"
              className="mt-2 px-4 py-2.5 self-start rounded bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-yellow-400 font-mono text-xs flex items-center gap-2 cursor-pointer transition-all duration-200 group"
            >
              <RiSendPlaneFill className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              submit-message
            </button>
          </form>
        </div>

        <div className="hidden lg:flex flex-col w-full border border-slate-800 rounded-lg p-5 bg-slate-900/20 font-mono text-xs min-h-[350px]">
          <div className="text-slate-500 mb-2">
            <p>/**</p>
            <p> * @preview Real-time data binding</p>
            <p> * Isi formulir di sebelah kiri untuk melihat perubahan</p>
            <p> */</p>
          </div>

          <div className="text-slate-300 leading-relaxed mt-2">
            <p>
              <span className="text-purple-400">const</span> buttonSubmit =
              document.<span className="text-blue-400">querySelector</span>(
              <span className="text-teal-400">'#submit-message'</span>);
            </p>
            <br />
            <p>
              <span className="text-purple-400">const</span> messageData =
              &#123;
            </p>
            <p className="pl-4">
              <span className="text-sky-400">senderName</span>:{" "}
              <span className="text-amber-300">"{formData.name || "..."}"</span>
              ,
            </p>
            <p className="pl-4">
              <span className="text-sky-400">senderEmail</span>:{" "}
              <span className="text-amber-300">
                "{formData.email || "..."}"
              </span>
              ,
            </p>
            <p className="pl-4 flex items-start">
              <span className="text-sky-400 shrink-0">message</span>:&nbsp;
              <span className="text-amber-300 break-all whitespace-pre-wrap">
                "{formData.message ? formData.message : "..."}"
              </span>
            </p>
            <p className="pl-4">
              <span className="text-sky-400">date</span>:{" "}
              <span className="text-teal-400">"{currentDate}"</span>
            </p>
            <p>&#125;;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
