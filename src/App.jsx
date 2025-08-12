import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/root";
import Projects from "./Components/Projects";
import Hobbies from "./Components/Hobbies";
import Professional_interest from "./Components/Professional_interest";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import { Navigate } from "react-router-dom";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Navigate to="/Contact"/> },
        { path: "projects", element: <Projects /> },
        { path: "Hobbies", element: <Hobbies /> },
        { path: "Professional_interest", element: <Professional_interest /> },
        { path: "Resume", element: <Resume /> },
        { path: "Contact", element: <Contact /> },
        
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
