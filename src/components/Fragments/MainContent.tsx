import { Outlet } from "react-router-dom";

interface InterfaceProps {
  isOpen: boolean;
}

const MainContent = (props: InterfaceProps) => {

  const {isOpen} = props
  
  return (
    <main className={`h-[82%] max-h-[82%] overflow-auto scrollbar-hide ${isOpen ? 'hidden' : 'block'}`}>
      <Outlet />
    </main>
  );
};

export default MainContent;
