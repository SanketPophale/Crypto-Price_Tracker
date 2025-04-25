import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Assuming you have Tailwind CSS or basic styles here

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
