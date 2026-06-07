import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./global.css";
import MainLayout from "./components/Layouts/MainLayout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Start from "./pages/start";

const AppLayout = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (document.readyState === "complete") {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => setIsLoaded(true), 300);
            return 100;
          }
          return prev + 5;
        }
        if (prev >= 95) return 95;
        return prev + 1;
      });
    }, 15);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Start progress={progress} isLoaded={isLoaded} />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/my" replace />,
      },
      {
        path: "my",
        element: <MainLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "about", element: <About /> },
          { path: "projects", element: <Projects /> },
          { path: "contact", element: <Contact /> },
        ],
      },
    ],
  },
  {
    path: "/dashboard",
    element: <div>Dashboard</div>,
  },
]);

const App = () => {
  return (
    <div className="font-fira-code-regular container mx-auto">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
