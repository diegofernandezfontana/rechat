import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { TaskProvider } from "./providers/TaskContext.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
);
