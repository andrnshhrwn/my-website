import { Outlet } from "react-router-dom";

interface InterfaceProps {
  isOpen: boolean;
}

const MainContent = (props: InterfaceProps) => {
  const { isOpen } = props;

  return (
    <main className="flex-1 w-full overflow-auto scrollbar-hide relative z-10">
      <div
        className={`h-full w-full transition-all duration-300 ${isOpen ? "opacity-20 pointer-events-none blur-sm" : "opacity-100"}`}
      >
        <Outlet />
      </div>
    </main>
  );
};

export default MainContent;
