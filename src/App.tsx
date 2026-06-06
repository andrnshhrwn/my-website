import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";
import MainLayout from "./components/Layouts/MainLayout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Start from "./pages/start";
import StartLayout from "./components/Layouts/StartLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartLayout />,
    children: [{index: true, element:<Start />}]
  },
  {
    path: "/my",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/dashboard",
    element: <div>Dashboard</div>
  }
]);

const App = () => {
  return (
    <div className="font-fira-code-regular container mx-auto">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
