import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import ToDoList from "./components/ToDoList.jsx";

const app = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/todoapp",
        element: <ToDoList />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={app}></RouterProvider>
  </StrictMode>
);
