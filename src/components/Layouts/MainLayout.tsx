import { useState } from "react";
import Footer from "../Fragments/Footer";
import Header from "../Fragments/Header";
import MainContent from "../Fragments/MainContent";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative text-slate-400 bg-[#020618] h-screen flex justify-center items-center overflow-hidden w-screen">
      {/* Background Decorative Blobs */}
      <div className="relative h-[200px] w-[200px] bg-teal-400 rounded-full blur-2xl opacity-40">
        <div className="absolute h-[150px] w-[150px] bg-indigo-400 rounded-full -bottom-30 -right-30"></div>
        <div className="absolute h-[150px] w-[150px] bg-sky-400 rounded-full -bottom-30 -left-30"></div>
        <div className="absolute h-[150px] w-[150px] bg-purple-400 rounded-full -top-30 -right-30"></div>
        <div className="absolute h-[150px] w-[150px] bg-yellow-400 rounded-full -top-30 -left-30"></div>
      </div>

      {/* Main Container Dashboard Panel */}
      {/* PERBAIKAN: Menggunakan standar md: inset yang valid dan presisi */}
      <div
        className={`absolute md:inset-4 inset-2 rounded-lg bg-[rgba(15,23,43,0.4)] border transition-all duration-300 backdrop-blur-2xl overflow-hidden ${
          isOpen ? "border-transparent" : "border-slate-800"
        }`}
      >
        {/* Kontainer Flex utama pembagi Header, Content, dan Footer */}
        <div className="h-full flex flex-col justify-between w-full overflow-hidden">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />

          {/* PERBAIKAN: Pastikan MainContent memiliki kelas flex-1 & h-full agar membatasi ruang komponen anak (About) */}
          <div className="flex-1 h-full overflow-auto scrollbar-hide w-full">
            <MainContent isOpen={isOpen} />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
