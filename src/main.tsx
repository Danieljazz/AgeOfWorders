import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BoardContextProvider } from "./boardContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BoardContextProvider>
      <App />
    </BoardContextProvider>
  </React.StrictMode>
);
