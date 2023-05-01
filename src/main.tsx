import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TaskProvider } from "./providers/TaskContext.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EditTaskRoute } from "./components/EditTask/EditTask.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/:id",
    element: <EditTaskRoute />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  </React.StrictMode>
);
