import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@providers/ThemeProvider.jsx";
import App from "@/App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </>
);
